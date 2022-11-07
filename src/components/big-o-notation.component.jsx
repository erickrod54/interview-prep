import React, { useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/**interview-prep-app - version 1 - BigOnotation - 
 * Features: 
 * 
 *     --> Building 'BigOnotation'.
 * 
 *     --> Building states and handlers to toggle 
 *         the functionalities.
 * 
 *     --> Building the return.
 * 
 * Note: pending to migrate functionalities and states 
 * to the context and provide them from there
 */

const BigOnotation = () => {

    const [ showNemo, setShowNemo ] = useState(false)
    const [ showEveryone, setShowEveryone ] = useState(false)
    const [ showLarge, setShowLarge ] = useState(false)
    const [showNemoWithTime, setShowNemoWithTime ] = useState(false)

    const { nemo, everyoneCharacter, largeArray } = useAppContext()

    const handleFindNemo = () => {
        setShowNemo(!showNemo)
        findNemo(nemo)
    }

    const handleFindNemoWithTime = () => {
        setShowNemoWithTime(!showNemoWithTime)
        
        findNemoWithTime(nemo)
    }

    const handleFindNemoEveryone = () => {
        setShowEveryone(!showEveryone)
        
        findNemoWithTime(everyoneCharacter)
    }

    const handleFindNemoLarge = () => {
        setShowLarge(!showLarge)
     
        findNemoWithTime(largeArray)
    }

    const findNemo = (array) => {
        for( let i = 0; i <  array.length; i++){
            if (array[i] === 'nemo') {
                return(
                    console.log("Found Nemo!!!")
                )
            }
        }
    }

    /**this is to measure the performance */
    const findNemoWithTime = (array) => {
        let t0 = performance.now()
        for( let i = 0; i <  array.length; i++){
            if (array[i] === 'nemo') {
                return(
                    console.log("Found Nemo measuring time!!!")
                    )
                }
            }
            let t1 = performance.now()
            console.log('call to find nemo took ==>', + (t1-t0) + ' miliseconds')
        }

    return(
        <Wrapper>
            <h2 className="main-title topics-title">
                Big O notation 
            </h2>
            <div className="topics-container">
                <section>
                    <p>In this example i have an instruction
                        that i give to the computer, so get
                        a result, there are two main thing
                        about differenciate 'good code' from
                        'bad code', so 'what's good code ?',
                        good code is code that have this two
                        qualities: 
                    </p>
                    <ul>
                        <li>
                            1.- Readable
                        </li>
                        <li>
                            2.- Scalable
                        </li>
                    </ul>
                <p>The instruction in this example is the following:</p>
                <ul>
                    <li>
                        <section className="code-block">
                            <p>{`for( let i = 0; i <  array.length; i++){`}</p>
                            <p>{`if (array[i] === 'nemo') {`}</p>
                            <p>{`return(`}</p>
                            <p>{`console.log("Found Nemo!!!")`}</p>
                            <p>{`)`}</p>
                            <p>{`}`}</p>
                            <p>{`let t1 = performance.now()`}</p>
                        </section>
                    </li>
                </ul>
                </section>
                <p>
                    so what's main goal of this instruction ? is to find 
                    'nemo', the how efficient is the way that i do it ?
                     is evaluated with big-o notation ( Big O Asymptotic Analisys)
                </p>
                <button onClick={handleFindNemo}>
                    click to find nemo
                </button>

                <section className="nemo-section">
                { showNemo ? 
                    <h2>Nemo Found!!</h2>
                    :
                    null    
                }
                </section>
                
                <p>after this, i made it, nemo was found, but the question is how ?,
                    comes to mind.. how i measure based on 'readability' or 
                    'scalability', i can start setting timers and stressing my
                    code under the worst conditions (once i click,
                    i can check changes in the javaConsole):  
                </p>
                <section className="code-block">
                            <p>{`let t0 = performance.now()`}</p>
                            <p>{`for( let i = 0; i <  array.length; i++){`}</p>
                            <p>{`if (array[i] === 'nemo') {`}</p>
                            <p>{`return(`}</p>
                            <p>{`console.log("Found Nemo measuring time!!!")`}</p>
                            <p>{`)`}</p>
                            <p>{`}`}</p>
                            <p>{`console.log('call to find nemo took ==>', + (t1-t0) + ' miliseconds')`}</p>        
                        </section>
                <p>here i have three conditions to test code under stress
                  and check how fast the code is (this depends also,
                  on how fast is the computer where the code runs -this
                  test can be done in developer enviroment or VM emulating
                  production-), the first one is just with nemo:
                </p>
                <button onClick={ () => handleFindNemoWithTime()}>
                    click to find nemo measuring with 'nemo'
                </button>

                <section className="nemo-section">
                { showNemoWithTime ? 
                    <h5>Nemo Found between 1 time measuring time!!</h5>
                    :
                    null    
                }
                </section>

                <p>the second one is using the array 'everyone'
                    that has 10 charaters, so the code will stress
                    running 10 times to find 'nemo':
                </p>

                <button onClick={() => handleFindNemoEveryone()}>
                    click to find nemo measuring with 'everyone'
                </button>

                <section className="nemo-section">
                { showEveryone ? 
                    <h5>Nemo Found between 10 iterations!!</h5>
                    :
                    null    
                }
                </section>
                
                <p>the third one is using the array 'large'
                    that has 1000 'nemo' fills, so the code will 
                    stress running 1000 times to find 'nemo':
                </p>
                <button onClick={() => handleFindNemoLarge()}>
                    click to find nemo measuring with 'large'
                </button>

                <section className="nemo-section">
                { showLarge ? 
                    <h5>Nemo Found betwwen 1000 nemo refils!!</h5>
                    :
                    null    
                }
                </section>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .code-block{
        padding: 4rem;
        border: 1px solid black;
    }

    li{
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .nemo-section{
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem;
        width: 90%;
        height: 5rem;
    }
`


export default BigOnotation;