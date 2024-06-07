import React from "react";
import Header_Left from "./Header/Header_Left";
import Header_Right from "./Header/Header_Right";

const Header=()=>{
    return(
        <div className="flex flex-row">
            <Header_Left></Header_Left>
            <Header_Right></Header_Right>
        </div>
    );
}

export default Header;