import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

const RootLayout = () => {
  return (
    <div className=" w-[95%] mx-auto flex flex-col max-h-screen ">
      <header className=" flex py-4 items-center justify-between">
        <Link className=" flex items-center gap-2" to={"/"}>
          <img width={25} height={25} src={logo} alt="" />
          <h2 className=" uppercase text-lg font-bold">Rexai</h2>
        </Link>

        <div>user</div>
      </header>
      <main className="flex-1  h-screen ">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
