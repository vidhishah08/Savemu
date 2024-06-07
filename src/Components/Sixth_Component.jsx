import React from "react";
import Image6 from "../Assests/Image6.png"
import Star from "../Assests/Star.png"

const Sixth_Component=()=>{
    return(
        <div className=" bg-customBlack w-full h-[600px] mt-[150px]">
            <div><p className="text-white text-[48px] font-medium text-center pt-[50px] w-[600px] leading-[60px] ml-[450px]">See What Users Think About Us</p></div>
            <div className=" bg-customGray w-[780px] h-[300px] mt-[70px] ml-[350px] text-start pr-[20px] pl-[150px]">
                <div className="ml-[150px] ">
                    <p className="text-[28px] text-gray-400 font-bold pt-[30px]">"Really glad to found this brand,it helps to the best apparelfor my daily and business"</p>
                    <h1 className="text-[20px] font-semibold text-white pt-[20px]">Brad Schamacar</h1> 
                    <p className="text-[14px] font-medium text-gray-400 pt-[15px]">Businessman</p>
                    <img src={Star} alt="Star" className="pt-[8px]"/>
                </div>
               
            </div>
            <img src={Image6} alt="Image6" className="pt-[-30px] mt-[-333px] ml-[334px] w-[220px] h-[330px]"/>
        </div>
    );
}

export default Sixth_Component;