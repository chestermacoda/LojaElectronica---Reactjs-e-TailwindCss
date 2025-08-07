import React from "react";
import Input from "../Input";
import Button from "../button";


export default function Form(){


    return (
        <div>  
            <Button btn="bg-[#f1f1f1] py-[0.6rem] px-[2.6rem]  rounded-bl-[6px] rounded-tl-[6px]" btnName="All Category" />
            <Input formControl="w-[480px] bg-[#f1f1f1] outline-0 pl-[1.4rem] py-[0.6rem]" placeholder="Search product..." />
            <Button btn="bg-[#000] py-[0.6rem] px-[2.6rem] text-[#fff] rounded-br-[6px] rounded-tr-[6px]" btnName="Search"  />
        </div>
    )
}