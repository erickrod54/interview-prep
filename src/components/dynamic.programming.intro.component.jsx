import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 35.15-  DynamicProgramming - Features: 
 * 
 *     --> Destructuring 'fibonaccirecurssionmemothird' from 
 *         the context
 * 
 * Note: when the input value changes.
 */

const DynamicProgramming = () => {

    const [ addto80value, setaddTo80value ] = useState();
    const [ memoizedvalue, setMemoizedvalue ] = useState();
    const [fibonacciValue, setFibonacciValue] = useState(null);

    const { graphsData } = useAppContext();
    const fibonaccirecurssionmemo = graphsData[75].image;
    const fibonaccimemosecond = graphsData[76].image;
    const fibonaccirecurssionmemothird = graphsData[77].image;

    const fibonacci = (n) => {
        if (n <= 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }

    /**The calculateFibonacci function is called when the input value changes. 
     * It calculates the Fibonacci value using the fibonacci function and updates
     *  the state with the result. */
    const calculateFibonacci = (n) => {
        const result = fibonacci(n);
        setFibonacciValue(result);
    }

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

            <p>
                if the parameter 80 does not change, it will be <strong> memoized </strong>, so <strong> cache </strong> will be use 
                to get the solution in a faster way
            </p>

           <p>
                an improve way to make the last code better, is to include <strong> cache </strong> inside of the scope as follows:
           </p>

           <section className="code-block">
                <p>{`const memoizedAddTo80 = (n) => {`}</p>
                <p>{`// Using an object`}</p>
                <p>{`let cache = {};`}</p>
                <p>{`return function(n) {`}</p>
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
                <p>{`}`}</p>
            </section>    

        <p>
            this <strong> pattern </strong> is usually seen in codebases working with <strong> dynamic programming </strong>, this convetion
            in <strong> JavaScript </strong> is called <strong> Closures </strong>
        </p>

        <h2>Memoized Fibonacci Sequence</h2>
        <p>
            this first approach will show a <strong> no memoized </strong> function and their crash results after an extensive calculation
        </p>
            <p>Enter a number to calculate its Fibonacci value:</p>

        <p>
            i enter number <strong> 7, 13, 20, 30 </strong>, but after that the browser will crash because the calculation is too 
            extensive 
        </p>

        <input
                type="number"
                onChange={(event) => calculateFibonacci(Number(event.target.value))}
            />

        <p>Fibonacci Value: <strong> {fibonacciValue} </strong></p>
        
        <p>
            so one way to improve it is by using <strong> dynamic programming </strong> 
        </p>

        <p>
            so let's see the fibonacci graph to check how the calculations are made:
        </p>

        <img src={fibonaccirecurssionmemo} className="large" alt="fibonacci recurssion memo"/>

        <p>
            this keep growing in calculations each time by overlaping triangles over triangles as 
            the calculation goes up
        </p>

        <img src={fibonaccimemosecond} className="large" alt="fibonacci memo second"/>

        <p>
            so the <strong> steps to apply dynamic programming  </strong> are the following:
        </p>

        <ul>
            <li>
                Can be divided into a subproblem    
            </li>
            <li>
                Recursive solution 
            </li>
            <li>
                Are there repetitive subproblems
            </li>
            <li>
                memoize subproblems
            </li>
            <li>
                demand a raise from your boss
            </li>
        </ul>

        <p>
            all of these steps combine <strong> divide and conquer </strong> + <strong> memoization </strong> 
            to achieve optimization and performance goals
        </p>

        <img src={fibonaccirecurssionmemothird} className="large" alt="fibonacci recurssion memo third"/>


        </DataStructuresWrapper>
    )
}

export default DynamicProgramming;