import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 21.18 - StacksAndLinkedList  
 * - Features: 
 * 
 *     --> Work in progress developing a Linked 
 *         List for the Stack.
 * 
 *     --> Building states for push method. 
 * 
 * Note: In this component is going to be develop 
 * how stacks works with linked list to create a new
 * data structure.
 */

const StacksAndLinkedList = () => {

    const [ peek, setPeek ] = useState('')
    const [ pushvalue, setPushvalue ] = useState([])
    

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
            cleanupPeek()
            return this.top;
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

    const cleanupPeek = () => {
        setTimeout(() => {
            setPeek('value cleared - hit button again')
        }, 2000)
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
            

        </DataStructuresWrapper>
    )
}

export default StacksAndLinkedList;