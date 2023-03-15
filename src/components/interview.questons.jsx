import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 16.12 - InterviewQA  
 * - Features: 
 * 
 *     --> Building first 'reverseString' method
 * 
 * Note: pending to build a second reverse method
 * using 'split' and the prebuilt 'reverse' method
 * from javaScript.
 */

const InterviewQA = () => {
    const [stringgiven, setStringgiven] = useState('');

    const reverseString = (str) => {
        if (!str || str.length < 2 || typeof str !== 'string') {
            return 'mmm this is not a string';
        }

        const backwards = [];
        const totalItems = str.length - 1;

        for (let i = totalItems; i >= 0; i--) {
            backwards.push(str[i]);
        }

        return backwards.join('');
    };

    const handleReverse = () => {
        const fullString = reverseString(stringgiven);
        setStringgiven(fullString);
    };

    const handleChange = (e) => {
        setStringgiven(e.target.value);
    };

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
