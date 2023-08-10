import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav onClick={() => navigate("/")}>home</nav>
        <nav onClick={() => navigate("/shop")}>shop</nav>
        <nav onClick={() => navigate("/profile")}>profile</nav>
      </header>
      <Outlet />
    </>
  );
}

export default App;
