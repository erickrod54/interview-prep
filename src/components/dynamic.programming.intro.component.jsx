import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 35.02-  DynamicProgramming - Features: 
 * 
 *     --> Stating 'Memoized approach' state
 * 
 * Note: this 'handlerDFSPostorder' will handle the array filling the queue
 * with the post order.
 */

const DynamicProgramming = () => {

    const [ addto80value, setaddTo80value ] = useState();
    const [ memoizedvalue, setMemoizedvalue ] = useState();

    const addTo80 = (n) => {
        return setaddTo80value(n + 80);
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


        </DataStructuresWrapper>
    )
}

export default DynamicProgramming;