import styled from "styled-components";

export const Tabela = styled.table`
    border-collapse: separate;
    width: ${p => p.$t == "none"? "350px":p.$t == "minimo"? "200px":p.$t == "maximo" && "90%"};
    height: ${p => p.$t == "none"? "251px":p.$t == "minimo"? "251px":p.$t == "maximo" && "500px"};
    border-radius: 10px;
    border: 1px solid #fff;
    box-shadow: -5px 6px 10px 1px #444;
    font-size: 14pt;
    
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
        font-size: 20pt;
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
        font-size: 20pt;
    }

    .semborda {
        border: none;
    }

    @media only screen and (max-width: 400px){
        width: 100%;
        font-size: 10pt;
    }
    
    
`; 