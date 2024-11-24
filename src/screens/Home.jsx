import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeImg from "../assets/ai.jpg";
import { TypeAnimation } from "react-type-animation";
// import logo from "../assets/logo.png";

const Home = () => {
  const [typingStatus, setTypingStatus] = useState("human");

  return (
    <div className="   flex flex-col lg:flex-row items-center justify-center gap-[50px] lg:gap-[100px]   relative">
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

      <div className=" flex-1 relative">
        <img className="rounded" src={HomeImg} alt="" />

        <div className=" flex gap-3 items-center p-2 absolute bg-black bottom-0 w-[80%]  lg:w-[60%] right-0">
          <img
            className=" w-6 h-6 rounded-full object-cover"
            src={
              typingStatus === "human"
                ? "https://media.istockphoto.com/id/1347495868/photo/smiling-african-american-man-wearing-glasses.jpg?s=612x612&w=0&k=20&c=QMCbWu-AOfLDkQMsX-qX2xHFZAL56tx_uVucZ5rBxv8="
                : "https://mdrregulator.com/wp-content/uploads/2024/08/publication_of_the_ai_act_in_the_official_journal_of_the_eu-730x640.webp"
            }
            alt=""
          />
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Hello? Are you there?",
              2000,
              () => {
                setTypingStatus("bot");
              },
              "Yes, I'm here! How can I assist you today?",
              2000,
              () => {
                setTypingStatus("human");
              },
              "Can you tell me something interesting?",
              2000,
              () => {
                setTypingStatus("bot");
              },
              "Did you know the entire internet weighs about the same as a strawberry?",
              2000,
              () => {
                setTypingStatus("human");
              },
              "Whoa, really? That's wild!",
              2000,
              () => {
                setTypingStatus("bot");
              },
              "Wild and true! Ready to dive deeper?",
              2000,
              () => {
                setTypingStatus("human");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            omitDeletionAnimation={true}
          />
        </div>
      </div>

      {/* <div className=" flex flex-col justify-center items-center w-full fixed bottom-6 ">
        <img width={20} height={20} src={logo} alt="" />

        <div className=" flex text-xs gap-2 mt-2 text-[#888]">
          <p>Terms of Service</p>
          <span>|</span>
          <p>Privacy Policy</p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
