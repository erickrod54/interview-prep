import React from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 16.04 - ArraysImplementations  
 * - Features: 
 * 
 *     --> Fixing typo error
 * 
 * Note: by id this component make match and render the 
 * corresponding topic.
 */
const ArraysImplementations = () => {
    
    
    const { first, second, third, fourth, fifth, handleFirst, handleSecond, handleThird, handleFourth, handleContext } = useAppContext()

    
    
    class Player {
        /**i initiate the constructor to define all
         * properties and methods that a player can have*/

        constructor(name, type){
            /**in this case i define a name and a type */
            this.name = name;
            this.type = type;
        }

        /**here i define a method */
        introduce(){
            console.log(`'Hi I am ${this.name}, I'm ${this.type}'`)
        }
    }

    class Wizard extends Player {
        // eslint-disable-next-line 
        constructor(name, type) {
            super(name, type)
        }

        play(){
           console.log(`Weee i'm a ${this.type}`)
        }
    }

    // eslint-disable-next-line
    const wizard1 = new Wizard('Shelly', 'Healer');
    // eslint-disable-next-line
    const wizard2 = new Wizard('Shawn', 'Dark Magic');
    
    
    return(
        <DataStructuresWrapper>
            <h2>Arrays Implementations</h2>

            <p>
                before dive into <strong>arrays implementations</strong>
                let's check this three very related topics
            </p>

            <ul>
                <li>
                    reference type
                </li>
                <li>
                    context
                </li>
                <li>
                    instantiation
                </li>
            </ul>

            <h3>reference type:</h3>

            <p>
                the reference type is about <strong>'non primitive values'</strong>
                for example i have <strong>integers, booleans, strings..</strong>
                an so on, these are primitive types ( data types defines by the 
                language standard - for example ES6 ) and reference types are 
                data types that are build for example <strong>arrays and objects</strong>
            </p>

            <p>
                let's build some <strong>'reference type'</strong> in the following 
                examples:
            </p>

            <section className="code-block">
                <p>[ ] = [ ]</p>
            </section>

            <button onClick={handleFirst}>compare two arrays</button>

            <section className="code-block">
                
                {first}
               
            </section>

            <button onClick={handleSecond}>compare two objects</button>

            <section className="code-block">
                
                {second}
               
            </section>

            {second ?
            <p>
              it is false because the object1 === object3 have different memory reference
              (does not match memory reference results in false )  
            </p>
            :
            null
            }

            <button onClick={handleThird}>compare two objects</button>

            <section className="code-block">
                
                {third}
               
            </section>

            {third ?
            <p>
              it is false because the object3 === object2 have different memory reference
              (does not match memory reference results in false )  
            </p>
            :
            null
            }

            <button onClick={handleFourth}>compare two objects</button>

            <section className="code-block">
                
                {fourth}
               
            </section>
            
            {fourth ?
            <p>
              it is true because the object1 === object2 have same memory reference
              (by matching memory reference results in true )  
            </p>
            :
            null
            }

            <h3>context:</h3>

            <p>
                context usually get's confused a lot with scope,
                an example of scope is as follows

            </p>

            <section className="code-block">
                <p>{`function b(){`}</p>
                <p>{`let a = 4`}</p>
                <p>{`}`}</p>
            </section>

            <p>
                where <strong>'let a = 4'</strong> is inside
                the <strong>function b()</strong> scope so if 
                i try to access it from outside the function 
                i can't access it because it is <strong>function 
                b()</strong> scope <strong>(as a local variable)</strong>
            </p>

            <p>
                and context makes use of the reserved word this
                and what that word makes is a context referencing 
                to whatever is at the left ( inmidiatelly superior)
                to this, i have the followig function
            </p>

            <section className="code-block">
                <p>{`const handleContext = () => {`}</p>
                <p>{`setContext(!context)`}</p>
                <p>{`const object4 = {`}</p>
                <p>{`a:function() {`}</p>
                <p>{`console.log(this)`}</p>
                <p>{`}`}</p>
                <p>{`return object4.a()`}</p>
                <p>{`}`}</p>
            </section>

            <p>
                so have this {`a:function() {`} that excutes a 
                <strong>'console.log(this)'</strong> and will 
                give as a result whatever is at left or superior,
                for the case will be the {`a:function() {`}.
            </p>

            <button onClick={handleContext}>get the 'this'</button>

            <section className="code-block">
                {fifth}
                <p>
                    and if i check the log, can see
                    the function details 
                </p>
            </section>

            <p>
                and this is a essential practice to <strong>instantiate</strong>
                objects
            </p>
        
            <h3>instantiation:</h3>

            <p>
                so what is <strong>instantiation </strong> ? .. let's 
                think in the following example where i have a world 
                <strong>'players game'</strong>, and as a developer 
                is exhausting to make a new player with the same code 
                every time a <strong>new player is created</strong>
                so what <strong>instantion</strong> does is to give 
                the way to <strong>copy an object and rehuse the code</strong>
                so i don't to repeat code every time 
            </p>

            <section className="code-block">
                <p>{`class Player {`}</p>
                <p>{`constructor(name, type){`}</p>
                <p>{`this.name = name;`}</p>
                <p>{`this.type = type;`}</p>
                <p>{`introduce(){`}</p>
                <p>..check the code</p>
                <p>{`}`}</p>
            </section>   

            <p>
                and i can build a wizard, warlock and many other player using the same 
                copy of player and extend their methods:
            </p> 

            <section className="code-block">
                <p>{`class Wizard extends Player {`}</p>
                <p>{`constructor(name, type) {`}</p>
                <p>{`super(name, type)`}</p>
                <p>{`}`}</p>
                <p>{`play(){`}</p>
                <p>..check the code</p>
                <p>{`}`}</p>
            </section>  

            <p>
                so this last object is a copy of <strong>Player</strong> with extended 
                methods as <strong>play()</strong>
            </p>

            <p>
                and then i just build the new characters with values:
            </p>

            <section className="code-block">
                <p>{`const wizard1 = new Wizard('Shelly', 'Healer');`}</p>
                <p>{`const wizard2 = new Wizard('Shawn', 'Dark Magic');`}</p>
            </section>  

            <p>
                this is similar to the behavior when i create a <strong>functional 
                component in React </strong>, functional Components serves as a copy 
                of a behavior that i want to repeat without the need of copy one and 
                over the code ( as a button, a selection form, a feature and more )
            </p>

        </DataStructuresWrapper>
    )
}

export default ArraysImplementations;