import { MdDirectionsCar, MdVerified } from "react-icons/md";
import { GiCoins } from "react-icons/gi";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Separator = () => {
  const { sectionRefs } = useContext(GlobalContext);

  return (
    <>
      <div
        ref={sectionRefs.current[0]}
        className="max-w mx-auto p-6  bg-black text-center"
      >
        <h1 className="text-white font-bold ">
          Save big with out affordable car rental
        </h1>
        <div className="text-white ">
          Top ariports. Local suppliers.{" "}
          <span className="text-orange-300">24/7</span> support
        </div>
      </div>
      <div>
        <div>
          <img className="mx-auto" src="car.png" alt="car" />
        </div>
        <div
          ref={sectionRefs.current[1]}
          className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg"
        >
          <div className="md:col-span-3 my-auto">
            <div className="font-semibold text-gray-600">Why Choose Us</div>
            <div className="font-bold text-4xl my-3 text-gray-800">
              Best valued deals you will ever find
            </div>
            <div className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              maxime ad minima dignissimos quod libero voluptatum minus ratione
              repellat praesentium, atque consequuntur dolores repellendus eaque
              facilis saepe placeat adipisci molestias.
            </div>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Learn more
            </button>
          </div>
          <div className="md:col-span-2">
            <div className="flex items-start space-x-4 m-4">
              <MdDirectionsCar size={150} className="text-blue-500" />
              <div className="flex flex-col space-y-1">
                <div className="font-bold text-lg text-gray-800">
                  Cross country drive
                </div>
                <div className="text-gray-600 px-2">
                  Corporis quisquam perspiciatis consectetur soluta, laboriosam
                  qui suscipit, necessitatibus illo accusantium ut! Non labore,
                  suscipit nobis ipsam possimus
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4 m-4">
              <GiCoins size={150} className="text-yellow-500" />
              <div className="flex flex-col space-y-1">
                <div className="font-bold text-lg text-gray-800">
                  All inclusive pricing
                </div>
                <div className="text-gray-800 px-2">
                  Corporis quisquam perspiciatis consectetur soluta, laboriosam
                  qui suscipit, necessitatibus illo accusantium ut! Non labore,
                  suscipit nobis ipsam possimus
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4 m-4">
              <MdVerified size={150} className="text-red-500" />
              <div className="flex flex-col space-y-1">
                <div className="font-bold text-lg text-gray-800">
                  No hidden charges
                </div>
                <div className="text-gray-800 px-2">
                  Corporis quisquam perspiciatis consectetur soluta, laboriosam
                  qui suscipit, necessitatibus illo accusantium ut! Non labore,
                  suscipit nobis ipsam possimus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Separator;
