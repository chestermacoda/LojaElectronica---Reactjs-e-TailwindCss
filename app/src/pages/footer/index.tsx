import React from "react";
import { FaLocationArrow, FaPhone, FaSearchLocation, FaVoicemail } from "react-icons/fa";
import Button from "~/src/components/button";
import Input from "~/src/components/Input";
import ListUl from "~/src/components/ListUl";
import LogoTipo from "~/src/components/logotipo";
import Title from "~/src/components/Title";

export default function Footer(){

    return(
        <div className="w-full bg-[#bdbbbb46] py-[1rem] mt-[2.2rem]">
            <div className="w-[80%] m-auto">
                <div className="flex justify-between ">
                    <div className="">
                        <div className="flex mb-[0.8rem]"><h2 className="text-[1.5rem] font-[600]">DEV<span className="text-[#cd2121]">TECH</span></h2></div>
                        <p className="text-[1rem] text-[#353333]">Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Cumque ad nobis at nam similique<br/> dolor deserunt sequi maiores provident saepe </p>
                        <Title DivTitleClassName="" TitleClassName="titleClass" titlename="BOLETIM INFORMATIVO" />
                        <div className="flex">
                            <Input formControl="w-[250px] bg-[#f1f1f1] outline-0 pl-[1.4rem] py-[0.6rem]  bg-[#fff] rounded-tl-[6px] rounded-bl-[6px]  border-[#bdbbbb46] border-1" placeholder="Endereço de E-mail" />
                            <Button btn="text-[#fff] text-[1rem] font-[500] bg-[#fd3d57] py-[0.4rem] px-[1.8rem] rounded-br-[6px] rounded-tr-[6px]" btnName="Inscreva-se" />
                        </div>
                    </div>
                    <div className="">
                        <ul>
                            <li><h3 className="titleClass">MINHA CONTA</h3></li>
                            <ListUl nameCategory="Pedidos" Icones=""  ulClass="ulClass" linkNav="classLink" />
                            <ListUl nameCategory="Lista de Desejos" Icones=""  ulClass="ulClass" linkNav="classLink" />
                            <ListUl nameCategory="Acompanhar Pedido" Icones=""  ulClass="ulClass" linkNav="classLink" />
                            <ListUl nameCategory="Gerenciar Conta" Icones=""  ulClass="ulClass" linkNav="classLink" />
                            <ListUl nameCategory="Devolução do Pedido" Icones=""  ulClass="ulClass" linkNav="classLink" />
                        </ul>
                    </div>
                    <div className="">
                        <ul>
                            <li><h3 className="titleClass">INFORMAÇÃO</h3></li>
                            <ListUl nameCategory="Sobre nós" Icones=""  ulClass="ulClass" linkNav="classLink" />
                            <ListUl nameCategory="Politica de Devolução" Icones=""  ulClass="ulClass" linkNav="classLink" />
                            <ListUl nameCategory="Termos e condições" Icones=""  ulClass="ulClass" linkNav="" />
                            <ListUl nameCategory="Politica de Privacidade" Icones=""  ulClass="ulClass" linkNav="classLink" />
                            <ListUl nameCategory="Perguntas frequentes" Icones=""  ulClass="ulClass" linkNav="classLink" />
                        </ul>
                    </div>
                    <div className="">
                        <ul>
                            <li><h3 className="titleClass">CONTACTO</h3></li>
                            <ListUl nameCategory="Av: 7895 Cidade da Matola, N 24" Icones={<FaLocationArrow />}  ulClass="ulClass" linkNav="classLink" />
                            <ListUl nameCategory="+258 848 107 874" Icones={<FaPhone className="" />}  ulClass="ulClass" linkNav="classLink" />
                            <ListUl nameCategory="chestermacoda@gmail.com" Icones={<FaVoicemail />}  ulClass="ulClass" linkNav="classLink" />
         
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}



