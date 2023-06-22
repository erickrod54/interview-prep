import React from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 28.12 - GraphsImplementation  
 * - Features: 
 * 
 *     --> Building 'Graph' template. 
 * 
 *     --> Building 'addvertex' states.
 * 
 * Note: Pending to re structure imports using the index.
 */

const GraphsImplementation = () => {

    const { graphsData } = useAppContext()

    console.log('graphsData ==>', graphsData)

    const graphimplementation = graphsData[34].image;

    const [ addvertex, setAddvertex] = useState()

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

    myGraph.addVertex('0')


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
        </DataStructuresWrapper>
    )

}

export default GraphsImplementation;