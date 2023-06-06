import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 26.07- 
 * BTSComponent - Features: 
 * 
 *     --> Developing 'insert' method.
 * 
 *     --> Building cleanupInsertvalue method.
 * 
 * Note: this printList uses a traverse 
 * method so can iterate over the tree 
 * to insert the value
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

    class BinarySearchTree {
        constructor() {
          this.root = null;
        }
    
        insert(value) {
          const newNode = new Node(value);
          if (this.root === null) {
            this.root = newNode;
          } 
        }
    
        lookup(value) {}
    
        printList() {
          const array = [];
          let currentNode = this.root;
    
          const traverse = (node) => {
            if (node !== null) {
              traverse(node.left);
              array.push(node.value);
              traverse(node.right);
            }
          };
    
          traverse(currentNode);
          return array;
        }
      }

    /**here i instantiate the tree */
    const BTS = new BinarySearchTree();

    const handleInsertvalue = () => {
        return(
            BTS.insert(9),
            setInsertvalue(BTS.printList())
        )   
    }

    const cleanupInsertvalue = () => {
        setTimeout(() => {
            return(
                setInsertvalue(0)
            )
        }, 6000)
    }

    return(
        <DataStructuresWrapper>
            <h2>BTS Implementation ( Binary Search Tree - BTS )</h2>

            <p>
                so the search tree that is going to be implemented is as the graph
                as follows:
            </p>

            <img src={binarysearchtreeimplementation} className='large' alt='binary search tree implementation'/>

            <p>
                let's insert the value of <strong> '9' </strong>:
            </p>

            <button onClick={handleInsertvalue}>insert the value of <strong> '9' </strong></button>

            <p>{insertvalue}</p>

        </DataStructuresWrapper>
    )
}

export default BTSComponent;