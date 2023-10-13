import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 38.06 - 
 * AlgorithmsIntro - Features: 
 * 
 *     --> Migrating and Destructuring 'inceptionund', and 'setInceptionund'.
 * 
 * Note: Fibonacci Sequence is closely related 
 * to the Recursion Concept
 */

const AlgorithmsIntro = () => {

    const { fibonacciterative100, setFibonacciterative100, inceptionund, setInceptionund } = useAppContext()

    
    const [ countvalue, setCountvalue ] = useState();
    const [ inceptionvalue, setInceptionvalue ] = useState();
    const [ factorialvalue, setFactorialvalue ] = useState();
    const [ factorialrecursive, setFactorialrecursive ] = useState();

    /**Recursion approach states for fibonacci*/
    const [ fibonaccirecursive, setFibonaccirecursive ] = useState();
    const [ fibonaccirecursive8, setFibonaccirecursive8 ] = useState();
    const [ fibonaccirecursive10, setFibonaccirecursive10 ] = useState();
    const [ fibonaccirecursive15, setFibonaccirecursive15 ] = useState();
    const [ fibonaccirecursive20, setFibonaccirecursive20 ] = useState();
    const [ fibonaccirecursive30, setFibonaccirecursive30 ] = useState();
    const [ fibonaccirecursive40, setFibonaccirecursive40 ] = useState();

    /**Iterative approach states for fibonacci*/
    const [ fibonacciterative, setFibonacciterative ] = useState([]);
    const [ fibonacciterative30, setFibonacciterative30 ] = useState();
    const [ fibonacciterative40, setFibonacciterative40 ] = useState();
    const [ fibonacciterative50, setFibonacciterative50 ] = useState();
    

    const { graphsData } = useAppContext()
    
    //console.log('graphsData from the context ==>', graphsData)
    const factorialexercise = graphsData[37].image;
    const fibonaccirecurssion = graphsData[38].image;
    const recursioniterativetradeoffs = graphsData[39].image;
    const recursionconversionrule = graphsData[40].image;
    
    let count = 0;
    function inception() {
        console.log('this is the count ==>',count)
        
        if (count > 3) {
            return setInceptionund('done')
        }
        count++;
        inception()
        return setCountvalue(count)
    }
    
    let countfixed = 0;
    function inceptionfixed() {
        console.log('this is the countfixed ==>',countfixed)
        
        if (countfixed > 3) {
            return setInceptionvalue('done!!')
        }
        countfixed++;
        return inceptionfixed()
        
    }
    
    const findFactorialIterative = (number) => {
        let answer = 1;
        
      
        if (number === 0 || number === 1) { // Updated base case condition
          return 1;
        }
      
        for (let i = 2; i <= number; i++) {
          answer = answer * i;
          console.log('factorial step by step ==>', answer / i  + '*' + i + '=', answer)  
          
        }
        
        setFactorialvalue(answer);
        return answer;
      };

      const findFactorialRecursive = (number) => {
        if (number === 2 ) {
            return 2;
        }
        let recursivevalue = number * findFactorialRecursive(number - 1);
        console.log('factorial step by step ==>', number  + '*' + findFactorialRecursive(number - 1) + '=', recursivevalue)
        setFactorialrecursive(recursivevalue)
        return recursivevalue;
      }

      const fibonacciRecursive = (n) => {
        if (n < 2) {
          return n;
        }
        const result = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);

        if (n === 3) {
            setFibonaccirecursive(result)
        }else if (n === 8) {
            setFibonaccirecursive8(result)
        }else if (n === 10) {
            setFibonaccirecursive10(result)
        }else if (n === 15) {
            setFibonaccirecursive15(result)
        }else if (n === 20) {
            setFibonaccirecursive20(result)
        }else if (n === 30) {
            setFibonaccirecursive30(result)
        }else if (n === 40) {
            setFibonaccirecursive40(result)
        }
        return result;
      };
      
      const fibonacciIterative = (n) => {
        let arr = [0,1];
        for (let i = 2; i < n + 1; i++) {
            arr.push(arr[i-2] + arr[i-1])
        }

        if (n === 3) {
            setFibonacciterative(arr[n])
        }else if (n === 30) {
            setFibonacciterative30(arr[n])
        }else if (n === 40) {
            setFibonacciterative40(arr[n])
        }else if (n === 50) {
            setFibonacciterative50(arr[n])
        }else if (n === 100) {
            setFibonacciterative100(arr[n])
        }

        return arr[n]
      };
    
    return(
        <DataStructuresWrapper>
            <h2> Algorithms </h2>

            <p>
                Algoritms is closely related to <strong> 'Data Structures' </strong> 
                because <strong> 'Data Structures' </strong> are the foundations for 
                algoritms,  by focusing in the specific use case or problem i am going 
                to solve, i will make use of a <strong> 'Data Structure' </strong> to write 
                an algorithm and eventually solve the problem
            </p>

            <h3>Recursion:</h3>

            <p>
                Recursion is a concept that develops when algorithms are implemented,
                is a <strong> 'function defined on itself' </strong>, and the reason 
                that this concept is so important is that is use in <strong> 'sorting' </strong>
                and <strong> 'searching' </strong> algorithms
            </p>

            <section className="code-block">
                <p>{`function inception() {`}</p>
                <p>{`   inception()`}</p>
                <p>{`}`}</p>
            </section>

            <p>
                let's make an example of recursion with a refactored example 
                of ,<strong> 'inception()' </strong> function as follows:
            </p>

            <section className="code-block">
                <p>{`let counter = 0;`}</p>
                <p>{`function inception() {`}</p>
                <p>{`   console.log(counter)`}</p>
                <p>{`   if ( counter > 3 ) {`}</p>
                <p>{`    return 'done' `}</p>
                <p>{`    }`}</p>
                <p>{`   counter++`}</p>
                <p>{`   inception()`}</p>
                <p>{`}`}</p>
            </section>

            <button onClick={inception}> Run inception function </button>

            <p>{countvalue }</p>


            <p>
                returns the value of <strong> '4' </strong> that is greater than <strong> '3' </strong>
                but it does not return the value of 'done', because after <strong> '4' </strong> the 
                function becomes <strong> 'undefined' </strong> because exceeds the callStack
            </p>

            <p>
                now a fix solution will be:
            </p>
           
            <section className="code-block">
                <p>{`let counterfixed = 0;`}</p>
                <p>{`function inceptionfixed() {`}</p>
                <p>{`   console.log(counterfixed)`}</p>
                <p>{`   if ( counterfixed > 3 ) {`}</p>
                <p>{`    return 'done' `}</p>
                <p>{`    }`}</p>
                <p>{`   counterfixed++`}</p>
                <p>{`   return inceptionfixed()`}</p>
                <p>{`}`}</p>
            </section>


            <button onClick={inceptionfixed}> inception fixed</button>

            <p>{inceptionvalue}</p>

            <p>
                And this specific like give me the result <strong> 'done' </strong>
                finishing the <strong> 'recursion' </strong> cycle <strong> ( in fact 
                the end of the recursion is by achieving the base case ) </strong>: 
            </p>

                <p><strong> {`   return inceptionfixed()`} </strong></p>

            <p>
                this concept is perfect applied to use cases that implies repetitive tasks,
                as traversing 
            </p>

            <p>
                Another example of use case is when i implement a <strong> 'nested' </strong> 
                javaScript object, <strong> 'because is an object defined in terms of itself' </strong>,
                as the example that follows
            </p>

            <section className="code-block">
                <p>{`const user = {`}</p>
                <p>{`   id:104,`}</p>
                <p>{`   email:'timmy@gmail.com',`}</p>
                <p>{`   personalinfo: {`}</p>
                <p>{`   name:'timmy',`}</p>
                <p>{`   address:{`}</p>
                <p>{`   line1:'westly st',`}</p>
                <p>{`   line1:'washmaher',`}</p>
                <p>{`   city:'wallas',`}</p>
                <p>{`   state: WY`}</p>
                <p>{`   }`}</p>
                <p>{`  } `}</p>
                <p>{` }` }</p>
            </section>

            <p>
                in this case i have the object <strong> 'personalinfo' </strong> defined
                in <strong> 'user' </strong>
            </p>

            <h3>
                Note: a use case can be when make a search based in a type of file ( as 
                for example mp3, and as result i got the result of all different files 
                recursively ), another example is when i apply the command ls -r 
                and i get as result all the files listed in a directory ( defining files 
                in a itself directory ) 
            </h3>

            <p>
                the concept of recursion in order to be applied to an algorithm has to 
                follo w some rules:
            </p>
            
            <ul>
                <li>
                    identify the <strong> 'base case' </strong>
                </li>
                <li>
                    identify the <strong> 'recursive case' </strong>
                </li>
                <li>
                    get closer and closer and return when needed. Usually you have to returns
                    the <strong> 'base case' </strong> and the <strong> 'recursive case' </strong>
                </li>
            </ul>

            <p>
                so taking as foundations these rules, let's apply them to the <strong> 'inception' </strong>exercise: 
            </p>

            <h3>1.- identify the <strong> 'base case' </strong>: </h3>

            <p>
                the base case will be the case when the return ends with the recursive
                case:
            </p>

            <section className="code-block">
                <p><strong>{`   if ( counterfixed > 3 ) {`}</strong></p>
                <p><strong>{`    return 'done' `}...</strong></p>           
            </section>

            <h3>2.- identify the <strong> 'recursive case' </strong>: </h3>

            <p>
                and the recursive case will be the case that makes the function 
                to continue the repetitive cycle until the condition is not 
                done:
            </p>

            <section className="code-block">
                <p><strong>{`   return inceptionfixed()`}</strong></p>
            </section>

            <h3>3.-  Get closer and closer and return when needed: </h3>

            <p>
                and by returning both the 3third rule is acomplish that <strong> 'both cases' </strong> 
                must be returned to avoid a <strong> 'stack overflow' </strong>
            </p>

            <h3>Factorial exercise: </h3>

            <p>
                let's make a second exercise, this will have to ways to be applied,
                the first will be with an <strong> 'iterative' </strong> approach and the second will be with a <strong> 'recursion' </strong> 
                approach <strong> ( applying the the 3 rules ) </strong>
            </p>

            <img src={factorialexercise} className="large" alt="factorial exercise"/>

            <p>
                let's see how a factorial works, let see <strong> 'iterative' </strong> approach <strong> ( check the console ) </strong>
            </p>

            <button onClick={() => findFactorialIterative(5)}>Find the factorial of <strong> '5' </strong> - <strong> (iterative approach) </strong></button>

            <p>the factorial value of <strong> '5' </strong> is: <strong> {factorialvalue} </strong></p>

            <p> let's see how a factorial works this time using <strong> 'recursion' </strong>  approach <strong> ( applying the the 3 rules ) </strong></p>

            <button onClick={() => findFactorialRecursive(5)}>Find the factorial of <strong> '5' </strong> <strong> - (recursive approach) </strong></button>

            <p>the value with the recursive approach will be: <strong> {factorialrecursive} </strong></p>     

            <h3>Fibonacci Sequence:</h3>

            <p>
               Fibonacci sequence is also a <strong> 'Recursion' </strong>, the representation of a fibonaci sequence as example 
               <strong> Fibonacci Sequence </strong> of number <strong> '7' </strong>
            </p>

            <img src={fibonaccirecurssion} className='large' alt="fibonacci recurssion"/>

            <p>
               The Fibonacci Sequence is a mathematical sequence where <strong> 'each number' </strong> is <strong> 'the sum' </strong> 
                of the <strong> 'two preceding numbers' </strong>. It starts with 0 and 1, and each subsequent number is the sum of the 
                two previous numbers. The sequence continues indefinitely, with numbers increasing rapidly. 
                It is often found in nature and has various applications in mathematics and computer science.     
            </p>

            <p>
                let's make an exercise where from a <strong> 'given number N' </strong> return the <strong> 'index value' </strong> of the Fibonacci sequence,
                where the sequence is:
            </p>

            <section className="code-block">
                <p><strong> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 </strong></p>
            </section>

           <p>
               The pattern sequence is that each value is the sum of the two previous values, that means
               <strong> N=5 is 2 + 3 </strong>
           </p>

           <p>
               The sequence will be written in code as this:
           </p>         

           <section className="code-block">
                <p>{`const fibonacciRecursive = (n) => {`}</p>
                <p>{`   if (n < 2 ) {`}</p>
                <p>{`   return n;`}</p>
                <p>{`   }`}</p>
                <p>{`   return fibonacciRecursive(n -1 ) + fibonacciRecursive(n - 2)`}</p>
                <p>{`   }`}</p>
           </section>

           <p>
               The sum of the two previous numbers, so will be <strong> 'n-1' </strong> at <strong> 'left' </strong>
               and <strong> 'n-2' </strong> at <strong> 'right' </strong>
           </p>

           <button onClick={() => fibonacciRecursive(3)}>Return Fibonacci sequence of <strong> '3' </strong> <strong> - (recursive approach) </strong></button>

           <p>{fibonaccirecursive}</p>

           <p>
               And returning fibonacci of <strong> '8' </strong>
           </p>

           <button onClick={() => fibonacciRecursive(8)}>Return Fibonacci sequence of <strong> '8' </strong> <strong> - (recursive approach) </strong></button>

           <p>{fibonaccirecursive8}</p>

           <p>
               And returning fibonacci of <strong> '10' </strong>
           </p>

           <button onClick={() => fibonacciRecursive(10)}>Return Fibonacci sequence of <strong> '21' </strong> <strong> - (recursive approach) </strong></button>

           <p>{fibonaccirecursive10}</p>

           <p>
               And returning fibonacci of <strong> '15' </strong>
           </p>

           <button onClick={() => fibonacciRecursive(15)}>Return Fibonacci sequence of <strong> '15' </strong> <strong> - (recursive approach) </strong></button>

           <p>{fibonaccirecursive15}</p>

           <p>
               And returning fibonacci of <strong> '20' </strong> and notice <strong> ( each iteration time complexity increases for this approach) </strong> 
           </p>
           
           <button onClick={() => fibonacciRecursive(20)}>Return Fibonacci sequence of <strong> '20' </strong> <strong> - (recursive approach) </strong></button>

           <p>{fibonaccirecursive20}</p>

           <p>
               And returning fibonacci of <strong> '30' </strong>, this operations had a <strong> delay </strong> 
           </p>

           <button onClick={() => fibonacciRecursive(30)}>Return Fibonacci sequence of <strong> '30' </strong> <strong> - (recursive approach) </strong></button>

           <p>{fibonaccirecursive30}</p>

           <p>
               And once returning fibonacci of <strong> '40' </strong> this will a complexity notable, the browser will <strong> 'stop' </strong> the page and 
               display a message of <strong> 'wait' </strong> 
           </p>

           <button onClick={() => fibonacciRecursive(40)}>Return Fibonacci sequence of <strong> '40' </strong> <strong> - (recursive approach) </strong></button>

           <p>{fibonaccirecursive40}</p>

           <p>
               Now the <strong> 'time complexity' </strong> of this approach will be:
           </p>

           <section className="code-block">
                <p>{`const fibonacciRecursive = (n) => {`}</p>
                <p>{`   if (n < 2 ) {`}</p>
                <p>{`   return n;`}</p>
                <p>{`   }`}</p>
                <p>{`   return fibonacciRecursive(n -1 ) + fibonacciRecursive(n - 2)`}</p>
                <p>{`   }`}</p>

                <p>O (2 ^ n)</p>
           </section>

            <h3>Fibonacci Iterative approach:</h3>

            <button onClick={() => fibonacciIterative(3)}>Return Fibonacci sequence of <strong> '3' </strong> <strong> - (iterative approach) </strong></button>  

            <p>{fibonacciterative}</p> 

            <p>
               And returning fibonacci of <strong> '30' </strong> 
            </p>

            <button onClick={() => fibonacciIterative(30)}>Return Fibonacci sequence of <strong> '30' </strong> <strong> - (iterative approach) </strong></button>

            <p>{fibonacciterative30}</p> 

            <p>
               And returning fibonacci of <strong> '40' </strong> 
            </p>

            <button onClick={() => fibonacciIterative(40)}>Return Fibonacci sequence of <strong> '40' </strong> <strong> - (iterative approach) </strong></button>

            <p>{fibonacciterative40}</p> 

            <p>
               And returning fibonacci of <strong> '50' </strong> 
            </p>

            <button onClick={() => fibonacciIterative(50)}>Return Fibonacci sequence of <strong> '50' </strong> <strong> - (iterative approach) </strong></button>

            <p>{fibonacciterative50}</p> 

            <p>
               And returning fibonacci of <strong> '100' </strong> 
            </p>

            <button onClick={() => fibonacciIterative(100)}>Return Fibonacci sequence of <strong> '100' </strong> <strong> - (iterative approach) </strong></button>

            <p>{fibonacciterative100}</p> 


            <h3>Recursion Vs Iterative tradeoffs: </h3>

            <p>
                <strong> 'Anything that can be implemented Recursively can be implemented Iterative' </strong>, and these two options give me two 
                options as an engineer, options each with their <strong> 'pros and const' </strong>, and these can be the following:
            </p>

            <h3>Recursion Pros:</h3>

            <ul>
                <li>
                    Dry code ( do not repeat code ) 
                </li>
                <li>
                    Readibility
                </li>
            </ul>

            <h3>Recursion Const:</h3>

            <ul>
                <li>
                    Large Stack ( creates a footprint every time that the function calls itself, space complexity )    
                </li>
            </ul>

            <h3>Iterative Pros:</h3>

            <ul>
                <li>
                    Performs faster ( more efficient )
                </li>
                <li>
                    
                </li>
            </ul>

            <h3>Iterative Const:</h3>

            <ul>
                <li>
                    Not as readable ( confusing code writting )    
                </li>
            </ul>

            <p>
                The main const are as the image as follows:
            </p>

            <img src={recursioniterativetradeoffs} className='large' alt="recursion iterative tradeoffs"/>

            <p>
                There are many ways to improve <strong> 'Recursion' </strong> ( that is orconverting to tree data structures or doing traversal) efficiency as 
                the <strong> 'Tail call Optimizitation' </strong> ( its a tecnique to call a function without incrementing the call stack )
            </p>

            <h3>
                Recursion to Convert to a Tree:
            </h3>

            <p>
                Along the problem solving there will be many situation where it is necessary to convert certain data structures 
                to trees and in order to achieve it, has to be through using <strong> 'Recursion' </strong>, and this is 
                when divide and conquer comes to play, using the set of rules as follows in the graph:
            </p>

            <img src={recursionconversionrule} className='large' alt="recursion conversion rule"/>        

            <h4>Note: An Iterative approach over a Recursive approach will applied depending on the complexity some cases a 
                Recursive approach can cause a complexity of 2 ^ N, that use from the worst Big O complexity
            </h4>

        </DataStructuresWrapper>
    )
}

export default AlgorithmsIntro;