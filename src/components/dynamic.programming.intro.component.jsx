import React from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 34.18-  DynamicProgramming - Features: 
 * 
 *     --> Developing 'DynamicProgramming' Concept.
 * 
 * Note: this 'handlerDFSPostorder' will handle the array filling the queue
 * with the post order.
 */

const DynamicProgramming = () => {

    return(
        <DataStructuresWrapper>
            <h2>Dynamic Programming</h2>
            <p>
                Dynamic Programming is an <strong> 'optimization technique' </strong> ( do you have somethinf you can cache ? ),
                so what it does this technique is <strong> 'store' repetitive high cost operations </strong>, ( this process 
                has a tradeoff, because bhy storing space complexity grow ) with the main goal of improve significally time 
                complexity, by applying this technique time complexity of <strong> () </strong>
            </p>

            <p>
                DynamicProgramming can adopt names as <strong> memoization - caching </strong>, by applying this technique 
                <strong> speeds up programs </strong> ( better time complexity ) make it them more accesible
            </p>
        </DataStructuresWrapper>
    )
}

export default DynamicProgramming;