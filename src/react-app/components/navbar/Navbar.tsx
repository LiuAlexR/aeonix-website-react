import { useEffect, useState } from "react";
import logo from "../../assets/logos/aeonix_exclusive.png";
import "./Navbar.css";
export default function Navbar() {
    console.log("ABC");
    return (
        <div id="navbar">
            <GetLogo />
            <GetMobileMenu />
        </div>
    )
}
function GetProducts() {

}
interface navbarLinks {

}
function GetLogo(){
    return (
        <div id="logo">
            <img src={logo} id="logo_img" />
        </div>
    )
}
function GetMobileMenu(){
    return (
        <div id="mobile_menu">
            <input type="checkbox" id="menu_toggle" className="menu_toggle" />
            <label htmlFor="menu_toggle" className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </label>
        </div>
    )
}
function getBarLinks(links: navbarLinks){

}