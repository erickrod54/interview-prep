import React, { useState } from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 18.05 - LinkedLists - 
 * Features:
 * 
 *     --> Building first linked list.    
 * 
 *     --> Work in progress developing LinkedList Concept.   
 * 
 * Note: Basket data is to make an example of linkedlists
 */

const LinkedLists = () => {

    const { graphsData, basket } = useAppContext();
    //console.log('graphsData ==> ', graphsData);
    console.log('the example basket data', basket)

    const [obj1, setObj1] = useState('{a: true}');
    const [obj2, setObj2] = useState(obj1);
    const [ mylinkedListvalue, setMylinkedList ] = useState()

    const linklistcomposition = graphsData[8].image;
    const linklistmethods = graphsData[9].image;

    /**pointer data start */
    
    const handleDelete = () => {
        setObj1(null);
        setObj2(null);
      }
    
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
  
  // Define a class for linked list
  class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
  }
  
  // Create a new instance of the linked list
  const myLinkedList = new LinkedList(10);

  const handleMylinkedList = () => {
    setMylinkedList(myLinkedList)
  }

    return(
        <DataStructuresWrapper>
            <h2>Linked Lists</h2>

            <p>
                Linked list is for use case where i need 
            </p>

            <p>
                linked list is compound by a <strong> head</strong> and
                a <strong> tail</strong> as the picture, each block 
                represent a <strong> 'node'</strong> and each node has
                the <strong> 'data' ( orange )</strong> that i want to store 
                and the <strong> pointer ( green )</strong> to the next
                <strong> node</strong> 
            </p>

            <p>
                most of linked list we dont know the exact number of elements
                that contain that's why the <strong> 'tail'</strong> is 
                <strong> null</strong> terminated, because that way 
                indicates the end of the linked list 
            </p>

            <img src={linklistcomposition} alt="link list composition"/>

            <p>
                linked list has a sort of loose structure that makes them flexible
                at the moment of perform operations with it, but in someway is 
                ordered because is compound of <strong> 'head'</strong> and 
                <strong> 'tail'</strong> and in between the data is linked 
                by a <strong> 'pointer'</strong> so i can have certain order
                and flexibility at the same time
            </p>



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

            <p>
                linked list do <strong> traversal ( is as iterating)</strong> operations 
                because has no ordered positions, in contrast to <strong> arrays</strong>,
                in this case linked list is more as <strong> hash tables</strong>
            </p>

            <img src={linklistmethods} alt="link list methods"/>
            
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

                <li>
                    append
                </li>

                <p>
                    add an element to the end of the list and has a complexity
                    of O(1)
                </p>

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

                <li>
                    delete
                </li>

                <p>
                    has also complexity of <strong> O(n)</strong>
                    because does <strong> traversal</strong> to find
                    the element and delete it
                </p>

            </ul>

            <h3>what is a pointer ?</h3>

            <p>
                a <strong> 'pointer'</strong> as the word says points 
                to a place of memory, a location where the data that 
                i want to perform an operation is located, so i have 
                the following data:   
            </p>

            <section className="code-block">
                <p>{`let obj1 = [ a: true ]`}</p>
                <p>{`const obj2 = obj1 `}</p>
                <p>{`obj1.a = 'booya' `}</p>
                <p>{`delete obj1`}</p>
                <p>{`obj2 = 'hello' `}</p>    
            </section>

            <p>
                let's perform the operations:
            </p>

            <p>first:</p>

            <p>{`const obj2 = obj1 `}</p>

            <p>
                Assing <strong> 'obj1'</strong> to <strong> 'obj2'</strong>
                results in:
            </p>

            <p> {obj1 ? '{a: true}' : 'not equal'} === {obj2}</p>

            <p>second:</p>
            
            <p>{`obj1.a = 'booya' `}</p>

            <button onClick={() => Object1ValueBooya(obj1)}>Assing <strong> 'obj1.a'</strong> value <strong> 'booya'</strong></button>

            <p>{obj1}</p>

            <p>third:</p>
            
            <p>{`delete obj1`}</p>

            <button onClick={handleDelete}>delete <strong> 'obj1'</strong></button>

            <p>object 1 deleted {obj1}</p>

            <p>fourth:</p>

            <p>{`obj2 = 'hello' `}</p>

            <button onClick={() => Object1ValueHello(obj2)}>Assing <strong> 'obj2'</strong> value <strong> 'hello'</strong></button>
            
            <p>value of object 2: {obj2}</p>

            <p>
                by this example i can see that when <strong> obj1</strong> is assigned to <strong> obj2</strong>
                they share the same memory space, so both use a <strong> 'pointer'</strong> for the same 
                location, if i affect a one of the variables the other got affected and viceversa
            </p>
            
            <button onClick={handleMylinkedList}>create new linkedList</button>

            <h3>first linked list exersice</h3>

            <p>
                this first linked list exercise has a <strong> 'head'</strong> and a <strong> 'tail'</strong>
                and it is <strong> 'null'</strong> terminated as follows:
            </p>

            <section className="code-block">
                <p>{`let linkedList = {`}</p>
                <p>{`head: { `}</p>
                <p>{`next: {`}</p>
                <p>{`next: {`}</p>
                <p>{`value: 16, `}</p>
                <p>{`next: null `}</p>
                <p>{`} `}</p>
                <p>{`} `}</p>     
                <p>{`} `}</p>
                <p>{`} `}</p>
            </section>
            
            <p>{ mylinkedListvalue ? 'head: {value:10, next:null}, tail: {value:10, next:null}, length:1' : null}</p>            
            
        </DataStructuresWrapper>
    )
}

export default LinkedLists;