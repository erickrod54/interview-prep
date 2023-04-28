import React, { useState } from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 19.07 - DoublyLinkedLists - 
 * Features:   
 * 
 *     --> Building 'DoublyLinkedLists'.
 * 
 *     --> Work in progress developing
 *         'DoublyLinkedLists'.
 * 
 * Note: this component will use 'traverseToIndex' the 
 * same linked.list structure and i will modify it until 
 * can transform it in a double linked list
 * 
 * pending to develop methods for the linkedlist
 */

const DoublyLinkedLists = () => {

    const { graphsData,
             basket,
             obj1,
             setObj1 ,
             obj2,
             setObj2,
             handleDelete,
             mylinkedListvalue,
             setMylinkedList,
             mylinkedListappend,
             setMylinkedListappend,
             mylinkedListprepend, 
             setMylinkedListprepend,
             printListvalue, setPrintListvalue} = useAppContext();
             
    //console.log('graphsData ==> ', graphsData);
    console.log('the example basket data', basket)

    
    const [ inserListvalue, setInserListvalue ] = useState([]);
    const [ removeListvalue, setRemoveListvalue ] = useState([]);

    const doublylinklistcomposition = graphsData[10].image;
    const linklistmethods = graphsData[9].image;

    /**pointer data start */
    
    const Object1ValueBooya = () => {
        let obj1 = `{a: 'booya'}`;
        setObj1(obj1)
    }

    const Object1ValueHello = (args) => {
        args = 'hello';
        setObj2(args)
    }

// Define a linked list as an object
let linkedList = {
    head: {
      value: 10,
      next: {
        value: 5,
        next: {
          value: 16,
          next: null
        }
      }
    }
  }

  /**Making 'Node' to instantiate it in 
   * append LinkedList class */
  class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
  }
  
  // Define a class for linked list
  class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }

    append(value){
        /**switching syntax to instantiate the new Node */
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value:value,
            next:null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value,',');
            currentNode = currentNode.next;
        }
        return array;
    }

    /***note :
     * 
     * add this condition 
     *  
     * if (index === 0) {
  this.prepend(value);
  return this.printList();
}

     */

    insert(index, value){
    /**checking params */
        if (index >= this.length) {
            return this.append(value);   
        }
        const newNode = new Node(value);
        /**here i catch the index */
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;

        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        return this.printList();
    }

    /**here i build the 'traverseToIndex' to iterate and get the index
     * requested by the function call*/
    traverseToIndex(index){
     /**check params */
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }   

    remove(index){
        //check params
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList()
    }
  }
  
  
  // Create a new instance of the linked list
  const myLinkedList = new DoublyLinkedList(10);

  const handlesetMylinkedListprepend = () => {
    return setMylinkedListprepend(myLinkedList.prepend(1))
  }

  const handlesetMylinkedListappend = () => {
    return setMylinkedListappend(myLinkedList.append(5))
  }

  const handleMylinkedList = () => {
    setMylinkedList(myLinkedList)
  }

  const handlePrintAppendList = () => {
    console.log(myLinkedList.append(5))
    myLinkedList.append(16);
    myLinkedList.append(1);
    return setPrintListvalue(myLinkedList.printList());
  }

  const handleInsertToList = () => {
    console.log(myLinkedList.append(5))
    myLinkedList.append(16);
    myLinkedList.append(1);
    /**first arg is 'index', and second arg is the value */
    myLinkedList.insert(2,99);
    return setInserListvalue(myLinkedList.printList());
  }

  const removeFromList = () => {
    console.log(myLinkedList.append(5))
    myLinkedList.append(16);
    myLinkedList.append(1);
    /**first arg is 'index', and second arg is the value */
    myLinkedList.insert(2,99);
    return setRemoveListvalue(myLinkedList.remove(3))
  }

    return(
        <DataStructuresWrapper>
            <h2>Doubly Linked Lists</h2>

            <p>
                doubly linked list is compound by a <strong> head</strong> and
                a <strong> tail</strong> as the picture, each block 
                represent a <strong> 'node'</strong> and each node has
                the <strong> 'data' ( orange )</strong> that i want to store 
                and the <strong> pointer ( green )</strong> to the next
                <strong> node</strong> as the <strong> 'linked list'</strong>,
                but for this case i can modify the linked list so i can 
                <strong> traverse (iterate)</strong> going forward 
                <strong> (next)</strong> and going 
                backward <strong> (previus - prev)</strong>
            </p>

            <p>
                the doubly linked most of time as linked list, we dont know 
                the exact number of elements that contain that's why the 
                <strong> 'tail'</strong> is <strong> null</strong> terminated
                so <strong> 'prev'</strong> and <strong> 'next'</strong> 
                must be null terminated at the <strong> 'tail'</strong> 
            </p>

            <img src={doublylinklistcomposition} alt="link list composition"/>

            
        </DataStructuresWrapper>
    )
}

export default DoublyLinkedLists;