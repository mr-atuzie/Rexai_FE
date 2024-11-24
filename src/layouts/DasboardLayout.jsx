import React from "react";
import { Outlet } from "react-router-dom";
import ChatList from "../components/ChatList";

const DasboardLayout = () => {
  return (
    <div className="flex h-screen">
      <div className=" flex-[1]">
        <ChatList />
      </div>
      <div className=" flex-[4] bg-[#12101b] ">
        <Outlet />
      </div>
    </div>
  );
};

export default DasboardLayout;
