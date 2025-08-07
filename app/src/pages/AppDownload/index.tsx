import React from "react";
import Img from "../../public/assets/images/mobile-view.png"
import Title from "~/src/components/Title";
import Input from "~/src/components/Input";
import Button from "~/src/components/button";


export default function AppDownload() {

    return (
        <div className="w-[80%] m-auto bg-[#bdbbbb46] p-[1rem] mt-[1rem]">
            <div className="flex justify-around items-center">
                <div className="">
                    <img src={Img} alt="" className="h-[550px]" />
                </div>
                <div>
                    <Title DivTitleClassName="" TitleClassName="font-bold my-[1.2rem] text-[1.3rem] " titlename="Baixe O Aplicativo DEVTECH Agora" />
                    <p className="text-[1rem] text-[#000] ">Compre com mais rapidez e facilidade com nosso aplicativo.<br />
                        Obtenha um link para<br />
                        baixar o aplicativo no seu celular.</p>
                    <div className="flex my-[1.2rem]">
                        <Input formControl="w-[350px] bg-[#f1f1f1] outline-0 pl-[1.4rem] py-[0.6rem]  bg-[#fff] rounded-tl-[6px] rounded-bl-[6px]  border-[#bdbbbb46] border-1" placeholder="Endereço de E-mail" />
                        <Button btn="text-[#fff] text-[1rem] font-[500] bg-[#fd3d57] py-[0.4rem] px-[1.8rem] rounded-br-[6px] rounded-tr-[6px]" btnName="Inscreva-se" />
                    </div>
                    <div className="">
                        <Button btn="text-[#fff] text-[1rem] font-[500] bg-[#fd3d57] py-[0.4rem] px-[1.8rem] rounded-[6px] mt-[1.2rem] mr-[1rem]" btnName="Google" />
                        <Button btn="text-[#fff] text-[1rem] font-[500] bg-[#fd3d57] py-[0.4rem] px-[1.8rem] rounded-[6px] mt-[1.2rem]" btnName="App Store" />
                    </div>
                </div>
            </div>
        </div>
    )
}