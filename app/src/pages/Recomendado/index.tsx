import React from "react";
import CardProdut from "~/src/components/CardProdut";
import Title from "~/src/components/Title";
import Img from "../../public/assets/images/1.png"
import { FaStar } from "react-icons/fa";

export default function Recomendado(){

    return(
        <div className="w-[80%] m-auto">
            <Title DivTitleClassName="py-[1rem]" TitleClassName="font-[500] text-[#000] text-[1.4rem]" titlename="Recomendado Para Voce" />
            <div className="flex flex-wrap">
                <CardProdut imgCard={Img} divClassHot="divClasshot" elementClasshot="elementClassHot" nameHot="Hot" TitleCard="HP Pavilion 15"  PriceCard="45.00" IconesCards={<FaStar />} Quantity="150" />
                <CardProdut imgCard={Img} divClassHot="" elementClasshot="" nameHot="" TitleCard="HP Pavilion 15"  PriceCard="45.00" IconesCards={<FaStar />} Quantity="150" />
                <CardProdut imgCard={Img} divClassHot="divClasshot" elementClasshot="elementClassHot" nameHot="Hot" TitleCard="HP Pavilion 15"  PriceCard="45.00" IconesCards={<FaStar />} Quantity="150" />
                <CardProdut imgCard={Img} divClassHot="" elementClasshot="" nameHot="" TitleCard="HP Pavilion 15"  PriceCard="45.00" IconesCards={<FaStar />} Quantity="150" />
                <CardProdut imgCard={Img} divClassHot="" elementClasshot="" nameHot="" TitleCard="HP Pavilion 15"  PriceCard="45.00" IconesCards={<FaStar />} Quantity="150" />
                <CardProdut imgCard={Img} divClassHot="divClasshot" elementClasshot="elementClassHot" nameHot="Hot" TitleCard="HP Pavilion 15"  PriceCard="45.00" IconesCards={<FaStar />} Quantity="150" />
            </div>
        </div>
    )
}