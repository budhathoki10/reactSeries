import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>My Website</h1>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <hr />

      {/* Outlet is where child routes will render */}
      <Outlet />
    </div>
  );
}

export default Layout;
