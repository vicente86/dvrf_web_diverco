import { DivFlexRow, DivGrid, Sessao, Titulo1 } from "../../assets/estiloGeral";
import Calendario from "../../componentes/calendario/calendario";



export default function Home(){

    return (
        <Sessao>
            <Titulo1>Início</Titulo1>
            <DivGrid className="grades1">
                <p>
                    Olá, visitante, meu nome é Daniel Vicente, sou graduado em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá. O sistema web aqui desenvolvido surgiu com o intúito de ajudar a por em prática as minhas habilitades como desenvolvedor web e ajudar com algumas funcionalidades de interesse do público que o visite. Seja bem-vindo e aproveite.
                </p>
                <Calendario />
            </DivGrid>

        </Sessao>
    )
}