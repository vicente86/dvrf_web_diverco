import { useState, useEffect, useContext } from "react";
import { criaArray, diasSemanaPT, nomesMesesPT } from "../utils/utilidades";
import { Tabela } from "./estiloCalendario";
import axios from "axios";
import { MenssagemModal } from "../notificacaoMsg/notificacaoMsg";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import { ContextoG } from "../../context/contextoGobal";
import {spinner} from "../spinner/spinner";


export default function Calendario({tamanho = "none"}){

    const [anoS, setAnoS] = useState(new Date().getFullYear());
    const [arrSemanas, setArrSemanas] = useState([]);
    const [objC, setObjC] = useState({});
    const [objF, setObjF] = useState({});
    const dataAtual = new Date().toLocaleDateString().replaceAll("/", "_");
    const [mesMudar, setMesMudar] = useState(`${dataAtual.split("_")[1]}`);
    const {objEventosCalendario, setObjEventosCalendario} = useContext(ContextoG);
    const [carrega, setCarrega] = useState(false);

    let contadorRender = 0;
    
    useEffect(() => {
        contadorRender == 0 && tabelasMeses();
        contadorRender = 1;
    }, [])

    // Cria um objeto com o número dos meses e dentro de cada mês, 
    // cria objetos com os datas do dia 01 até o último dia do mês em questão
    async function tabelasMeses(ano = null){

        spinner(true);
    
        let totalDiasAno = 0;
        
        const arrTotalSemanas = [];
        const objGM = {}       
        const objFN = {};
        const anoSL = ano !== null? ano : anoS;
        
        try {
            const consultaFeriado = await axios.get(`https://brasilapi.com.br/api/feriados/v1/${anoSL}`);
            
            for (const r of consultaFeriado.data) {
                objFN[`${r.date.replaceAll("-", "_")}`] = r;
            }        

        } catch (error) {
            
            let msg = "";

            if(error.status == 404){msg = "Servidor não encontrado";}
            else {msg = "Algo deu errado com o servidor"}
        
            MenssagemModal("amarelo", "NADA ENCONTRADO!", msg, 4000);
        }
        
        setObjF(objFN);
        
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

        spinner(false);
    }

    // Compara datas e retorn true se a data for feriado
    function eFeriado(data1, data2){
        
        if(data1 !== undefined && data2 !== undefined){
            return true
        }
        
        return false
    }

    //
    function eEvento(data){
        
        if(data !== undefined){
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

    function listaEventos(mes, obe){
        let listaE = [];

        try{
            if(obe !== undefined){
                if(obe[`${mes}`] !== undefined){
                    for(let i = 0; i< Object.keys(obe[`${mes}`]).length; i++){
                        let data = Object.keys(obe[`${mes}`])[i];
                        let obv = Object.values(obe[`${mes}`])[i];
                        obv["data"] = data;

                        listaE.push(obv);
                    }
                }
            }
        }catch(error){
            console.log('error :>> ', error);
        }


        return listaE;
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


    // Cria o modal para registrar e salvar/atualizar um evento
    function criarModal(el, dc){
        const elBody = document.querySelector("body");
        if(dc !== undefined){
            
            const containerModal = document.createElement("div");
            const modal = document.createElement("div");
            const div_fechar = document.createElement("div");
            const btn_fechar = document.createElement("div");
            const container_conteudo_modal = document.createElement("div");
            const entrada_titulo = document.createElement("input");
            const entrada_conteudo = document.createElement("textarea");
            const div_botoes = document.createElement("div");
            const btn_salvar = document.createElement("button");
            const btn_cancelar = document.createElement("button");
            
        
            btn_salvar.classList.add("btn_salvar_modal_calendario");
            btn_cancelar.classList.add("btn_cancelar_modal_calendario");
            btn_fechar.classList.add("btn_fechar_modal_calendario");
            modal.classList.add("modal_calendario_evento");
            elBody.style.position = "relative";
        
            
            btn_fechar.classList.add("btn_fechar_modal_calendario");
            btn_fechar.innerHTML = "&#10007;";
            containerModal.classList.add("container_modal_calendario_evento");
            div_fechar.classList.add("fechar_modal_calendario");
            div_fechar.innerHTML = `Adicionar/atualizar eventos ${dc.split("_")[2]}/${dc.split("_")[1]}/${dc.split("_")[0]}`;
            entrada_titulo.setAttribute("placeholder", "Título");
            entrada_titulo.setAttribute("id", `titulo_${dc}`);
            entrada_titulo.setAttribute("type", "text");
            entrada_conteudo.setAttribute("placeholder", "Descrição");
            entrada_conteudo.setAttribute("id", `conteudo_${dc}`);
            div_botoes.classList.add("btns_modal");
            btn_salvar.innerHTML = `Salvar`;
            btn_cancelar.innerHTML = `Cancelar`;

            entrada_titulo.classList.add("titulo_evento");
            entrada_conteudo.classList.add("conteudo_evento");
            
            div_botoes.style.cssText = "widht: 100%; display: flex; justify-content: center; align-items: center; gap: 5px;";
            
            container_conteudo_modal.classList.add("container_modal_conteudo");
            
            div_fechar.appendChild(btn_fechar);
            containerModal.appendChild(modal);
            modal.appendChild(div_fechar);
            modal.appendChild(container_conteudo_modal);
            container_conteudo_modal.appendChild(entrada_titulo);
            container_conteudo_modal.appendChild(entrada_conteudo);
            container_conteudo_modal.appendChild(div_botoes);
            div_botoes.appendChild(btn_salvar);
            div_botoes.appendChild(btn_cancelar);
            elBody.appendChild(containerModal);
            
            btn_fechar.addEventListener("click", () => {fecharModal()});
            btn_salvar.addEventListener("click", () => {salvarEventoCalendario();});
            btn_cancelar.addEventListener("click", () => {fecharModal();});
        }
    }

    //
    function salvarEventoCalendario(){
        const containerModal = document.querySelector(".container_modal_calendario_evento");
        const titulo_evento = document.querySelector(".titulo_evento");
        const conteudo_evento = document.querySelector(".conteudo_evento");

        let objE = {}; // engloba ano, mês e o evanto do dia
        let objD = {}; // evento do dia
        let objM = {}; // engloba mês e o evento do dia
        
        if(containerModal !== undefined || null){
            const chave = `${titulo_evento?.id?.split("_")[1]}_${titulo_evento?.id?.split("_")[2]}_${titulo_evento?.id?.split("_")[3]}`;
            objD[`${chave}`] = {titulo: titulo_evento?.value, conteudo: conteudo_evento?.value, cor: "#176ed2"}
            objM[`${titulo_evento?.id?.split("_")[2]}`] = objD;
            objE = objEventosCalendario;

            if(Object.keys(objEventosCalendario).length == 0 ){
                objE[`${anoS}`] = objM;
                setObjEventosCalendario(objE);
                MenssagemModal("verde", "SUCESSO", "Salvo com sucesso", 4000);
            }else {
                
                
                if(objE[`${anoS}`] !== undefined){
                    if(Object.keys(objE[`${anoS}`]).length > 0){
                        if(objE[`${anoS}`][`${titulo_evento.id.split("_")[2]}`] === undefined){
                            objE[`${anoS}`][`${titulo_evento.id.split("_")[2]}`] = objD; 
                        }else {
                            if(Object.keys(objE[`${anoS}`][`${titulo_evento.id.split("_")[2]}`]).length > 0){
                                objE[`${anoS}`][`${titulo_evento.id.split("_")[2]}`][`${chave}`] = {titulo: titulo_evento.value, conteudo: conteudo_evento.value, cor: "#176ed2"};
                            }
                            setObjEventosCalendario(objE);
                            MenssagemModal("verde", "SUCESSO", "Salvo com sucesso", 4000);
                        }
                    }

                }else {
                    objE[`${anoS}`] = objM;
                    setObjEventosCalendario(objE);
                    MenssagemModal("verde", "SUCESSO", "Salvo com sucesso", 4000);
                }

            }

            localStorage.setItem("dvrf-dados-eventos-calendario", JSON.stringify(objE));

            containerModal.remove();
            setCarrega(!carrega);
        }

    }


    // Fecha o modal removendo o elemento do DOM
    function fecharModal(){
        const containerModal = document.querySelector(".container_modal_calendario_evento");

        if(containerModal !== undefined || null){
            containerModal.remove();
        }
    }

    
      

    
    return (
        Object.keys(objC).length > 0 &&
        <>
            <Tabela $t={tamanho}>
                <thead>
                    <tr>
                        <th colSpan={7}>
                            <div style={{position: "relative", display: "flex", justifyContent: "center", paddingBottom: "15px"}}>
                                <button className="btnL" onClick={() => {trocarMes("retroceder")}}><SlArrowLeftCircle /></button>
                                {`${nomesMesesPT[Number(mesMudar)-1]} - ${anoS}`}
                                <button className="btnR" onClick={() => {trocarMes("avancar")}}><SlArrowRightCircle /></button>
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
                                            let dc = objC[m][`td_${anoS}_${mesMudar}_l${si+1}_${diasSemanaPT[dsi]}`]?.dataUS?.replaceAll("-", "_"); // data OU undefined
                                            let dcdf = objF[dc]?.date?.replaceAll("-", "_"); // data do feriado OU undefined
                                            let df = eFeriado(dc, dcdf);
                                            let dm = objC[m][`td_${anoS}_${mesMudar}_l${si+1}_${diasSemanaPT[dsi]}`]?.nDiaMes; // dia do mês OU undefined
                                            let dcde = undefined;
                                            
                                            if(objEventosCalendario[`${anoS}`] !== undefined){
                                                if(objEventosCalendario[`${anoS}`][`${mesMudar}`] !== undefined){
                                                    dcde = objEventosCalendario[`${anoS}`][`${mesMudar}`][`${dc}`];
                                                }
                                            }
                                            
                                            let de = eEvento(dcde);

                                            return (
                                                <td key={`td_${dsi}_${diasSemanaPT[dsi]}`} id={`${diasSemanaPT[dsi]}_${mesMudar}_l${si+1}`}
                                                data-datadia={dc} onClick={(elemento) => {criarModal(elemento, dc);}}>
                                                    <div className={da ? `corAtual` : ``} name={`${dm !== undefined && `${dc}`}`} 
                                                    style={{position: "relative", cursor: "pointer"}}>
                                                        { dm !== undefined && dm }
                                                        
                                                        {
                                                            df &&
                                                                <svg width="13" height="13" style={{position: "absolute", right: "2px", bottom: "2px"}}>
                                                                    <circle cx="6" cy="6" r="5" style={{display: df?"block":"none"}} stroke="#fff" fill="#ee4747" strokeWidth={2}/>
                                                                </svg>
                                                        }
                                                        {
                                                            de &&
                                                                <svg width="13" height="13" style={{position: "absolute", right: "2px", bottom: "2px"}}>
                                                                    <circle cx="6" cy="6" r="5" style={{display: de?"block":"none"}} stroke="#fff" fill="#176ed2" strokeWidth={2}/>
                                                                </svg>
                                                        }
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
            </Tabela>

            {
                (objEventosCalendario[`${anoS}`] !== undefined || listaFeriados(mesMudar, objF).length > 0) &&
                (listaEventos(mesMudar, objEventosCalendario[`${anoS}`]).length > 0 || listaFeriados(mesMudar, objF).length > 0) &&
                <Tabela $t={tamanho} style={{height: 'auto', marginTop: '10px'}}>
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Data</th>
                            <th>Evento</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaFeriados(mesMudar, objF).map((el, eli) => {
                                let [ano, mes, dia] = el?.date?.split("-");
                                
                                return (
                                    <tr key={`feriados_${eli}`}>
                                        <td>Feriado</td>
                                        <td>{`${dia}/${mes}/${ano}`}</td>
                                        <td>{el?.name}</td>
                                        <td>Feriado {el?.type?.replace("national", "nacional")}</td>
                                    </tr>
                                )
                            })
                        }
                        {
                            listaEventos(mesMudar, objEventosCalendario[`${anoS}`]).map((el, eli) => {
                                let [ano, mes, dia] = el?.data?.split("_");
                                let ob = objEventosCalendario[`${anoS}`][`${mesMudar}`][`${el?.data}`];

                                return (
                                    <tr key={`eventos_${eli}`}>
                                        <td>Evento</td>
                                        <td>{`${dia}/${mes}/${ano}`}</td>
                                        <td>{ob?.titulo}</td>
                                        <td>{ob?.conteudo}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Tabela>
                
                
            }
        </>


    )
}