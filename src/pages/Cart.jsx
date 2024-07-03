import { useEffect } from "react";
import RentForm from "../components/RentForm";
import { fetchBookings } from "../features/bookings/bookingSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.bookings);
  const bookingStatus = useSelector((state) => state.bookings.status);

  useEffect(() => {
    if (bookingStatus === "idle") {
      dispatch(fetchBookings());
    }
  }, [dispatch, bookingStatus]);

  let content;

  if (bookingStatus === "succeeded") {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookings.map((booking, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">{booking.carModel}</h3>
            <p className="text-gray-700">
              <strong>Name:</strong> {booking.name}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {booking.email}
            </p>
            <p className="text-gray-700">
              <strong>Pick-Up Date:</strong> {booking.pick_up_date}
            </p>
            <p className="text-gray-700">
              <strong>Drop-Off Date:</strong> {booking.drop_off_date}
            </p>
            <p className="text-gray-700">
              <strong>Car Model:</strong> {booking.car_model}
            </p>
          </div>
        ))}
      </div>
    );
  } else if (bookingStatus === "loading") {
    content = <div className="text-center">Loading...</div>;
  } else if (bookingStatus === "failed") {
    content = (
      <div className="text-center text-red-500">Failed to load bookings.</div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-center">Book a Car</h2>
      </div>
      <RentForm />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Bookings</h2>
        {content}
      </div>
    </div>
  );
};

export default Cart;
