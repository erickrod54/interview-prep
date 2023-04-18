import React from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 18.00 - LinkedLists - 
 * Features: 
 * 
 *     --> Work in progress developing LinkedList Concept.   
 * 
 * Note: to generate url's dinamicly
 */

const LinkedLists = () => {

    const { graphsData } = useAppContext();
    console.log('graphsData ==> ', graphsData);

    const linklistcomposition = graphsData[8].image;

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
            
            <ul>

            </ul>

        </DataStructuresWrapper>
    )
}

export default LinkedLists;