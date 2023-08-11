import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 35.06-  DynamicProgramming - Features: 
 * 
 *     --> Building 'cleanupMemoizedAddTo80' value
 * 
 * Note: this 'handlerDFSPostorder' will handle the array filling the queue
 * with the post order.
 */

const DynamicProgramming = () => {

    const [ addto80value, setaddTo80value ] = useState();
    const [ memoizedvalue, setMemoizedvalue ] = useState();

    const addTo80 = (n) => {
        return (
            setaddTo80value(n + 80),
            cleanupAddTo80()
            );
    }

        // Using an object
        let cache = {
            5: 85
        };
    
        const memoizedAddTo80 = (n) => {
            if (n in cache) {
                // Accesing property using 'n' as the key
                return (
                    cache[n],
                    setMemoizedvalue(cache[n]),
                    cleanupMemoizedAddTo80()
                    )
            }else{
                console.log('long time flow')
                cache[n] = 5 + 80;
                return (
                    cache[n],
                    setMemoizedvalue(cache[n]),
                    cleanupMemoizedAddTo80()
                    )
            }
        }

        const cleanupMemoizedAddTo80 = () => {
            setTimeout(() => {
                setMemoizedvalue('value cleared!! hit again')
            }, 2000);
        }

        const cleanupAddTo80 = () => {
            setTimeout(() => {
                setaddTo80value('value cleared! hit again ')
            }, 2000);
        }

    return(
        <DataStructuresWrapper>
            <h2>Dynamic Programming</h2>
            <p>
                Dynamic Programming is an <strong> 'optimization technique' </strong> ( do you have somethinf you can cache ? ),
                so what it does this technique is <strong> 'store' repetitive high cost operations </strong>, ( this process 
                has a tradeoff, because bhy storing space complexity grow ) with the main goal of improve significally time 
                complexity, by applying this technique time complexity of <strong> () </strong>
            </p>

            <p>
                DynamicProgramming can adopt names as <strong> memoization - caching </strong>, by applying this technique 
                <strong> speeds up programs </strong> ( better time complexity ) make it them more accesible
            </p>

            <button onClick={() => addTo80(5)}> Add <strong> 5 </strong> to 80 </button>

            <p>
                {addto80value}
            </p>

            <p>
               that is a recursive function ( repetitive high cost operation ), and i want to increse his performance
               make in it faster every time 
            </p>        

            <h3>
                Memoized approach:
            </h3>

            <p>
               that is a recursive function ( repetitive high cost operation ), and i want to increse his performance
               make in it faster every time so for this porpuse i will create a variable called <strong> cache </strong>
               to store information of the operation in the following way
            </p>        

            <section className="code-block">
                <p>{`// Using an object`}</p>
                <p>{`let cache = {`}</p>
                <p>{`5: 85`}</p>
                <p>{` };`}</p>
                <p>{`const memoizedAddTo80 = (n) => {`}</p>
                <p>{`if (n in cache) {`}</p>
                <p>{`// Accesing property using 'n' as the key`}</p>
                <p>{`return (`}</p>
                <p>{`cache[n],`}</p>
                <p>{`setMemoizedvalue(cache[n])`}</p>
                <p>{`)`}</p>
                <p>{`}else{`}</p>
                <p>{`console.log('long time flow')`}</p>
                <p>{`cache[n] = 5 + 80;')`}</p>
                <p>{`return (`}</p>
                <p>{`cache[n],`}</p>
                <p>{`setMemoizedvalue(cache[n])`}</p>
                <p>{`)`}</p>
                <p>{`}`}</p>
                <p>{`}`}</p>
            </section>    

            <button onClick={() => memoizedAddTo80(5)}> Add <strong> 5 </strong> to 80 ( memoized approach )</button>

            <p>
                {memoizedvalue}
            </p>

            <p>
                without <strong> memoizing </strong> using the <strong> cache </strong> the flow will take long time to execute
            </p>

            <p>
                so the main goal of <strong> dynamic programming </strong> is to create <strong> storage structures </strong> to remember 
                solutions, so it will be less processing cost, there is many conventions to achieve this, in <strong> JavaScript </strong>
                the convention is called <strong> Clousures </strong>
            </p>



        </DataStructuresWrapper>
    )
}

export default DynamicProgramming;