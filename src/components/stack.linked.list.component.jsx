import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 21.15 - StacksAndLinkedList  
 * - Features: 
 * 
 *     --> Work in progress developing a Linked 
 *         List for the Stack.
 * 
 *     --> Building handlePeek handler to mutate the
 *         peek state 
 * 
 * Note: In this component is going to be develop 
 * how stacks works with linked list to create a new
 * data structure.
 */

const StacksAndLinkedList = () => {

    const [ peek, setPeek ] = useState('')

    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    class Stack {
        constructor(){
            this.top = null;
            this.bottom = null;
            this.length = 0
        }

        peek(){
            
            return this.top;
        }

        push(value){

        }

        pop(){

        }

        //
    }

    const myStack = new Stack();

    const handlePeek = () => {
        setPeek(myStack.peek())
        console.log(peek)
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
            

        </DataStructuresWrapper>
    )
}

export default StacksAndLinkedList;