import React from "react";
 
export default function CartShop({CartTitle,CartDescription,CartIcone,ClassCart}){

    return(
        <div className="rounded-[4px] border-[#fd3d57] border-[1px] flex justify-between items-center py-[1.2rem] px-[4rem]">
                <div className={ClassCart}>
                    {CartIcone}
                </div>
                <div className="">
                    <h3 className="text-[1.2rem] text-[#000] ">{CartTitle}</h3>
                    <p className="text-[1rem] text-[#bbbbbbee]">{CartDescription}</p>
                </div>
        </div>
    )
}