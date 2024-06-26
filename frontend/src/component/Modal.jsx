import React from "react";
import AudioPlayer from "./AudioPlay";
import { useEffect } from "react";

export default function Modal({ showModal, toggleModal }) {
  if (showModal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80">
          <div
            onClick={toggleModal}
            className="absolute w-full h-full bg-gray-800 bg-opacity-80"
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md max-w-md min-w-md">
            {showModal ? <AudioPlayer /> : null}
            <p className="text-lg">You lose!</p>
            <img src="./src/assets/lose.gif" alt="slapping pinguin" />
            <button
              className="absolute top-2 right-2 text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleModal}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
