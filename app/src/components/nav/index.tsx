import React from "react";
import { NavLink } from "react-router";


export default function Nav(){


    return(
        <ul className="flex justify-center items-center">
            <li><NavLink to="/" className="px-[1rem] text-[1rem] font-[400]">Home</NavLink></li>
            <li><NavLink to="/" className="px-[1rem] text-[1rem] font-[400]">Shop</NavLink></li>
            <li><NavLink to="/" className="px-[1rem] text-[1rem] font-[400]">Pages</NavLink></li>
            <li><NavLink to="/" className="px-[1rem] text-[1rem] font-[400]">Contact</NavLink></li>
        </ul>
    ) 
}