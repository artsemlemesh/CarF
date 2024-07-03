import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalContext";

const Nav = () => {
  const { scrollToSection } = useContext(GlobalContext);

  const getLinkClass = (isActive) =>
    isActive
      ? "text-blue-500 font-semibold no-underline"
      : "text-gray-200 hover:text-gray-400 no-underline font-medium";

  return (
    <div className="flex space-x-8">
      <NavLink
        onClick={() => scrollToSection(0)}
        to="/"
        className={({ isActive }) => getLinkClass(isActive)}
      >
        About
      </NavLink>
      <NavLink
        onClick={() => scrollToSection(1)}
        to="/"
        className={({ isActive }) => getLinkClass(isActive)}
      >
        Info
      </NavLink>
      <NavLink
        onClick={() => scrollToSection(2)}
        to="/"
        className={({ isActive }) => getLinkClass(isActive)}
      >
        Our cars
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => getLinkClass(isActive)}>
        Cart
      </NavLink>
    </div>
  );
};

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center">
        <div className="hidden md:flex space-x-8">
          <Nav />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNav} className="text-gray-200">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      <div
        className={`md:hidden transition-transform transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ease-in-out duration-300`}
      >
        {isOpen && (
          <div className="flex flex-col items-center mt-4 space-y-4 bg-gray-800 p-4 rounded-lg shadow-lg">
            <Nav />
          </div>
        )}
      </div>
    </>
  );
};

export default NavLinks;
