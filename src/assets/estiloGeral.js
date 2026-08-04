import styled from "styled-components";

export const ContainerGeral = styled.div`
    width: 100%;
    min-height: 100svh;
    
    .grades1 {grid-template-columns: 1300px 400px;}
    
    @media only screen and (max-width: 1778px) {
        .grades1 {grid-template-columns: 1100px 400px;}

    }
    @media only screen and (max-width: 1608px) {
        .grades1 {grid-template-columns: 900px 400px;}

    }
    @media only screen and (max-width: 1088px) {
        .grades1 {grid-template-columns: 100%;}

    }
    
`;

export const SubContainerGeral = styled.div`
    width: 100%;
    position: relative;
    display: flex;
`;

export const Sessao = styled.div`
    position: relative;
    padding: 5px;
    width: 100%;
    margin-left: 61px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DivFlexRow = styled.div`
    position: relative;
    padding: 5px;
    width: 98%;
    display: flex;
    p {
        overflow: none;
        width: 100%;
        padding: 5px;
        word-break: break-word;
    }
`;

export const DivGrid = styled.div`
    display: grid;
    grid-gap: 10px;
`;



// Títulos
export const Titulo1 = styled.h1`    
    font-size: 22pt;
    padding: 10px 0px;
    text-align: center;
    letter-spacing: 0.05cm;
    font-family: PlaywriteAUTAS-Regular;
`;
export const Titulo2 = styled.h1`    
    font-size: 20pt;
    padding: 10px 0px;
    text-align: center;
    letter-spacing: 0.05cm;
    font-family: PlaywriteAUTAS-Regular;
`;
export const Titulo3 = styled.h1`    
    font-size: 18pt;
    padding: 10px 0px;
    text-align: center;
    letter-spacing: 0.05cm;
    font-family: PlaywriteAUTAS-Regular;
`;
export const Titulo4 = styled.h1`    
    font-size: 16pt;
    padding: 10px 0px;
    text-align: center;
    letter-spacing: 0.05cm;
    font-family: PlaywriteAUTAS-Regular;
`;
// ===================================================
