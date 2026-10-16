import { useEffect } from "react"
import { Titulo1, Sessao} from "../../assets/estiloGeral"
import NotaEmPDF from "../../componentes/notaEmPDF/notaEmPDF"
import { transicaoPag } from "../../componentes/transicaoPaginas/transicaoPag"


export default function Nota(){

    useEffect(() => {
        transicaoPag()
    }, [])
    
    return (
        <Sessao>
            <Titulo1>Notas</Titulo1>
            <NotaEmPDF />



        </Sessao>
    )
}