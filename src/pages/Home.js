import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("Home Component => ", location.pathname);
  }, [location]);
  return <h2>Home Page</h2>;
};
export default Home;
