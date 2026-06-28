import { Routes, Route } from "react-router";
import Fixa from "./paginas/fixa/fixa";


export default function Rotas(){

    return (
        <Routes>
            <Route path="/" element={<Fixa />}/>
        </Routes>
    )
}