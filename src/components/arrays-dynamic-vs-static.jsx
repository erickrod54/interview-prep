import React from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 14 - ArrayDataStructure 
 * - Features: 
 * 
 *   --> Building DynamicVsStatic 
 * 
 * Note: to generate url's dinamicly
 */

const DynamicVsStatic = () => {

    return(
        <DataStructuresWrapper>
            <h2>Dynamic Vs Static Arrays</h2>

            <p>
                the difference between <strong>dynamic arrays</strong> 
                and <strong>static arrays</strong> 
            </p>

            <p><strong>static arrays:</strong>( their complexity can be O(1) - constant time)</p>

            <ul>
                <li>
                    fixed in size (need to specify the items number)
                </li>
                <li>
                    to add elements i have to allocate memory
                    for a copy of the entire array and add the element
                </li>
            </ul>

            <p><strong>dynamic arrays:</strong>( their complexity can be O(n) - linear time)</p>

            <ul>
                <li>
                    allows to copy and rebuild an array in a new location
                </li>
                <li>
                    expands as i add new elements (does not need memory allocation)
                </li>
            </ul>
        </DataStructuresWrapper>
    )
}

export default DynamicVsStatic;