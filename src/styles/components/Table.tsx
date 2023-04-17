import { ButtonHTMLAttributes, Children, MouseEvent } from "react";
import { GlobalStyle } from "../global";


export const TableStyle = GlobalStyle.styled("table",{
    width:"100%",
    border:"1px solid $tableBody",
    borderSpacing:0,
    //borderCollapse:"collapse",
    borderRadius:"12px",
    overflow:"hidden",

    thead:{
        backgroundColor:"$tableHead",
    }
})

export const TrStyle = GlobalStyle.styled("tr",{
    fontWeight:700,
    fontSize:"1.25rem",
    color:"white",
    lineHeight:1,

   
})

export const TdStyle = GlobalStyle.styled("td",{

    color:"$white",
    borderBottom:"1px solid $tableBody",
    paddingTop:"1rem",
    paddingBottom:"1rem",
    paddingLeft:"2.5rem",

    section:{
        display:"flex",
        alignItems:"center",
        gap:"1rem",
    },

    img:{
        borderRadius:"99%",
        width:"3.5rem",
        height:"3.5rem",
    },

    div:{
        display:"flex",
        flexDirection:"column",
        gap:"0.5rem",
        
        "span:nth-child(2)":{
            fontWeight:400,
        }
    },

    button:{

        color:"$remove",
        backgroundColor:"transparent",
        border:"none",
        fontWeight:700,
        fontSize:"1.25rem",
        lineHeight:1,
        cursor:"pointer",
    }

})

interface TableProps{
   element:{ 
        avatarUrl:string,
        name:string,
        login:string,
        repositories:string,
        followers:number,
        id:number,
   };
   onHandleRemove:(id:number)=>void;

}

export function Table({element, onHandleRemove}:TableProps){

    function handleDelete(){
        onHandleRemove(element.id);
    }
    
    return(  
                <TrStyle>
                    <TdStyle>
                        <section>
                            <img src={element.avatarUrl} alt="" />
                            <div>
                                <span>{element.name}</span>
                                <span>/{element.login}</span>
                            </div>
                        </section>
                    </TdStyle>
                    <TdStyle>
                        {element.repositories}
                    </TdStyle>
                    <TdStyle>
                        {element.followers}
                    </TdStyle>
                    <TdStyle>
                        <button type="button" onClick={handleDelete}>Remove</button>
                    </TdStyle>
                </TrStyle>
       
    );
}