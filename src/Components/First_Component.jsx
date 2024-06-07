import React from "react";

const First_Component=()=>{
    return(
        <div className="flex flex-row justify-around text-center mt-[-100px] mx-[120px]">
            <div>
                <h1 className="text-[48px] font-medium">300K</h1><p className="text-[25px] pt-[8px]">User</p>
            </div>
            <div>
                <h1 className="text-[48px] font-medium">12</h1><p className="text-[25px] pt-[8px]">Years Service</p>
            </div>
            <div>
                <h1 className="text-[48px] font-medium">100</h1><p className="text-[25px] pt-[8px]">Company</p>
            </div>
            <div>
                <h1 className="text-[48px] font-medium">10</h1><p className="text-[25px] pt-[10px]">Country</p>
            </div>
            
        </div>
    );
}

export default First_Component;