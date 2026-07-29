import { ContainerIcones, ContainerMenu } from "./estiloMenuLateral";
import { ImHome } from "react-icons/im";
import { LuNotebookPen } from "react-icons/lu";
import { AiFillExperiment } from "react-icons/ai";
import { ContextoG } from "../../context/contextoGobal";
import { useContext } from "react";


export default function MenuLateral(){

    const {setComponenteAgora, componenteAgora} = useContext(ContextoG);

    return (
        <ContainerMenu>
            <ContainerIcones className={componenteAgora == "home"? "corativa":"corneutra"} onClick={() => {setComponenteAgora("home")}}>
                <ImHome color="#000" size={20}/>
            </ContainerIcones>
            <ContainerIcones className={componenteAgora == "nota"? "corativa":"corneutra"} onClick={() => {setComponenteAgora("nota")}}>
                <LuNotebookPen color="#000" size={20}/>
            </ContainerIcones>
            <ContainerIcones className={componenteAgora == "laboratorio"? "corativa":"corneutra"} onClick={() => {setComponenteAgora("laboratorio")}}>
                <AiFillExperiment color="#000" size={20}/>
            </ContainerIcones>
    

        </ContainerMenu>
    )
}