import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 28.17 - GraphsImplementation  
 * - Features:
 * 
 *     --> Destructuring datastructuresreview from the context
 * 
 *     --> Pending to fix bug in addEdges method.
 * 
 * Note: with addvertexHandler i am going to add all the nodes 
 * to the graph.
 */

const GraphsImplementation = () => {

    const { graphsData } = useAppContext()

    //console.log('graphsData ==>', graphsData)

    const graphimplementation = graphsData[34].image;
    const datastructuresreview = graphsData[35].image;

    const [ addvertex, setAddvertex] = useState();
    const [ addedge, setAddedge ] = useState();

    class Graph {
        constructor(){
            this.numberOfNodes = 0;
            this.adjancentList = {}
        }
        
        addVertex(node){
            /**adjancentList[node] is adding the 'node' as a key
             * to the 'adjancentList' object,  and add it.
             */
            this.adjancentList[node] = [];
            this.numberOfNodes++;
        }

        addEdge(node1, node2){
            //undirected graph

            this.adjancentList[node1].push('connection')
            /**
             * this.adjancentList[node1].push(node2);
            this.adjancentList[node2].push(node1);
             */
        }

        showConnections(){
            const allNodes = Object.keys(this.adjancentList);
            for( let node of allNodes ){
                let nodeConnections = this.adjancentList[node];
                let connections = "";
                let vertex;
                for(vertex of nodeConnections){
                    connections += vertex + " ";
                }    
                console.log(node + "-->" + connections)
            }
        }
    }

    const myGraph = new Graph();

    const addvertexHandler = () => {
        myGraph.addVertex('0')
        myGraph.addVertex('1')
        myGraph.addVertex('2')
        myGraph.addVertex('3')
        myGraph.addVertex('4')
        myGraph.addVertex('5')
        myGraph.addVertex('6')
        console.log('this is myGraph from the console ==>', myGraph)
        setAddvertex(JSON.stringify(myGraph));
    }

    const addedgeHandler = () => {
        myGraph.addEdge('3','1');
        /**
         * myGraph.addEdge('3','4');
        myGraph.addEdge('4','2');
        myGraph.addEdge('4','5');
        myGraph.addEdge('1','2');
        myGraph.addEdge('1','0');
        myGraph.addEdge('0','2');
        myGraph.addEdge('6','5'); */
        /** */
        setAddedge(JSON.stringify(myGraph));
    }


    return(
        <DataStructuresWrapper>
            <h2>Graphs Implementation</h2>

            <p>
                let's implement the following graph:
            </p>

            <img src={graphimplementation} className='large' alt="graphs"/>

            <h3>Note this is an undirected - unweighted graph ( because has no arrows, and no values in the edges )</h3>

            <p>
                so graphs can be on top of any data structure, depending on the use case 
                will be the data structure selection for the graph
            </p>

            <p>
                for this particular case i will use a <strong> 'hash table' </strong> to 
                represent the graph combined with a <strong> 'adjacency list' </strong>
            </p>

            <p> so it comes up the question <strong> why a hash table ?</strong></p>

            <ul>
                <li>
                    because i need to insert every <strong> 'node-vertex' </strong> in order 
                </li>
            </ul>

            <section className="code-block">
                <p>{`class Graph {`}</p>
                <p>{`   constructor(){`}</p>
                <p>{`   this.numberOfNodes = 0;`}</p>
                <p>{`   this.adjancentList = {}`}</p>
                <p>{`                           } ...`}</p>
                <p>Note: removing them cost a lot that's why an object is constructed inside the hash table, and in addition has faster insertion</p>
            </section>

            <h3>Add Vertex method:</h3>

            <p>
                let's say i want to add <strong> '7' </strong> nodes, and the nodes-vertex are <strong> '0','1','2','3','4','5','6' </strong>
            </p>

            <button onClick={addvertexHandler}>Add a Node</button>

            <p>
                the result will be in something like this:
            </p>

            <section className="code-block">
                <p>{addvertex}</p>
            </section>

            <h3>Add Edges method:</h3>

            <p>
                let's say i want the <strong> 'edges / connections' </strong> between the <strong> '7' </strong> nodes, and the nodes-vertex are 
                <strong> '0','1','2','3','4','5','6' </strong>, as it is in the graph representation:
            </p>

            <button onClick={addedgeHandler}>Add a Edges</button>

            <p>
                the result will be in something like this:
            </p>

            <section className="code-block">
                <p>{addedge}</p>
            </section>

            <h3>Upsides of Graphs: </h3>

            <p>
                Is an excelent data structure to represent <strong> 'relationships' </strong>
            </p>

            <h3>Downsides of Graphs: </h3>

            <p>
                Is difficult to <strong> 'scale' </strong> them due to the complexity removing and adding elements
                <strong> ( that is the reason of using hash tables as bottom of the top graph ) </strong>
            </p>

            <h3>Note: there are tools like <a href="https://neo4j.com/blog/why-graph-databases-are-the-future/?utm_source=google&utm_medium=paidsearch&utm_campaign=fy23-Q2_AMER_GDB-Ungated_paidsearch_Architect_beginnerswhygraphtechnologyfuture&utm_content=Ad-1&gclid=Cj0KCQjwqNqkBhDlARIsAFaxvwxFZh_Oj8xhtGccdytPEVDLAfn9GQIpDaOrJilkLmFJIuHsbHCtD5caAqQYEALw_wcB" alt="neo4j" target="_blank" >neo4j (Data base tool) </a> 
            and usually tools like this will be use to build complex data structures to contain our data </h3>

            <h3>Data Structures review:</h3>

            <p>
                This is a small review in the following graph of the data structures that has been cover since 
                the beginning of this chapter:
            </p>

            <img src={datastructuresreview} className='large' alt="datastructures review"/>

        </DataStructuresWrapper>
    )

}

export default GraphsImplementation;