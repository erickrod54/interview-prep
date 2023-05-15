import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 22.01 - StacksAndLinkedList  
 * - Features: 
 * 
 *     --> Work in progress developing a Linked 
 *         List for the Stack.
 * 
 *     --> Rendering push values. 
 * 
 * Note: printList method will help the handler to print 
 * the list by using the handler and states.
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
    
    const handlePushvalue = () => {
        myStack.push(' google ')
        setPushvalue(myStack.printList())
        return console.log(myStack.printList())
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

        </DataStructuresWrapper>
    )
}

export default StacksAndLinkedList;