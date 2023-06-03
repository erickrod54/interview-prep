import React from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 25.19 - 
 * BTSComponent - Features: 
 * 
 *     --> Developing BTS template.
 * 
 * Note: In next versions insert, lookup and 
 * remove methos are going to be developed
 */

const BTSComponent = () => {

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

        </DataStructuresWrapper>
    )
}

export default BTSComponent;