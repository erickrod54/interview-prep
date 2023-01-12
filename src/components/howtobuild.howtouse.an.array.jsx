import React from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 16.06 - BuildAndUseArrays  
 * - Features: 
 * 
 *     --> Building to 'BuildAndUseArrays'
 * 
 * Note: by id this component make match and render 
 * the corresponding topic.
 */

const BuildAndUseArrays = () => {

    class MyArray {
        constructor(){
            this.lenght = 0;
            this.data = {}
        }
        
        get(index){
            return this.data[index]
        }

        push(item) {
            this.data[this.lenght] = item;
            this.lenght++
            return this.lenght
        }

        pop() {
            const lastItem = this.data[this.length-1]
            delete this.data[this.lenght-1]
            this.lenght--;
            return lastItem;
        }

        delete(index) {
            // eslint-disable-next-line
            const item = this.data[index];
            this.shiftItems(index)
        }

        shiftItems(index){
            for (let i = index; i < this.length-1; i++){
                this.data[i] = this.data[ i + 1 ]
            }
            delete this.data[this.length-1];
            this.lenght--;
        }
    
    }
    
    const newArray = new MyArray();
    newArray.push('hi');
    newArray.push('you');
    newArray.push('!');
    newArray.pop();
    newArray.delete(0)
    newArray.push('are');
    newArray.push('nice');

    console.log(newArray)

    return(
        <DataStructuresWrapper>
            <h2>Build and use Arrays</h2>

            <p>
                data structuctures are data that i can build from 
                scratch ( as a new data type )
            </p>

            <p>
                i have the following array and apply method over this
                array as <strong>'pop', 'push', 'shift'</strong>
                (check code and java console ):
            </p>

            <section className="code-block">
               <p>{`class MyArray {`}</p>
               <p>{`constructor(){`}</p>
               <p>{`this.lenght = 0;`}</p>
               <p>{`this.data = {}`}</p>
               <p>{`}`}</p> 
               <p>{`get(index){`}</p> 
               <p>{`return this.data[index]`}</p>     
               <p>{`...`}</p>
               <p>{`check the code`}</p>
            </section>

            <ul>
                <li><strong>Myarray</strong> has a initial values</li>
                <li><strong>Myarray</strong> has a methods to add and remove elements</li>
            </ul>

            <h3>Benefits of using Arrays</h3>

            <ul>
                <li>Fast lookups (good for implementing search features)</li>
                <li>Fast <strong>push / pop</strong> ( to add and delete last element)</li>
                <li>Ordered</li>
            </ul>

            <h3>Disvantages of using Arrays</h3>

            <ul>
                <li>Slow inserts</li>
                <li>Slow deletes</li>
                <li>Fixed Size ( i have to define a space in memory for the array
                    except if its a dynamic array )</li>
            </ul>

        </DataStructuresWrapper>
    )
}

export default BuildAndUseArrays;