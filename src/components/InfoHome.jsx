import { FaCar, FaPhoneAlt, FaRoad } from "react-icons/fa";
const InfoHome = () => {
  return (
    <>
      <div className="">
        <div className="mx-auto p-8 text-center italic">
          <h4>Plan your trip now</h4>
          <h1>Quick & easy car rental</h1>
        </div>
        <div className="flex flex-wrap p-4 justify-evenly">
          <div className="text-center sm:w-1/3 md:w-1/4 p-2">
            <div className="flex flex-col items-center">
              <FaCar size={80} className="mb-4 text-blue-500" />
              <h4 className="text-lg font-semibold mb-2">Select Car</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              natus, quaerat rem qui sint repellat neque odio beatae voluptates,
              laborum tenetur quidem libero unde vel. Temporibus exercitationem
              excepturi placeat tempora.
            </p>
          </div>
          <div className="text-center sm:w-1/3 md:w-1/4 p-2">
            <div className="flex flex-col items-center">
              <FaPhoneAlt size={70} className="mb-4 text-grey-800" />
              <h4 className="text-lg font-semibold mb-2">Contact Operator</h4>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, repudiandae quidem non unde ab numquam nemo ea
              consequuntur quaerat molestiae est sit quibusdam totam obcaecati
              porro recusandae ducimus sapiente explicabo.
            </p>
          </div>
          <div className="text-center sm:w-1/3 md:w-1/4 p-2">
            <div className="flex flex-col items-center">
              <FaRoad size={80} className="md-4 text-red-500" />
              <h4 className="text-lg font-semibold mb-2">Let's Drive</h4>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              ullam, fugit exercitationem dolores possimus eveniet quos fuga
              pariatur officiis quaerat excepturi. Facere velit nesciunt cumque
              labore aliquid quia deserunt necessitatibus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoHome;
