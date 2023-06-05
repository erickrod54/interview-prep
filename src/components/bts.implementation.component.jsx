import React from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 26.01 - 
 * BTSComponent - Features: 
 * 
 *     --> Displaying asset.
 *      
 *     --> Starting to implement BTS.
 * 
 * Note: In next versions insert, lookup and 
 * remove methos are going to be developed
 */

const BTSComponent = () => {

    const { graphsData } = useAppContext()

    /**binarysearchtreeimplementation asset */
    console.log(' graphsData ==> ', graphsData)
    const binarysearchtreeimplementation = graphsData[21].image; 

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

        insert( value ){

        }

        lookup( value ){
            
        }
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