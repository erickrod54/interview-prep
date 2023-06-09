import React from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 27.07 - BTSBalanced  
 * - Features: 
 * 
 *     --> Developing BTS Balanced concept. 
 * 
 * Note: Pending to re structure imports using the index.
 */

const BTSBalanced = () => {

    return(
        <DataStructuresWrapper>
            <h2>BTS Balanced</h2>

            <p>
                there are two ways of make a tree <strong> 'balance' </strong>, and 
                it is achieved by using:
            </p>

            <ul>
                <li>
                    <strong> AVL tree </strong>
                </li>
                <li>
                    <strong> Red Black tree </strong>
                </li>
            </ul>

        </DataStructuresWrapper>
    )
}

export default BTSBalanced;