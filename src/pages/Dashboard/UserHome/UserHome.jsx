import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full min-h-[calc(100vh-200px)} flex justify-center items-center">
      <p className="text-3xl font-bold">Hi! {user?.displayName} </p>
    </div>
  );
};

export default UserHome;
