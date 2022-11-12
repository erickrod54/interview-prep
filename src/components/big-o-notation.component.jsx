import React, { useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/**interview-prep-app - version 3 - BigOnotation - 
 * Features: 
 * 
 *     --> Adding content related with
 *         'big o complexity constant time'.
 * 
 * Note: depending on how big will be this component
 * i'll make it's own context
 */

const BigOnotation = () => {

    const [ showNemo, setShowNemo ] = useState(false)
    const [ showEveryone, setShowEveryone ] = useState(false)
    const [ showLarge, setShowLarge ] = useState(false)
    const [showNemoWithTime, setShowNemoWithTime ] = useState(false)
    const [ showPrintMe, setShowPrintMe ] = useState(false)

    const { nemo, everyoneCharacter, largeArray, graphsData } = useAppContext()

    console.log('The data of graphs ==>', graphsData )

    const { image: firstgraph } = graphsData[0]
    const { image: secondgraph } = graphsData[1]
    const { image: bigoconstant } = graphsData[2]
    const { image: bigo3const } = graphsData[3]
    
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

    const printMe = (arg) => {
        setShowPrintMe(!showPrintMe)
        return console.log(arg);
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

                <p>
                    so by the last operations, it is defined
                    big o graphicly as this:
                </p>
                <img src={firstgraph} alt='big o first graph'/>

                <p>so as it grows the elements grows the operation
                    number exponentialy, in linear way:
                </p>
                <img src={secondgraph} alt='big o second graph'/>

                <p>
                    so, here is the first big O notation 'O(n)'
                    because 'findNemo' is a linear time to find
                    nemo, for the last three exercises: 
                </p>

                <p>
                with the nemo array the big o notation will be
                    O(1), for the everyone array O(10), and for
                    the large array O(100000).
                </p>    
                <p>
                     -the n can 
                    be anything, can be an array, objects, 
                    or any kind od data that im performing 
                    operations with-
                </p> 

                <h3>so the name of this big o notation
                    is ' O(n) - linear time '
                </h3>

                <p>now i'll continue with the second big o
                    notation:
                </p>
                <h2>constant time:</h2>
                <p>constant time refers to the same number of operations
                    over '1' element 'o(1)' for example i have the following 
                    function:
                </p>

                <section className="code-block">
                            <p>{`const printMe = (arg) => {`}</p>
                            <p>{`return console.log(arg)`}</p>
                            <p>{`}`}</p>        
                </section>

                <p>if i execute  the function will result in a log
                    prompt:
                </p>

                <button onClick={() => printMe(nemo)}>excute printMe</button>
                { showPrintMe ? 
                <>
                    <p>checking the console i can see the data 'arg' being
                        printed, for this example i am using 'nemo' array:
                    </p>
                    <section className="code-block">
                                <p>{`() => printMe(nemo)`}</p>        
                    </section>

                    <p>in this case i handle an array, but this rule can
                    be applied to any data structure, can be arrays,
                    objects and more.
                    </p>  

                    <section className="code-block">
                            <p>{`const printMe = (arg) => {`}</p>
                            <p>{`return console.log(arg) // o(1)`}</p>
                            <p>{`}`}</p>        
                </section>  

                    <p>and graphicly will be a flat line each time get
                        excuted ( predictable code is excellent) and this
                        expressed in graph will be:
                    </p>
                    <img src={bigoconstant} alt="big o constant"/>

                    <p>where the operation is excuted many times 
                        shapping a 'flat line' which means excellent
                        application performance and predictable code
                    </p>
                </>



                :
                null
                }

                <p>so for example if i have:</p>
                
                <section className="code-block">
                            <p>{`const printMe = (arg1, arg2, arg3) => {`}</p>
                            <p>{`return console.log(arg1) // o(1)`}</p>
                            <p>{`return console.log(arg2) // o(1)`}</p>
                            <p>{`return console.log(arg3) // o(3)`}</p>
                            <p>{`}`}</p>        
                </section>  

                <p>this will be an 'o(3)' but constant time
                    because will execute the same operation
                    on a shap of 'flat line', but in this
                    case # operations increase to 3:
                </p>
            <img src={bigo3const} alt='big o 2 constant time'/>
            </div>

            <p>
                the following example:
            </p>

            <section className="code-block">
                            <p>{`const funChallenge = (input) => {`}</p>
                            <p>{`let a = 10; // O(1)`}</p>
                            <p>{`a = 50 + 3; // O(1)`}</p>
                            <p>{`for(let i = 0; i < input.length; i++){ // O(n)`}</p>
                            <p>{`anotherFunction(); // O(n)`}</p>
                            <p>{`let stranger = true; // O(n)`}</p>
                            <p>{`a++ // O(n)`}</p>
                            <p>{`}`}</p>
                            <p>{`return a; // O(1)`}</p>
                            <p>{`}`}</p>        
            </section>

            <p>by evaluating line by line i start with 'flat line'
                then i go 'linear time' and then i come back to
                'flat line' for 'const funChallenge':
            </p>

            <section className="code-block">
                            <p>{`BIG O ( 3 + 4n )`}</p>        
            </section>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    .code-block{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4rem;
        width: 30%;
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

    img{
        width: 350px;
        height: 300px;
        border: 1px solid black;
        border-radius: 2rem;
    }
`



export default BigOnotation;