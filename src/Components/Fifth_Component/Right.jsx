import React from "react";
import Image3 from "../../Assests/Image3.png"
import Image4 from "../../Assests/Image4.png"
import Image5 from "../../Assests/Image5.png"

const Right=()=>{
    return(
        <div className="mt-[-60px] mr-[146px] w-[400px]">
            <h1 className="text-[48px] font-semibold leading-[50px]">One Card For Multiple Purposes</h1>
            <div>
                <div className="flex flex-row mt-[50px]">
                    <div><img src={Image3} alt="Image3" className="w-[100px]"/></div>    
                    <div className="pl-[40px] ">
                        <h1 className="text-[30px] font-semibold">Saving</h1>
                        <p className="text-[16px] pt-[20px]">This is the apparel collection of our brand .Click see more to see all of our collections</p>
                    </div>
                </div>
                <div className="flex flex-row mt-[50px]">
                    <div><img src={Image4} alt="Image4" className="w-[100px]"/></div>    
                    <div className="pl-[40px] ">
                        <h1 className="text-[30px] font-semibold">Payment</h1>
                        <p className="text-[16px] pt-[20px]">This is the apparel collection of our brand .Click see more to see all of our collections</p>
                    </div>
                </div>
                <div className="flex flex-row mt-[50px]">
                    <div><img src={Image3} alt="Image3" className="w-[100px]"/></div>    
                    <div className="pl-[40px] ">
                        <h1 className="text-[30px] font-semibold">Saving</h1>
                        <p className="text-[16px] pt-[20px]">This is the apparel collection of our brand .Click see more to see all of our collections</p>
                    </div>
                </div>
            </div>
            <button className="mt-[60px] py-[10px] px-[15px] bg-customBlack text-white rounded-md">Learn More</button>
        </div>
    );
}

export default Right;