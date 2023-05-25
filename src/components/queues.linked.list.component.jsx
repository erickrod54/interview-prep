import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 24.10 - QueueAndLinkedList  
 * - Features: 
 * 
 *     --> Building 'printList()' in Queue Linked List.
 * 
 * Note: 'printList()' method is necessary in order to render
 * the enqueue values by filling an empty array.
 */

const QueueAndLinkedList = () => {

    const [ queuepeek, setQueuepeek ] = useState([]);
    const [ enqueuevalue, setEnqueuevalue ] = useState([]);

    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    class Queue { 
        constructor(){
            /**first in line, last in line */
            this.first = null;
            this.last = null;
            this.length = 0
        }

        /**get the very first item */
        peek(){
            return this.first;
        }

        /** add an item to the queue*/
        enqueue(value){
            const newNode = new Node(value);
            if (this.length === 0) {
                this.first = newNode;
                this.last = newNode;
            }else{
                this.last.next = newNode;
                this.last = newNode;
            }
            this.length++;
            return this;
        }

        /**removes an item from the queue*/
        /**stack vs queue, queue removes from the front of the list */
        /**what ever is first */
        dequeue(){

        }

        printList() {
            const array = [];
            let currentNode = this.first;
            while (currentNode !== null) {
                array.push(currentNode.value, ',');
                currentNode = currentNode.next;
            }
            return array;
        }
    }

    const handleQueuepeek = () => {
        return(
            setQueuepeek(myQueue.peek()),
            cleanupQueuepeek(),
            console.log('queuepeek from Queue! ==>', queuepeek)
        )
    }

    const cleanupQueuepeek = () => {

        setTimeout(() => {
            setQueuepeek('Hit up to get the queue peek')
        }, 6000)
    }

    const myQueue = new Queue();
    
    return(
        <DataStructuresWrapper>
            <h2>QueueAndLinkedList</h2>

            <h3>Peek method:</h3>

            <p>
                The first method that i am going to implement in the linked list for queue is 
                <strong> 'peek method' </strong>, that get the first item of the line or queue
            </p>

            <button onClick={handleQueuepeek}> get the peek of the queue </button>

            <p>{queuepeek === null ? 'null' : queuepeek}</p>

            <p>{queuepeek === null ? <span> 'i get <strong> 'null' </strong> because the queue is <strong> 'empty' </strong></span> : ''}</p>

        </DataStructuresWrapper>
    )
}

export default QueueAndLinkedList