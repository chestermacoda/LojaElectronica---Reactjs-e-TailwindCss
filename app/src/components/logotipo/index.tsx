import React from "react";



export default function LogoTipo({logo1,logo2}){

    return <div className="flex justify-center items-center mr-[3rem]"><h2 className="text-[1.5rem] font-[600]">{logo1}<span className="text-[#cd2121]">{logo2}</span></h2></div>


}