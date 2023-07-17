import React from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 31.12 - SortingInterview   
 * - Features: 
 * 
 *     --> Stating interview questions. 
 * 
 * Note: Pending to re structure imports using the index.
 */

const SortingInterview = () => {

    return(
        <DataStructuresWrapper>
            <h2>Sorting Interview Questions:</h2>

            <p>
                Given the following <strong> 'interview questions' </strong> i have to make the decision 
                of select the most <strong> 'appropiate sorting algorithm' </strong> for the use case of the 
                questions:
            </p>

            <ul>
                <li><strong> Sort 10 schools around your house by distance </strong></li>

                <p>
                    R:
                </p>

                <li><strong> eBay sorts listings by the current Bid amount </strong></li>

                <p>
                    R:
                </p>

                <li><strong> Sort scores on ESPN</strong></li>

                <p>
                    R:
                </p>

                <li><strong> Massive database (can't fit all into memory) needs to sort through past year's user data</strong></li>

                <p>
                    R:
                </p>

                <li><strong> Almost sorted Udemy review data needs to update and add 2 new reviews</strong></li>

                <p>
                    R:
                </p>

                <li><strong> Temperature Records for the past 50 years in Canada</strong></li>

                <p>
                    R:
                </p>

                <li><strong> Large user name database needs to be sorted. Data is very random</strong></li>

                <p>
                    R:
                </p>

                <li><strong> You want to teach sorting for the first time</strong></li>

                <p>
                    R:
                </p>

            </ul>
        </DataStructuresWrapper>
    )
}

export default SortingInterview;