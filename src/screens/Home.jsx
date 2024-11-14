import React from "react";
import { Link } from "react-router-dom";
import HomeImg from "../assets/ai.jpg";

const Home = () => {
  return (
    <div className=" flex items-center gap-[100px] h-screen">
      <div className=" flex-1 flex flex-col  items-center gap-2 justify-center ">
        <h1 className=" text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-purple-600">
          REXAI
        </h1>
        <h2 className=" font-medium">
          Boost your creativity and productivity with rexai
        </h2>
        <h3 className=" text-center text-gray-200 text-sm max-w-[70%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          magnam quaerat esse, saepe placeat voluptatem sint, laboriosam.
        </h3>

        <Link to="/sign-up">
          <button className=" mt-5 bg-[#2c2c2e] px-4 py-2 rounded hover:bg-[#3a3a3c]  ">
            Get started
          </button>
        </Link>
      </div>

      <div className=" flex-1">
        <img className=" rounded" src={HomeImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
