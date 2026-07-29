import { useState } from "react";
import { ContainerNotaEmPDF, ElementoPDF, ElementoRascunho } from "./estiloNotaEmPDF";
import html2pdf from "html2pdf.js";

export default function NotaEmPDF(){
    const [tempdf, setTemPdf] = useState(false);

    function criarPdf(){
        const elemento = document.querySelector("#elemento_pdf");
        const d = new Date();
        let opt = {
            margin:       0.2,
            filename:     `nota_${d.getFullYear()+"_"+d.getSeconds()+"_"+d.getTime()}.pdf`,
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2},
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(elemento).save();
    }

    function montarNota(str = ""){
        const el = document.querySelector("#elemento_pdf")

        if(str == "titulo"){
            const titulo = document.createElement("h3");
            titulo.classList.add("pdftitulo");
            titulo.classList.add("cpdf");
            titulo.innerText = "Título editável";
            titulo.setAttribute("contentEditable", "true")
            el.style.backgroundColor = "#fff";
            el.appendChild(titulo)
            setTemPdf(true)
        }
        else if(str == "lista"){
            const divul = document.createElement("div");
            const c = document.createElement("input");
            const lista = document.createElement("li");
            
            c.setAttribute("type", "checkbox");
            divul.classList.add("cpdf");
            divul.classList.add("lista");
            divul.classList.add("divul");
            lista.innerText = "Item editável";
            lista.setAttribute("contentEditable", "true");
            el.style.backgroundColor = "#fff";
            divul.appendChild(c);
            divul.appendChild(lista);
            el.appendChild(divul);
            setTemPdf(true)
        }
        else if(str == "texto"){
            const p = document.createElement("p");
            p.classList.add("pdfparagrafo");
            p.classList.add("cpdf");
            p.innerText = "Conteúdo editável aqui ...";
            p.setAttribute("contentEditable", "true")
            el.style.backgroundColor = "#fff";
            el.appendChild(p)
            setTemPdf(true)
        }
        else if(str == "limpar"){
            const cpdf = document.querySelectorAll(".cpdf");
           
            if(cpdf !== undefined && cpdf !== null){
                if(cpdf.length > 0){
                    cpdf[cpdf.length-1].remove();
                    if(cpdf.length == 0 || cpdf.length == 1){setTemPdf(false)}
                }
                else {setTemPdf(false)}
            }

            
        }
    }


    return(
        <ContainerNotaEmPDF>

            <ElementoRascunho>
                <h2 className="dtitulo">Monte sua nota</h2>
                <div className="dflex">
                    <button onClick={() => {montarNota("titulo")}}>Título +</button>
                    <button onClick={() => {montarNota("lista")}}>Lista +</button>
                    <button onClick={() => {montarNota("texto")}}>Texto +</button>
                    <button onClick={() => {montarNota("limpar")}}>Remover último</button>
                </div>
                {
                    tempdf &&
                        <div className="dflex" style={{margin: "5px"}}>
                            <button style={{width: "335px"}} onClick={() => {criarPdf()}}>Gerar pdf</button>
                        </div>
                }
                

            </ElementoRascunho>

            <ElementoPDF $mostrar={tempdf} id="elemento_pdf"></ElementoPDF>
        </ContainerNotaEmPDF>
    )
}