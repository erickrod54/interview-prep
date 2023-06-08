import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 26.19 - 
 * BTSComponent - Features: 
 * 
 *     --> Developing 'insert' method.
 * 
 *     --> Building lookup method for BinarySearchTree - BTS.
 * 
 * Note: this BTSAlt is an alternative code to the 
 * first binary search tree
 */

const BTSComponent = () => {

    const { graphsData } = useAppContext()

    /**binarysearchtreeimplementation asset */
    console.log(' graphsData ==> ', graphsData)
    const binarysearchtreeimplementation = graphsData[21].image; 

    /**states for insert method BTS */
    const [ insertvalue, setInsertvalue ] = useState([]);

    /**states for insert method BTSAlt */
    const [ insertvaluealt, setInsertvalueAlt ] = useState([]);

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
            } else {
              let currentNode = this.root;
              while(true){
                  if (value < currentNode.value) {
                      //Left
                      if (!currentNode.left) {
                          currentNode.left = newNode;
                          return this;
                      }
                      currentNode = currentNode.left;
                  } else {
                    //right
                    if (!currentNode.right) {
                      currentNode.right = newNode;
                      return this;
                    }
                    currentNode = currentNode.right;
                  }
              }
            }
          }
    
          lookup(value) {
            if (!this.root) {
                return false                
            }

            let currentNode = this.root;
            while(currentNode){
                if (value < currentNode.value) {
                    currentNode = currentNode.left;
                }else if(value > currentNode.right){
                    currentNode = currentNode.right;
                }else if(currentNode.value === value){
                    return currentNode;
                }
            }
        }
    
        printList() {
          const array = [];
          let currentNode = this.root;
    
          const traverse = (node) => {
            if (node !== null) {
              traverse(node.left);
              array.push(node.value + ',');
              traverse(node.right);
            }
          };
    
          traverse(currentNode);
          return array;
        }
      }

      class BinarySearchTreeAlt {
        constructor() {
          this.root = null;
        }
    
        insert(value) {
          const newNode = new Node(value);
          if (this.root === null) {
            this.root = newNode;
          } else {
            let currentNode = this.root;
            while(true){
                if (value < currentNode.value) {
                    //Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                  //right
                  if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                  }
                  currentNode = currentNode.right;
                }
            }
          }
        }
    
        lookup(value) {}
    
      }

    /**here i instantiate the tree */
    const BTS = new BinarySearchTree();

    const handleInsertvalue = () => {
        return(
            BTS.insert(9),
            BTS.insert(4),
            BTS.insert(20),
            BTS.insert(170),
            BTS.insert(15),
            BTS.insert(1),
            setInsertvalue(BTS.printList()),
            cleanupInsertvalue()
        )   
    }

    const cleanupInsertvalue = () => {
        setTimeout(() => {
            return(
                setInsertvalue(0)
            )
        }, 6000)
    }

    /**alternative BTSAlt handlers and functions */

     /**here i instantiate the tree */
     const BTSAlt = new BinarySearchTreeAlt();
    
    /**traverseAlt is going to be use for iterate over BTSAlt*/
    function traverseAlt(node) {
        const tree = { value: node.value };
        tree.left = node.left === null ? null :
        traverseAlt(node.left);
        tree.right = node.right === null ? null :
        traverseAlt(node.right)
        return tree
    }

    const handleInsertvalueAlt = () => {
        return(
            BTSAlt.insert(9),
            BTSAlt.insert(4),
            BTSAlt.insert(20),
            BTSAlt.insert(170),
            BTSAlt.insert(15),
            BTSAlt.insert(1),
            setInsertvalueAlt(JSON.stringify(traverseAlt(BTSAlt.root))),
            cleanupInsertvaluealt()
        )   
    }

    const cleanupInsertvaluealt = () => {
        setTimeout(() => {
            return(
                setInsertvalueAlt('BTS Alt values cleared, hit again')
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

            <button onClick={handleInsertvalue}>insert the value of <strong> '9', '4', '20', '170', '15', '1' </strong></button>

            <p>[{insertvalue}]</p>

            <h3>Alternative template:( check the source code for BTSAlt)</h3>

            <p>
                now i will test inserting the same values using an alternative <strong> 'BSTAlt' </strong> template,
                <strong> 'JSON and stringify' </strong> method
            </p>

            <button onClick={handleInsertvalueAlt}>insert the value of <strong> '9' (Alt template)</strong></button>

            <section className="code-block">
                <p>{insertvaluealt}</p>
            </section>

            <h4>Note: if i copy and paste into the java console i test and verify that the tree is effectivily match with the reference asset</h4>

        </DataStructuresWrapper>
    )
}

export default BTSComponent;