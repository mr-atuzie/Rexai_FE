import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className=" w-[90%] mx-auto h-screen">
      <header>
        <Link to={"/"}>
          <h2>Rexai</h2>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
