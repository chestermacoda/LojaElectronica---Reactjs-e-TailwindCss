import React from "react";
import Button from "~/src/components/button";
import LogoTipo from "~/src/components/logotipo";
import Nav from "~/src/components/nav";
import ButtonNavbar from "../ButtonNavbar";


export default function Navbar() {



    return (

        <header className="w-[80%] m-auto flex justify-between py-[0.8rem]">
            <div className="flex ">
                <LogoTipo logo1="DEV" logo2="TECH" />
                <Nav />
            </div>
            <ButtonNavbar />
        </header>

    )
}