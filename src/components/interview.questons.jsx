import React, { useState } from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 17.18 - InterviewQA  
 * - Features: 
 * 
 *    --> Fixing the array6 the duplicate by 
 *        building a new 'handlefirstRecurringCharacter2' 
 *        handler.
 * 
 * Note: the second interview question is about find 
 * the first duplicated number in the arrays and return
 * it, and in any other case return undefined.
 */

const InterviewQA = () => {

    const { handleReverse, stringgiven, handleChange, array5, array6, array7 } = useAppContext();
    console.log('the arrays for qa', array5, array6, array7)

    const [ recurring, setRecurring ] = useState([]);
    const [ recurring1, setRecurring1 ] = useState([]);
    const [ recurring2, setRecurring2 ] = useState([]);

    console.log('recurring value ==>', recurring)

    const handlefirstRecurringCharacter = (input) => {
        for (let i = 0; i < input.length; i++) {
            for (let j = i + 1; j < input.length; j++) {
                if (input[i] === input[j]) {
                    setRecurring(input[i]);
                    return input[i];
                }
            }
        }
        setRecurring('undefined')
        return undefined;
    }

    
    const handlefirstRecurringCharacter1 = (input) => {
        for (let i = 0; i < input.length; i++) {
            for (let j = i + 1; j < input.length; j++) {
                if (input[i] === input[j]) {
                    setRecurring1(input[i]);
                    return input[i];
                }
            }
        }
        setRecurring1('undefined')
        return undefined;
    }
    
    const handlefirstRecurringCharacter2 = (input) => {
        let seenNumbers = {};
        for (let i = 0; i < input.length; i++) {
          if (seenNumbers[input[i]]) {
            setRecurring2(input[i]);
            return input[i];
        } else {
            seenNumbers[input[i]] = true;
            setRecurring2(seenNumbers[input[i]]);
        }
    }
    return undefined;
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

            <h3>first solution:</h3>

            <p>
                the first solution is based in lopping through the array and comparing the 
                previous index <strong>'i'</strong> with the next index <strong>j</strong>:
            </p>

            <button onClick={() => handlefirstRecurringCharacter(array5)}>find the duplicate in <strong>'array5'</strong></button>

            <p>{recurring}</p>
            
            <button onClick={() => handlefirstRecurringCharacter2(array6)}>find the duplicate in <strong>'array6'</strong></button>

            <p>{recurring2}</p>    

            <button onClick={() => handlefirstRecurringCharacter1(array7)}>find the duplicate in <strong>'array7'</strong></button>

            <p>{recurring1}</p>


            </ul>
        </DataStructuresWrapper>
    );
};

export default InterviewQA;
