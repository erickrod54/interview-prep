import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 24.12 - QueueAndLinkedList  
 * - Features: 
 * 
 *     --> Rendering 'enqueuevalue' value.
 */

const QueueAndLinkedList = () => {

    const [queuepeek, setQueuepeek] = useState([]);
    const [enqueuevalue, setEnqueuevalue] = useState([]);

    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    class Queue {
        constructor() {
            /**first in line, last in line */
            this.first = null;
            this.last = null;
            this.length = 0;
        }

        /**get the very first item */
        peek() {
            return this.first;
        }

        /** add an item to the queue*/
        enqueue(value) {
            const newNode = new Node(value);
            if (this.length === 0) {
                this.first = newNode;
                this.last = newNode;
            } else {
                this.last.next = newNode;
                this.last = newNode;
            }
            this.length++;
            return this;
        }

        /**removes an item from the queue*/
        /**stack vs queue, queue removes from the front of the list */
        /**what ever is first */
        dequeue() {}
        
        printList() {
            const array = [];
            let currentNode = this.first;
            while (currentNode !== null) {
                array.push(currentNode.value, ",");
                currentNode = currentNode.next;
            }
            return array;
        }
    }

    const myQueue = new Queue();

    const handleQueuepeek = () => {
        return (
            setQueuepeek(myQueue.peek()),
            cleanupQueuepeek(),
            console.log("queuepeek from Queue! ==>", queuepeek)
        );
    };

    const cleanupQueuepeek = () => {
        setTimeout(() => {
            setQueuepeek("Hit up to get the queue peek");
        }, 6000);
    };

    const handleEnqueue = () => {
        return (
            myQueue.enqueue("Joy"),
            setEnqueuevalue(myQueue.printList())
        );
    };

    return (
        <DataStructuresWrapper>
            <h2>QueueAndLinkedList</h2>

            <h3>Peek method:</h3>

            <p>
                The first method that I am going to implement in the linked list for the queue is{" "}
                <strong> 'peek method' </strong>, which gets the first item of the line or queue.
            </p>

            <button onClick={handleQueuepeek}> get the peek of the queue </button>

            <p>{queuepeek === null ? "null" : queuepeek}</p>

            <p>
                {queuepeek === null ? (
                    <span>
                        {" "}
                        'I get <strong> 'null' </strong> because the queue is <strong> 'empty' </strong>"
                    </span>
                ) : (
                    ""
                )}
            </p>

            <h3>Enqueue method:</h3>

            <p>
                The second method is enqueue, this method <strong> 'adds an item to the queue' </strong>
            </p>

            <button onClick={handleEnqueue}> Enqueue an item to the queue or line</button>

            <p>[{enqueuevalue}]</p>

            <p>{enqueuevalue ? <span> i add the value of <strong> '{enqueuevalue}' </strong> to the queue</span> : null}</p>
        </DataStructuresWrapper>
    );
};

export default QueueAndLinkedList;