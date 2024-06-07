import React from "react";
import Left from "./Fourth_Component/Left";
import Right from "./Fourth_Component/Right";


const Fourth_Component=()=>{
    return(
        <div className="flex flex-row ">
            <Left></Left>
            <Right></Right>
        </div>
    );
}

export default Fourth_Component;