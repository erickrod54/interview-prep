import React from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 18.01 - LinkedLists - 
 * Features: 
 * 
 *     --> Placing resources for linklist to show how 
 *         does it work   
 * 
 *     --> Work in progress developing LinkedList Concept.   
 * 
 * Note: Pending to threath images for better visualization
 */

const LinkedLists = () => {

    const { graphsData } = useAppContext();
    console.log('graphsData ==> ', graphsData);

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
                a <strong> tail</strong> as the picture
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