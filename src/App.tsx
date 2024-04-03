import { useState } from "react";
import UpdateElectron from "@/components/update";
import logoVite from "./assets/logo-vite.svg";
import logoElectron from "./assets/logo-electron.svg";
import "./App.css";
import headset from "./assets/test.png";
import {
  FaArchive,
  FaBeer,
  FaHeart,
  FaHeartbeat,
  FaHistory,
  FaList,
  FaPlay,
} from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div
      className=" flex-1 bg-red-200 flex gap-1 home bg-cover"
      // style={{ backgroundImage: `url("./assets/app-bg.jpg")` }}
    >
      <div
        className=" flex-row justify-center items-center h-[94vh] my-[3vh] ml-5  rounded-md shadow-inherit "
        style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.18)" }}
      >
        <div className=" flex-row justify-center items-center">
          <div className=" flex justify-center items-center">
            <img
              src={headset}
              alt="logo-vite"
              className=" h-52 w-52 border-2 "
            />
          </div>
          <h3 className=" text-3xl text-white font-urbanistBold text-center -mt-5 mb-2">
            Solo Player
          </h3>
        </div>

        <div className=" flex justify-center items-center">
          <p className=" font-urbanistMd text-xs text-white text-center mx-5">
            Play your favorite music everyday using the one and only solo player
            !!
          </p>
        </div>
        <div className=" flex justify-center items-center mt-10">
          <button
            style={{ backgroundColor: "rgba(225, 225, 225, 0.2)" }}
            className=" w-[80%] flex items-center text-sm p-1 border-[1px] outline-none mt-5 shadow-inline border-none rounded text-white text-left font-urbanist"
          >
            <FaList className="mx-1" />
            Playlist
          </button>
        </div>

        <div className=" flex justify-center items-center mt-1">
          <button
            onClick={() => {
              console.log("history clicked");
            }}
            style={{ backgroundColor: "rgba(225, 225, 225, 0.2)" }}
            className=" w-[80%] flex items-center  text-sm p-1 border-[1px] outline-none text-left mt-1 shadow-inline border-none rounded text-white font-urbanist"
          >
            <FaHistory className="mx-1 text-violet-700" />
            History
          </button>
        </div>

        <div className=" flex justify-center items-center mt-1">
          <button
            onClick={() => {
              console.log("history clicked");
            }}
            style={{ backgroundColor: "rgba(225, 225, 225, 0.2)" }}
            className=" w-[80%] items-center flex text-sm p-1 border-[1px] outline-none text-left mt-1 shadow-inline border-none rounded text-white font-urbanist"
          >
            <FaHeart className="mx-1" />
            Favorite
          </button>
        </div>

        <div className=" flex justify-center items-center mt-1">
          <button
            onClick={() => {
              console.log("history clicked");
            }}
            style={{ backgroundColor: "rgba(225, 225, 225, 0.2)" }}
            className=" w-[80%]  text-sm p-1 flex items-center border-[1px] outline-none text-left mt-1 shadow-inline border-none rounded text-white font-urbanist"
          >
            <FaArchive className="mx-1" />
            Archived
          </button>
        </div>
      </div>
      <div
        className=" flex-row justify-center items-center h-screen"
        style={{ flex: 4 }}
      ></div>
    </div>
  );
}

export default App;
