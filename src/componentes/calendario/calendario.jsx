import { useState, useEffect } from "react";
import { criaArray, diasSemanaPT, nomesMesesPT } from "../utils/utilidades";
import { Tabela } from "./estiloCalendario";
import axios from "axios";
import { MenssagemModal } from "../notificacaoMsg/notificacaoMsg";


export default function Calendario(){

    const [anoS, setAnoS] = useState(new Date().getFullYear());
    const [arrSemanas, setArrSemanas] = useState([]);
    const [objC, setObjC] = useState({});
    const [objF, setObjF] = useState({});
    const dataAtual = new Date().toLocaleDateString().replaceAll("/", "_");
    const [mesMudar, setMesMudar] = useState(`${dataAtual.split("_")[1]}`);

    
    

    let contadorRender = 0
    
    useEffect(() => {
        contadorRender == 0 && tabelasMeses()
        contadorRender = 1
    }, [])


    // Cria um objeto com o número dos meses e dentro de cada mês, 
    // cria objetos com os datas do dia 01 até o último dia do mês em questão
    async function tabelasMeses(ano = null){

    
        let totalDiasAno = 0;
        
        const arrTotalSemanas = [];
        const objGM = {}       
        const objFeriado = {};
        const anoSL = ano !== null? ano : anoS;
        
        try {
            const consultaFeriado = await axios.get(`https://brasilapi.com.br/api/feriados/v1/${anoSL}`);
            
            for (const r of consultaFeriado.data) {
                objFeriado[`${r.date.replaceAll("-", "_")}`] = r;
            }

        } catch (error) {
            
            let msg = "";

            if(error.status == 404){msg = "Servidor não encontrado";}
            else {msg = "Algo deu errado com o servidor"}
        
            MenssagemModal("amarelo", "NADA ENCONTRADO!", msg, 4000);
        }
        
        setObjF(objFeriado);
        
        for(let m = 0; m < 12; m++){
            const d = new Date(anoSL, m+1, 0);
            const diasDoMes = d.getDate();
            totalDiasAno += diasDoMes;
            
            let sm = 1;
            let comparador = 0;
            const objG = {}

            for(let i = 1; i < Number(diasDoMes)+1; i++){
                
                const d2 = new Date(anoSL, m, i);

                if(i == 1){comparador = (7 - d2.getDay()+1);}
                if(comparador == i && d2.getDay()+1 == 1){ sm++;}
                if(i > comparador && d2.getDay()+1 == 1){ sm++;}
                
                let lo = d2.toLocaleDateString()
                let chave = `td_${lo.split("/")[2]}_${lo.split("/")[1]}_l${sm}_${diasSemanaPT[d2.getDay()]}`;

                objG[chave] = {
                    dia: d2.toString(),
                    nDiaSemana: d2.getDay()+1,
                    linha: sm,
                    nDiaMes: Number(d2.toString().split(" ")[2]),
                    data: d2.toLocaleDateString(),
                    dataUS: `${lo.split("/")[2]}-${lo.split("/")[1]}-${lo.split("/")[0]}`
                }
            }
            objGM[`${d.getMonth()+1}`] = objG;
            arrTotalSemanas.push(sm);
        }

        setObjC(objGM);
        setArrSemanas(arrTotalSemanas);
    }

    // Compara datas e retorn true se a data for feriado
    function eFeriado(data1, data2){
        
        if(data1 !== undefined && data2 !== undefined){
            return true
        }
        
        return false
    }

    // retorna um Array de objetos com os feriados nacionais do brasil
    function listaFeriados(mes, obF){
        let listaF = [];
        
        try {    
            for(let i = 0; i < Object.keys(obF).length; i++){
                let chave = Object.keys(obF)[i];
                let el = Object.values(obF)[i];

                chave.split("_")[1].includes(mes) && listaF.push(el);
                
            }
        } catch (error) {
            console.log('error :>> ', error);
        }

        return listaF;
    }

    //
    function trocarMes(direcao = ""){
        
        if(direcao == "avancar"){
            let res = `${Number(mesMudar) + 1}`.padStart(2, "0");
            if(Number(res) > 12){
                res = "01";
                setAnoS(anoS + 1);
                setMesMudar(res);
                tabelasMeses(anoS+1);
                return
            }
            setMesMudar(res);
        }
        if(direcao == "retroceder"){
            let res = `${Number(mesMudar) - 1}`.padStart(2, "0");
            if(Number(res) < 1){
                res = "12";
                setAnoS(anoS - 1);
                setMesMudar(res);
                tabelasMeses(anoS-1);
                return
            }
            setMesMudar(res);
        }
    }
    
    return (
        Object.keys(objC).length > 0 &&
        <Tabela>
            <thead>
                <tr>
                    <th colSpan={7}>
                        <div style={{position: "relative", display: "flex", justifyContent: "center"}}>
                            <button className="btnL" onClick={() => {trocarMes("retroceder")}}>{"<<"}</button>
                            {`${nomesMesesPT[Number(mesMudar)-1]} - ${anoS}`}
                            <button className="btnR" onClick={() => {trocarMes("avancar")}}>{">>"}</button>
                        </div>
                    </th>
                </tr>
                <tr>
                    {
                        ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((el, i) => {
                            return <th key={`dth${i}`}>{el}</th> 
                        })
                    }
                </tr>
            </thead>

            <tbody className="tbody_atual">
                {
                    criaArray(arrSemanas[Number(mesMudar)-1]).map((s, si) => {
                        return (
                            <tr key={`trb_${si}`}>
                                {
                                    criaArray(7).map((ds, dsi) => {
                                        let m = Number(mesMudar);
                                        let da = objC[m][`td_${anoS}_${mesMudar}_l${si+1}_${diasSemanaPT[dsi]}`]?.data == dataAtual.replaceAll("_", "/");
                                        let dc = objC[m][`td_${anoS}_${mesMudar}_l${si+1}_${diasSemanaPT[dsi]}`]?.dataUS?.replaceAll("-", "_");
                                        let dcdf = objF[dc]?.date?.replaceAll("-", "_");
                                        let df = eFeriado(dc, dcdf);

                                        return (
                                            <td key={`td_${dsi}_${diasSemanaPT[dsi]}`} id={`${diasSemanaPT[dsi]}_${mesMudar}_l${si+1}`}>
                                                <div className={da ? `corAtual` : ``} style={{position: "relative"}}>
                                                    {
                                                        objC[m][`td_${anoS}_${mesMudar}_l${si+1}_${diasSemanaPT[dsi]}`]?.nDiaMes
                                                    }
                                                    <svg width="10" height="10" style={{position: "absolute", right: "2px", bottom: "2px"}}>
                                                        <circle cx="5" cy="5" r="4" style={{display: df?"block":"none"}} fill="#ee4747" />
                                                    </svg>
                                                </div>
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={7}>
                        <div>
                            {
                                listaFeriados(mesMudar, objF).map((el, eli) => {
                                    let [ano, mes, dia] = el?.date?.split("-");
                                    return <div key={`feri_${eli}`}> {dia}/{mes}/{ano} - {el?.name} </div>
                                })
                            }
                        </div>
                    </td>
                </tr>
            </tfoot>
        </Tabela>
    )
}

