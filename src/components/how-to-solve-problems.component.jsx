import React from "react";
import styled from "styled-components";


/**interview-prep-app - version 9 -
 * HowToSolveProblems - Features: 
 * 
 *     --> Building 'HowToSolveProblems' 
 * 
 *     --> Placing fundamental concepts.    
 * 
 * Note: to generate url's dinamicly
 */

const HowToSolveProblems = () => {

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

        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 1.5rem 1rem 1rem 1.5rem;

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