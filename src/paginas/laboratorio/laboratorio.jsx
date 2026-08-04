import axios from "axios";
import { Sessao, Titulo1} from "../../assets/estiloGeral"
import { spinner } from "../../componentes/spinner/spinner";


export default function Laboratorio(){

    function rotina(){
        
        
        buscaDatas();
        
        
    }
    
    async function buscaDatas(){
        let arr = [];
        spinner(true);
        for(let i = 1986; i < 2028; i++){
            try {
                const consultaFeriado = await axios.get(`https://brasilapi.com.br/api/feriados/v1/${i}`);
                arr.push({[`${i}`]: consultaFeriado.data});
            } catch (error) {
                console.log('error :>> ', error);
            }
            
        }
        spinner(false);

        console.log('arr :>> ', arr);
    }


    return (
        <Sessao>
            <Titulo1>Laboratório</Titulo1>

            <button onClick={() => {rotina();}}>Iniciar</button>       



        </Sessao>
    )
}