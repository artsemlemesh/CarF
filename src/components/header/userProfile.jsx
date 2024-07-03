import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { CiUser } from "react-icons/ci";

const UserProfile = () => {
  const { isAuthenticated, user } = useContext(GlobalContext);

  return (
    <div className="max-w-sm bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4 flex items-center space-x-4">
      <div className="w-16 h-16 flex-shrink-0 bg-gray-600 rounded-full flex items-center justify-center">
        <CiUser className="w-10 h-10 text-gray-200" />
      </div>
      <div className="flex-grow">
        {isAuthenticated ? (
          <>
            <div className="text-lg font-semibold text-gray-200">
              {user.name}
            </div>
            <p className="text-gray-400">{user.email}</p>
          </>
        ) : (
          <p className="text-gray-400">Log in</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
