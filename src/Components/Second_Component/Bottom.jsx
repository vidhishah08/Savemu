import React from "react";
import Ornament2 from "../../Assests/Ornament2.png"
import Icon from "../../Assests/Icon.png"
import Icon1 from "../../Assests/Icon1.png"
import Icon2 from "../../Assests/Icon2.png"

const Bottom=()=>{
    return(
        <div className="mt-[50px] mx-[146px] flex flex-row justify-between">
            <div className=" bg-customBlack w-[400px] h-[500px]" ><img src={Ornament2} alt="Ornament" className="w-full h-full"/>
                <div className="pl-[40px] mt-[-450px] text-white">
                    <img src={Icon} alt="Icon" className="mb-[15px]"/>
                    <h1 className="text-[36px] font-semibold leading-[42px] mb-[25px]">Easy<br /> Financial Management</h1>
                    <p className="text-[18px] pr-[40px]">This is the apparel collection of our brand .Click see more to see all of our collections</p>
                    <button className=" bg-customPurple px-[15px] py-[10px] mt-[50px] rounded-md">Learn More</button>
                </div>
            </div>
            <div className=" bg-customBlack w-[400px] h-[500px]"><img src={Ornament2} alt="Ornament" className="w-full h-full"/>
                <div className="pl-[40px] mt-[-450px] text-white">
                    <img src={Icon1} alt="Icon1" className="mb-[15px]"/>
                    <h1 className="text-[36px] font-semibold leading-[42px] mb-[25px]">Secure<br /> Financial <br /> Platform</h1>
                    <p className="text-[18px] pr-[40px]">This is the apparel collection of our brand .Click see more to see all of our collections</p>
                    <button className=" bg-customPurple px-[15px] py-[10px] mt-[50px] rounded-md">Learn More</button>
                </div>
            </div>
            <div className=" bg-customBlack w-[400px] h-[500px]"><img src={Ornament2} alt="Ornament" className="w-full h-full"/>
                <div className="pl-[40px] mt-[-450px] text-white">
                    <img src={Icon2} alt="Icon2" className="mb-[15px]"/>
                    <h1 className="text-[36px] font-semibold leading-[42px] mb-[25px]">Tap and Scan<br /> for Every<br /> Activity</h1>
                    <p className="text-[18px] pr-[40px]">This is the apparel collection of our brand .Click see more to see all of our collections</p>
                    <button className=" bg-customPurple px-[15px] py-[10px] mt-[50px] rounded-md">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Bottom;