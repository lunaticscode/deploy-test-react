import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Shop = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("Shop Component => ", location.pathname);
  }, [location]);
  return <h2>Shop Page</h2>;
};
export default Shop;
