import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 24.06 - QueueAndLinkedList  
 * - Features: 
 * 
 *     --> Building 'handleQueuepeek' handler.
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
        </DataStructuresWrapper>
    )
}

export default QueueAndLinkedList