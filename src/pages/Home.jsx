import { useContext, useEffect, useState } from "react";
import CarContent from "../components/CarTabs/car-content";
import Items from "../components/FAQ/items";
import RentForm from "../components/RentForm";
import Separator from "../components/Separator";
import { GlobalContext } from "../GlobalContext";
import { WobbleCard } from "../components/Aceternity/WobbleCard";
import { FaCar, FaPhoneAlt, FaRoad } from "react-icons/fa";
import { InfiniteMovingCards } from "../components/Aceternity/InfiniteCards";

const Home = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const { scrollToTop, isVisible } = useContext(GlobalContext);

  const items = [
    {
      quote: "This service is amazing! I loved every bit of it.",
      name: "Alice Johnson",
      title: "CEO, TechCorp",
    },
    {
      quote: "Outstanding experience. Highly recommended.",
      name: "Bob Smith",
      title: "CTO, Innovatech",
    },
    {
      quote: "The team was professional and delivered great results.",
      name: "Carol White",
      title: "Manager, FinBank",
    },
    {
      quote: "A wonderful experience from start to finish.",
      name: "David Brown",
      title: "Director, HealthPlus",
    },
    {
      quote: "Exceptional quality and customer service.",
      name: "Emily Davis",
      title: "Owner, ShopEasy",
    },
    {
      quote: "I couldn't be happier with the service provided.",
      name: "Frank Wilson",
      title: "Founder, GreenTech",
    },
  ];

  const handleScrollPercent = () => {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercent((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <>
      <div className="fixed top-0 left-0 w-full  ">
        <div
          className="bg-green-500 h-1"
          style={{ width: `${scrollPercent}%` }}
        ></div>
      </div>

      <div className=" p-8">
        <div className="w-3/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <WobbleCard containerClassName="w-full" className="text-white">
            <div className="flex flex-col items-center">
              <FaCar size={80} className="mb-4 text-blue-500" />
              <h2 className="text-2xl font-bold">Select Car</h2>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              natus, quaerat rem qui sint repellat neque odio beatae voluptates,
              laborum tenetur quidem libero unde vel. Temporibus exercitationem
              excepturi placeat tempora.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="w-full" className="text-white">
            <div className="flex flex-col items-center">
              <FaPhoneAlt size={70} className="mb-4 text-grey-800" />
              <h2 className="text-2xl font-bold">Contact Operator</h2>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, repudiandae quidem non unde ab numquam nemo ea
              consequuntur quaerat molestiae est sit quibusdam totam obcaecati
              porro recusandae ducimus sapiente explicabo.
            </p>
          </WobbleCard>

          <WobbleCard containerClassName="w-full" className="text-white">
            <div className="flex flex-col items-center">
              <FaRoad size={80} className="md-4 text-red-500" />
              <h2 className="text-2xl font-bold">Let's Drive</h2>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              ullam, fugit exercitationem dolores possimus eveniet quos fuga
              pariatur officiis quaerat excepturi. Facere velit nesciunt cumque
              labore aliquid quia deserunt necessitatibus.
            </p>
          </WobbleCard>
        </div>
      </div>

      <RentForm />

      <Separator />
      <Items />

      <CarContent />
      <InfiniteMovingCards
        items={items}
        direction="left"
        speed="fast"
        pauseOnHover={true}
        className="custom-class mx-auto"
      />

      {isVisible && (
        <button
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg animate-bounce"
          onClick={scrollToTop}
        >
          scroll to top
        </button>
      )}
    </>
  );
};

export default Home;
