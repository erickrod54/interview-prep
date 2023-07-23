import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";


/**interview-prep-app - version 32.08 - 
 * SearchingAlgorithms - Features: 
 * 
 *     --> Building 'beastfindvalue' state.
 * 
 * Note: These state will capture the value for:
 * 
 *      beast.find(function(item){ return item === 'Godzilla'})
 */

const SearchingAlgorithms = () => {

    const { graphsData } = useAppContext();

    const [ beastindexofvalue, setBeastindexofvalue ] = useState([]);
    const [ beastfindindexvalue, setBeastfindindexvalue ] = useState(false);
    const [ beastfindvalue, setBeastfindvalue ] = useState([]);

    const bfsdfsalgorithms = graphsData[58].image;
    const typesbfsdfsalgorithms = graphsData[59].image;

    const beasts = ['Centaur','Godzilla','Mosura','Minotaur','Hydra','Nessie']

    const beastindexofHandler = (array) => {
        return(
            setBeastindexofvalue(array.indexOf('Godzilla')),
            array.indexOf('Godzilla')
        )
    }

    const beastfindindexHandler = (array) => {
        return(
            array.findIndex(function(item){ return item === 'Godzilla'}),
            setBeastfindindexvalue(array.findIndex(function(item){ return item === 'Godzilla'}))
        )
    } 

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

            <h3>
                Linear Search:
            </h3>

            <p>
                Linear search or <strong> 'Sequenquial Search' </strong> works looking for a item in a list by setting a <strong> Target value </strong>
                ( usually in a condition ), and <strong> sequenquially checks the list </strong> looking for the <strong> target </strong> value until 
                the match is found, or until all the elements has been searched. ( the time complexity can vary if it is found the <strong> target </strong>
                at the very begining of the list is O(1), and if i have to go through the whole list O(n))
            </p>

            <p>
                And there are multiple ways to perform the search ( these implementations are in JavaScript ), let's say i have a target of <strong> 'Godzilla' </strong>
                in a <strong> 'beast'</strong> array, naming some of the ways i can perform the search can be:
            </p>

            <ul>
                <li>
                    <strong> beast.indexOf('Godzilla')</strong> ( this will return the index where 'Godzilla is located ')
                </li>

                <button onClick={() => beastindexofHandler(beasts)}>Apply <strong> indexOf </strong> on <strong> beasts </strong> array</button>

                <p>
                    {beastindexofvalue ? <span> 'it returns the index:' <strong> {beastindexofvalue} </strong> </span> : null }
                </p>

                <li>
                    <strong>{` beasts.findIndex(function(item){ return item === 'Godzilla'})`}</strong> ( this will return 'true' when finds 'Godzilla')
                </li>

                <button onClick={() => beastfindindexHandler(beasts)}>Apply <strong> findIndex </strong> on <strong> beasts </strong> array</button>
                
                <p>
                    {beastfindindexvalue ?  <span> 'it returns the 'true':' <strong> true </strong> </span> : null }
                </p>

                <li>
                    <strong>{` beast.find(function(item){ return item === 'Godzilla'})`}</strong> ( this time will return the actual target 'Godzilla')
                </li>

                <li>
                    <strong> beast.includes('Godzilla') </strong> ( this will return 'true' when finds 'Godzilla')
                </li>

            </ul>
            
        </DataStructuresWrapper>
    )
}

export default SearchingAlgorithms;