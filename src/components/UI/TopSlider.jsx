import { useState } from "react";

const TopSlider = () => {
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState({
    year: new Date().getFullYear(),
    make: "",
    model: "",
  });
  console.log(car, "cars");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((c) => ({
      ...c,
      [name]: value,
    }));
  };

  const addCar = () => {
    setCars((prevCars) => [...prevCars, car]);
    setCar({
      year: new Date().getFullYear(),
      make: "",
      model: "",
    });
  };

  return (
    <>
      {/* <form> */}
      <h1>list of cars</h1>
      <h2>
        your car is {car.year} {car.make} {car.model}
      </h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.year} {car.make}
            {car.model}
          </li>
        ))}
      </ul>
      <label htmlFor="year">year</label>
      <input
        className="border"
        name="year"
        type="number"
        value={car.year}
        onChange={handleChange}
      />
      <label>make</label>
      <input
        className="border"
        name="make"
        type="text"
        value={car.make}
        onChange={handleChange}
      />
      <label>model</label>
      <input
        className="border"
        name="model"
        type="text"
        value={car.model}
        onChange={handleChange}
      />
      <button
        className="bg-pink-500 px-4 py-2 text-custom-blue rounded-lg hover:bg-pink-800"
        onClick={addCar}
      >
        {" "}
        add{" "}
      </button>
      {/* </form> */}
    </>
  );
};

export default TopSlider;
