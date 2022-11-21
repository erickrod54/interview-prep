import React, { useContext } from "react";
import { boxes, boxes1, boxesletters, everyoneCharacter, graphsData, largeArray, linksData, n, nemo, numbers } from "./data";

/**interview-prep-app - version 8 - context js - 
 * Features: 
 * 
 *     --> Importing and providing 'n' data
 *          for 'space complexity'
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
            numbers,
            n 
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}