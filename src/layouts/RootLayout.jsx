import React from "react";
import { Link, Outlet } from "react-router-dom";
import { GiArtificialIntelligence } from "react-icons/gi";

const RootLayout = () => {
  return (
    <div className=" w-[90%] mx-auto h-screen flex flex-col">
      <header className=" flex py-4 items-center justify-between">
        <Link className=" flex items-center gap-2" to={"/"}>
          <GiArtificialIntelligence size={30} />
          <h2 className=" uppercase text-xl font-bold">Rexai</h2>
        </Link>

        <div>user</div>
      </header>
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
