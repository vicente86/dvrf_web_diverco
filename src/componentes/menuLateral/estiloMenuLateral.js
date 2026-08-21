import styled from "styled-components";

export const ContainerMenu = styled.div`
    width: 30px;
    height: auto;
    position: fixed;
    padding: 10px;
    display: flex;
    flex-direction: column;
    z-index: 20;
    div:hover {
        box-shadow: 1px 1px 5px #9d9d9d;
        transform: rotate(360deg) scale(1.1);
        transition: all 0.5s ease-in-out;
    }
    .corativa {background-color: orange;}
    .corneutra {background-color: none;}
    
    @media only screen and (max-width: 400px){
        width: 100%;
        height: 30px;
        flex-direction: row;
        justify-content: center;
        overflow-x: auto;
        div:nth-child(1n){margin-right: 10px;}
    }
`;

export const ContainerIcones = styled.div`
    background-color: #cecece;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    box-shadow: -2px 2px 5px #000;
    margin-bottom: 10px;
    transition: all 0.5s ease-in-out;
`;