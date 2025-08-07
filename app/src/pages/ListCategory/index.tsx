import React from "react";      
import ListUl from "~/src/components/ListUl";
import { FaCompass, FaFemale, FaHeadphones, FaMobile, FaNetworkWired, FaPersonBooth, FaShoePrints, FaWeight } from 'react-icons/fa'
import Button from "~/src/components/button";
import Img from '../../public/assets/images/1.png'


export default function ListCategory() {

    return (
        <div className="w-[80%] m-auto flex">
            <ul className="shadow-[0px_0px_6px_#bdbbbb] w-[180px] mr-[0.3rem]">
                <ListUl ulClass="styleUl" linkNav="a" Icones={<FaShoePrints className="text-[#fd3d57]" />} nameCategory="Shoes" />
                <ListUl ulClass="styleUl" linkNav="a" Icones={<FaPersonBooth className="text-[#fd3d57]" />} nameCategory="Men" />
                <ListUl ulClass="styleUl" linkNav="a" Icones={<FaFemale className="text-[#fd3d57]" />} nameCategory="Women" />
                <ListUl ulClass="styleUl" linkNav="a" Icones={<FaNetworkWired className="text-[#fd3d57]"/>} nameCategory="Electronics" />
                <ListUl ulClass="styleUl" linkNav="a" Icones={<FaHeadphones className="text-[#fd3d57]" />} nameCategory="Headphones" />
                <ListUl ulClass="styleUl" linkNav="a" Icones={<FaWeight className="text-[#fd3d57]" />} nameCategory="Watches" />
                <ListUl ulClass="styleUl" linkNav="a" Icones={<FaCompass className="text-[#fd3d57]" />} nameCategory="Computers" />
                <ListUl ulClass="styleUl" linkNav="a" Icones={<FaMobile className="text-[#fd3d57]" />} nameCategory="Mobile" />
            </ul>
            <div className="w-full h-[350px] bg-[#fd3d5756]">
                <div className="w-full flex justify-around items-center ">
                    <div className="">
                        <h4 className="text-[#000000ad] text-[1rem] font-[500]">Page e Tenha 50% de desconto hoje (3)</h4>
                        <h3 className="text-[#000000bb] text-[2rem] font-bold my-[0.8rem]">iPhone 11 Pro Max</h3>
                        <h4 className=" mb-[1.2rem]  "><span className="text-[#fd3d57] font-bold text-[1.1rem]">$450.00</span> <span className="text-[#000000ad] text-[1rem] line-through">$550.45</span></h4>
                        <Button btn="text-[#fff] bg-[#fd3d57] py-[0.5rem] px-[1.3rem] rounded-[6px]" btnName="SHOP NOW" />
                    </div>
                    <div className="h-[350px] ItemCenter">
                        <img src={Img} alt=""  className="w-full h-[240px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}