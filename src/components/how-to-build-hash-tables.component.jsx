import React, { useState } from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";


/**interview-prep-app - version 17.12 - BuildHashTables  
 * - Features: 
 * 
 *     --> Destructuring HashTable states 'graphsData' from 
 *         the context. 
 * 
 *      --> Work in progress developing HashTavble Concept
 * 
 * Note: by id this component make match and render the 
 * corresponding topic.
 */


const BuildHashTables = () => {

    const { grapes, setGrapes, apples, setApples, justapples, setJustApples, graphsData } = useAppContext()

    const hashTableGraphic = graphsData[6].image;

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
                the advantange of using hash tables is the complexity that is 
                going to be reduce to <strong>O(1) or O(n)</strong> because 
                combining the <strong>'keys'</strong> with the loops i can get a real fast search
                and low comsuption of CPU resources
            </p>

        </DataStructuresWrapper>
    )
}

export default BuildHashTables;