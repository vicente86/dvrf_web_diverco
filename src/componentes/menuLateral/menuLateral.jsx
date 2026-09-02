import { useContext } from "react";
import { ContextoG } from "../../context/contextoGobal";
import { ContainerIcones, ContainerIconesM, ContainerMenu} from "./estiloMenuLateral";
import { ImHome } from "react-icons/im";
import { LuNotebookPen } from "react-icons/lu";
import { AiFillExperiment } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { BsTrash3Fill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";



export default function MenuLateral(){

    const {setComponenteAgora, componenteAgora} = useContext(ContextoG);

    
    return (
        <ContainerMenu>
            <ContainerIconesM>
                <input type="checkbox" id="menufixocheck" className="checkinputmenu" defaultChecked="false" onClick={(e) => {
                    const icones = document.querySelectorAll(".iconesmlateral");
                    const transla = (window.screen.width <= 400 && e.target.checked == true) ? `translateY(-50px)` :(window.screen.width <= 400 && e.target.checked == false)? `translateY(0px)`:(window.screen.width > 400 && e.target.checked == true)? `translateX(-50px)`:`translateX(0px)`;
                    
                    if(e.target.checked){
                        if(icones?.length > 0){
                            for(let i = 0; i < icones.length; i++){
                                // icones[i].style.visibility = "hidden";
                                icones[i].style.transform = transla;
                            }
                        }
                    }else {
                        if(icones?.length > 0){
                            for(let i = 0; i < icones.length; i++){
                                // icones[i].style.visibility = "visible";
                                icones[i].style.transform = transla;
                            }
                        }
                    }
                    }}/>
                <GiHamburgerMenu color="#000" size={20} />
            </ContainerIconesM>
            <ContainerIcones className={componenteAgora == "home"? "corativa iconesmlateral":"corneutra iconesmlateral"} onClick={() => {setComponenteAgora("home")}}>
                <ImHome color="#000" size={20}/>
            </ContainerIcones>
            <ContainerIcones className={componenteAgora == "nota"? "corativa iconesmlateral":"corneutra iconesmlateral"} onClick={() => {setComponenteAgora("nota")}}>
                <LuNotebookPen color="#000" size={20}/>
            </ContainerIcones>
            <ContainerIcones className={componenteAgora == "laboratorio"? "corativa iconesmlateral":"corneutra iconesmlateral"} onClick={() => {setComponenteAgora("laboratorio")}}>
                <AiFillExperiment color="#000" size={20}/>
            </ContainerIcones>
            <ContainerIcones className={componenteAgora == "calendario"? "corativa iconesmlateral":"corneutra iconesmlateral"} onClick={() => {setComponenteAgora("calendario")}}>
                <IoCalendarOutline color="#000" size={20}/>
            </ContainerIcones>
            <ContainerIcones className={componenteAgora == "lixeira"? "corativa iconesmlateral":"corneutra iconesmlateral"} onClick={() => {setComponenteAgora("lixeira")}}>
                <BsTrash3Fill color="#000" size={20}/>
            </ContainerIcones>
            
        </ContainerMenu>
    )
}