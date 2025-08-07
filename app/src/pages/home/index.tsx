import React from "react";
import Navbar from "../navbar";
import Category from "../Category";
import ListCategory from "../ListCategory";
import CartShopping from "../CartsShopping";
import Lancamentos from "../Lancamentos";
import NovoLancamento from "../NovoLancamentos";
import Publicidade from "../Publicidade";
import Recomendado from "../Recomendado";
import AppDownload from "../AppDownload";
import Footer from "../footer";


export default function Home(){


    return(
        <div className="w-full">
            <Navbar />
            <Category />
            <ListCategory />
            <CartShopping />
            <Lancamentos />
            <NovoLancamento />
            <Publicidade />
            <Recomendado />
            <AppDownload />
            <Footer />
        </div>

    )
}