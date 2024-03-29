import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 27.05 - 
 * BTSComponent - Features: 
 * 
 *     --> Pending to fix a bug with the remove method. 
 * 
 * Note: For every lookup method or peek method
 * i need to store the look in the variable
 */

const BTSComponent = () => {

    const { graphsData } = useAppContext()

    /**binarysearchtreeimplementation asset */
    console.log(' graphsData ==> ', graphsData)
    const binarysearchtreeimplementation = graphsData[21].image; 

    /**states for insert method BTS */
    const [ insertvalue, setInsertvalue ] = useState([]);
    const [ lookupvalue, setLookupvalue ] = useState([]);
    const [ removevalue, setRemovevalue ] = useState([]);

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

        remove(value) {
            if (!this.root) {
              return false;
            }
      
            let currentNode = this.root;
            let parentNode = null;
            let isLeftChild = false;
      
            while (currentNode) {
              if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
                isLeftChild = true;
              } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
                isLeftChild = false;
              } else if (currentNode.value === value) {
                // Case 1: No right child
                if (currentNode.right === null) {
                  if (parentNode === null) {
                    this.root = currentNode.left;
                  } else {
                    if (isLeftChild) {
                      parentNode.left = currentNode.left;
                    } else {
                      parentNode.right = currentNode.left;
                    }
                  }
                }
                // Case 2: Right child without a left child
                else if (currentNode.right.left === null) {
                  if (parentNode === null) {
                    this.root = currentNode.right;
                  } else {
                    if (isLeftChild) {
                      parentNode.left = currentNode.right;
                    } else {
                      parentNode.right = currentNode.right;
                    }
                  }
                }
                // Case 3: Right child with a left child
                else {
                  let leftmostParent = currentNode.right;
                  let leftmost = currentNode.right.left;
                  while (leftmost.left !== null) {
                    leftmostParent = leftmost;
                    leftmost = leftmost.left;
                  }
      
                  leftmostParent.left = leftmost.right;
                  leftmost.left = currentNode.left;
                  leftmost.right = currentNode.right;
      
                  if (parentNode === null) {
                    this.root = leftmost;
                  } else {
                    if (isLeftChild) {
                      parentNode.left = leftmost;
                    } else {
                      parentNode.right = leftmost;
                    }
                  }
                }
                return true; // Item removed successfully
              }
            }
      
            return false; // Item not found in the tree
          }
    
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

    /**here i handle the lookup  */
    const handleLookupvalue = () => {
        
        BTS.insert(9);
        BTS.insert(4);
        BTS.insert(20);
        BTS.insert(170);
        BTS.insert(15);
        BTS.insert(1);

        const lookupResult = BTS.lookup(9);
        setLookupvalue(JSON.stringify(lookupResult));
        cleanupLookupvalue();
       
}

    const cleanupLookupvalue = () => {
        setTimeout(() => {
            return(
                setLookupvalue('BTS lookup values cleared, hit again')
            )
        }, 6000)
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

    const handleRemovevalueAlt = () => {
        BTS.insert(9);
        BTS.insert(4);
        BTS.insert(20);
        BTS.insert(170);
        BTS.insert(15);
        BTS.insert(1);

        const removeResult = BTSAlt.remove(4);
        setRemovevalue(JSON.stringify(removeResult));
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

            <h3>Lookup method:</h3>

            <p>
                let's lookup the value of <strong> '9' </strong>:
            </p>

            <button onClick={handleLookupvalue}>lookup the value of <strong> '9' </strong></button>

            <section className="code-block">
                <p>[{lookupvalue ? lookupvalue : 'value not found'}]</p>
            </section>

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

            <h3>Remove method in BTSAlt: </h3>

            <button onClick={handleRemovevalueAlt}>remove the value of <strong> '9' (Alt template)</strong></button>

            <section className="code-block">
                <p>{removevalue}</p>
            </section>

        </DataStructuresWrapper>
    )
}

export default BTSComponent;