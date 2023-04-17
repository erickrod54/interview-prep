import React from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 17.15 - InterviewQA  
 * - Features: 
 * 
 *     --> Destructuring from the context 'array5', 
 *         'array6', 'array7'.
 * 
 *     --> Second interview questions
 * 
 * Note: the second interview question is about find 
 * the first duplicated number in the arrays and return
 * it, and in any other case return undefined.
 */

const InterviewQA = () => {

    const { handleReverse, stringgiven, handleChange, array5, array6, array7 } = useAppContext();
    console.log('the arrays for qa', array5, array6, array7)

    return (
        <DataStructuresWrapper>
            <h2>Interview QA</h2>

            <h3>Questions about <strong>Arrays</strong>:</h3>

            <p>
                Every time the word <strong>'string'</strong> comes up in an interview, 
                it should be handled as an array because <strong>'strings'</strong> are 
                simply <strong>arrays of characters</strong>.
            </p>

            <ul>
                <li>Can you create a function that reverses a string given in an input?</li>

            <input
                type="text"
                placeholder="Type a string"
                value={stringgiven}
                onChange={handleChange}
                />
            <button onClick={handleReverse}>Reverse string (test)</button>

            <p>{stringgiven}</p>

            <li>
                This is a google question, from the given arrays return
                the first duplicate number ? ( any other case undefined )
            </li>

            <section className="code-block">
                <p>1st array:</p>
                <p>
                [{array5.map((number) => {
                    return(
                        `${number} ,`
                    )
                })}]
                </p>

                <p>2nd array:</p>
                <p>
                [{array6.map((number) => {
                    return(
                        `${number} ,`
                    )
                })}]    
                </p>

                <p>3rd array:</p>
                <p>
                [{array7.map((number) => {
                    return(
                        `${number} ,`
                    )
                })}]    
                </p>
            </section>
            
            </ul> 
        </DataStructuresWrapper>
    );
};

export default InterviewQA;
