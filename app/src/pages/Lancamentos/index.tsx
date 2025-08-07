import React from "react";
import AllClassifications from "~/src/components/AllClassifications";
import Title from "~/src/components/Title";


export default function Lancamentos(){
    return (
        <div className="w-[80%] m-auto ">
            <Title DivTitleClassName="py-[1rem]" TitleClassName="font-[500] text-[#000] text-[1.4rem]" titlename ="Melhor Classificação" />
            <AllClassifications />
        </div>
    )
}