import { useContext } from "react";
import { ContextoG } from "../../context/contextoGobal";
import { ContainerIcones, ContainerMenu} from "./estiloMenuLateral";
import { ImHome } from "react-icons/im";
import { LuNotebookPen } from "react-icons/lu";
import { AiFillExperiment } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { BsTrash3Fill } from "react-icons/bs";



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
            <ContainerIcones className={componenteAgora == "calendario"? "corativa":"corneutra"} onClick={() => {setComponenteAgora("calendario")}}>
                <IoCalendarOutline color="#000" size={20}/>
            </ContainerIcones>
            <ContainerIcones className={componenteAgora == "lixeira"? "corativa":"corneutra"} onClick={() => {setComponenteAgora("lixeira")}}>
                <BsTrash3Fill color="#000" size={20}/>
            </ContainerIcones>
            
        </ContainerMenu>
    )
}