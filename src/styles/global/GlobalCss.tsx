import { GlobalStyle } from ".";

export const GlobalCss= GlobalStyle.globalCss({
    
    '*':{
    padding:0,
    margin:0,
    boxSizing:"border-box",  
    },

    body:{
        backgroundColor:"$backgroundBody",
    },

    input:{
        backgroundColor: "$backgroundInput",
        fontWeight:400,
        color: "$colorInput",
        fontSize: "1rem",
        fontFamily:"Roboto",
        
    }

})