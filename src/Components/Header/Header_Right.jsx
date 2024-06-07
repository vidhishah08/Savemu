import React from "react";
import Ornament from "../../Assests/Ornament.png"
import Card_Hero from "../../Assests/Card_Hero.png"
import Card_Expenses from "../../Assests/Card_Expenses.png"
import Card from "../../Assests/Card.png"
import Slide from "../../Assests/Slide.png"

const Header_Right=()=>{
    return(
        <div>
            <div className=" bg-customBlack w-[750px] h-[700px] ml-[100px] ">
                <div className="flex flex-row text-white justify-around pt-[25px]">
                    <div><p>How it Works?</p></div>
                    <div><p>Features</p></div>
                    <div><p>Pricing</p></div>
                    <div><p>Contact</p></div>
                    <div><button className=" bg-customPurple px-[15px] py-[8px] rounded-sm">Create Account</button></div>
                </div>
                <div className="pl-[180px] pt-[50px]"><img src={Card_Hero} alt="Card_Hero" className="w-[350px]"/></div>
                <div className="ml-[394px] mt-[-361px] w-[260px]"><img src={Card_Expenses} alt="Card_Expenses" /></div>
                <div className="ml-[50px] mt-[120px]"><img src={Card} alt="Card" className="w-[160px]"/></div>
                <div className="ml-[290px] mt-[-55px]"><img src={Slide} alt="Slide"/></div>
            </div>
            <div className=" w-[750] h-[700] ml-[100px] mt-[-700px] "><img src={Ornament} alt="Ornament" className="opacity-50"/></div>
        </div>
    );
}

export default Header_Right; 