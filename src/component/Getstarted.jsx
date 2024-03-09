import PostCard from "./PostCard";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import "reactjs-popup/dist/index.css";
import PostComponent from "./PostComponent";

import { FunctionComponent } from "react";

const Getstarted = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-black box-border w-full h-[800px] overflow-hidden text-left text-[16px] text-white font-inter ">
      <div onClick={()=>{
        navigate("/home1")
      }} className="absolute top-[550px] left-[680px] rounded-[44px] [background:linear-gradient(180.13deg,_#202020,_#181818)] box-border w-[132px] h-11 overflow-hidden border-t-[2px] border-solid border-[#282828] border-r-[1px] border-l-[1px]">
        <div className="absolute top-[13px] left-[21px] font-medium">
          Get Started
        </div>
      </div>
      <img
        className="absolute top-[34px] left-[1600px] w-[50px] h-[50px] overflow-hidden object-cover"
        alt=""
        src="https://cdn.discordapp.com/attachments/1184864067295395960/1185499752985526352/image.png?ex=658fd5ae&is=657d60ae&hm=80fb47295c2221ca3040c87eaa89a559fcb9ea3d802e3022f6d9b22f00c1a9d2&"
      />

      <b className="absolute top-[500px] left-[600px] text-[23px] font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000 ">
        Decentralized Connectivity
      </b>

      <div className="flex top-[50px] items-center justify-center h-screen">
        <img
          className="w-1000 h-200 object-cover"
          src="https://cdn.discordapp.com/attachments/1184864067295395960/1185254143577817190/infinity.gif?ex=658ef0f0&is=657c7bf0&hm=0a8294c112bfb226885b79c75fa5fc9a5b964223db6c10a9fa35f2581dfd2dd8&" // Replace with the actual path or URL of your GIF
          alt="GIF Alt Text"
        />
      </div>

      <div className="absolute w-full h-5 text-left text-[16px] text-white font-inter">
        <div className="absolute bottom-[78px] left-[630px] font-medium whitespace-pre-wrap">{`Made With ❤️ in Mumbai Hacks `}</div>
      </div>

      <div className="relative top-[600px] left-[780px] w-full h-11 text-left text-[16px] text-white font-inter">
        <img
          className="absolute top-0 border-transparent left-0 w-132 h-11 object-cover border"
          alt=""
          src="https://cdn.discordapp.com/attachments/1184864067295395960/1185503296924946452/image.png?ex=658fd8fb&is=657d63fb&hm=9ed3c8500b74d1698dbb8535dd329ef0771e9d1fc7fcb02ed0d35332a9716a86&"
        />
        <div className="absolute top-[13px] left-[21px] font-medium">
          Get Started
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
