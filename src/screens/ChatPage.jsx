import React from "react";
import NewPrompt from "../components/NewPrompt";

const ChatPage = () => {
  return (
    <div className=" h-full flex flex-col items-center relative">
      <div className=" flex-1 overflow-y-scroll w-full flex justify-center">
        <div className=" w-[50%] flex flex-col gap-4">
          <div className=" p-4 bg-[#2c2937] rounded-xl max-w-[80%] self-end">
            test message
          </div>
          <div>user message</div>
          <div className=" p-4 bg-[#2c2937] rounded-xl max-w-[80%] self-end">
            test message
          </div>
          <div>user message</div>
          <div className=" p-4 bg-[#2c2937] rounded-xl max-w-[80%] self-end">
            test message my name is slim shady and i am the best wrapper
          </div>
          <div>user message</div>
          <div className=" p-4 bg-[#2c2937] rounded-xl max-w-[80%] self-end">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            ratione eum quae amet placeat porro veniam enim animi quisquam sit!
          </div>
          <div className=" p-4 bg-[#2c2937] rounded-xl max-w-[80%] self-end">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            ratione eum quae amet placeat porro veniam enim animi quisquam sit!
          </div>
          <div>user message</div>
          <div className=" p-4 bg-[#2c2937] rounded-xl max-w-[80%] self-end">
            test message
          </div>
          <div>user message</div>
          <div className=" p-4 bg-[#2c2937] rounded-xl max-w-[80%] self-end">
            test message
          </div>
          <div>user message</div>
          <div className=" p-4 bg-[#2c2937] rounded-xl max-w-[80%] self-end">
            test message
          </div>
          <div>user message</div>
          <div className=" p-4 bg-[#2c2937] rounded-xl max-w-[80%] self-end">
            test message
          </div>
          <div>user message</div>
          <div className=" p-4 bg-[#2c2937] rounded-xl max-w-[80%] self-end">
            test message
          </div>
          <div>user message</div>
          <div className=" p-4 bg-[#2c2937] rounded-xl max-w-[80%] self-end">
            test message
          </div>
          <div className=" p-4 bg-[#2c2937] rounded-xl max-w-[80%] self-end">
            test message
          </div>
          <div className=" p-4 bg-[#2c2937] rounded-xl max-w-[80%] self-end">
            test message
          </div>
          <div className=" p-4 bg-[#2c2937] rounded-xl max-w-[80%] self-end">
            test message
          </div>

          {/* form */}
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
