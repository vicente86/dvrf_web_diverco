import styled from "styled-components";

export const Tabela = styled.table`
    border-collapse: collapse;
    width: 350px;

    td, th{
        border: 1px solid #444;
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
    }
    .btnL {
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100%;
    }
    
    @media only screen and (max-width: 400px){
        width: 100%;
    }
    
    @media only screen and (max-width: 800px){
        width: 400px;
    }
`; 