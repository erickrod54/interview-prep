import React from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 20.08 - StackAndQueues - 
 * Features: 
 * 
 *     --> Work in progress developing 'Stack and Queues'.  
 * 
 *     --> Developing 'Queues methods: ( FIFO )'. 
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

            <h3>Queues methods: ( FIFO )</h3>

            <p>

            </p>

            <ul>
                <li>
                    lookup
                </li>

                <p>

                </p>

                <li>
                    enqueue
                </li>

                <p>

                </p>

                <li>
                    denqueue
                </li>
                <li>
                    peek
                </li>

                <p>

                </p>

            </ul>
            
        </DataStructuresWrapper>
    )
}

export default StackAndQueues