import React, { useContext } from "react";
import { boxes, boxes1, boxesletters, everyoneCharacter, graphsData, largeArray, linksData, nemo, numbers } from "./data";

/**interview-prep-app - version 6 - context js - 
 * Features: 
 * 
 *     --> Importing and providing 'boxes', 'boxes1', 
 *         'boxesletters' and 'numbers'
 *         data for big o rules.
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
            linksData,
            boxes,
            boxes1,
            boxesletters,
            numbers 
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}