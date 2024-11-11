import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className=" w-[90%] mx-auto h-screen">
      <header className=" flexn items-center justify-between">
        <Link to={"/"}>
          <h2>Rexai</h2>
        </Link>

        <div>user</div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
