import React from "react";
import Img from "../../public/assets/images/12.png"
import Title from "~/src/components/Title";
import Button from "~/src/components/button";
export default function Publicidade(){

    return(
        <div className="w-[80%] m-auto p-[0.4rem] my-[2rem]">
            <div className="flex justify-between items-center border-1 border-[#bdbbbb7e] rounded-[6px] ">
                <div className="ml-[2rem]">
                    <Title DivTitleClassName="" TitleClassName="text-[1rem] text-[#333]" titlename="ONLINE EXCLUSIVE"  />
                    <Title DivTitleClassName="" TitleClassName="text-[#fd3d57] text-[3rem] font-bold" titlename="15% OFF"  />
                    <Title DivTitleClassName="" TitleClassName="font-bold text-[#000] text-[1.2rem] -mb-[0.4rem]" titlename="APPLE WATCH"  />
                    <Title DivTitleClassName="" TitleClassName="font-bold text-[#000] text-[1.2rem]" titlename="SMART WATCH READY"  />
                    <Button btn="text-[#fff] bg-[#fd3d57] py-[0.4rem] px-[1.8rem] rounded-[6px] mt-[1.2rem]" btnName="Shop Now" />
                </div>
                <div className="ItemCenter">
                    <img src={Img} alt="" />
                </div>
            </div>
        </div>
    )
}