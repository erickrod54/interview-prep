import React from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 28.02 - 
 * GraphsStructure - Features: 
 * 
 *     --> Developing 'Graphs Data Structure' concept.
 * 
 *     --> Destructuring 'howtoimplementgraphs' assets.
 * 
 *     --> Developing graph tree way implementation.
 * 
 * Note: the first assets added to 'graphsData'
 * are for big notation app
 */

const GraphsStructure = () => {

    const { graphsData } = useAppContext()
    console.log(' graphsData ==> ', graphsData)

    const graphs = graphsData[24].image;
    const multiplegraphs = graphsData[25].image;
    const graphtypes = graphsData[26].image;
    const weightunweightgraphs = graphsData[27].image;
    const cyclicacyclicgraph = graphsData[28].image;
    const howtoimplementgraphs = graphsData[29].image;

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

            <p>
                and there can be multiple graphs as shown in the following image:
            </p>

            <img src={multiplegraphs} className='large' alt="multiple graphs"/>
            
            <h3>Types of Graphs:</h3>

            <p>
                there are two types of graphs: 
            </p>

            <ul>
                <li>
                    <strong> Directed </strong>
                </li>
                <li>
                    <strong> Undirected </strong>
                </li>
            </ul>

            <p>
                as the image as follows:
            </p>

            <img src={graphtypes} className="large" alt="graph types"/>
 
            <p>
                A <strong> Directed </strong> graph refers to a <strong> non bidirectional flow </strong>
                a good use case for this graph is to describe traffic flow, or twitter because when i  
                follow an account this account does not necessary follows me ( because goes in one direction )
                and i can think as one way street
            </p>

            <p>
                A <strong> Undirected </strong> graph refers to a <strong> bidirectional flow </strong>
                a good use case is when i think about facebook, when i am connected to a friend that 
                friend is also connected to me ( so is in both directions ) i can think as one highway 
                ( where i can i have traffic flow back and forth ) 
            </p>

             <p>
                    Another way to describe graphs is through <strong> weighted </strong> and <strong> unweighted </strong>,
                    where values can be applied to multiple aspects of a graph <strong> ( values are not limited to the nodes ) </strong>,
                    like the example below where information is placed also in the <strong> 'edges' </strong>,
                    this could be a use case for visit sites that most you like, or google paths to weight the 
                    shrotest path
             </p>

             <img src={weightunweightgraphs} className="large" alt="weight unweight graphs"/>
 
             <p>
                    And another way to describe graphs is through <strong> cyclic </strong> and <strong> acyclic </strong>,
                    <strong> cyclic </strong> is when every node-vertex is connected with each ohter and is it posible to go 
                    back to the start point node-vertex, and <strong> acyclic </strong> is when not every node-vertex is connected 
                    with each ohter and is it not posible to go back to the start point node-vertex 
             </p>       

             <img src={cyclicacyclicgraph} className="large" alt="cyclicacyclicgraph"/>        

             <h3>How to implement graphs ? :</h3>

             <p>
                 There are three ways to start to think about building-implementing a  graphs
             </p>

             <ul>
                <li>
                    <strong> Edge list </strong>
                </li>
                <li>
                    <strong> Adjacent List </strong> 
                </li>
                <li>
                    <strong> Adjacent Matrix </strong>
                </li>
             </ul>

             <h3>Edge list</h3>

             <p>

             </p>

             <h3>Graph implementation: </h3>

             <img src={howtoimplementgraphs} className='large' alt="how to implementgraphs"/>
            
        </DataStructuresWrapper>
    )
}

export default GraphsStructure;