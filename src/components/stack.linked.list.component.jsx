import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 23.02 - StacksAndLinkedList  
 * - Features: 
 * 
 *     --> Work in progress developing a Linked 
 *         List for the Stack.
 * 
 *     --> Building pop method.
 * 
 * Note:'Stack' structure use objects and 'StackusingArrays' will
 * use arrays by changing the constructor object for an array
 */

const StacksAndLinkedList = () => {

    /**linked list stack using objects */
    const [ peek, setPeek ] = useState('')
    const [ pushvalue, setPushvalue ] = useState([])
    const [ peekfrompush, setPeekfrompush ] = useState([])
    const [ popvalue, setPopvalue ] = useState([])

    /**linked list stack using arrays */
    const [ peekfromarray, setPeekfromarray ] = useState('')
    const [ pushValuetoarray, setpushValuetomarray ] = useState([]);
    const [ peekfrompustoarray, setPeekfrompustoarray ] = useState([]);
    const [ popvaluefromarray, setPopvaluefromarray ] = useState([])

    

    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    /**This Stack is implemented with objects */ 
    class Stack {
        constructor(){
            this.top = null;
            this.bottom = null;
            this.length = 0
        }

        peek(){
            cleanupPeek()
            return this.top;
        }

        push(value){
            /**i can create a new object or instatiate as i am doing it 
             * new Node*/
             const newNode = new Node(value)
             if (this.length === 0) {
                 this.top = newNode;
                 this.bottom = newNode;
             }else{
                 const holdingPointer = this.top;
                 this.top = newNode;
                 this.top.next = holdingPointer;
             }
             this.length++;
             return this;
        }

        printList() {
            const array = [];
            let currentNode = this.top;
            while (currentNode !== null) {
                array.push(currentNode.value, ',');
                currentNode = currentNode.next;
            }
            return array;
        }
        
        pop(){
            if (!this.top) {
                return null 
            }
            if (this.top === this.bottom) {
                return this.bottom = null;
            }
            
            this.top = this.top.next;
            this.length--;
            return this
        }

      

        //
    }

    /**This Stack is implemented with arrays */ 
    class StackusingArrays {
        /**constructor changes the emoty objects for an empty array */
        constructor(){
            this.array = []
        }

        peek(){
            return this.array[this.array.length-1]
        }

        push(value){
            /**i just call the push method pre built for arrays */
            this.array.push(value);
            return this;
        }

        printList() {
            const array = [];
            let currentNode = this.top;
            while (currentNode !== null) {
                array.push(currentNode.value, ',');
                currentNode = currentNode.next;
            }
            return array;
        }
        
        pop(){
            this.array.pop();
            return this;
        }

      

        //
    }

    

    const myStack = new Stack();

    const myStackusingArrays = new StackusingArrays();

    const handlePeekfromarray = () => {
        setPeekfromarray(myStackusingArrays.peek());
        console.log(peekfromarray)
    }

    const handlePushvaluetoarray = () => {
        myStackusingArrays.push(' google ')
        myStackusingArrays.push(' discord ')
        myStackusingArrays.push(' udemy ')
        console.log('push values array stack ==> ',myStackusingArrays)
    
        /**this time does not need verification with optional chaining 
         * because the stack is working with arrays and not with objects*/
        const peekValue = myStackusingArrays.peek();
        console.log('the peekValue is ==> ',peekValue)
        setPeekfrompustoarray(peekValue);

        /**here i acces to the array and set it as the value */
        setpushValuetomarray(myStackusingArrays.array)
    }

    const handlePeek = () => {
        setPeek(myStack.peek())
        console.log(peek)
    }

    const cleanupPeek = () => {
        setTimeout(() => {
            setPeek('value cleared - hit button again')
        }, 2000)
    }
    
    const handlePushvalue = () => {
        myStack.push(' google ')
        myStack.push(' discord ')
        myStack.push(' udemy ')
        console.log('push values stack ==> ',myStack)

        /**if the value is not verified will trow the following error */
        /**Uncaught Error: Objects are not valid as a React child (found: object with keys {value, next}). If you meant to render a collection of children, use an array instead.*/
        /** optional chaining operator (?.) and the nullish coalescing operator (??)*/
        const peekValue = myStack.peek()?.value ?? "";
        console.log('the peekValue is ==> ',peekValue)
        setPeekfrompush(peekValue);

        setPushvalue(myStack.printList())
    }

    const handlePopvalue = () => {
        myStack.push(' google ')
        myStack.push(' discord ')
        myStack.push(' udemy ')
        myStack.pop()
        console.log('push values stack ==> ',myStack)
        setPopvalue(myStack.printList())
      }
    
    return(
        <DataStructuresWrapper>
            <h2>Stacks And Linked List</h2>

            <p>
                For the stack i am going to create the methods:
            </p>

            <ul>
                <li>
                    <strong> peek() </strong>
                </li>
                <li>
                    <strong> push() </strong>
                </li>
                <li>
                    <strong> pop() </strong>
                </li>
            </ul>

            <h3>Peek method:</h3>

            <p>
                the <strong> peek </strong> method will get the plate from the top 
                of the stack
            </p>

            <button onClick={handlePeek}> handle peek </button>

            <p>{peek === null ? 'null' : peek}</p>


            <h3>Push mehtod:</h3>

            <p>
                the push method is going to insert a value into an array using the linked list 
            </p>

            <button onClick={handlePushvalue}>insert a value into the stack</button>

            <p>[{pushvalue}]</p>

            <p>
                and if i want to know the <strong> last value added to the last list </strong>:
            </p>

            <p>{peekfrompush}</p>

            <h3>Pop mehtod:</h3>

            <p>
                and if i want to know the <strong> pop the value of the top </strong>:
            </p>

            <button onClick={handlePopvalue}>pop a value into the stack</button>

            <p>{popvalue}</p>
            
            <h2>Now the same linked list implementing Arrays:</h2>

            <h3>Peek method:</h3>

            <p>
                the <strong> peek </strong> method will get the plate from the top 
                of the stack from an array
            </p>

            <button onClick={handlePeekfromarray}> handle peek from an array</button>

            <p>{peekfromarray === undefined ? 'undefined' : peekfromarray}</p>

            <p>{peekfromarray === undefined ? <span>it is <strong> 'undefined' </strong> because is an empty array</span> : null}</p>

            <h3>Push method:</h3>

            <p>
                the push method will push items into the array stack
            </p>

            <button onClick={handlePushvaluetoarray}> handle push to an array</button>
        
            <p>[{pushValuetoarray +','}]</p>

            <p>
            and if i want to know the <strong> last value added to the last item of the array </strong>:
            </p>

            <p>{peekfrompustoarray}</p>

        </DataStructuresWrapper>
    )
}

export default StacksAndLinkedList;