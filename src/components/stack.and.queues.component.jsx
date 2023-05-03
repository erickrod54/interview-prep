import React from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 20.06 - StackAndQueues - 
 * Features: 
 * 
 *     --> Work in progress developing 'Stack and Queues'.   
 * 
 * Note: to generate url's dinamicly
 */

const StackAndQueues = () => {
    
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
            
        </DataStructuresWrapper>
    )
}

export default StackAndQueues