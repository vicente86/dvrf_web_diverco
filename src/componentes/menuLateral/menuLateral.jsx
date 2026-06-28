import { ContainerIcones, ContainerMenu } from "./estiloMenuLateral";
import { ImHome } from "react-icons/im";
import { AiFillExperiment } from "react-icons/ai";
import { ContextoG } from "../../context/contextoGobal";
import { useContext } from "react";


export default function MenuLateral(){

    const {setComponenteAgora} = useContext(ContextoG);

    return (
        <ContainerMenu>
            <ContainerIcones onClick={() => {setComponenteAgora("home")}}><ImHome color="#000" size={20}/></ContainerIcones>
            <ContainerIcones onClick={() => {setComponenteAgora("laboratorio")}}><AiFillExperiment color="#000" size={20}/></ContainerIcones>
    

        </ContainerMenu>
    )
}