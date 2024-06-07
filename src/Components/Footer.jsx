import React from "react";
import Logo from "../Assests/Logo.png"
import Facebook from "../Assests/Facebook.png"
import Instagram from "../Assests/Instagram.png"
import Twitter from "../Assests/Twitter.png"
import LinkedIn from "../Assests/LinkedIn.png"

const Footer=()=>{
    return(
        <div>
        <div className="mx-[146px] mt-[70px] pb-[90px] border-b-[2px] border-b-black">
        <div className="flex flex-row">
            <div className="flex flex-col mr-[150px]">
                <div className="flex flex-row">
                    <img src={Logo} alt="Logo" className="w-[70px]"/>
                    <h1 className="text-[25px] font-bold pt-[10px] pl-[20px]">Savemu</h1>
                </div>
                <div className="pt-[10px]"><p >Join our newsletter to stay up to date on features and releases.</p></div>
            </div>
            <div className="mr-[80px]">
                <h1 className="font-bold">About</h1>
                <p className="pt-[20px]">About Us</p>
                <p className="pt-[10px]">Features</p>
                <p className="pt-[10px]">News & Blogs</p>
            </div>
            <div className="mr-[80px]">
                <h1 className="font-bold">Company</h1>
                <p className="pt-[20px]">Our Team</p>
                <p className="pt-[10px]">Our Partner</p>
                <p className="pt-[10px]">Affiliates</p>
                <p className="pt-[10px]">Affiliates Policy</p>
                <p className="pt-[10px]">Brand Asset</p>
                <p className="pt-[10px]">Career</p>
            </div>
            <div className="mr-[80px]">
                <h1 className="font-bold">Support</h1>
                <p className="pt-[20px]">FAQ</p>
                <p className="pt-[10px]">Support Center</p>
                <p className="pt-[10px]">Contact Us</p>
            </div>
            <div>
                <h1 className="font-bold">Follow Us</h1>
                <div className="flex flex-row pt-[20px]">
                    <img src={Facebook} alt="Facebook"/><p className="pl-[2px]">Facebook</p>
                </div>
                <div className="flex flex-row pt-[10px]">
                    <img src={Instagram} alt="Instagram"/><p className="pl-[2px]">Instagram</p>
                </div>
                <div className="flex flex-row pt-[10px]">
                    <img src={Twitter} alt="Twitter"/><p className="pl-[2px]">Twitter</p>
                </div>
                <div className="flex flex-row pt-[10px]">
                    <img src={LinkedIn} alt="LinkedIn"/><p className="pl-[2px]">LinkedIn</p>
                </div>
            </div>
        </div>
    </div>
    <div className="mx-[146px] py-[23px] flex flex-row justify-between">
        <div><p>2022 Fashionico .All rights reserved.</p></div>
        <div className="flex flex-row justify-between ">
            <p className="mr-[20px]">Privacy Policy</p>
            <p className="mr-[20px]">Terms of Service</p>
            <p>Cookies Settings</p>
        </div>
    </div>
    </div>
    );
}

export default Footer;