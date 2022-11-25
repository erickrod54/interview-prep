import React, { useContext } from "react";
import { array1, array2, array3, array4, boxes, boxes1, boxesletters, everyoneCharacter, graphsData, largeArray, linksData, n, nemo, numbers } from "./data";

/**interview-prep-app - version 10 - context js - 
 * Features: 
 * 
 *     --> Importing and providing 'n' data
 *          for 'array1', array2', array3',
 *         and array4'
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
            n,
            array1,
            array2, 
            array3, 
            array4
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}