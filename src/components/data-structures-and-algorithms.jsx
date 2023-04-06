import React, { useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/**interview-prep-app - version 17.00 - DataStructures 
 * - Features: 
 * 
 *   --> Destructuring 'overflowHandler' from the context. 
 * 
 * Note: to generate url's dinamicly
 */


const DataStructures = () => {

    const { mathHandler, mathpow, overflowHandler, overflow } = useAppContext();

    return(
        <Wrapper>
            <h2>DataStructures and algorithms:</h2>
    
            <p>
                a data structure <strong>is a collection of values
                </strong> and algorithhms are a <strong> serie of 
                steps to manipulate that data</strong>
            </p>

            <p>
                we can take things from <strong>data structures</strong>
                and put things on it for example <strong>array and objects
                </strong>are data structures <strong>as block chain</strong>
                every problem has an adecuate <strong>data structures </strong>
                solution for it based on the pillars ( speed, memory, and 
                readable)
            </p>

            <p>
                so taking as a base i have <strong>CPU, RAM and MEMORY</strong>
                in the computers, and those are resources that need the right
                data structure for work effieciently and have a balance of
                use of this recources that are limited ( , storage where the i keep 
                the persistent data )
            </p>

            <ul>
                <li><strong>RAM</strong> - random access
                memory where the variables are located.(faster memeory)</li>
                <li><strong>CPU</strong> - communicates with ram to 
                store data</li>
                <li><strong>MEMORY</strong></li>
            </ul>

            <p>
                note: the CPU has the <strong>CPU CACHE</strong> 
                that is a tiny memmory that stores very recent data used 
            </p>

            <p>
                all of this is important to <strong>data structures</strong> 
                because by knowing this i can make calculations 
                of the limits that i have to store information
            </p>

            <p>
                i have for example the function <strong>
                Math.pow()</strong> that method 'returns the value of a 
                base raised to a power'
            </p>

            <button onClick={mathHandler}>calculate math.pow 6, 100</button>

            <p>{mathpow}</p>

            <p>and now let's do it with 6, 1000</p>

            <button onClick={overflowHandler}>calculate math.pow 6, 1000</button>

            <p>{overflow}</p>

            <p>
                because the number get's too large to store in our ram 
                so overflow the value of the ram in the second one '6, 1000'
            </p>

            <p>
                i can define how i can: 
            </p>
            
            <ul>
                <li><strong>the way interact with the data</strong>
                  (they have some pros and const depending on how they are 
                    arranged, because this affects the computer 
                    processing )</li>
                <li>
                    the type of <strong>actions</strong> for use
                    on the <strong>data structures</strong>.
                </li>
            </ul>

            <p>
                so what kind of <strong>actions</strong> i can 
                perform in a data structure:
            </p>

            <ul>
                <li>insertion (insertion of elements in a data structure )</li>
                <li>deletion ( removing element/s from the data structure)</li>
                <li>traversal ( access each data item exactly once so can be proccesed )</li>
                <li>searching ( find if an item exist in the given collection)</li>
                <li>sorting ( place items in a particular order as needed )</li>
                <li>access ( how i access to this data )</li>
            </ul>

            <p>
                so what are the most common data structures:
            </p>

            <u>
                <li>arrays</li>
                <li>trees</li>
                <li>stacks</li>
                <li>tries</li>
                <li>queues</li>
                <li>graphs</li>
                <li>linked lists</li>
                <li>hash tables</li>
            </u>

            <p>
                and the most common <strong>algorithms</strong>(actions):
            </p>

            <ul>
                  <li>sorting</li>
                  <li>dynamic programming</li>  
                  <li>BFS + DFS (Searching)</li>
                  <li>Recursion</li>
            </ul>

            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;

    ul{
        list-style-type: decimal;
    }

    li{
        margin: 1rem;
    }
`

export default DataStructures;