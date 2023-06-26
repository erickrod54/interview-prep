import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 28.19 - 
 * AlgorithmsIntro - Features: 
 * 
 *     --> Building basic 'AlgorithmsIntro' Component.
 * 
 *     --> Developing recursion concept
 * 
 * Note: the first assets added to 'graphsData'
 * are for big notation app
 */

const AlgorithmsIntro = () => {

    
    // eslint-disable-next-line
    const [ inceptionund, setInceptionund ] = useState();
    const [ countvalue, setCountvalue ] = useState();
    const [ inceptionvalue, setInceptionvalue ] = useState()
    const [ factorialvalue, setFactorialvalue ] = useState()
    const [ factorialrecursive, setFactorialrecursive ] = useState()
    
    
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
                finishing the <strong> 'recursion' </strong> cycle:
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

            <p>
                let's see how a factorial works, let see <strong> 'iterative' </strong> approach <strong> ( check the console ) </strong>
            </p>

            <button onClick={() => findFactorialIterative(5)}>Find the factorial of <strong> '5' </strong> - <strong> (iterative approach) </strong></button>

            <p>the factorial value of <strong> '5' </strong> is: <strong> {factorialvalue} </strong></p>

            <p> let's see how a factorial works this time using <strong> 'recursion' </strong>  approach <strong> ( applying the the 3 rules ) </strong></p>

            <button onClick={() => findFactorialRecursive(5)}>Find the factorial of <strong> '5' </strong> <strong> - (recursive approach) </strong></button>

            <p>the value with the recursive approach will be: <strong> {factorialrecursive} </strong></p>        

        </DataStructuresWrapper>
    )
}

export default AlgorithmsIntro;