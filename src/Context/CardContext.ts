import React from "react";
type CardCont ={
    
        setnum:React.Dispatch<React.SetStateAction<number>>
        num:number
    
}

const CardContext = React.createContext<CardCont>({}as CardCont)



export default CardContext