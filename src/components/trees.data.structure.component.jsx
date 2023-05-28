import React from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 25.02 - 
 * TreeDataStructure - Features: 
 * 
 *     --> Developing Tree Data Structure concept.
 * 
 *     --> Placing 'treesdatastructure' asset image
 * 
 * Note: the first assets added to 'graphsData'
 * are for big notation app
 */

const TreeDataStructure = () => {

    const { graphsData } = useAppContext();

    console.log(' graphsData ==>', graphsData)

    const treesdatastructure = graphsData[16].image;

    return(
        <DataStructuresWrapper>

            <h2>Tree Data Structure</h2>

            <p>
                The tree is a data structure in which the parent is related to a 
                son in a <strong> 'unidirectional way' </strong>, as can be seen in the image, it is an 
                inverse tree, where the <strong> top of the tree is the parent and the leaves descend from there </strong>, 
                and there are leaves that in turn are parents of other leaves, as <strong> is the case of '1' and '3' </strong>
            </p>

            <img src={treesdatastructure} alt='trees data structure'/>

            <p>
                Linked List is a kind of tree because each parent has a child related in <strong> 'unidirectional way' </strong>
                and it is <strong> hierarchical </strong>
            </p>
        </DataStructuresWrapper>
    )
}

export default TreeDataStructure;