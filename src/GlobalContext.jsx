import { useAuth0 } from "@auth0/auth0-react";
import { createContext, createRef, useEffect, useRef, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const sectionRefs = useRef([1, 2, 3, 4, 5].map(() => createRef()));
  const [isVisible, setIsVisible] = useState(false)
  const {loginWithRedirect, logout, user, isAuthenticated} = useAuth0()

  const scrollToSection =(index) => {
    let pos = sectionRefs.current[index].current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  const scrollToTop = () => {
    window.scrollTo({
        top: 0, behavior: 'smooth'
    })
  }
  const toggleVisibility = () => {
        if(window.scrollY > 300){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
  }

  useEffect(()=> {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
        window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  

  return (
    <GlobalContext.Provider value={{scrollToTop, scrollToSection, sectionRefs, isVisible, isAuthenticated, loginWithRedirect, logout, user }}>
      {children}
    </GlobalContext.Provider>
  );
}
