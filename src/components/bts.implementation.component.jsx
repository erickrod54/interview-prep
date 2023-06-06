import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 26.04 - 
 * BTSComponent - Features: 
 * 
 *     --> Developing 'insert' method.
 * 
 *     --> Building handleInsertvalue handler.
 * 
 * Note: With this method i insert the value 
 * of nine and i mutated to the state value
 */

const BTSComponent = () => {

    const { graphsData } = useAppContext()

    /**binarysearchtreeimplementation asset */
    console.log(' graphsData ==> ', graphsData)
    const binarysearchtreeimplementation = graphsData[21].image; 

    /**states for insert method BTS */
    const [ insertvalue, setInsertvalue ] = useState([]);

    class Node {
        constructor( value ){
            this.left = null;
            this.right = null;
            this.value = value;
        }
    }

    class BinarySearchTree{
        constructor(){
            this.root = null;
        }

        /**here i build the search method in the BTS data structure */
        insert( value ){
            const newNode = new Node(value);
            if (this.root === null) {
                this.root = newNode;
            }
        }

        lookup( value ){
            
        }
    }

    const handleInsertvalue = () => {
        setInsertvalue(9)   
    }

    return(
        <DataStructuresWrapper>
            <h2>BTS Implementation ( Binary Search Tree - BTS )</h2>

            <p>
                so the search tree that is going to be implemented is as the graph
                as follows:
            </p>

            <img src={binarysearchtreeimplementation} className='large' alt='binary search tree implementation'/>

        </DataStructuresWrapper>
    )
}

export default BTSComponent;