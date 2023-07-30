import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";


/**interview-prep-app - version 32.29 - 
 * SearchingAlgorithms - Features: 
 * 
 *     --> Developing ' 'BFS VS DFS' ( Which one is better and when ?).
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
    const binarysearchtreesectionconcept = graphsData[62].image;
    const linearsearchtobinarysearch = graphsData[63].image;
    const linearsearchtobinarysearchsecondhalf = graphsData[64].image;
    const traversalBFSDFS = graphsData[65].image;
    const BFSworkflow = graphsData[66].image;
    const depthfirstsearch = graphsData[67].image;

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

                <img src={binarysearchtreesectionconcept} className="large" alt="binary search tree section concept"/>

                <p>
                    Binary search tree follows up the <strong> divide and conquer </strong> approach, so to <strong> pre sort </strong> i have to convert 
                    the list in a binary tree, and <strong> divide by half </strong> picking a <strong> pivot </strong> and comparing it with my <strong> target </strong> 
                </p>

                <img src={linearsearchtobinarysearch} className="large" alt="binary search tree section concept"/>

                <p>
                    From this <strong> pivot </strong>, i discard the first half because all these elements are <strong> less than 9 ( pivot )</strong> and 
                    keep comparing looking for the <strong> target </strong> 34 ( number <strong> 9 has been used as pivot </strong>, so after the comparing and division by half
                    is made, the binary search tree algorithm will <strong> pick randomly </strong> another <strong> pivot </strong> )
                </p>

                <img src={linearsearchtobinarysearchsecondhalf} className="large" alt="linear search to binary search second half"/>


                <h3>
                    Traversal, BFS and DFS:
                </h3>


                <p>
                    sometimes i have to do something that is called <strong> traversal </strong>, that simply means to touch every node ( the reasons for this can
                    depend on the specific use case, for example add a color property for each node, or shape for each node, or a graph with no order, and i have to visit 
                    every node )
                </p>

                <p>
                    Decisions in a Binary search tree goes from left to rigth, but sometimes i need to perform operations in the same node, there are two ways to do this
                    by using a <strong> Tree Traversal </strong> ( time complexity of O(n) ), and the second way <strong> Graph Traversal </strong>
                </p>

                <p>
                    Been said after the list has been converted to a binary tree must look something like this:
                </p>

                <img src={traversalBFSDFS} className="large" alt="traversal BFS DFS"/>

                <h3>
                    Breadth First Search
                </h3>

                <p>
                    Breadth First Search or <strong> Graph Traversal </strong> works by going <strong> left to right </strong> traversing level by level over the tree
                    <strong> ( this means that touch every node ) </strong> until the every node and every level is traverse, as the graph below: 
                </p>

                <img src={BFSworkflow} className="large" alt="BFS workflow"/>


                <h3>
                    Depth First Search:
                </h3>

                <p>
                    Depth First Search follows the <strong> branch </strong> of the tree until a <strong> leaf node </strong> is reached, then goes back to the parent 
                    node to check if there is more <strong> leaf nodes </strong>, so keep following each <strong> branch </strong> until traverse the whole tree,
                    ( this algorithm has less memory consumption, because it does not need to keep every <strong> child pointer at each level </strong> ),usually starts 
                    from left branches to right branches. 
                </p>

                <p>
                    As the the graph bellow, applying Depth First Search will  result a set of data as follows <strong>[ 9, 6, 1, 4, 12, 34, 45 ]</strong> 
                </p>

                <img src={traversalBFSDFS} className="large" alt="traversal BFS DFS"/>

                <p>
                    So Depth First Search moves as the graph below:
                </p>

                <p>
                    every time it get deep when leaf node is reach, switch to the next branch, then it switch to the next branch, goes back to the parent node,
                    but does not include the node because the parent node was already added to the list 
                </p>

                <img src={depthfirstsearch} className="large" alt="depth first search"/>

                <p>
                    the Depth First Search resulting is <strong> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] </strong>
                </p>

                <h3>
                    'BFS VS DFS' ( Which one is better and when ?):
                </h3>

                <p>
                    <strong> BFS and DFS </strong>, they are use for the same thing <strong> traversal </strong> ( that is going through  every node ),
                    but for different reasons
                </p>

                <p>
                    <strong> BFS </strong> it is strong finding the <strong> 'shortest path' </strong> and when the <strong> target or targets nodes </strong> are 
                    close to the <strong> root node </strong>, a downside is the memory consumption as the graph below:
                </p>

                <p>
                    <strong> DFS </strong> it is strong to <strong> find 'if a route exists'</strong>, and handle very good memory consumption
                </p>


                <h3>
                    'BFS + DFS' interview questions:
                </h3>

                <p>
                    here is i good <strong> cheat sheet interview questions </strong> that can be used to apply or <strong> BFS or DFS </strong> to some 
                    use cases according to the <strong> concepts criteria </strong>
                </p>

                <ul>

                <li><strong> If you know a solution is not very far from the root of the tree: </strong></li>

                <p>
                    R: <strong> BFS </strong> will appropiate for this solution ( because it starts searching by <strong> closest nodes </strong> to the parent first ) 
                </p>

                <li><strong> If the tree is very deep and the solutions are very rare: </strong></li>

                <p>
                    R: <strong> BFS </strong> will appropiate for this solution, because the tree is very <strong> deep </strong> so DFS will take a long 
                    time to perform by going deep to the <strong> leaf nodes </strong>, and also memory concerns about the space complexity so it does 
                    to major complications due to <strong> time complexity </strong> and <strong> space complexity </strong> with DFS
                </p>

                <li><strong> If the tree is very wide: </strong></li>

                <p>
                    R: The tree is <strong> very wide </strong> but not very deep, a fit for this solution will be <strong> DFS </strong> because can perform 
                    well going deep to throught the <strong> branchs </strong> to the <strong> leaf nodes </strong>, and with <strong> BFS </strong> will take 
                    concerns about memory comsumption because the <strong> wide tree ( the way that BFS will go through the tree from left to right )</strong>
                </p>

                <li><strong> If the solutions are very frequent but located deep in the tree: </strong></li>

                <p>
                    R: DFS will be an accurate solution, because solutions are very frequent and it doesn't say that the tree is deep, but it says
                    that the solutions are in specific located at the deepest level of the tree.
                </p>

                <li><strong> Determining Better a path exists between two nodes: </strong></li>

                <p>
                    R: <strong> DFS </strong>, because this algorithm if design to find if a <strong> path exists </strong>
                </p>

                <li><strong> Finding the shortest path: </strong></li>

                <p>
                    R: <strong> BFS </strong>, because this algorithm if design to find if a <strong> shortest path </strong>
                </p>

                
                
            </ul>

        </DataStructuresWrapper>
    )
}

export default SearchingAlgorithms;