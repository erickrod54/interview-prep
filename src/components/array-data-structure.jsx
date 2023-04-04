import React from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 16.14 - ArrayDataStructure 
 * - Features: 
 * 
 *   --> Destructuring 'newStrings' from the context. 
 * 
 * Note: to generate url's dinamicly
 */

const ArrayDataStructure = () => {

    const { strings, newStrings } = useAppContext()
    
    
    /**here i push the value that i want to add*/
    newStrings.push('e') // O(1)
    
    /**here i pop to remove the last value*/
    
    const newStringspop = [...newStrings]
    const stringsUnshift = [...newStringspop]
    stringsUnshift.pop()// O(1)
    stringsUnshift.pop()// O(1)

    const newStringsunshift = [...stringsUnshift]

    newStringsunshift.unshift('x')// O(n)

    const stringsSplice = [...newStringsunshift]

    /**here i splice it has two parameters, first to add
     * in a exact 'index' and the second is to indicate
     * how many items i want to remove, and third
     * the element to add*/
     stringsSplice.splice(2,0,'alien')// O(n)  

    
    return(
        <DataStructuresWrapper>
            <h2>Array Data Structure</h2>

            <p>
                let's say i have the following array:
            </p>

            <section className="code-block-row code-block">
                [{strings.map((letter) => {
                    return <p>'{letter}',</p>
                })}]
            </section>

            <p>
                if i want to accces it as the computer knows
                where is located exactly each element, let's 
                access the letter 'c'
            </p>

            <section className="code-block">
                <p>
                    by doing <strong>strings[2]</strong>
                    i get:                
                </p>
                <p>['{strings[2]}']</p>
            </section>

            <p>
                the methods that i can apply over the array
                are:
            </p>

            <ul>
                <li><strong>push</strong> insertion - (complexity O(1)) - fast</li>
                <li><strong>pop</strong> deletion - (complexity O(1)) - fast</li>
                <li><strong>unshift</strong> adding at first - (complexity O(n)) - not so fast</li>
                <li><strong>splice</strong> adding in exact index - (complexity O(n)) - not so fast</li>
            </ul>

            <p>
                for example let's push a new letter 
                'e' into the array
            </p>

            <p>
                in order to achieve this i have to:
            </p>

            <ul>
                <li>
                    first an array copy by spreading
                    <strong>const newStrings = [...strings]</strong>
                </li>
                <li>then i push <strong>'newStrings.push('e')'</strong></li>
            </ul>

            <p>note: i make the copy if i don't want to 
                affect the original array
            </p>
            
            <section className="code-block-row code-block">
                
                [{newStrings.map((letter) => {
                    return <p>'{letter}',</p>
                })}]
            </section>

            <p>
                now let's remove the last letter 
                of the array
            </p>

            
    newStringspop.pop('e')
            <ul>
                <li>
                    first <strong>newStringspop.push('d') </strong>
                    to add the last letter 'd'
                </li>
                <li>
                    then i pop <strong>'newStringspop.pop('e')'</strong>
                </li>
            </ul>

            <p> 
                note: i do ti this way because if not, will
                remove 'e' and 'd', i added 'e' but the last
                letter is 'd', <strong>if they are not in a 'handdler' 
                the order matter when i do push, pop operations</strong>
            </p>

            <section className="code-block-row code-block">
                
                [{newStringspop.map((letter) => {
                    return <p>'{letter}',</p>
                })}]
            </section>

            <p> 
                now let's apply 'unshift'
            </p>

            <section className="code-block">

                [{stringsUnshift.map((letter, index) => {
                    return(
                        <p>'{letter},' - the index {index}</p>
                    )
                })}]
            </section>
            
            <p>
                what unshift does is <strong>adding an item at
                the beginning</strong> of the array and modify
                the <strong>index</strong>     
            </p>

            <section className="code-block">

                [{newStringsunshift.map((letter, index) => {
                    return(
                        <p>'{letter},' - the index {index}</p>
                    )
                })}]
            </section>

            <p>
                it moves the indexes and add the element and the 
                new index 
            </p>

            <p>
            by using <strong> newStringsunshift.unshift('x')</strong>
            </p>

            <p>
                now let's apply splice array here i splice it has 
                two parameters, first to add in a exact 'index' and 
                the second is to indicate how many items i want to 
                remove, and third the element to add 
            </p>

            <section className="code-block">

                [{newStringsunshift.map((letter, index) => {
                    return(
                        <p>'{letter},' - the index {index}</p>
                    )
                })}]
            </section>

            <p>
                and appplying splice <strong>stringsSplice.splice(2,0,'alien')</strong>
            </p>
            <p>
                will add the 'alien' item
            </p>

            <section className="code-block">

                [{stringsSplice.map((letter, index) => {
                    return(
                        <p>'{letter},' - the index {index}</p>
                    )
                })}]
            </section>

        </DataStructuresWrapper>
    )
}


export default ArrayDataStructure;