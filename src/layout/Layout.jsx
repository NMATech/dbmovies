import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Foot from "../components/Foot";

const Layout = () => {
  return (
    <>
      <Nav />
      <main className="font-sans">
        <Outlet />
      </main>
      <Foot />
    </>
  );
};

export default Layout;
