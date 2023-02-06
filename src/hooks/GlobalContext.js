import React, { createContext } from 'react'


export const GlobalContext = createContext()

export const GlobalContextProvider = (props) => {
    return (
        <GlobalContext.Provider value="This information is from Global context">
            {props.children}
        </GlobalContext.Provider>
    )
}
