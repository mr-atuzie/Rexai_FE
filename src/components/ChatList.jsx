import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const ChatList = () => {
  return (
    <div className=" flex flex-col h-full">
      <h1 className=" font-medium mb-2 text-sm text-gray-400">DASHBOARD</h1>

      <div className=" flex flex-col ">
        <Link to={"/dashboard"} className=" rounded-lg hover:bg-[#2c2937] p-2">
          Create a new Chat
        </Link>
        <Link to={"/dashboard"} className=" rounded-lg hover:bg-[#2c2937] p-2">
          Explore
        </Link>
        <Link to={"/dashboard"} className=" rounded-lg hover:bg-[#2c2937] p-2">
          Contact
        </Link>
      </div>

      <hr className=" border-none h-[1px] bg-gray-600 my-5" />

      <h1 className=" font-medium mb-2 text-sm text-gray-400">RECENT CHATS</h1>
      <div className=" flex flex-col overflow-y-scroll min-h-96">
        <Link to={"/dashboard"} className=" rounded-lg hover:bg-[#2c2937] p-2">
          My chat title
        </Link>
        <Link to={"/dashboard"} className=" rounded-lg hover:bg-[#2c2937] p-2">
          My chat title
        </Link>
        <Link to={"/dashboard"} className=" rounded-lg hover:bg-[#2c2937] p-2">
          My chat title
        </Link>
        <Link to={"/dashboard"} className=" rounded-lg hover:bg-[#2c2937] p-2">
          My chat title
        </Link>
        <Link to={"/dashboard"} className=" rounded-lg hover:bg-[#2c2937] p-2">
          My chat title
        </Link>
        <Link to={"/dashboard"} className=" rounded-lg hover:bg-[#2c2937] p-2">
          My chat title
        </Link>
        <Link to={"/dashboard"} className=" rounded-lg hover:bg-[#2c2937] p-2">
          My chat title
        </Link>
        <Link to={"/dashboard"} className=" rounded-lg hover:bg-[#2c2937] p-2">
          My chat title
        </Link>
      </div>

      <hr className=" border-none h-[1px] bg-gray-600 my-5" />

      <div className="flex items-center gap-2 mt-auto h-full">
        <img width={20} height={20} src={logo} alt="Logo" />
        <div>
          <p className="font-medium text-white">Upgrade to Rex AI Pro</p>
          <p className="text-[#888]">Get unlimited access to all features</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
