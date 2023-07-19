import React from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 31.13 - SortingInterview   
 * - Features: 
 * 
 *     --> Developing 'Which Sort is the Best ?' section. 
 * 
 * Note: Pending to re structure imports using the index.
 * pending to add an extra resource 'sortingalgorithmsperformancetable' 
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

                <h2>Which Sort is the Best ?</h2>

                <p>
                    By the questions above there are some considerations that must be taken, so 
                    i can have a base criteria to take decisions due to choose the right algorithm:
                </p>
                
                <h3>Insertion Sort: </h3>
                
                <ul>
                    <li>
                        <strong> insertion sort </strong> can be use when i have <strong> few items or partially sorted </strong>, becuase is 
                        easier to sort the lists with few side effects
                    </li>
                </ul>

                <h3>Bubble Sort and Selection Sort: </h3>
                
                <ul>
                    <li>
                        only for educational porpuses
                    </li>
                </ul>

                <h3>Merge Sort: </h3>
                
                <ul>
                    <li>
                        By having a <strong> time complexity of O( n log(n))</strong> in 
                        the worst case, becoming it in one of the fastest and efficient.
                        ( orange case is not for most of algorithms so merge sort still a
                        good option )
                    </li>
                </ul>

                <h3>Quick Sort: </h3>
                
                <ul>
                    <li>
                        Is also popular at the same level of Merge sort, because it's 
                        efficiency with worst case in <strong> space complexity</strong>
                        ( orange and green in most of cases )
                    </li>

                    <li>
                        one downside is, if the <strong> pivot </strong>, is not choosen 
                        properly can conclude in a really bad <strong> time complexity </strong>
                        of <strong> O(n^2) </strong> (that is a really slow sorting )
                    </li>
                </ul>
                
            </ul>
        </DataStructuresWrapper>
    )
}

export default SortingInterview;