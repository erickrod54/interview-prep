import React, { useState } from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 19.01 - InterviewQA  
 * - Features: 
 * 
 *    --> Migrating 'recurring2', and 'setRecurring2'.
 * 
 *    --> Destructuring 'recurring2', and 'setRecurring2'
 *        from the context.
 * 
 * Note: the second interview question is about find 
 * the first duplicated number in the arrays and return
 * it, and in any other case return undefined.
 */

const InterviewQA = () => {

    const { handleReverse,
            stringgiven,
            handleChange,
            array5,
            array6,
            array7,
            recurring,
            handlefirstRecurringCharacter,
            recurring1, 
            handlefirstRecurringCharacter1,
            recurring2,
            setRecurring2 } = useAppContext();
            
    console.log('the arrays for qa', array5, array6, array7)

    console.log('recurring value ==>', recurring)
    
    /**this solution implements hash tables, comparing every key
     * of the array6 and returning the first recurring number, this
     * solution can be proven with the rest of the arrays and the 
     * result will be accurate*/
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

            <p>
                there is two solutions for this question, one that use nested loops and has more complexity and
                one that uses hash tables that treat every array element as a key and then compare it
            </p> 

            <h3>Solution with <strong>'nested lops'</strong></h3>

            <section className="code-block">
                <p>{`const handlefirstRecurringCharacter1 = (input) => {`}</p>
                <p>{`for (let i = 0; i < input.length; i++) {`}</p>
                <p>{`for (let j = i + 1; j < input.length; j++) {`}</p>
                <p>{`if (input[i] === input[j]) {`}</p>
                <p>{`setRecurring1(input[i]);`}</p>
                <p>{`}`}</p>
                <p>{`}`}</p>
                <p>{`setRecurring1('undefined')`}</p>
                <p>{`return undefined;`}</p>
                <p>{`}`}</p>
            </section>

            <p>
                and the complexity for this last solution is <strong>'O(n ^ 2)'</strong>
                because has two nested loops
            </p>

            <h3>Solution with <strong>'hash tables'</strong></h3>

            <p>
                and the complexity for this last solution is <strong>'O(n)'</strong>
                that improves the first one by taking off a loop and making this 
                <strong>'let seenNumbers = {};'</strong> object that get fill with 
                the elements of the <strong>array</strong> in order to compare
                them and find the duplicates 
            </p>    

            <section className="code-block">
                <p>{`const handlefirstRecurringCharacter2 = (input) => {`}</p>
                <p>{`let seenNumbers = {};`}</p>
                <p>{`for (let i = 0; i < input.length; i++) {`}</p>
                <p>{`if (seenNumbers[input[i]]) {`}</p>
                <p>{`setRecurring2(input[i]);`}</p>
                <p>{` } else {`}</p>
                <p>{`seenNumbers[input[i]] = true;`}</p>
                <p>{`setRecurring2(seenNumbers[input[i]]);`}</p>
                <p>{`}`}</p>
                <p>{`return undefined;`}</p>
                <p>{`};`}</p>
            </section>

            </ul>
        </DataStructuresWrapper>
    );
};

export default InterviewQA;
