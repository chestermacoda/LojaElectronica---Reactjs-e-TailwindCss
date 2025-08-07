import React from "react";


export default function Title({DivTitleClassName,TitleClassName,titlename}){
    return(
        <div className={DivTitleClassName}>
            <h3 className={TitleClassName}>{titlename}</h3>
        </div>
    )
}