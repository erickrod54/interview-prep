import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/**interview-prep-app - version 17.01 -
 * HowToSolveProblems - Features: 
 * 
 *     --> Taking off 'CommonElement4'
 *               
 *  
 * Note: results of this features can be visulized by
 * the java console.
 */

const HowToSolveProblems = () => {
        
    const { array1, array2, array3, array4, CommonElement, CommonElement2, CommonElement3 } = useAppContext()

    //console.log('this is array3 ==>', array3, 'and this is array 4 ==>', array4)
    return(
        <Wrapper>
            <h2>How To Solve Problems:</h2>

            <p>
                the problem solving is a mix 
                between understanding 'big o
                notations' ( space and time)
                complexity and 'Data Strcutures'
                to pick the right data structure
                to the the right space and time 
                complexity of the problem i am solving
            </p>

            <p>
                the thought process to solve the 
                problems is divided in the following 
                way:
            </p>

            <ul>
                <li>
                    analytic skills
                </li>
                <li>
                    coding skills
                </li>
                <li>
                    technical skills    
                </li>
                <li>
                    communication skills
                </li>
            </ul>

            <h3>analytic skills:</h3>

            <p>
                this is the way on how i go
                from not knowing the 'answer'
                to the problem to the 
                solution - my workflow to
                solve it.
            </p>

            <h3>coding skills:</h3>

            <p>
                aspects related with the code
                is it clean ?, the code is properly
                placed and use.
            </p>
            
            <h3>technical skills:</h3>

            <p>
                the technical skills related with 
                do you memorize things ?, do you
                understand the tradeoffs ? ( space
                and time complexity ), do you have 
                deep understanding ? .. technical 
                aspects like this.
            </p>
            
            <h3>communication skills:</h3>

            <p>
               the ability of communications with
               others usually because i'll work with
               different team sizes     
            </p>

            <hr></hr>

            <p>
                let's start with data structures and
                algorithms:
            </p>

            <h3>data structures:</h3>

            <p>
                the data strcutures are the following:
            </p>

            <ul>
                <li>
                    arrays
                </li>
                <li>
                    stacks
                </li>
                <li>
                    queues
                </li>
                <li>
                    linked lists
                </li>
                <li>
                    trees
                </li>
                <li>
                    tries
                </li>
                <li>
                    graphs
                </li>
                <li>
                    hash tables
                </li>
            </ul>

            <h3>algorithms:</h3>

            <p>
                the algorithms are the following:
            </p>

            <ul>
                <li>
                    sorting
                </li>
                <li>
                    dynamic programming
                </li>
                <li>
                    bfs + dfs ( searching )
                </li>
                <li>
                    recursion
                </li>
            </ul>

            <h3>solving section:</h3>

            <p>
                given 2 arrays, create a function that 
                let's a user know (true / false) wheter
                these two arrays contain any common
                items:    
            </p>

            <p>
                i have 2 arrays, array1 and array2:
            </p>

            <section className="code-block">
                <p>{`const array1 = [ 'a', 'b', 'c', 'x']`}</p>
                <p>{`const array2 = [ 'z', 'y', 'i' ]`}</p>    
            </section>

            <button onClick={CommonElement(array1, array2)}>compare 'array1' and 'array2'</button>

            <p>
                i have 2 more arrays, array3 and array4:
            </p>

            <section className="code-block">
                <p>{`const array3 = [ 'a', 'b', 'c', 'x']`}</p>
                <p>{`const array4 = [ 'a', 'y', 'x']`}</p>    
            </section>        
            
            <button onClick={CommonElement2(array3, array4)}>compare 'array3' and 'array4'</button>
            

            <h3>first solution:</h3>    

            <p>
                the first solution is by brute force
                the most obvios solution that can be
                high complexity:
            </p>

            <section className="code-block">
                <p>{`const CommonElement = (arr1, arr2 ) => {`}</p>
                <p>{`for (let i = 0; i < arr1.length; i++) {`}</p> 
                <p>{`for (let j = 0; j < arr2.length; j++) {`}</p>
                <p>{`if (arr1[i] === arr2[j]) {`}</p>    
                <p>{`setCommon1(!common1)`}</p>
                <p>{`return console.log('not common element found ==>',false)`}</p> 
                <p>{`}`}</p> 
                <p>{`}`}</p>  

                <p>nested loops</p>
                <p>complexity is n ^ 2</p>
                <p>droping off constants n(a*b)</p>
            </section>

            <p>
                so i have to become this 'n(a*b)' still
                the worst case scenario and i need
                to build it in something faster
            </p>

            <h3>solution 2 - turn n(a*b) to n(a + b)</h3>

            <section className="code-block">
                <p>{` let map = {};`}</p>
                <p>{`for(let i=0; i < arr3.length; i++){`}</p> 
                <p>{`if (!map[arr3[i]]) {`}</p>
                <p>{`const item = arr3[i]`}</p>    
                <p>{`}`}</p>
                <p>{`}`}</p> 
                <p>{`//console.log('this is array 3 ==>', map)`}</p> 
                <p>{`for(let j=0; j < arr4.length; j++){`}</p>
                <p>{`if (map[arr4[j]]) {`}</p>
                <p>{`return console.log('(a + b) - if i get here is because arra3 and array4 have at least one equal ==>',true)`}</p>  
                <p>{`}`}</p>
                <p>{`return console.log('(a + b) - array1 and array2 are not equal and is ==>',false)`}</p>

                <p>not nested loops</p>
                <p>complexity improve from (a*b) to (a + b)</p>
            </section>

            <p>
                always try to break the code to test it in 
                bad scenarios, and find bugs, some QA to 
                be sure that always will work as expected
            </p>

            <h3>solution 3 - turn n(a*b) to n(a + b)</h3>

            <p>
                the third solutionis using methods of the language
                usually this methods comes optimized to give an
                o(a + b) for this case, or o(n) in few words the 
                most effiecient solution
            </p>

            <section className="code-block">
                <p>{`return arr1.some(item => arr2.includes(item))`}</p>

                <p>one single line using prebuilt es6</p>
                <p>in the current date must exist better standards</p>
                <p>complexity improve from (a*b) to (a + b)</p>
            </section>

            <button onClick={CommonElement3(array3, array4)}>compare 'array3' and 'array4'</button>

            <button onClick={CommonElement3(array1, array2)}>compare 'array3' and 'array4'</button>            

            <p>
                break down the code always in modular pieces <strong>'one
                    function doing a bunch of things not ideal'
                </strong> but <strong>'many
                    functions doing one thing really well thats ideal'
                </strong> testeable and readable code.
            </p>
    
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 1.5rem 1rem 1rem 1.5rem;

    button{
        margin: 1.5rem 1rem 1rem 1.5rem;
    }

    section{
        justify-content: center;
        align-items: center;
    }

    h2, h3 {
        text-transform: capitalize;
        text-decoration: underline;
    }

    li{
        list-style-type: decimal;
        text-transform: capitalize;
    }
`

export default HowToSolveProblems;