import React, { useContext, useState } from "react";
import { array1, array2, array3, array4, boxes, boxes1, boxesletters, everyoneCharacter, graphsData, largeArray, linksData, n, nemo, numbers } from "./data";

/**interview-prep-app - version 11 - context js - 
 * Features: 
 * 
 *     --> Providing states common,common1,
 *          and feature CommonElement
 * 
 * Note: pending to migrate functionalities from
 * local components
 */

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

    /**--- logic for HowToSolveProblems Component start--*/
    const [ common, setCommon ] = useState(false)
    const [ common1, setCommon1 ] = useState(true)
    
    
    const CommonElement = (arr1, arr2 ) => {
        for (let i = 0; i < arr1.length; i++) {
           for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                   setCommon(!common)
                   return console.log('common element found ==>', true)
                }
            }
            setCommon1(!common1)
            return console.log('not common element found ==>',false)
        }
    }

    /**--- logic for HowToSolveProblems Component end--*/
    
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
            array4,
            common,
            common1,
            CommonElement
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}