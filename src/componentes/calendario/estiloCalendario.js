import styled from "styled-components";

export const Tabela = styled.table`
    border-collapse: separate;
    width: 350px;
    border-radius: 10px;
    border: 1px solid #fff;
    box-shadow: -5px 6px 10px 1px #444;
    td, th{
        text-align: center;
        padding: 1px;
    }
    .corAtual {
        border: 1px dashed #fff;
        font-weight: 900;
    }
    .corFeriado {
        background-color:#ee4747;
        font-weight: 900;
        color: #000;
    }
    .btnR {
        position: absolute;
        right: 0px;
        top: 0px;
        height: 100%;
        border-top-right-radius: 8px;
        border: none;
        cursor: pointer;
        background-color: transparent;
    }
    .btnL {
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        border-top-left-radius: 8px;
        border: none;
        cursor: pointer;
        background-color: transparent;
    }

    .semborda {
        border: none;
    }

    @media only screen and (max-width: 500px){
        width: 100%;
    }
    
    @media only screen and (max-width: 800px){
        table {
            width: 500px;
        }
    }
`; 