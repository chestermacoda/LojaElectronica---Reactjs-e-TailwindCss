import React from "react";
import Button from "../button";
import { FaHeart, FaSearch } from "react-icons/fa";


export default function CardProdut({ TitleCard, imgCard,divClassHot,elementClasshot,nameHot, PriceCard, IconesCards, Quantity }) {

    return (
        <div className="w-[280px] h-[320px] border-[1px] border-[#e1e1e1] rounded-[4px] m-[0.6rem] cardsProdut overflow-hidden   cursor-pointer">
            <div className="w-full flex justify-center items-center bg-[#e1e1e1] py-[1.4rem] relative ">
                <img src={imgCard} alt="" className="w-[100px]" />
                <div className="absolute  hidden  justify-center items-center ButtonSearch bg-[#f1f1f18a] w-full h-full">
                    <Button btn="bg-[#cd2121] p-[1rem] mr-[0.6rem] rounded-[50%] text-[1.1rem] text-[#f1f1f1] cursor-pointer" btnName={<FaSearch />} />
                    <Button btn="bg-[#cd2121] p-[1rem] rounded-[50%] text-[1.1rem] text-[#f1f1f1] cursor-pointer" btnName={<FaHeart />} />
                </div>
                <div className={divClassHot}>
                    <p className={elementClasshot}>{nameHot}</p>
                </div>
            </div>
            <div className="p-[1rem] relative">
                <div className="">
                    <h4 className="font-[600] text-[1.1rem]">{TitleCard}</h4>
                    <p className="text-[#fd3d57] font-[600] ">{PriceCard}</p>
                    <p className="flex items-center text-[#edde0d] my-[0.6rem]">{IconesCards} {IconesCards} {IconesCards} {IconesCards} {IconesCards} <span className="text-[#949292] ml-[1rem]">({Quantity})</span></p>
                </div>
                <div className="buttons">
                    <Button btn="bg-[#cd2121] text-[#f1f1f1] px-[2rem] py-[0.9rem] rounded-[6px] font-[500] cursor-pointer " btnName="ADD TO CART" />
                </div>
            </div>

        </div>
    )
}