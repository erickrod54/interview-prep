import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 21.14 - StacksAndLinkedList  
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

            

        </DataStructuresWrapper>
    )
}

export default StacksAndLinkedList;