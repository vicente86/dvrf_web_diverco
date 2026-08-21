import { createContext, useEffect, useState } from "react"

export const ContextoG = createContext()

export const ContextoProvider = ({children}) => {
    const [componenteAgora, setComponenteAgora] = useState("home");
    const [objEventosCalendario, setObjEventosCalendario] = useState({});
    

    useEffect(() => {
        let dadosLocal = localStorage.getItem("dvrf-dados-eventos-calendario");
        dadosLocal !== null && setObjEventosCalendario(JSON.parse(dadosLocal)); 
    }, [])


    return (
        <ContextoG.Provider value={{componenteAgora, setComponenteAgora, objEventosCalendario, setObjEventosCalendario}}>
            {children}
        </ContextoG.Provider>
    )
}