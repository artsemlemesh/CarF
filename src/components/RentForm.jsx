import { useState } from "react";
import { FaUser, FaEnvelope, FaCalendarAlt, FaCalendarCheck, FaCar } from 'react-icons/fa';
import {addNewBooking} from '../features/bookings/bookingSlice'
import { useDispatch } from "react-redux";
import Label from "./newForm/Label";
import Input from "./newForm/InputForm";


const RentForm = ({ addBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
      email: '',
      pick_up_date: '',
      drop_off_date: '',
      car_model: '',
  });

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
     dispatch(addNewBooking(formData))
    // if (addBooking){
    //   addBooking(formData)
    // }
    // addBooking(formData);
    setFormData({
      name: '',
      email: '',
      pick_up_date: '',
      drop_off_date: '',
      car_model: '',
    });
  };

  return (
    <div className="w-3/5 mx-auto bg-white p-8">
      <h2 className="text-2xl mb-4 text-center">Book a Car</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap">
        <div className="w-full md:w-1/3 p-2">
          <div className="flex items-center mb-2">
            <FaUser className="text-gray-700 mr-2" />
            <Label className="block text-gray-700 mr-2" htmlFor="name">
              Name
            </Label>
          </div>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-gray-700 mr-2" />
            <Label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </Label>
          </div>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="flex items-center mb-2">
            <FaCalendarAlt className="text-gray-700 mr-2" />
            <Label className="block text-gray-700 mb-2" htmlFor="pick_up_date">
              Pick-Up Date
            </Label>
          </div>
          <Input
            type="date"
            id="pick_up_date"
            name="pick_up_date"
            value={formData.pick_up_date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="flex items-center mb-2">
            <FaCalendarCheck className="text-gray-700 mr-2" />
            <Label className="block text-gray-700 mb-2" htmlFor="drop_off_date">
              Drop-Off Date
            </Label>
          </div>
          <Input
            type="date"
            id="drop_off_date"
            name="drop_off_date"
            value={formData.drop_off_date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="flex items-center mb-2">
            <FaCar className="text-gray-700 mr-2" />
            <Label className="block text-gray-700 mb-2" htmlFor="car_model">
              Car Model
            </Label>
          </div>
          <select
            id="car_model"
            name="car_model"
            value={formData.car_model}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select a car model</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Truck">Truck</option>
            <option value="Convertible">Convertible</option>
          </select>
        </div>
        <div className="w-full md:w-1/3 p-2 flex items-end">
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};


export default RentForm;