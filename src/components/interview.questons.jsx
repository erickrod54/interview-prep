import React, { useState } from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 17.04 - InterviewQA  
 * - Features: 
 * 
 *     --> Destrcuturing from the context 'handleReverse'
 * 
 * Note: pending to build a second reverse method
 * using 'split' and the prebuilt 'reverse' method
 * from javaScript.
 */

const InterviewQA = () => {

    const { handleReverse, stringgiven, handleChange } = useAppContext()

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
            </ul> 

            <input
                type="text"
                placeholder="Type a string"
                value={stringgiven}
                onChange={handleChange}
            />
            <button onClick={handleReverse}>Reverse string (test)</button>

            <p>{stringgiven}</p>
        </DataStructuresWrapper>
    );
};

export default InterviewQA;
