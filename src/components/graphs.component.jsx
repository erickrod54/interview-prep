import React from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 27.13 - 
 * GraphsStructure - Features: 
 * 
 *     --> Developing 'Graphs Data Structure' concept.
 * 
 *     --> Destructuring 'graphs' from the context.
 * 
 * Note: the first assets added to 'graphsData'
 * are for big notation app
 */

const GraphsStructure = () => {

    const { graphsData } = useAppContext()
    console.log(' graphsData ==> ', graphsData)

    const graphs = graphsData[24].image;

    return(
        <DataStructuresWrapper>
            <h2>Graphs Data Structure</h2>

            <p>
                graphs is a data strcuture base on relationship <strong> ( great data d=structures to represent
                real world relationships )</strong> each graph, is compose by a <strong> 'node' (vertex) </strong>, 
                and <strong> 'edges' </strong> (the union between the nodes - vertex ),  and they 
                have multiple use cases generally when things connect with other things kind like 
                how internet works, or maybe friendships, family trees, networks in the world wide web,
                roads ( for example amazon use it for their recommendation engines, google maps 
                to calculate the shortest path where you want to go the roads, facebook for their social network )
                as the following image i can appreciate how it is compose:
            </p>

            <img src={graphs} className='large' alt="graphs"/>
            
        </DataStructuresWrapper>
    )
}

export default GraphsStructure;