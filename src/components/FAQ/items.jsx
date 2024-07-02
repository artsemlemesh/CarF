import { useState } from "react";
import FAQ from "./FAQ";

const Items = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const items = [
    {
      title: "1. What are the rental requirements?",
      content: "To rent a car, you need a valid driver’s license, a credit card in the renter’s name, and proof of insurance. International travelers must provide a passport and an international driving permit.",
    },
    {
      title: "2. Can I modify or cancel my reservation?",
      content: "Yes, you can modify or cancel your reservation. Please note that changes may affect the rental rate and availability. Cancellations made within 24 hours of the pickup time may incur a fee.",
    },
    {
      title: "3. What is your fuel policy?",
      content: "Our fuel policy is “full-to-full.” This means the car will be provided with a full tank of fuel, and you are required to return it with a full tank to avoid additional charges.",
    },
  ];

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg">
      {items.map((item, index) => (
        <FAQ
          key={index}
          isOpen={openIndex === index}
          title={item.title}
          content={item.content}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Items;
