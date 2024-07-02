import NavLinks from "./NavLinks";
import RegButton from "./RegButton";
import { FaHandshake } from 'react-icons/fa';
import UserProfile from "./userProfile";

const Header = () => {
  return (
    <header className="bg-gray-800 text-gray-200">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between p-6">
        
        {/* Logo and Icon */}
        <div className="flex items-center space-x-3">
          <FaHandshake size={50} className="text-yellow-500"/>
          <span className="text-2xl font-bold">CarRentals</span>
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <NavLinks />
        </nav>
        
        {/* User Profile and Registration Button */}
        <div className="flex items-center space-x-6">
          <UserProfile />
          <RegButton />
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <nav className="flex flex-col items-center space-y-2 p-4">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
};

export default Header;