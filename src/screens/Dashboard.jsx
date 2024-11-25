import React from "react";
import logo from "../assets/logo.png";
import { IoIosSend } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className=" h-screen w-full flex flex-col gap-8 items-center justify-center">
      {/* image */}
      <div className=" flex gap-3 items-center">
        <img className="w-[64px] h-[64px] opacity-[0.2]" src={logo} alt="" />
        <h1 className=" text-7xl opacity-[0.4] font-bold text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-purple-600">
          REX AI
        </h1>
      </div>

      {/* options */}
      <div className=" w-full flex gap-14 items-center justify-center ">
        <div className=" flex flex-col border w-[230px] border-gray-600 rounded-lg gap-1 p-4">
          <div className=" bg-[#0e0c16] rounded-full flex justify-center items-center p-2 h-16 w-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </div>
          <span className=" text-gray-500">Create a new chat</span>
        </div>

        <div className=" flex flex-col border  w-[230px] border-gray-600 rounded-lg gap-2 p-4">
          <div className=" bg-[#0e0c16] rounded-full flex justify-center items-center p-2 h-16 w-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          <span className=" text-gray-500">Analyze Images</span>
        </div>

        <div className=" flex flex-col border border-gray-600  w-[230px] rounded-lg gap-2 p-4">
          <div className=" bg-[#0e0c16] rounded-full flex justify-center items-center p-2 h-16 w-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          </div>
          <span className=" text-gray-500">Help with my Code</span>
        </div>
      </div>

      {/* form */}
      <div className=" bg-[#2c2937]  rounded-xl w-[50%] ">
        <form className=" w-full h-full flex justify-between items-center">
          <input
            type="text"
            placeholder="Ask me anything"
            className="bg-transparent border-none p-4 flex-1 outline-none text-[#ececec]"
          />
          <button className=" bg-[#605e68] border-none flex justify-center items-center p-2 h-9 w-9 rounded-full mr-3">
            <IoIosSend size={30} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
