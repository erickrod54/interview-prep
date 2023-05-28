import React from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 25.00 - 
 * TreeDataStructure - Features: 
 * 
 *     --> Destructuring graphsData from the context.
 * 
 * Note: the first assets added to 'graphsData'
 * are for big notation app
 */

const TreeDataStructure = () => {

    const { graphsData } = useAppContext();

    console.log(' graphsData ==>', graphsData)

    return(
        <DataStructuresWrapper>
            <h2>Tree Data Structure</h2>
        </DataStructuresWrapper>
    )
}

export default TreeDataStructure;