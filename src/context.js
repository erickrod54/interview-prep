import React, { useContext } from "react";
import { array1, array2, array3, array4, boxes, boxes1, boxesletters, everyoneCharacter, graphsData, largeArray, linksData, n, nemo, numbers } from "./data";

/**interview-prep-app - version 13 - context js - 
 * Features: 
 * 
 *     --> fixing 'CommonElement' and 'CommonElement2'
 * 
 * Note: pending to migrate functionalities from
 * local components
 */


export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    
    /**--- logic for HowToSolveProblems Component start--*/
    
    
    
    const CommonElement = (arr1, arr2 ) => {
        /**big o (a * b) because is nested*/
        for(let i=0; i < arr1.length; i++){
            for(let j=0; j < arr2.length; j++){
                if (arr1[i] === arr2[j]) {
                    return console.log('(a * b) - if i get here is because arra3 and array4 have at least one equal ==>',true)
                }
            }
        }
        return console.log('(a * b) - array1 and array2 are not equal and is ==>',false)
    }
    
    const CommonElement2 = (arr3, arr4 ) => {
        /**big o (a + b) because they are comparing separately*/
        
        let map = {};
        
        for(let i=0; i < arr3.length; i++){
            if (!map[arr3[i]]) {
                const item = arr3[i]
                map[item] = true;
            }
        }
        //console.log('this is array 3 ==>', map)
        
        for(let j=0; j < arr4.length; j++){
            if (map[arr4[j]]) {
                return console.log('(a + b) - if i get here is because arra3 and array4 have at least one equal ==>',true)
            }
        }
        return console.log('(a + b) - array1 and array2 are not equal and is ==>',false)
    }
    
    const CommonElement3 = (arr5, arr6 ) => {
        return console.log('(a + b) es6 method - array1 and array2 are not equal and is ==>',arr5.some(item => arr6.includes(item)))
        
    }
    
    const CommonElement4 = (arr7, arr8 ) => {
        return console.log('(a + b) es6 - if i get here is because arra3 and array4 have at least one equal ==>',arr7.some(item => arr8.includes(item)))
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
            CommonElement,
            CommonElement2,
            CommonElement3,
            CommonElement4,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}