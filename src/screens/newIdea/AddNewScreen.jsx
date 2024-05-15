import React from "react";
import Header from "../home/components/Header";
import { ChevronLeft, Info, Send } from "lucide-react";

const AddNewScreen = () => {
  return (
    <div>
      <Header />
      <button
        //   onClick={() => navigation("/")}
        className="btn mt-7"
      >
        <ChevronLeft />
        Back
      </button>

      <h2 className="font-bold text-2xl mt-5">
        From Concept to Creation: Empowering your startup Journey
      </h2>

      <div className="flex flex-col mt-7 gap-2">
        <label className="flex justify-between">Your Idea *</label>
        <textarea
          //   value={idea}
          //   onChange={(event) => setIdea(event.target.value)}
          className="textarea textarea-bordered border-primary"
          placeholder="Write your Idea"
        ></textarea>
      </div>

      {/* {!existingUser && ( */}
      <div className="flex flex-col mt-7 gap-2">
        <label className="flex justify-between">
          Your Username *
          <span className="flex items-center gap-2 text-sm">
            <Info className="w-4 h-4" />
            No Account Needed
          </span>
        </label>
        <input
          // value={username}
          // onChange={(event) => setUsername(event.target.value)}
          type="text"
          placeholder="Username"
          className="input input-bordered w-full border-primary"
        />
      </div>
      {/* )} */}

      <button
        // disabled={!(idea && username)}
        // onClick={() => onSavehandler()}
        className="btn mt-7 w-full btn-primary"
      >
        Send
        <Send className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AddNewScreen;
