import React, { useState } from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 19.17 - DoublyLinkedLists - 
 * Features:   
 * 
 *     --> Developing 'Single VS Double Linked list' concept 
 *        for doublyLinkedLists.
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
             setRemoveListvalue,
             printListvalue, setPrintListvalue} = useAppContext();
             
    //console.log('graphsData ==> ', graphsData);
    console.log('the example basket data', basket)

    
    const [ inserListvalue, setInserListvalue ] = useState([]);

    const doublylinklistcomposition = graphsData[10].image;
    const doublylinklistmethodscomplexity = graphsData[11].image;

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
      const newNode = {
          value: value,
          next:null,
          prev:null
      };

      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
  }

  prepend(value) {
    const newNode = {
        value:value,
        next:null,
        prev:null
    };
    newNode.next = this.head;
    this.head.prev = newNode;
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
      /**i make the new node to add the prev, as the 
       * append and prepend
       */
      const newNode = {
          value: value,
          next: null,
          prev: null
      };
      /**here i catch the index */
      const leader = this.traverseToIndex(index-1);
      const follower = leader.next;
      /**here i change the movement of the nodes in the list */
      leader.next = newNode;
      newNode.prev = leader;
      newNode.next = follower;
      follower.prev = newNode;
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

            <h3>doubly link list methods:</h3>

            <p>
                link lists has a set of methods and they have their comlexity
                according with the operation that perform each
            </p>

            <p>
                linked list do <strong> traversal ( is as iterating)</strong> operations 
                because has no ordered positions, in contrast to <strong> arrays</strong>,
                in this case linked list is more as <strong> hash tables</strong>
            </p>

            <img src={doublylinklistmethodscomplexity} alt="link list methods"/>
            
            <p>and this methods: <strong> ( this are the worst case in complexity, usually linked
                list can perform better than this complexity )</strong></p>

            <ul>
                <li>
                    prepend:
                </li>

                <p> 
                    add an element to the begining of the list and has 
                    a complexity of <strong> O(1)</strong>
                </p>

                <p>
                    let's prepend number <strong> 1</strong> to the list
                </p>

                <button onClick={handlesetMylinkedListprepend}> prepend <strong> 1</strong> to the list</button>
 
                <p>value of mylinkedListprepend : {mylinkedListprepend ? '[1, 16, 5, 10 ] after 10 is null' : null}</p>

                <li>
                    append
                </li>

                <p>
                    add an element to the end of the list and has a complexity
                    of O(1)
                </p>

                <p>
                    let's append <strong> 5</strong> and <strong> 16</strong>
                    to the list:
                </p>

                <button onClick={handlesetMylinkedListappend}>append <strong> 5</strong> and <strong> 16</strong></button>

                <p>value of mylinkedList: {mylinkedListappend ? '[16, 5, 10 ] after 10 is null' : null}</p>

                <li>
                    lookup
                </li>

                <p>
                    which can be also callled <strong> traversal</strong> because
                    iterates to look for an item, and the complexity is <strong> O(n)</strong>
                    because it has to go from <strong> 'head'</strong> to <strong> 'tail'</strong>
                    to find the element that i look for 
                </p>

                <li>
                    insert
                </li>

                <p>
                    if i insert into a link list, by the way that 
                    works i can add in it to ( different to a hash 
                    table or an array that i have to shift and unshift)
                    and also has a complexity of <strong> O(n)</strong>
                    because does <strong> traversal</strong> to find 
                    the index ( usually i won't know how large the linked
                    list is ) to insert the element
                </p>

                <p>
                    let's insert number<strong> 99 </strong> in the index <strong> 2</strong>
                </p>

                <button onClick={handleInsertToList}>insert number<strong> 99 </strong> in the index <strong> 2</strong> </button>

                <p>[{inserListvalue}]</p>

                <li>
                    delete
                </li>

                <p>
                    has also complexity of <strong> O(n)</strong>
                    because does <strong> traversal</strong> to find
                    the element and delete it
                </p>

                <h3> Single VS Double Linked list</h3>

                <h4>Single:</h4>

                <h5>advantages:</h5>

                <ul>
                    <li>
                        simple implementation
                    </li>
                    <li>
                        requires lesser memory
                    </li>
                    <li>
                        fast insertion
                    </li>
                    <li>
                        fast deletion
                    </li>
                    <li>
                        is faster
                    </li>
                </ul>

                <h5>downsides:</h5>

                <ul>
                    <li>
                        cannot iterate in <strong> reverse</strong> or <strong> treverse</strong> from back to front ( if a ever lose the memory referene or the headnode, the list can be lose in memory forever)
                    </li>
                </ul>

                <h4>Note: use cases when you have les memory reources to work and and need fast insertion and fast deletion</h4>

                <h4>Double:</h4>
                       
                <h5>advantages:</h5>

                <ul>
                    <li>
                        can be iterated in <strong> reverse</strong> or <strong> treverse</strong> from back to front and from the front to the back 
                    </li>
                    <li>
                        does not need to trverse from the <strong> head </strong> to the <strong> tail </strong> to find then the node when performing
                        <strong> deletion </strong> 
                    </li>
                    <li>
                        good performing in <strong> searching</strong> operations
                    </li>
                </ul>

                <h5>downsides:</h5>

                <ul>
                    <li>
                        fairly complex
                    </li>
                    <li>
                        requires more memory and storage
                    </li>
                </ul>

            </ul>
            
            
        </DataStructuresWrapper>
    )
}

export default DoublyLinkedLists;