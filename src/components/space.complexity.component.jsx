import React, { useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/**interview-prep-app - version 17.06 - SpaceComplexity
 *  - Features: 
 * 
 *     --> Destructuring SpaceComplexity states and 
 *         handlers 'hiarray'. 
 * 
 * Note: the first assets added to 'graphsData'
 * are for big notation app
 */

const SpaceComplexity = () => {

    const { n, boo, setBoo, hiarray, sethiArray } = useAppContext()

    console.log(n)

    const booo = (array) => {
        setBoo(n.length)
        for(let i = 0; i < n.length; i++){
           console.log('boooooo')
        }
    }

    const arrayOfHintTimes = (array) => {
        /**i have control over 'hiArray'*/
        let hiArray = [];
        for(let i = 0; i < n; i++){
            hiArray[i] = 'hi'
        }
        sethiArray(!hiarray)
    }

    return(
        <Wrapper>
            <h2>Space Complexity:</h2>
            
            <p>
                in programming there are
                three pillars and these are:
            </p>
            
            <ul>
                <li>
                     readable ( clean an maintainable code)
                </li>
                <li>
                     memory ( space complexity, how code grow in memory )
                </li>
                <li>
                     speed ( time complexity, code that scales good)
                </li>
            </ul>

            <p>
                when a program executes has two ways
                to remember things the 'heap' and the
                'stack' 
            </p>

            <p>
                the 'heap' is where i store 'variables' and 
                'values' assing
            </p>

            <p>
                the 'stack' is where i keep track 
                functions calls
            </p>

            <p>
                sometimes the 'tradeoffs' of applying
                'time complexity' or 'space complexity'
                 to the incline the balance for speed
                 or for memory, so:       
            </p>

            <h3>what causes space complexity ?</h3>

            <ul>
                <li>
                     variables
                </li>
                <li>
                     data structures
                </li>
                <li>
                     function calls
                </li>
                <li>
                     alocations
                </li>
            </ul>

            <p>
                let's say i have the following
                function:    
            </p>

            <section className="code-block">
               <p>{`const booo = (array) => {`}</p>
               <p>{`setBoo(n.length)`}</p>
               <p>{`for(let i = 0; i < n.length; i++){`}</p>
               <p>{`console.log('boooooo')`}</p>
               <p>{`}`}</p>
               <p>{`}`}</p>

               <p>
                the 'space-complexity' of this
                function is O(1)
               </p>
            </section>

            <button onClick={() => booo(n)}>print boo</button>

            <section className="code-block">
                <p>boo print {boo} times</p>
            </section>

            <p>
                because when i talk about 'space
                complexity' i dont have control
                over the 'entries',i have 
                control over 'data structures',
                'functions calls', 'variables'
                and 'allocations' 
            </p>

            <p>
                i have the following function:
            </p>

            <section className="code-block">
               <p>{`const arrayOfHintTimes = (array) => {`}</p>
               <p>{`/**i have control over 'hiArray'*/`}</p>
               <p>{`for(let i = 0; i < n; i++){`}</p>
               <p>{`}`}</p>
               <p>{`sethiArray(!hiarray)`}</p>
               <p>{`}`}</p>

               <p>
                the 'space-complexity' of this
                function is O(n)
               </p>
            </section>

            <button onClick={() => arrayOfHintTimes(n)}>print hi array</button>

            <section className="code-block">
               {hiarray ?
               n.map((item) => {
                return(
                    <p key={item}>{item} - hi</p>
                )
               })
              :
              <p>hit print 'hi' array</p>  
              }
            </section>

            <p>
                let's go deep with 'space-complexity'
                i have the following data structure 
            </p>

            <section className="code-block">
               <p>{`const tweetsArray = [`}</p>
               <p>{`{`}</p>
               <p>{`tweet:'hi',`}</p>
               <p>{`date:2012 `}</p>
               <p>{`},`}</p>
               <p>{`{`}</p>
               <p>{`tweet:'my',`}</p>
               <p>{`date:2014`}</p>
               <p>{`},`}</p>
               <p>{`{`}</p>
               <p>{`tweet:'teddy',`}</p>
               <p>{`date:2018`}</p>
               <p>{`}`}</p>
               <p>{`]`}</p>
               <p>
                the 'space-complexity' of this
                function is O(n ^ 2)
               </p>
            </section>

            <p>
                let's do the 'space-complexity'
                for: 
            </p>

            <section className="code-block">
               <p>{`'jmxksmkmslkxm.length'`}</p>
               <p>
                the 'space-complexity' of this
                javaScript function is O(1)
                because is constant time
                ( length it is a property
                built )
               </p>
            </section>
        </Wrapper>
    )
}   


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button{
        margin: 1rem;
    }

    p{
        width: 70%;
    }

    section p{
        width: 100%;
    }

    li{
        margin: 1rem;
        list-style-type: decimal;
        text-transform: capitalize;
    }
`

export default SpaceComplexity;