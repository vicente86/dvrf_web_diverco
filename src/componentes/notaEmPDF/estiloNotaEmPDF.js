import styled from "styled-components";

export const ContainerNotaEmPDF = styled.div`
    width: 98%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;    
`

export const ElementoPDF = styled.div`
    text-align: center;
    color: #000;
    padding: 5px;
    width: 98%;
    display: ${p => p.$mostrar == true? "block":"none"};
    font-size: 11pt;
    .pdftitulo {
        font-size: 14pt;
        font-weight: 900;
        font-style: italic;
    }
    .divul {
        display: flex;
        justify-content: flex-start;
        margin: 0px;
        padding: 0px;
    }
    ul, li {
        list-style: none;
    }

    .pdfparagrafo {
        font-weight: 400;
        text-align: left;
        padding: 5px;
    }
`

export const ElementoRascunho = styled.div`
    color: #fff;
    padding: 5px;
    width: 100%;
    border-radius: 5px;
    .dtitulo {
        text-align: center;
    }
    .dflex {
        display:flex;
        justify-content: center;
        gap: 5px;
        flex-wrap: wrap;
    }
    .btn_gerar_pdf {
        width: 335px;
    }

    @media only screen and (max-width: 400px){
        .btn_gerar_pdf {
            width: auto;
        }
    }

`