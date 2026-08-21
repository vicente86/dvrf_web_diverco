import { Titulo1, Sessao } from "../../assets/estiloGeral";
import Calendario from "../../componentes/calendario/calendario";


export default function PaginaCalendario(){

    
    return (
        <Sessao>
            <Titulo1>Calendário</Titulo1>

            <Calendario tamanho="maximo"/>

        </Sessao>
    )
}