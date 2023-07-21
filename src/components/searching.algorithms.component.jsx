import React from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";


/**interview-prep-app - version 31.19 - 
 * SearchingAlgorithms - Features: 
 * 
 *     --> Destructuring 'typesbfsdfsalgorithms' from the context.
 * 
 * Note: the first assets added to 'graphsData'
 * are for big notation app
 */

const SearchingAlgorithms = () => {

    const { graphsData } = useAppContext();

    const bfsdfsalgorithms = graphsData[58].image;
    const typesbfsdfsalgorithms = graphsData[59].image;

    return(
        <DataStructuresWrapper>

            <h2> Searching Algorithms</h2>

            <p>
                <strong> Searching and Traversal </strong> is incredible useful, and it is a big part of life 
                because their every day implementation ( searching files in the computer, web search and even 
                more wide searching in big data ), so it is an important topic
            </p>

            <p>
                When it comes about searching, it is refers as <strong> BFS ( Breadth-First Searching ) + DFS ( Depth-First Searching) </strong>
            </p>

            <img src={bfsdfsalgorithms} className="large" alt="bfs dfs algorithms"/>  

            <p>
                and the scope for <strong> BFS ( Breadth-First Searching ) + DFS ( Depth-First Searching) </strong> searching algorithms it divides 
                in the following types:
            </p>        

            <img src={typesbfsdfsalgorithms} className="large" alt="types bfs dfs algorithms"/>
            
        </DataStructuresWrapper>
    )
}

export default SearchingAlgorithms;