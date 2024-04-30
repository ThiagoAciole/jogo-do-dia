import { Outlet } from "react-router-dom";

import NavBar from "../components/navBar";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <div className="fixed z-10 w-full ">
          <NavBar />
        </div>

        <main className=" flex-1 z-1 space-y-8 py-32">
          <div className="">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
