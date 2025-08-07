import React from "react";
import { NavLink } from "react-router";


export default function ListUl({nameCategory,Icones,ulClass,linkNav}){


    return( <li className={ulClass}><NavLink to="/" className={linkNav} > {Icones} <p>{nameCategory}</p></NavLink></li>
   
    ) 
}