import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";


/**interview-prep-app - version 32.18 - 
 * SearchingAlgorithms - Features: 
 * 
 *     --> Developing 'Bynary Search' concept.
 * 
 * Note: This is the value captured
 */

const SearchingAlgorithms = () => {

    const { graphsData } = useAppContext();

    const [ beastindexofvalue, setBeastindexofvalue ] = useState([]);
    const [ beastfindindexvalue, setBeastfindindexvalue ] = useState(false);
    const [ beastfindvalue, setBeastfindvalue ] = useState([]);
    const [ beastincludesvalue, setBeastincludesvalue ] = useState(false);

    const bfsdfsalgorithms = graphsData[58].image;
    const typesbfsdfsalgorithms = graphsData[59].image;
    const linearsearchprocessbestcase = graphsData[60].image;
    const linearsearchprocessworstcase = graphsData[61].image;

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

    const beastfindHandler = (array) => {
        return(
            setBeastfindvalue(array.find(function(item){ return item === 'Godzilla'})),
            array.find(function(item){ return item === 'Godzilla'})
        )
    } 

    const beastincludesHandler = (array) => {
        const item = array.includes('Godzilla');
        setBeastincludesvalue(item); // Update the state with the result
        return item; // Return the result directly
      };

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

                <button onClick={() => beastfindHandler(beasts)}>Apply <strong> find </strong> on <strong> beasts </strong> array </button>

                <p>
                    {beastfindvalue ? <span> 'it returns the 'item' === <strong> {beastfindvalue} </strong> </span> : null }
                </p>

                <li>
                    <strong> beast.includes('Godzilla') </strong> ( this will return 'true' when finds 'Godzilla')
                </li>

                <button onClick={() => beastincludesHandler(beasts)}>Apply <strong> includes </strong> on <strong> beasts </strong> array </button>

                <p>
                    {beastincludesvalue ? <span> 'it returns the 'true':' <strong> true </strong> </span> : null }
                </p>

                <h3>
                    Is there a better way to find a number ? 
                </h3>

                <p>
                    When it comes to <strong> 'O(n)' </strong> in <strong> 'linear search' </strong> is because in the process the 
                    algorithm has to go throught all the <strong> 'list' </strong> to find the item, but there is <strong> 'Alternatives' </strong>
                    to <strong> 'linear search' </strong> that can handle it a <strong> 'pre-sorting' </strong> to the list the 
                    algorithm job easier, making a complexity of <strong> 'O(n)' </strong> to <strong> 'O(1)' </strong>, because 
                    will find this item easily  
                </p>

                <p>
                    let's say i have a list ( can be numbers, nodes, strings any other type of data ), the list is a list of <strong> numbers </strong>
                    and i have a <strong> target </strong> to find the number <strong> 6 </strong>, as the graph below:
                </p>

            </ul>

                <img src={linearsearchprocessbestcase} className="large" alt="linear search process best case"/>

                <p>
                    Now i have seen the best case scenerio, with a target of <strong> 6 </strong>, but now let's say i have a <strong> target </strong> of 
                    <strong> 9 </strong>, this will result in the <strong> worst case </strong> due to <strong> 9 </strong> is the last item in the entire 
                    list and will increase a time complexity that initially was of  <strong> 'O(1)' </strong> to <strong> 'O(n)' </strong> and it is a 
                    solution that does not fit to handle searching on high amount of data ( as google, amazon, or facebook data ), as the 
                    graph below:  
                </p>

                <img src={linearsearchprocessworstcase} className="large" alt="linear search process worst case"/>

                <h3>
                    Binary Search:
                </h3>
                
                <p>
                    but <strong> what if i have an alternative ? </strong> to make this search more efficient, instead of get to a <strong> linear search </strong>,
                    i can <strong> 'store' </strong> the data in a different data structure, that allows me to <strong> pre - sort </strong> the data before 
                    perform the searching this is by <strong> Binary Search </strong>
                </p>

                <p>
                    let's say i have the following list, and this time i have a target of <strong> 34 </strong>
                </p>
            
        </DataStructuresWrapper>
    )
}

export default SearchingAlgorithms;