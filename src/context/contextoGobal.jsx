import { createContext, useState } from "react"

export const ContextoG = createContext()

export const ContextoProvider = ({children}) => {
    const [componenteAgora, setComponenteAgora] = useState("home");
    const [animaSpinner, setAnimaSpinner] = useState(false);


    return (
        <ContextoG.Provider value={{componenteAgora, setComponenteAgora, animaSpinner, setAnimaSpinner}}>
            {children}
        </ContextoG.Provider>
    )
}