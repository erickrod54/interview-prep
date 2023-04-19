import React from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 18.03 - LinkedLists - 
 * Features:
 * 
 *     --> Destructuring 'basket' data from the context.    
 * 
 *     --> Work in progress developing LinkedList Concept.   
 * 
 * Note: Basket data is to make an example of linkedlists
 */

const LinkedLists = () => {

    const { graphsData, basket } = useAppContext();
    //console.log('graphsData ==> ', graphsData);
    console.log('the example basket data', basket)

    const linklistcomposition = graphsData[8].image;
    const linklistmethods = graphsData[9].image;

    return(
        <DataStructuresWrapper>
            <h2>Linked Lists</h2>

            <p>
                Linked list is for use case where i need 
            </p>

            <p>
                linked list is compound by a <strong> head</strong> and
                a <strong> tail</strong> as the picture, each block 
                represent a <strong> 'node'</strong> and each node has
                the <strong> 'data' ( orange )</strong> that i want to store 
                and the <strong> pointer ( green )</strong> to the next
                <strong> node</strong> 
            </p>

            <p>
                most of linked list we dont know the exact number of elements
                that contain that's why the <strong> 'tail'</strong> is 
                <strong> null</strong> terminated, because that way 
                indicates the end of the linked list 
            </p>

            <img src={linklistcomposition} alt="link list composition"/>

            <p>
                there are good resources to understand the the way
                that link list works, as the following
            </p>

            <a href="https://visualgo.net/en">How linked list works</a>

            <h3>link list methods:</h3>

            <p>
                link lists has a set of methods and they have their comlexity
                according with the operation that perform each
            </p>

            <img src={linklistmethods} alt="link list methods"/>
            
            and this methods:

            <ul>
                <li>
                    prepend
                </li>
                <li>
                    append
                </li>
                <li>
                    lookup
                </li>
                <li>
                    insert
                </li>
                <li>
                    delete
                </li>
            </ul>

        </DataStructuresWrapper>
    )
}

export default LinkedLists;