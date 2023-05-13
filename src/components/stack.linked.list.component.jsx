import React from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 21.12 - StacksAndLinkedList  
 * - Features: 
 * 
 *     --> Work in progress developing a Linked 
 *         List for the Stack. 
 * 
 * Note: In this component is going to be develop 
 * how stacks works with linked list to create a new
 * data structure.
 */

const StacksAndLinkedList = () => {

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

        }

        push(value){

        }

        pop(){

        }

        //
    }

    const myStack = new Stack();

    return(
        <DataStructuresWrapper>
            <h2>Stacks And Linked List</h2>

        </DataStructuresWrapper>
    )
}

export default StacksAndLinkedList;