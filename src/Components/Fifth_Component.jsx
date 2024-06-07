import React from "react";
import Right from "./Fifth_Component/Right";
import Left from "./Fifth_Component/Left";

const Fifth_Component=()=>{
    return(
        <div className="mt-[-100px] flex flex-row ml-[146px]">
            <Left></Left>
            <Right></Right>
        </div>
    );
}

export default Fifth_Component;