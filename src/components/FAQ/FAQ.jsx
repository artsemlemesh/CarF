const FAQ = ({ title, content, isOpen, onClick }) => {
  return (
    <>
      <div className="border-b border-gray-200">
        <button
          onClick={onClick}
          className="w-full flex items-center justify-between p-4 focus:outline-none"
        >
          <span className="text-gray-800 font-medium">{title}</span>
          <svg
            className={`w-6 h-6 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <div
          className={`overflow-hidden transition-all duration-200 ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="p-4 text-gray-600">{content}</div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
