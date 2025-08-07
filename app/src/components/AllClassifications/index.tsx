import React from "react";
import Title from "../Title";
import CardClassification from "../CardClassification";
import logo1 from '../../public/assets/images/1.png'
import logo2 from '../../public/assets/images/2.png'
import logo3 from '../../public/assets/images/3.png'
import IconeStar from "../IconeStar";
import  {FaStar}  from "react-icons/fa";


export default function AllClassifications(){

    return(
        <div className="flex justify-between">
            <div className="">
                <Title DivTitleClassName="" TitleClassName="titlename" titlename="Relogio" />
                <CardClassification  LogoCard={logo1} TitleCard="Apple watch" PriceCard="$200.00 " PriceCardCut="$300.45" IconeCard={<FaStar className="FaStar" />} />
                <CardClassification  LogoCard={logo2} TitleCard="Apple 2 watch" PriceCard="$200.00 " PriceCardCut="$300.45" IconeCard={<FaStar className="FaStar" />} />
                <CardClassification  LogoCard={logo3} TitleCard="Apple 3 watch" PriceCard="$200.00 " PriceCardCut="$300.45" IconeCard={<FaStar className="FaStar" />} />
            </div>
            <div className="">
                <Title DivTitleClassName="" TitleClassName="titlename" titlename="Telemoveis" />
                <CardClassification  LogoCard={logo1} TitleCard="Apple watch" PriceCard="$200.00 " PriceCardCut="$300.45" IconeCard={<FaStar className="FaStar" />} />
                <CardClassification  LogoCard={logo2} TitleCard="Apple 2 watch" PriceCard="$200.00 " PriceCardCut="$300.45" IconeCard={<FaStar className="FaStar" />} />
                <CardClassification  LogoCard={logo3} TitleCard="Apple 3 watch" PriceCard="$200.00 " PriceCardCut="$300.45" IconeCard={<FaStar className="FaStar" />} />
            </div>
            <div className="">
                <Title DivTitleClassName="" TitleClassName="titlename" titlename="Laptops" />
                <CardClassification  LogoCard={logo1} TitleCard="Apple watch" PriceCard="$200.00 " PriceCardCut="$300.45" IconeCard={<FaStar className="FaStar" />} />
                <CardClassification  LogoCard={logo2} TitleCard="Apple 2 watch" PriceCard="$200.00 " PriceCardCut="$300.45" IconeCard={<FaStar className="FaStar" />} />
                <CardClassification  LogoCard={logo3} TitleCard="Apple 3 watch" PriceCard="$200.00 " PriceCardCut="$300.45" IconeCard={<FaStar className="FaStar" />} />
            </div>
            <div className="">
                <Title DivTitleClassName="" TitleClassName="titlename" titlename="Headphones" />
                <CardClassification  LogoCard={logo1} TitleCard="Apple watch" PriceCard="$200.00 " PriceCardCut="$300.45" IconeCard={<FaStar className="FaStar" />} />
                <CardClassification  LogoCard={logo2} TitleCard="Apple 2 watch" PriceCard="$200.00 " PriceCardCut="$300.45" IconeCard={<FaStar className="FaStar" />} />
                <CardClassification  LogoCard={logo3} TitleCard="Apple 3 watch" PriceCard="$200.00 " PriceCardCut="$300.45" IconeCard={<FaStar className="FaStar" />} />
            </div>
        </div>
    )
}