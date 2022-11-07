import React, { useContext } from "react";
import { everyoneCharacter, largeArray, nemo } from "./data";

/**interview-prep-app - version 1 - context js - 
 * Features: 
 * 
 *     --> Importing and providing 'nemo', 
 *         'everyoneCharacter' and 'largeArray' 
 *          collections to use in 'O notation'.
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
            largeArray            
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}