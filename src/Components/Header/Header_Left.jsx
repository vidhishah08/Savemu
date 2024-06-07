import React from "react";
import Logo from "../../Assests/Logo.png"
import Play from "../../Assests/Play.png"
import Company from "../../Assests/Company.png"

const Header_Left=()=>{
    return(
        <div className="ml-[146px] mt-[10px] text-start pr-[100px] ">
            <div className="flex flex-row">
                <div className><img src={Logo} alt="Logo"/></div>
                <div><p className=" font-bold pl-[15px] pt-[10px]">Savemu</p></div>
            </div> 
            <div className="mt-[100px]">
                <p className=" text-[50px] font-semibold w-[400px] leading-[60px]">The Best Saving Companion for You</p>
                <p className="mt-[10px] w-[420px] t-[28px]">This is the apparel collection of our brand .Click see more to see all of our collections</p>
            </div>
            <div className="mt-[80px] flex flex-row">
                <button className=" bg-black text-white rounded-md mr-[8px] px-[15px] py-[10px]">Get Started</button>
                <button className=" border-black border-[3px] rounded-md px-[15px] py-[10px] flex flex-row"><img src={Play} alt="Play" className=" mr-[5px]"/><h1 className="">Quick Start</h1></button>
            </div>
            <div className="mt-[80px]">
                <p className="text-[15px] ">Here are some of the company who trusted us</p>
                <img src={Company} alt="Company" className="w-[350px] ml-[-12px] mt-[10px]"/>
            </div>
        </div>
    );
}

export default Header_Left;