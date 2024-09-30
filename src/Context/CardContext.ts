import React from "react";
type CardCont ={
    
        ThemeMode : string,
        darkTheme : ()=>void,
        lightTheme : ()=>void 
    
}

const CardContext = React.createContext<CardCont>({
        ThemeMode: "light",
        darkTheme : ():void=>{},
        lightTheme : ():void=>{} 
}as CardCont)



export default CardContext