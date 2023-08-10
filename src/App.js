import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <head>
        <nav onClick={() => navigate("/")}>home</nav>
        <nav onClick={() => navigate("/shop")}>shop</nav>
        <nav onClick={() => navigate("/profile")}>profile</nav>
      </head>
      <Outlet />
    </>
  );
}

export default App;
