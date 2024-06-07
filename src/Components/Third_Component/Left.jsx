import React from "react";
import Icon3 from "../../Assests/Icon3.png"
import Icon4 from "../../Assests/Icon4.png"

const Left=()=>{
    return(
        <div className="mt-[150px] ml-[146px] w-[450px]">
            <div className="pt-[80px]">
                <div className="flex flex-row ">
                    <div className="mt-[-15px]"><img src={Icon3} alt="Icon3" className="w-[100px]"/></div>
                    <div className="ml-[10px]"><h1 className="text-[24px] font-semibold">Exchange Rate</h1><p className="text-[14px] pt-[10px]">This is the apparel collection of our brand .Click see more to see all of our collections</p></div>
                </div>
                <div className="flex flex-row mt-[50px] ">
                    <div className="mt-[-15px]"><img src={Icon4} alt="Icon4" className="w-[100px]"/></div>
                    <div className="ml-[10px]"><h1 className="text-[24px] font-semibold">Currencies</h1><p className="text-[14px] pt-[10px]">This is the apparel collection of our brand .Click see more to see all of our collections</p></div>
                </div>
            </div>
        </div>
    );
}

export default Left;

