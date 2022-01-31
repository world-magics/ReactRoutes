
import React from "react";
import './Navbar.css'
import myLogo from "./img/logo192.png"
const Navbar=()=>{
    const design=(
        <ul>
            <li className="logos"><a href="#">
                <img src={myLogo} alt="Logo" />
                </a>
            </li>
            <li><a href="/">Home</a></li>
            <li><a href="/images">Images</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/about-us">About us</a></li>
            <li><a href="/connect">Connect</a></li>
        </ul>
    )
return design;
}

export default Navbar