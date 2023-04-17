import { Button } from "../Button"
import { Input } from "../Input"
import {GlobalStyle} from "../../global"
import Image from "next/image"
import gitFav from "../../../../public/Gitfav.png"
import { ChangeEvent, ElementType, FormEvent, useState } from "react"
import { ContainerApp } from "../ContainerApp"
import { Table, TableStyle, TdStyle, TrStyle } from "../Table"


const ContainerInputButton = GlobalStyle.styled("form",{
    display:"flex",
    gap:"0.5rem",
    width:"40rem",

})

const ContainerHead=GlobalStyle.styled("header",{
    display:"flex",
    justifyContent:"space-between",
    paddingBottom:"5.4rem",

})

interface usersGithubType{
    avatarUrl:string;
    name:string;
    login:string;
    repositories:string;
    followers:number;
    id:number;
}

export function Head(){

    const [valueInput, setValueInput] = useState("");
    const [usersGithub, setUsersGithub] = useState<usersGithubType[]>([]);
    
    const linkGit=`https://api.github.com/users/${valueInput}`;
    

    function searchUser(){

        fetch(linkGit)
        .then((data)=>data.json())
        .then((jsonData)=>
            setUsersGithub(state=>[...state,{
                avatarUrl:jsonData.avatar_url,
                name: jsonData.name,
                login:jsonData.login,
                repositories:jsonData.public_repos,
                followers: jsonData.followers,
                id:jsonData.id,
            }]))
        .catch(error=>console.log(error))
    }

    function captureValueInput(event:FormEvent){
        event?.preventDefault();
        searchUser();
        setValueInput("");
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>){
        let value= event.target.value;
        setValueInput(value);
        console.log(value)
    }

    function handleRemove(id:number){
        let usersWithoutRemoved = usersGithub.filter((users)=>users.id !== id)
      
        setUsersGithub(usersWithoutRemoved);
    }

    return(
        <ContainerApp>
            <ContainerHead>
                <Image src={gitFav} alt=""/>
                <ContainerInputButton onSubmit={captureValueInput}>
                    <Input placeholder="Digite o Github username que quer favoritar" onChange={handleChange} value={valueInput}/>
                    <Button/>
                </ContainerInputButton>
            </ContainerHead>

            {   usersGithub.length!==0 &&
                <TableStyle>
                    <thead>
                        <TrStyle>
                            <TdStyle>
                                User
                            </TdStyle>
                            <TdStyle>
                                Repositories
                            </TdStyle>
                            <TdStyle>
                                Followers
                            </TdStyle>
                            <TdStyle>
                                Action
                            </TdStyle>

                        </TrStyle>      
                    </thead>
                    <tbody>
                        {
                            usersGithub.map(
                                (users)=> 
                                    <Table 
                                        key={users.id} 
                                        element={users} 
                                        onHandleRemove={handleRemove}
                                    />                       
                            )
                        }
                    </tbody>
                </TableStyle>
            }
           
       </ContainerApp> 

        
    )
}