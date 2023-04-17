import { GlobalStyle } from "../global";
import star from "../../../public/star.svg"
import Image from "next/image";

const ButtonStyle = GlobalStyle.styled('button',{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap: "0.5rem",
    backgroundColor:'$button',
    border:'none',
    borderRadius:'8rem',
    padding:'0.75rem 2rem',
    color:"$white",
    textTransform: "uppercase",
    fontWeight:700,
    fontSize:"0.875rem",
    transitionDuration:"0.3s",
    cursor:"pointer",

    '&:hover':{
        color: "$button",
        backgroundColor:"$white",   
    },

})

export function Button(){
    return(
        <ButtonStyle type="submit">
            <Image src={star} alt=""/>
            Favoritar
        </ButtonStyle>
    );
}