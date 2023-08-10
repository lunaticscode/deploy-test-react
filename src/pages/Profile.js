import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("Profile Component => ", location.pathname);
  }, [location]);
  return <h2>Profile Page</h2>;
};
export default Profile;
