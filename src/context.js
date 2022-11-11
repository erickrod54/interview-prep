import React, { useContext } from "react";
import { everyoneCharacter, graphsData, largeArray, nemo } from "./data";

/**interview-prep-app - version 2 - context js - 
 * Features: 
 * 
 *     --> Importing and providing 'graphsData'.
 * 
 * Note: pending to migrate functionalities from
 * local components
 */

export const AppContext = React.createContext()


export const AppProvider = ({ children }) => {
    
    return(
        <AppContext.Provider value={{
            nemo,
            everyoneCharacter,
            largeArray,
            graphsData           
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}