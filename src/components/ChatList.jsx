import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const ChatList = () => {
  return (
    <div>
      <h1 className=" font-medium  text-sm">DASHBOARD</h1>

      <div className=" flex flex-col gap-2">
        <Link to={"/dashboard"}>Create a new Chat</Link>
        <Link to={"/dashboard"}>Explore</Link>
        <Link to={"/dashboard"}>Contact</Link>
      </div>

      <hr className=" bg-[#ddd] rounded my-4" />

      <h1 className=" font-medium  text-sm">RECENT CHATS</h1>
      <div className=" flex flex-col gap-2">
        <Link to={"/dashboard"}>My chat title</Link>
        <Link to={"/dashboard"}>My chat title</Link>
        <Link to={"/dashboard"}>My chat title</Link>
        <Link to={"/dashboard"}>My chat title</Link>
        <Link to={"/dashboard"}>My chat title</Link>
        <Link to={"/dashboard"}>My chat title</Link>
        <Link to={"/dashboard"}>My chat title</Link>
        <Link to={"/dashboard"}>My chat title</Link>
        <Link to={"/dashboard"}>My chat title</Link>
        <Link to={"/dashboard"}>My chat title</Link>
        <Link to={"/dashboard"}>My chat title</Link>
        <Link to={"/dashboard"}>My chat title</Link>
        <Link to={"/dashboard"}>My chat title</Link>
        <Link to={"/dashboard"}>My chat title</Link>
        <Link to={"/dashboard"}>My chat title</Link>
      </div>
      <hr />

      <div className=" flex items-center gap-2">
        <img width={20} height={20} src={logo} alt="" />
        <div>
          <p className=" font-medium">Upgrade to Rex AI Pro</p>
          <p className=" text-[#888]">Get unlimited access to all features</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
