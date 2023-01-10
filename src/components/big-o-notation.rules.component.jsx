import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/**interview-prep-app - version 16.04 - 
 * BigORuleBook - Features: 
 * 
 *     --> Migrating states and handlers.
 * 
 *     --> Destructuring from context.
 * 
 *     --> Fixing duplicate key 
 * 
 * Note: to generate url's dinamicly
 */

const BigORuleBook = () => {

    const { graphsData, boxes, boxes1, boxesletters, numbers, everyoneCharacter, worstcase, findNemo, count,  printItem, counthi, boxescount1, compressBoxesTwice, boxescount, logAllPairsBoxes, boxespairshow, printnumebersAndPairSums } = useAppContext()
    
    const image = graphsData[4].image;

    console.log('numebrs ==>', numbers)
    //console.log( graphsData[4].image )
    //console.log('boxes ==> ', boxes, 'and boxes 2 ==>', boxes1)

    const temCase = [...everyoneCharacter]
    const worstCase = [...temCase]
    worstCase[3] = 'hank'
    worstCase[9] = 'nemo'
        
    return(
        <Wrapper>
        <h2 className="main-title topics-title">
            big o rule book        
        </h2>
        <div className="topics-container">
            <p>the big o rule book has 4 rules:</p>
            <ul>
                <li>worst case</li>
                <li>remove constants</li>
                <li>different terms for inputs</li>
                <li>drop non dominants</li>
            </ul>

            <h3>1.- worst case:</h3>

            <p>
                the 'worst case' refers to worst permance
                case of a code block when i am calculatiing
                'big o complexity', for example i have the 
                'everyoneCharacter' array with the 'nemo' movie
                characters: 
            </p>

            <section className="code-block">
                [
                {everyoneCharacter.map((character, index ) => {
                   
                   return (
                    <p key={index}>{index + 1} - {character},</p>
                   )
                })}
                ]
            </section>

            <p>
                how i can check above 'nemo' is in the fourth place
                and if i calculate findNemo.. this would be the 'best
                case', now let's see the 'worst case'
            </p>

            <section className="code-block">
                [
                {worstCase.map((character, index ) => {
                   
                   return (
                    <p key={index}>{index + 1} - {character},</p>
                   )
                })}
                ]
            </section>

            <button onClick={() => findNemo(worstCase)}>Find nemo</button>

            {worstcase ?
            <>
            <p>
                Checking in the console i can see that this
                algorithm runs '9' times before finding 'nemo'
                this represent the worst case this block of code
            </p>

            <section className="code-block">
                {count} times running! nemo found at {count + 1}!
            </section>
            
            </>
            :
            null
            }        
        </div>

        <h3>2.- remove constants:</h3>

        <p>
            i have the following code:
        </p>
             <section className="code-block">
                {/**print first item then frist half say hi
                 * 100 times*/}
                 <p>{`fucntion printItem(items){`}</p>
                 <p>{`console.log(items[0]); O(1)`}</p>
                 <p>{`var middleIndex = Math.floor(items.lenght / 2);//O(n/2)`}</p>
                 <p>{`var index = 0`}</p>
                 <p>{``}</p>
                 <p>{`while(index < middleIndex){`}</p>
                 <p>{`console.log(items[index])`}</p>
                 <p>{`index++;`}</p>
                 <p>{`}`}</p>
                 <p>{`for(var i = 0; i < 100; i++){//O(100)`}</p>
                 <p>{`console.log('hi');`}</p>
                 <p>{`}`}</p>
                 <p>{`}`}</p>

                 <p>
                    so the complexity for this function will be:
                </p>

                <p>O(1 + n/2 + 100)</p>

                <p>constanst as number can be drop</p>
                <p>because i need notations as i have</p>
                <p>in the big o chart, if i drop</p>
                <p>constants will be:</p>

                <p>O(n)</p>

                <p>because this notation with 'n'</p>
                <p>denotate 'scale'</p>
             </section>

             <button onClick={() => printItem(100)}>print item</button>

             <section className="code-block">
                {counthi}, hi!
            </section>

             {counthi ? 
            
            <p>
                i can check that it does not matter that the
                scale 'n' has been divided by '2' (that is a constant)
                because what will reflects in the graph is the scale
                O(n) after dropping off the 'constants'    
             </p>
            :
            null
            }

            <img src={image} alt='big o chart' />

            <p>
                this is because the 'n' increase is still 
                linear
            </p>

            <h3>3.- different terms for inputs:</h3>

            <p>
                i have the following function, and the porpuse
                is to print two different arrays as 1 output:
            </p>

            <section className="code-block">
                {/**print first item then frist half say hi
                 * 100 times*/}
                 <p>{`function compressBoxesTwice(boxes){`}</p>
                 <p>{`boxes.forEach(function(boxes)`}</p>
                 <p>{`console.log(boxes)`}</p>
                 <p>{`});`}</p>
                 <p>{``}</p>
                 <p>{`boxes.forEach(function(boxes){`}</p>
                 <p>{`console.log(boxes);`}</p>
                 <p>{`});`}</p>
                 <p>{`}`}</p>                 

                 <p>so the complexity will be:</p>
                 <p>O(2n)</p>

                 <p>but the third rule says</p>
                 <p>different terms for inputs</p>
                 <p>so let's receive two arguments:</p>

                 <p>{`function compressBoxesTwice(boxes, boxes1){`}</p>
                 <p>{`boxes.forEach(function(boxes)`}</p>
                 <p>{`console.log(boxes)`}</p>
                 <p>{`});`}</p>
                 <p>{``}</p>
                 <p>{`boxes.forEach(function(boxes){`}</p>
                 <p>{`console.log(boxes);`}</p>
                 <p>{`});`}</p>
                 <p>{`}`}</p>                 

                 <p>so the complexity will be:</p>
                 <p>O(a + b)</p>
             </section>

             <p>
                if i trigger the function the output will be:
            </p>

             <button onClick={() => compressBoxesTwice(boxes, boxes1)}>compress boxes</button>

             <section className="code-block">
                {boxescount} and {boxescount1} boxes together !
            </section>

            <section className="code-block">
                {/**print first item then frist half say hi
                 * 100 times*/}
                 <p>{`const logAllPairsBoxes = (boxes) => {`}</p>
                 <p>{`for(let i=0; i < boxes.length; i++){`}</p>
                 <p>{`for(let j=0; j < boxes.length; j++){`}</p>
                 <p>{`console.log(boxes[i], boxes[j])`}</p>
                 <p>{``}</p>
                 <p>{`} `}</p>
                 <p>{`}`}</p>
                 <p>{`}`}</p>
                 <p>so the complexity will be:</p>
                 <p>O(n ^ 2)</p>
                 <p>this last pattern is 'quadratic time'</p>
                 <p>this complexity pattern can be:</p>
                 <p>O(a*b)</p>
             </section>

              <button onClick={() => logAllPairsBoxes(boxesletters)}>log all pair boxes</button>

            {boxespairshow  ?
            
            <section className="code-block">
                check the console for the pairs
            </section>
            :
            null
            }                 
            
            <p>
                this example comes up a lot in interviews
                because different 'terms for different inputs'
                means to identify this two last patterns
                when i have 2 inputs (arguments) pattern O(a + b)
                or two nested 'for' or 'map' cycles i have 
                complexity in the red area of the 'chart graph'
                that has a complexity of 'O(n ^ 2)'
            </p>

            <img src={image} alt='big o chart' />

            <p>
                and the challenge is to modify the code to
                get from 'O(a + b)' and this 'O(n ^ 2)'
                to the green area of the big o chart
                as 'O(a + b)' instead of 'O(2n)' for
                'different inputs', and 'O(a*b)' instead
                of 'O(n ^ 2)' for 'nested loops'
            </p>

            <h3>4- drop non dominants:</h3>

            <p>
                i have the function to 'print all
                numbers then all pair sums' of the 
                array 'numbers':
            </p>

            <section className="code-block">
                {/**print first item then frist half say hi
                 * 100 times*/}
                 <p>{`const printnumebersAndPairSums = (numbers) => {`}</p>
                 <p>{`console.log('these are the numbers:')`}</p>
                 <p>{`numbers.forEach(function(number) {`}</p>
                 <p>{`console.log(number)`}</p>
                 <p>{`})`}</p>
                 <p>{``}</p>
                 <p>{`console.log('and these are their sums:')`}</p>
                 <p>{`numbers.forEach`}</p>
                 <p>{`(function(secondNumber){`}</p>
                 <p>{`console.log( firstNumber + secondNumber)`}</p>
                 <p>{`})`}</p>                   
                 <p>{`})`}</p>
                 <p>{`}`}</p>
            
                 <p>so the complexity will be:</p>
                 <p>O(n + n^2)</p>
                 <p>but the dropping non dominants</p>
                 <p>between 'n' and 'n^2'</p>
                 <p>'n' is non dominant resulting in:</p>
                 <p>O(n^2)</p>
             </section>

             <button onClick={() => printnumebersAndPairSums(numbers)}>log all numbers and their sums</button>

             <p>
                so when i have to 'drop non dominants' i have to
                'keep' the most growing 'n' terms, those who represent
                the major 'scale' for my code and re-factor the code 
                in them, and 'drop' the less significant (remeber)
                big o is about scale.
            </p>     
            
            <h3>what cause time in a function ?</h3>

            <p>
                time in a function is caused by
                (the two factors that come to play
                in big o 'time' and 'operations #'):
            </p>

            <ul>
                <li>operations ( +, -, *, / )</li>
                <li>comparisons {`( <, >, ==)`}</li>
                <li>looping (for, while )</li>
                <li>outside function call (function)</li>
            </ul>

            <p>
                so big o worries about big entries, so 
                big code rules are applied to make the code
                scalable to real life large entries that
                can crash/break apps, the ability to find
                the right 'data structure' to the 'right
                large entry of data', this is what 
                big o is about.
            </p>

            <section className="code-block">
               <p>{`Data Structures + Algorithms = Programs`}</p>
            </section>        
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

    img{
        margin: 1rem;
    }

    p{
        width: 85%;
    }
    button{
        margin: 1.5rem;
    }
    
    
    ul{
       display: flex;
       flex-direction: column;
       justify-content: center;
       list-style-type: decimal;
    }

    li, h3{
        text-transform: capitalize;
    }

    .code-block{
        
        width: 50%;
    }
    
`
export default BigORuleBook;