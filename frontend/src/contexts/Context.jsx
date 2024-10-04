import { createContext, useState } from "react";

export const Context = createContext()

const ActiveContext = ({children})=>{
    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <Context.Provider value={{isActive, setIsActive}}>
                {children}
            </Context.Provider>
        </>
    )
}

export default ActiveContext;