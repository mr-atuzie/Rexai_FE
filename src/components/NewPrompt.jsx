import React, { useEffect, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import Upload from "./Upload";
import { IKImage } from "imagekitio-react";
import model from "../lib/gemini";
import Markdown from "react-markdown";

const NewPrompt = () => {
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
  });

  const [question, setQuesstion] = useState("");
  const [answer, setAnswer] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behaviour: "smooth" });
  }, []);

  const askAI = async (text) => {
    setQuesstion(text);

    const result = await model.generateContent(text);
    console.log(result.response.text());

    setAnswer(result.response.text());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = e.target.text.value;

    if (!text) return;

    askAI(text);
  };
  return (
    <>
      {img.isLoading && <div>Loading...</div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={process.env.REACT_APP_IMG_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width="380"
        />
      )}
      {question && (
        <div className=" p-4 bg-[#2c2937] rounded-xl max-w-[80%] self-end">
          {question}
        </div>
      )}
      {answer && (
        <div>
          <Markdown> {answer}</Markdown>
        </div>
      )}
      {/* <button
        onClick={askAI}
        className=" bg-white w-full p-2.5 text-center rounded-full text-black"
      >
        TEST
      </button> */}
      <div ref={endRef} className=" pb-[100px]" />
      <form
        onSubmit={handleSubmit}
        className=" w-[50%] bg-[#2c2937] rounded-xl flex items-center absolute bottom-0 px-4"
      >
        <Upload setImg={setImg} />
        <input className=" hidden" id="file" type="file" multiple={false} />

        <input
          className="bg-transparent border-none p-4 flex-1 outline-none text-[#ececec]"
          type="text"
          placeholder="Ask me anything...."
          name="text"
        />

        <button className=" bg-[#605e68] border-none flex justify-center items-center p-2 h-9 w-9 rounded-full ">
          <IoIosSend />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
