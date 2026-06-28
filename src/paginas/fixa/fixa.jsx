import { useContext } from "react";
import { ContainerGeral, SubContainerGeral } from "../../assets/estiloGeral";
import MenuLateral from "../../componentes/menuLateral/menuLateral";
import { ContextoG } from "../../context/contextoGobal";
import Home from "../home/home";



export default function Fixa(){
    const { componenteAgora }= useContext(ContextoG);

    

    return (
        <ContainerGeral>
            <SubContainerGeral>
                <MenuLateral />
                {
                    componenteAgora == "home"?
                        <Home />
                    :
                        <div>
                            Não tem nada aqui
                        </div>
                }              
            </SubContainerGeral>
        </ContainerGeral>
    )
}