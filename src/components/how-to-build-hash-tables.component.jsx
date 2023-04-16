import React, { useState } from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";


/**interview-prep-app - version 17.14 - BuildHashTables  
 * - Features: 
 * 
 *      --> Destructuring 'hashTableVsArrays' from 
 *          'graphsData'.
 * 
 *      --> Work in progress developing HashTable Concept
 * 
 * Note: by id this component make match and render the 
 * corresponding topic.
 */


const BuildHashTables = () => {

    const { grapes, setGrapes, apples, setApples, justapples, setJustApples, graphsData } = useAppContext()

    const [ keysarray, setKeysArray ] = useState([]);

    const hashTableGraphic = graphsData[6].image;
    const hashTableVsArrays = graphsData[7].image;

    class HashTable{
        constructor(size){
            /**here i am initiaiting */
            this.data = new Array(size);
        }

        /**this is the hash function in order to create 
         * the hash table */

        /**the underscore ' _ ' is a convetion that indicates 
         * that shouldn't be access directly*/
        
        /**as 'myHashTable._hash' */
        _hash(key){
            let hash = 0
    
            for (let i=0; i < key.length; i++) {

                /**charCode obtains the index of the character*/
                hash = (hash + key.charCodeAt(i) * i) %
                this.data.length
            }
            return hash
        }

        set(key, value) {
            let address = this._hash(key);

            if (!this.data[address]) {
                this.data[address] = [];
                this.data[address].push([key, value])
            }
            
            return this.data
        }

        get(key){
            let address = this._hash(key);
            const currentBucket = this.data[address];

            if (currentBucket.length) {
                for (let i = 0; i < currentBucket.length; i++) {
                    if (currentBucket[i][0] === key) {
                        return currentBucket[i][1]
                    }
                    
                }
            }
            return undefined
        }
        
        keys() {
            const keysArray = [];
            for (let i = 0; i < this.data.length; i++) {
              if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                  keysArray.push(this.data[i][j][0]);
                }
              }
            }
            return keysArray;
          }
    }

    /** 2 is the memory size that i set */
    const myHashTable = new HashTable(50);

    const handleGrapes = () => {
        setGrapes(myHashTable.set('grapes ', 10000))
    }

    const handleApples = () => {
        setApples(myHashTable.set('apples ', 54))
    }

    const handleJustApples = () => {
        setJustApples(myHashTable.set('apples'))
    }

    const handleKeys = () => {
        myHashTable.set("apple ", 10);
        myHashTable.set("orange ", 20);
        myHashTable.set("banana ", 30);

        const keysArray = myHashTable.keys();
        setKeysArray(keysArray)
        console.log(keysArray);
      };

    return(
        <DataStructuresWrapper>
            <h2>How Build Hash Tables</h2>

            <p>the hash table data structure that i am going to create is the following:</p>

            <img src={hashTableGraphic} alt='hashTable data structure'/>
            <p>
                i have the following hash table template 
                to create a fruits array:
            </p>

            <section className="code-block">
                <p>{`class HashTable{`}</p>
                <p>{`constructor(size){`}</p>
                <p>{`/**here i am initiaiting */`}</p>
                <p>{`this.data = new Array(size);`}</p>
                <p>{`}`}</p>
                <p>{`/**this is the hash function in order to create`}</p>
                <p>{`/*** the hash table */`}</p>
                <p>{`/**the underscore ' _ ' is a convetion that indicates`}</p>
                <p>{`* that shouldn't be access directly*/`}</p>
                <p>{`/**as 'myHashTable._hash' */`}</p>
                <p>{` _hash(key){`}</p>
                <p>{` let hash = 0`}</p>
                <p>{` for (let i=0; i < key.length; i++) {`}</p>
                <p>{` /**charCodeAt obtains the index of the character*/`}</p> 
                <p>{` hash = (hash + key.charCodeAt(i) * i) %`}</p>
                <p>{` this.data.length`}</p>
                <p>{` }`}</p>
                <p>{` return hash`}</p>
                <p>{` }`}</p>
                <p>{` set(key, value) {`}</p> 
                <p>{` let address = this._hash(key);`}</p>
                <p>{` if (!this.data[address]) {`}</p>
                <p>{` this.data[address] = [];`}</p>
                <p>{` this.data[address].push([key, value])`}</p>
                <p>{` return this.data`}</p>
                <p>{` }`}</p>
                <p>{` get(key){`}</p>
                <p>{` let address = this._hash(key);`}</p>
                <p>{` const currentBucket = this.data[address];`}</p>
                <p>{` if (currentBucket.length) {`}</p>
                <p>{` for (let i = 0; i < currentBucket.length; i++) {`}</p>
                <p>{` if (currentBucket[i][0] === key) {`}</p>
                <p>{` return currentBucket[i][1]`}</p>
                <p>{` }`}</p>
                <p>{` }`}</p>
                <p>{` return undefined`}</p>
                <p>{` }`}</p>
                <p>{` }`}</p>
            </section>

            <p>
                here i am setting the grapes in <strong>10000</strong>:
            </p>

            <button onClick={handleGrapes}>handle grapes</button>
            
            <p>{grapes}</p>

            <p>
                here i am getting apples in <strong>54</strong>:
            </p>
            
            <button onClick={handleApples}>handle apples</button>
            
            <p>{apples}</p>

            <p>
                here i am getting just <strong>apples</strong>:
            </p>
            
            <button onClick={handleJustApples}>handle just apples</button>
            
            <p>{justapples}</p>

            <p>
                here the <strong>'_hash'</strong> table has two methods 
                i can create as many methods i need, but for this case 
                has the methods 
            </p>  

            <ul>
                <li>set</li>
                <li>get</li>
            </ul>

            <p>
                if i take a close look how set and get are made, i can see 
                the avdantages and disadvantages of using hashtables:
            </p>

            <h4>the method <strong>'set'</strong> time complexity:</h4>

            <section className="code-block">
                <p>{` set(key, value) { O(1)`}</p> 
                <p>{` let address = this._hash(key); O(1)`}</p>
                <p>{` if (!this.data[address]) { O(1)`}</p>
                <p>{` this.data[address] = []; O(1)`}</p>
                <p>{` this.data[address].push([key, value]) O(1)`}</p>
                <p>{` return this.data O(1)`}</p>
                <p>{` }`}</p>
            </section>

            <h4>the method <strong>'get'</strong> time complexity:</h4>

            <section className="code-block">
                <p>{` get(key){ O(1) `}</p>
                <p>{` let address = this._hash(key); O(1)`}</p>
                <p>{` const currentBucket = this.data[address]; O(1)`}</p>
                <p>{` if (currentBucket.length) { O(1)`}</p>
                <p>{` for (let i = 0; i < currentBucket.length; i++) { O(1)`}</p>
                <p>{` if (currentBucket[i][0] === key) { O(1)`}</p>
                <p>{` return currentBucket[i][1] O(1)`}</p>
                <p>{` } O(1)`}</p>
                <p>{` } O(1)`}</p>
                <p>{` return undefined O(1)`}</p>
                <p>{` } O(1)`}</p>
                <p>{` } O(1)`}</p>    
            </section>

            <p>
                is extremily fast because i loop over the <strong>'key'</strong>
                vthat is a direct location of memory that does very efficient 
                these operations, in the case of the collisions there are many ways
                to solve it 
            </p>

            <a href="https://en.wikipedia.org/wiki/Hash_collision#:~:text=In%20computer%20science%2C%20a%20hash,a%20fixed%20length%20of%20bits." alt='hash collision'>
                hash collision resolution
            </a>
            
            <p>
                the advantange of using hash tables is the complexity that is 
                going to be reduce to <strong>O(1) or O(n)</strong> because 
                combining the <strong>'keys'</strong> with the loops i can get a real fast search
                and low comsuption of CPU resources
            </p>

            <h4>building handle key method</h4>

            <button onClick={handleKeys}>handle the keys</button>

            <p>{keysarray ? `[ ${keysarray} ]` : null}</p>

        </DataStructuresWrapper>
    )
}

export default BuildHashTables;