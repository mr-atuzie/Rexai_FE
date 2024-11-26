import React, { useEffect, useRef } from "react";
import { IoIosSend } from "react-icons/io";
import { IoMdAttach } from "react-icons/io";

const NewPrompt = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behaviour: "smooth" });
  }, []);
  return (
    <>
      <h1>TEST</h1>

      <div ref={endRef} className=" pb-[100px]" />
      <form className=" w-[50%] bg-[#2c2937] rounded-xl flex items-center absolute bottom-0 px-4">
        <label
          className=" bg-[#605e68] border-none flex justify-center items-center p-2 h-9 w-9 rounded-full "
          htmlFor="file"
        >
          <IoMdAttach />
        </label>
        <input className=" hidden" id="file" type="file" multiple={false} />

        <input
          className="bg-transparent border-none p-4 flex-1 outline-none text-[#ececec]"
          type="text"
          placeholder="Ask me anything...."
        />

        <button className=" bg-[#605e68] border-none flex justify-center items-center p-2 h-9 w-9 rounded-full ">
          <IoIosSend />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
