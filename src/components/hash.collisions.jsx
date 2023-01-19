import React from "react";
import { useAppContext } from "../context";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 16.09 - HashCollisions 
 * - Features: 
 * 
 *   --> Building 'HashCollisions'. 
 * 
 * Note: to generate url's dinamicly
 */

const HashCollisions = () => {
   
   const { graphsData } = useAppContext()

   const hashcollisions = graphsData[5].image

    let user = {
        age: 54,
        name:'Kylie',
        magic:true,
        scream: function() {
            return 'ahhhhh!!'
        }
    }

    return(
       <DataStructuresWrapper>
           <h2>Hash Collisions</h2>

           <p>
                over the <strong>hash tables</strong>
                i can apply the methods:
           </p>

           <ul>
                <li>insert</li>
                <li>lookup</li>
                <li>delete</li>
                <li>search</li>
           </ul>

           <p>
               i have the following <strong> 'user' hash table:</strong>
           </p>

           <section className="code-block">
               <p>{`let user = {`}</p>
               <p>age: 54,</p>
               <p>name:'Kylie',</p>
               <p>magic:true,</p>
               <p>{`scream: function() {`}</p>
               <p>{`return 'ahhhhh!!'`}</p>
               <p>{`}`}</p>
               <p>{`}`}</p>
           </section>

           <p>
                the complexity of <strong>insert</strong>
                will, <strong>lookup</strong>, <strong>delete</strong>
                and <strong>search</strong> is o(1) because 
                by using the <strong>key</strong> i can access
                directly where the data is located in memory
           </p>

           <p>
              the user age <strong>(user.age)</strong> : {user.age} - complexity o(1)
           </p>

           <p>
                i can add new properties as follows:
           </p>

           <p>
              the user spell <strong>(user.spell) </strong>: {user.spell = 'abra kadabra'} - complexity o(1)
           </p>

           <p>
              the user scream <strong>(user.scream())</strong>: <strong>{user.scream()}</strong> - complexity o(1)
           </p>

          <p>
             so above i access to the data and features 
             using this single data strcuture called 
             hash table with the name of user 
          </p>

          <p>
              so the main problem of hash tables are 
              collisions and this is about how the data 
              is being access
          </p>

          <p>
            when i create an object or a hash table the computer
            decides how to alocate the space and memory for the 
            data  
          </p>

          <p>
            let's make the exercise using the link below
          </p>

          <a href="https://www.cs.usfca.edu/~galles/visualization/OpenHash.html">
            Open hash visualization link
          </a>

          <p>
            insert in the <strong> 1, 3, 55, 2, 14 </strong>
            and i can notice how will create blocks that represent 
            the <strong> hash collision </strong>
          </p>

          <p>
            and this problems slows down the speed to access 
            to the information with a complexity of 
            <strong> O(n) </strong> affecting operations
            as lookup and search, and will look something 
            like this:
          </p>

          <img src={hashcollisions} alt='big o 2 constant time'/>

         <p>
            in hash tables i can't avoid this collisions
            but there are two ways to deal to collsions  
            <strong>separate chaining</strong>
         </p>

       </DataStructuresWrapper> 
    )
}

export default HashCollisions;