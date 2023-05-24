import React from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 24.03 - QueueAndLinkedList  
 * - Features: 
 * 
 *     --> Building 'peek' method por Queue.
 * 
 * Note: This template will have three methods as peek,
 * queue, and dequeue
 */

const QueueAndLinkedList = () => {

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
    
    return(
        <DataStructuresWrapper>
            <h2>QueueAndLinkedList</h2>
        </DataStructuresWrapper>
    )
}

export default QueueAndLinkedList