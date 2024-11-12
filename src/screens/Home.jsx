import React from "react";

const Home = () => {
  return (
    <div className=" flex items-center gap-[100px] h-screen">
      <div className=" flex-1 flex flex-col  items-center gap-3 justify-center ">
        <h1 className=" text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-purple-600">
          REXAI
        </h1>
        <h2 className=" font-medium">
          Boost your creativity and productivity with rexai
        </h2>
        <h3 className=" text-center text-gray-200 text-sm max-w-[70%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          magnam quaerat esse, saepe placeat voluptatem sint, laboriosam, facere
          ipsum consequuntur.
        </h3>

        <button className=" mt-5 bg-[#2c2c2e] px-4 py-2 rounded hover:bg-[#3a3a3c]  ">
          Get started
        </button>
      </div>

      <div className=" bg-purple-500 flex-1">crackwalls</div>
    </div>
  );
};

export default Home;
