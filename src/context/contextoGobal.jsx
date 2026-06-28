import { createContext, useState } from "react"

export const ContextoG = createContext()

export const ContextoProvider = ({children}) => {
    const [componenteAgora, setComponenteAgora] = useState("home");


    return (
        <ContextoG.Provider value={{componenteAgora, setComponenteAgora}}>
            {children}
        </ContextoG.Provider>
    )
}