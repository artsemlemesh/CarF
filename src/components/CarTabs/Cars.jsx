import { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalContext";

const Cars = ({ tabs, fields }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const {sectionRefs} = useContext(GlobalContext)


  function handleOnClick(getCurrIndex) {
    setCurrentTabIndex(getCurrIndex);
    console.log(getCurrIndex);
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">Cars</h1>
      <div ref={sectionRefs.current[2]} className="container mx-auto p-4">
        <div className="grid md:grid-cols-12 sm:grid-cols-1 gap-6">
          
          {/* First Column */}
          <div className="col-span-3 flex flex-col space-y-4">
            {tabs.map((tabItem, index) => (
              <div
                key={index}
                className={`tab-item cursor-pointer p-4 rounded-lg shadow-md transition duration-300 ${
                  currentTabIndex === index ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                onClick={() => handleOnClick(index)}
              >
                {tabItem.title}
              </div>
            ))}
          </div>
          
          {/* Second Column */}
          <div className="col-span-6 flex items-center justify-center bg-gray-300 rounded-lg p-4 shadow-md">
            <img src={tabs[currentTabIndex].image} alt={tabs[currentTabIndex].image} className="rounded-lg w-full h-auto object-cover" />
          </div>
          
          {/* Third Column */}
          <div className="col-span-3">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-4 px-6 border-b text-center text-xl font-semibold text-gray-700" colSpan={2}>
                    $30/rent per day
                  </th>
                </tr>
              </thead>
              <tbody>
                {fields.map((field, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-100 transition duration-200">
                    <td className="py-4 px-6 border-b text-gray-600">{field.label}</td>
                    <td className="py-4 px-6 border-b text-gray-600">
                      {tabs[currentTabIndex].details.find(detail => detail.attribute1 === field.key)?.attribute2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Cars;