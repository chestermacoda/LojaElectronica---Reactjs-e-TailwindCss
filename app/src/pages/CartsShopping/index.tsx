import React from "react"
import { FaCarAlt, FaClock, FaHandHolding } from "react-icons/fa"
import CartShop from "~/src/components/CartShop"

export default function CartShopping(){


    return(
        <div className="w-[80%] m-auto flex justify-evenly p-[3rem]">
            <CartShop ClassCart="mr-[1.4rem]" CartIcone={<FaCarAlt className="text-[3rem] text-[#fd3d57]" />}  CartTitle="Free shipping" CartDescription="Order over $200" />
            <CartShop ClassCart="mr-[1.4rem]" CartIcone={<FaHandHolding className="text-[3rem] text-[#fd3d57]" />} CartTitle="Free shipping" CartDescription="Order over $200" />
            <CartShop ClassCart="mr-[1.4rem]" CartIcone={<FaClock className="text-[3rem] text-[#fd3d57]" />} CartTitle="Free shipping" CartDescription="Order over $200" />
        </div>
    )
}