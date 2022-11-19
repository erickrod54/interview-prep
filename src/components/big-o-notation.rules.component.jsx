import React, { useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/**interview-prep-app - version 5 - 
 * HomePageInterviewPrep - Features: 
 * 
 *     --> Adding 'remove constant'
 *         rule 
 * 
 * Note: to generate url's dinamicly
 */

const BigORuleBook = () => {

    const { graphsData  } = useAppContext()
    
    const image = graphsData[4].image;

    console.log( graphsData[4].image )

    const { everyoneCharacter } = useAppContext()
    const [ worstcase, setWorstcase ] = useState(false)
    const [ count, setCount ] = useState(0)
    const [counthi, setCounthi ] = useState(0)

    const temCase = [...everyoneCharacter]
    const worstCase = [...temCase]
    worstCase[3] = 'hank'
    worstCase[9] = 'nemo'

    //console.log('worstCase ==>', worstCase)

    const findNemo = (array) => {
        for( let i = 0; i <  array.length; i++){
            setWorstcase(!worstcase)
            console.log(worstcase)
            console.log('running')
            if (array[i] === 'nemo') {
                return(
                    console.log("Found Nemo!!! ==>", i)
                    )
                }
                setCount(i)
            }
           
        }

    const printItem  = (items) => {
        console.log(items[0])

        var middleIndex = Math.floor(items.length / 2);
        var index = 0;

        while(index < middleIndex){
            console.log(items[index]);
            index++;
           
        }

        for(var i = 0; i < 100; i++){
            console.log('this is', 'hi')
        }
        setCounthi(items)

    }
        
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