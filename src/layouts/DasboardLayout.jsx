import React from "react";
import { Outlet } from "react-router-dom";
import ChatList from "../components/ChatList";

const DasboardLayout = () => {
  return (
    <div className="flex ">
      <div className=" flex-[1]">
        <ChatList />
      </div>
      <div className=" flex-[4] bg-[#12101b] text-[#FFFFFF] p-6 ">
        <Outlet />
      </div>
    </div>
  );
};

export default DasboardLayout;
