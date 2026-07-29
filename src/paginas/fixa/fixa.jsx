import { useContext } from "react";
import { ContainerGeral, SubContainerGeral } from "../../assets/estiloGeral";
import MenuLateral from "../../componentes/menuLateral/menuLateral";
import { ContextoG } from "../../context/contextoGobal";
import Home from "../home/home";
import Laboratorio from "../laboratorio/laboratorio";
import Nota from "../nota/nota";



export default function Fixa(){
    const { componenteAgora }= useContext(ContextoG);

    

    return (
        <ContainerGeral>
            <SubContainerGeral>
                <MenuLateral />
                {
                    componenteAgora == "home"?
                        <Home />
                    :componenteAgora == "nota"?
                        <Nota />    
                    :componenteAgora == "laboratorio" &&
                        <Laboratorio />    
                        
                }              
            </SubContainerGeral>
        </ContainerGeral>
    )
}