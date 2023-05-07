import React, { useState } from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 20.14 - StackAndQueues - 
 * Features: 
 * 
 *     --> Work in progress developing 'Stack and Queues'.  
 * 
 *     --> Destructuring 'queuesandmethods' from the context.
 * 
 * Note: to generate url's dinamicly
 */

const StackAndQueues = () => {

    const { graphsData } = useAppContext();
    console.log('this is the graphsData ==>', graphsData)

    const stackandmethods = graphsData[12].image;
    const queuesandmethods = graphsData[13].image;

    const [ a_state, setA_state ] = useState(0);
    const [ b_state, setB_state ] = useState(0);
    const [ c_state, setC_state ] = useState(0);

    const callStack = () => {
        return (
                setA_state(1),
                setB_state(2),
                setC_state(3)
                )
            }

    
    
    return(
        
        <DataStructuresWrapper>
            <h2>Stack and Queues</h2>

            <p>
                <strong> 'Stack and Queues' </strong> are similar and they are 
                <strong> linear strcutures </strong> that allows to traverse 
                sequentially throught the data, the difference is how items 
                get removed from on to another, there is no random access 
                operations, and they can only access from the <strong> first or the last
                data </strong> item
            </p>

            <p>
                the limitation to access only throught the <strong> first or the last
                data </strong>, unlike hash tables or linked list i have less 
                methods with <strong> 'Stack and Queues' </strong>,  and this
                represents a benefit, because i can build hash tables and 
                linked list over <strong> 'Stack and Queues' </strong> to 
                limit the permforming operations resulting in a better
                control over the data
            </p>

            <h3>Stacks ( LIFO )</h3>

            <p>
                the analogy to analize stacks is that they are like a stack of plates,
                that i have a piece of data stack over other piece of data, and the only
                way to access is throught the top of the data
            </p>

            <p>
                <strong> 'LIFO' </strong> is because the last item in come in, is the 
                first item in come out
            </p>

            <img src={stackandmethods} alt='stack and methods'/>
            
            <p>

            </p>
            <h4>Note: use cases are language specifics as stackoverflow ( it is a stack 
            characteristic), when fucntions get called it is called in stack architecture
            (function that call another function), the undo and redo features are made
            with stacks, browser history (back and forth in the history )</h4>

            <h3>Stacks methods: ( LIFO )</h3>

            <ul>
                <li>
                    lookup complexity O(n):
                </li>

                <p>
                    lookup  is posible in a stack but is a heavier 
                    operation
                </p>

                <li>
                    pop complexity O(1):
                </li>

                <p>
                    removes the last item ( remove the plate )
                </p>

                <li>
                    push complexity O(1):
                </li>

                <p>
                    adds an item ( adds the plate )
                </p>

                <li>
                    peek complexity O(1):
                </li>

                <p>
                    view the top most item ( plate by analogy )
                </p>
            </ul>

            <h3>Queues ( FIFO )</h3>

            <p>
                the best way to think about <strong> queues </strong> is like
                an entrance to a roller coster, <strong> 'the first person that
                arrives in line, gets to go first' </strong>, in this sense 
                is the opposite to stacks because the first data to get in 
                in the queues is the first data to come out, and they are use a lot
                in programming 
            </p>

            <h4>Note: use cases are waiting lists apps, apps for buying tickets,
                restaurants app ( to check a table ), uber or lyft to get a ride if 
                you request first you get priority, printer queues the first person
                printing has priority
            </h4>

            <h4>Note: Why an array should not be use to develop a queue ?, becuase 
                the shifting of the indexes will made the queue very inefficient,
                when i remove an item by shifting iall the indexes have to be moved
                so will amke the queue really slow and with an array will be an 
                <strong> O(n) </strong> operation, with <strong> linked lists </strong>
                will be an O(1) operations becuase the way that a  linked list is 
                strcuture with a head and tail and everything is connected to a pointer
                so i have access right away to insert or delete.
            </h4>

            <h3>Queues methods: ( FIFO )</h3>

            <p>
                queues is like a waiting line <strong> ' the first in come in, is the first in come out' </strong> as follows in the picture:
            </p>

            <img src={queuesandmethods} alt='queues and methods'/>

            <ul>
                <li>
                    lookup complexity O(n):
                </li>

                <p>
                    usually it wont perform a lookup, but is posible to make it, and becuase
                    when a <strong> 'queue' </strong> is applied is because i want to be focus
                    in <strong> 'enqueue and dequeue' </strong>
                </p>

                <li>
                    enqueue complexity O(1):
                </li>

                <p>
                    as push adds the data in the queue
                </p>1

                <li>
                    denqueue complexity O(1):
                </li>

                <p>
                    as pop remove data from the queue
                </p>

                <li>
                    peek complexity O(1):
                </li>

                <p>
                    tell us whats the first data in the queue ( opposite to stack that will return the last piece of data of the stack )
                </p>

            </ul>

            <h3>Concepts that involves Stack and Queues in javaScript:</h3>

            <p>
                Implementing stacks in javascript involves concepts as <strong> memory heap </strong>
                (limited ammount of memory ) and , <strong> memory leak </strong> ( when i hve unused memory
                - that's why global variables are bad because if i forgot to cleaned up 
                they provoque a memory leak ), and the other concept is the <strong> callstack </strong>

            </p>

            <h3>Stack and Queues exercise:</h3>

            <p>
                i have the following stack:         
            </p>

            <button onClick={callStack}> Generate the stack </button>
      
            <p>
                value of <strong> 'a' </strong>: {a_state}
            </p>

            <p>
                value of <strong> 'b' </strong>:{b_state}
            </p>

            <p>
                value of <strong> 'c' </strong>: {c_state}
            </p>

            { callStack ? console.log('values of the stack ==>', a_state, b_state, c_state) : null}

            
        </DataStructuresWrapper>
    )
}

export default StackAndQueues