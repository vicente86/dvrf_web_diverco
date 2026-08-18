import { useContext} from "react";
import { Sessao, Titulo1 } from "../../assets/estiloGeral";
import { ContextoG } from "../../context/contextoGobal";
import { MenssagemModal } from "../../componentes/notificacaoMsg/notificacaoMsg";

export default function Lixeira(){

    const {setObjEventosCalendario} = useContext(ContextoG);

    function limpaE(){
        localStorage.removeItem("dvrf-dados-eventos-calendario");
        setObjEventosCalendario({});  
        MenssagemModal("verde", "SUCESSO", "Limpeza concluída com sucesso", 2000);
    }

    return (
        <Sessao>
            <Titulo1>Limpar Dados</Titulo1>
            
            <div>
                <button className="btn_apagar"  onClick={() => {limpaE();}}> <i style={{fontSize: "20pt", paddingRight: "5px"}}>&#x267B;</i> Limpar eventos de calendário</button>
            </div>

        </Sessao>
    )
}