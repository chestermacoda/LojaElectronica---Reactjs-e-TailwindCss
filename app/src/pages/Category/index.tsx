import React from "react";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import Button from "~/src/components/button";
import Form from "~/src/components/Form";
 

 
export default function Category() {


    return (
        <div className="w-full  bg-[#fd3d57] py-[0.8rem] ">
            <div className="w-[80%] m-auto flex justify-between">
                <div className="ItemCenter">
                    <Button btn="bg-[#000] text-[#f1f1f1] px-[2rem] py-[0.6rem] rounded-[6px]" btnName="All Category" />
                </div>
                <div className="ItemCenter">
                    <Form />
                </div>

                <div className="ItemCenter">
                    <div className="relative ItemCenter mr-[1rem]">
                        <Button btn="text-[1.8rem] text-[#fff]" btnName={<FaHeart />} />
                        <span className="absolute -top-1 -right-2 text-white bg-[#000] px-[0.3rem] text-[0.6rem] rounded-[40px]">6</span>
                    </div>
                    <div className="relative ItemCenter mr-[1rem]">
                        <Button btn=" text-[1.8rem]  text-[#fff]" btnName={<FaShoppingCart />} />
                        <span className="absolute -top-1 -right-2 text-white bg-[#000] px-[0.3rem] text-[0.6rem] rounded-[40px]">7</span>
                    </div>
                    <Button btn="text-[1.8rem]  text-[#fff]" btnName={<FaUser />} />
                </div>
            </div>
        </div>
    )
}