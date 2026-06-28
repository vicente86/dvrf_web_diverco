import styled from "styled-components";

export const ContainerMenu = styled.div`
    width: 30px;
    height: auto;
    position: fixed;
    /* box-shadow: 1px 1px 5px #fff; */
    padding: 10px;
    /* background-color:rgba(53, 132, 228, 0.41);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px; */
    
    div:hover {
        background-color: orange;
        transform: rotate(360deg) scale(1.3);
        transition: all 0.5s ease-in-out;
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