import React, { useContext } from "react";
import { everyoneCharacter, graphsData, largeArray, linksData, nemo } from "./data";

/**interview-prep-app - version 4 - context js - 
 * Features: 
 * 
 *     --> Importing and providing 'linksData'.
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
            graphsData,
            linksData           
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}