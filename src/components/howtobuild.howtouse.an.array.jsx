import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 16.03 - ArraysImplementations  
 * - Features: 
 * 
 *     --> Starting to build how to 'BuildAndUseArrays'
 * 
 * Note: by id this component make match and render the 
 * corresponding topic.
 */

const BuildAndUseArrays = () => {

    const [ arrayvalue, setArrayvalue ] = useState({})

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
    
    }
    
    const newArray = new MyArray();

    const handleArrayvalue = () => {
        setArrayvalue(newArray.push('hi'))
    }

    return(
        <DataStructuresWrapper>
            <h2>Build and use Arrays</h2>

            <p>
                data structuctures are data that i can build from 
                scratch ( as a new data type )
            </p>

            <section className="code-block">
               <p>{``}</p>     
            </section>

            <button onClick={handleArrayvalue}>handle value</button>

            {console.log('the array value ==>', arrayvalue)}

            
        </DataStructuresWrapper>
    )
}

export default BuildAndUseArrays;