const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-1 gap-8">
          
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">CarRentals</h2>
            <p className="mb-4">
              Your reliable car rental service offering a wide range of vehicles to suit your needs. Explore the city with comfort and style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-4">
              1234 Street Name, City, Country
            </p>
            <p className="mb-4">
              Email: <a href="mailto:info@carrentals.com" className="hover:underline">info@carrentals.com</a>
            </p>
            <p className="mb-4">
              Phone: <a href="tel:+1234567890" className="hover:underline">+123 456 7890</a>
            </p>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-4 bg-gray-700 text-gray-200 rounded"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
  
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; 2024 CarRentals. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;