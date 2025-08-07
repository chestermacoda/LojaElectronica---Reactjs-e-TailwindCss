import React from "react";
import Title from "../Title";

export default function CardClassification({LogoCard,TitleCard,PriceCard,IconeCard,PriceCardCut}){
    return(
        <div className="flex mb-[1rem]">
            <div className="w-[80px] h-[80px] bg-[#e1e1e1] flex justify-center items-center rounded-[4px] mr-[1rem]">
                <img src={LogoCard} alt="" className="w-[40px]" />
            </div>
            <div className="">
                <h4 className="font-[600] text-[1rem] mb-[0.2rem]">{TitleCard}</h4>
                <p className="text-[#fd3d57] text-[1rem] mb-[0.2rem] font-[500]">{PriceCard}<span className="text-[0.8rem] text-[#aaa7a7] font-bold line-through">{PriceCardCut}</span></p>
                <p className="text-[#ecef09] flex">{IconeCard} {IconeCard} {IconeCard} {IconeCard} {IconeCard}</p>
            </div>
        </div>
    )
}