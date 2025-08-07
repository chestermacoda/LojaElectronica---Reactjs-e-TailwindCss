import React from "react";
import Button from "~/src/components/button";
import { FaAngleDown } from 'react-icons/fa'



export default function ButtonNavbar(){

    return <div className="flex justify-center items-center">
        <Button btn="mx-[1rem] text-[1rem] font-[400] cursor-pointer" btnName="Registar"  />
        <Button btn="mx-[1rem] text-[1rem] font-[400] cursor-pointer flex"  btnName="Linguagem" />
        <Button btn="mx-[1rem] text-[1rem] font-[400] cursor-pointer" btnName="Moeda"  />
        
    </div>
}