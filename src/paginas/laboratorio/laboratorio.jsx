import { useEffect } from "react"
import {Titulo1, Sessao} from "../../assets/estiloGeral"
import { transicaoPag } from "../../componentes/transicaoPaginas/transicaoPag"

export default function Laboratorio(){

    useEffect(() => {
        transicaoPag()
    }, [])

    return (
        <Sessao>
            <Titulo1>Laboratório</Titulo1>

            

        </Sessao>
    )
}