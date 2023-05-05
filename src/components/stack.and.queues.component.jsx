import React from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 20.09 - StackAndQueues - 
 * Features: 
 * 
 *     --> Work in progress developing 'Stack and Queues'.  
 * 
 *     --> Developing 'Queues methods: ( FIFO )' concept. 
 * 
 * Note: to generate url's dinamicly
 */

const StackAndQueues = () => {

    const { graphsData } = useAppContext();
    console.log('this is the graphsData ==>', graphsData)

    const stackandmethods = graphsData[12].image;
    
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
                so will amke the queue really slow
            </h4>

            <h3>Queues methods: ( FIFO )</h3>

            <p>

            </p>

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
            
        </DataStructuresWrapper>
    )
}

export default StackAndQueues