import React, { useState } from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 23.13 - StackAndQueues - 
 * Features: 
 * 
 *     --> Migrating CALL STACK && CALLBACK QUEUE states.
 * 
 *     --> Destructuring CALL STACK && CALLBACK QUEUE states.
 * 
 * Note: With the knowledge adquire so far i build a clean
 * up function to clear the values for CALLSTACK handler,
 * and in this version time has been reduce from 10 seconds 
 * to 5 seconds
 */

const StackAndQueues = () => {

    const { graphsData, 
            callStack, 
            a_state, 
            b_state, 
            c_state, 
            a_time_state,
            b_time_state,
            c_time_state, 
            setA_time_state,
            setB_time_state,
            setC_time_state  } = useAppContext();
    console.log('this is the graphsData ==>', graphsData)

    const stackandmethods = graphsData[12].image;
    const queuesandmethods = graphsData[13].image;
    const asynchronousprocessing = graphsData[14].image;
    const exerciseinasynchronousprocessing = graphsData[15].image


    //CALL STACK && CALLBACK QUEUE states for zero seconds case
    const [ a_zero_state, setA_zero_state ] = useState(0);
    const [ b_zero_state, setB_zero_state ] = useState(0);
    const [ c_zero_state, setC_zero_state ] = useState(0);

    

    //CALL STACK && CALLBACK QUEUE handler
    const callSetTimeoutStack = () => {
        return (
                setA_time_state(1),
                setTimeout(() => {
                    setB_time_state(2)
                }, 2000),
                setC_time_state(3),
                cleanUpSetTimeoutfunction()
                )
    }

    //CALL STACK && CALLBACK QUEUE cleanup function
    const cleanUpSetTimeoutfunction = () => {
        setTimeout(() => {
            return(
                setA_time_state(0),
                setB_time_state(0),
                setC_time_state(0)
            )
        }, 6000)
    }

    //CALL STACK && CALLBACK QUEUE cleanup function for zero
    const cleanUpSetTimeoutZerofunction = () => {
        setTimeout(() => {
            return(
                setA_zero_state(0),
                setB_zero_state(0),
                setC_zero_state(0)
            )
        }, 6000)
    }

    //CALL STACK && CALLBACK QUEUE handler for 0 seconds case
    const callSetTimeoutStackZero = () => {
    return (
            setA_zero_state(1),
            setTimeout(() => {
                setB_zero_state(2)
            }, 0),
            setC_zero_state(3),
            cleanUpSetTimeoutZerofunction()
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

            <p>
                after generating the stack i have to know the concept of Synchronous and Asynchronous Processing.
            </p>

            <h3>Asynchronous Processing:</h3>

            <p>
                the stack involves <strong> the JavaScript enviroment </strong>, so all the  
                operations performed, by setting a <strong> 'setTimeout' </strong>, operations
                are divided between the <strong> 'web application' </strong> and the <strong> WEB API's </strong>
                this is call <strong> 'asynchronousprocessing' </strong>, as the picture that
                follows:
            </p>

            <h3>Asynchronous VS Synchronous Processing:</h3>

            <p>
                Syncchronous processing takes place in the callstack, everything is executed in order,
                so one process does not get exceuted until the next on the stack is done, the perefect
                analogy is a phone call, you're calling to get an answer and in the meantime you just
                wait and do nothing until the call get answered, and asynchronous is when the javaScript
                Runtime enviroment works with a setTimeout and is executing things in paralel until the 
                callback queue is done and execute the pending processes, the analogy is like a text message 
                you send it, but you do things while you wait the answer
            </p>

            <img src={asynchronousprocessing} alt='asynchronous processing'/>

            <p>
                the stack generated is located in the <strong> 'Call Stack' </strong>
            </p>

            <p>
                so i have the following code that implements a <strong> 'setTimeout' </strong>:
            </p>

            <section className="code-block">
               <p>{`console.log('1');`}</p>
               <p>{`setTimeout(() => {`}</p>
               <p>{`console.log('2')`}</p>
               <p>{`}, 2000)`}</p>
               <p>with a <strong> time of 2 seconds </strong></p>
               <p>{`console.log(3)`}</p> 
            </section>

            <p>
                So, let's Generate the stack again:         
            </p>

            <button onClick={callSetTimeoutStack}> Generate the stack with setTimeOut</button>

                <p>
                value of <strong> 'a' </strong>: {a_time_state}
            </p>

            <p>
                value of <strong> 'b' </strong>:{b_time_state} 
            </p>

            <p>{b_time_state === 2 ?  'after 2 seconds b value get rendered'  : null}</p>

            <p>
                value of <strong> 'c' </strong>: {c_time_state}
            </p>

            <p>
                so what is the case when i set the time to <strong> '0' </strong>
                seconds, as follows
            </p>     

             <section className="code-block">
               <p>{`console.log('1');`}</p>
               <p>{`setTimeout(() => {`}</p>
               <p>{`console.log('2')`}</p>
               <p>{`}, 0)`}</p>
               <p>with a <strong> time of 2 seconds </strong></p>
               <p>{`console.log(3)`}</p> 
            </section>

            <p>
                so lets generate this stack with a time of <strong> '0' </strong>
            </p>

            <button onClick={callSetTimeoutStackZero}>Generate the stack with setTimeOut for zero seconds </button>



            <p>
                value of <strong> 'a' </strong>: {a_zero_state}
            </p>

            <p>
                value of <strong> 'c' </strong>: {c_zero_state}
            </p>    
            
            <p>
                value of <strong> 'b' </strong>:{b_zero_state} 
            </p>

            <p>
                 the <strong> 'zero case' </strong> when the time in the setTimeout is 
                 set as <strong> 'zero' </strong>, anyway will have to render the 
                 values of <strong> '1' </strong> and <strong> '3' </strong> first 
                 and then the value of <strong> '2' </strong> because it has to go 
                 to the <strong> 'WEB API's' </strong> and then <strong> 'CALLBACK QUEUES' </strong>
                 and then before hit the stack to <strong> 'Event loop' </strong>
            </p>

            <h3>
                Note: With the evolution in processing that are faster than before, this 
                process can look that happen at the same, but is not, and if it is tested
                in lower processor, or with proccesing under stress of operations
                 you can tell the difference
            </h3>

            <p>
                after the <strong> 'setTimeout' </strong>, has been set will
                 divide operations between the <strong> 'web application' </strong> and the 
                 <strong> WEB API's </strong> this is call <strong> 'asynchronous processing' 
                </strong> activating the rest of the pieces that compound the
                <strong> 'JavaScript Runtime Enviroment' </strong>, as the picture 
                that follows:
            </p>

            <img src={exerciseinasynchronousprocessing} alt='exercise in synchronous processing'/>
            
        </DataStructuresWrapper>
    )
}

export default StackAndQueues