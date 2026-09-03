import { useEffect } from "react";
import { Sessao, Titulo1, Titulo2 } from "../../assets/estiloGeral";
import { spinner } from "../../componentes/spinner2/spinner";

export default function Home(){

    useEffect(() => {
        let minhaAnima;
        let cont = 0;
        spinner(true);
        
        const animando = () => {
            minhaAnima = requestAnimationFrame(animando);
            if(cont == 1000){
                cancelAnimationFrame(minhaAnima);
                spinner(false);
            }
            cont ++;
        }
        minhaAnima = requestAnimationFrame(animando);
        
    }, [])


    return (
        <Sessao>
            <Titulo1>Início</Titulo1>
            <Titulo2>Apresentação</Titulo2>
            <p>
                Olá, visitante, meu nome é Daniel Vicente, sou graduado em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá. O sistema web aqui desenvolvido surgiu com o intúito de ajudar a por em prática as minhas habilitades como desenvolvedor web e ajudar com algumas funcionalidades de interesse do público que o visite. Seja bem-vindo e aproveite.
            </p>
            

        </Sessao>
    )
}