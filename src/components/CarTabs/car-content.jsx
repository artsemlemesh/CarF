import Cars from "./Cars"



const CarContent = () => {

    const fields = [
        // { label: "Title", key: "title" },
        { label: "Model", key: "Model" },
        { label: "Mark", key: "Mark" },
        { label: "Year", key: "Year" },
        { label: "Doors", key: "Doors" },
        { label: "AC", key: "AC" },
        { label: "Transmission", key: "Transmission" },
        { label: "Fuel", key: "Fuel" },
        // { label: "Image", key: "image" }
      ];
    


    const tabs = [
        {
          title: "Car 1",
          image: "1.png",
          details: [
            { attribute1: "Model", attribute2: "Model 1" },
            { attribute1: "Mark", attribute2: "Mark A" },
            { attribute1: "Year", attribute2: "2020" },
            { attribute1: "Doors", attribute2: "4" },
            { attribute1: "AC", attribute2: "Yes" },
            { attribute1: "Transmission", attribute2: "Automatic" },
            { attribute1: "Fuel", attribute2: "Gasoline" }
          ]
        },
        {
          title: "Car 2",
          image: "2.png",
          details: [
            { attribute1: "Model", attribute2: "Model 2" },
            { attribute1: "Mark", attribute2: "Mark B" },
            { attribute1: "Year", attribute2: "2019" },
            { attribute1: "Doors", attribute2: "2" },
            { attribute1: "AC", attribute2: "Yes" },
            { attribute1: "Transmission", attribute2: "Manual" },
            { attribute1: "Fuel", attribute2: "Diesel" }
          ]
        },
        {
          title: "Car 3",
          image: "3.png",
          details: [
            { attribute1: "Model", attribute2: "Model 3" },
            { attribute1: "Mark", attribute2: "Mark C" },
            { attribute1: "Year", attribute2: "2021" },
            { attribute1: "Doors", attribute2: "4" },
            { attribute1: "AC", attribute2: "No" },
            { attribute1: "Transmission", attribute2: "Automatic" },
            { attribute1: "Fuel", attribute2: "Electric" }
          ]
        },
        {
          title: "Car 4",
          image: "4.png",
          details: [
            { attribute1: "Model", attribute2: "Model 4" },
            { attribute1: "Mark", attribute2: "Mark D" },
            { attribute1: "Year", attribute2: "2018" },
            { attribute1: "Doors", attribute2: "4" },
            { attribute1: "AC", attribute2: "Yes" },
            { attribute1: "Transmission", attribute2: "Automatic" },
            { attribute1: "Fuel", attribute2: "Hybrid" }
          ]
        },
        {
          title: "Car 5",
          image: "5.png",
          details: [
            { attribute1: "Model", attribute2: "Model 5" },
            { attribute1: "Mark", attribute2: "Mark E" },
            { attribute1: "Year", attribute2: "2022" },
            { attribute1: "Doors", attribute2: "2" },
            { attribute1: "AC", attribute2: "No" },
            { attribute1: "Transmission", attribute2: "Manual" },
            { attribute1: "Fuel", attribute2: "Gasoline" }
          ]
        },
        {
          title: "Car 6",
          image: "6.png",
          details: [
            { attribute1: "Model", attribute2: "Model 6" },
            { attribute1: "Mark", attribute2: "Mark M" },
            { attribute1: "Year", attribute2: "2021" },
            { attribute1: "Doors", attribute2: "5" },
            { attribute1: "AC", attribute2: "No" },
            { attribute1: "Transmission", attribute2: "Automatic" },
            { attribute1: "Fuel", attribute2: "Gasoline" }
          ]
        }
      ];

    return (
        <Cars tabs={tabs} fields={fields}/>
    )
}

export default CarContent