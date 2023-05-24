import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 24.07 - QueueAndLinkedList  
 * - Features: 
 * 
 *     --> Rendering 'queuepeek' value.
 * 
 * Note: This template will have three methods as peek,
 * queue, and dequeue
 */

const QueueAndLinkedList = () => {

    const [ queuepeek, setQueuepeek ] = useState([])

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

        }

        /**removes an item from the queue*/
        /**stack vs queue, queue removes from the front of the list */
        /**what ever is first */
        dequeue(){

        }
    }

    const handleQueuepeek = () => {
        return(
            setQueuepeek(myQueue.peek()),
            console.log('queuepeek from Queue! ==>', queuepeek)
        )
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