import React from "react";
import { Outlet } from "react-router-dom";
import ChatList from "../components/ChatList";

const DasboardLayout = () => {
  return (
    <div className="flex gap-[50px] h-screen pb-8">
      <div className=" flex-[1]">
        <ChatList />
      </div>
      <div className=" flex-[4] bg-[#12101b] py-5 text-[#FFFFFF]  ">
        <Outlet />
      </div>
    </div>
  );
};

export default DasboardLayout;
