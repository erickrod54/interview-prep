import React from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 31.15 - SortingInterview   
 * - Features: 
 * 
 *     --> Completing answers to the interview questions. 
 * 
 * Note: Pending to re structure imports using the index.
 * pending to add an extra resource 'sortingalgorithmsperformancetable' 
 */

const SortingInterview = () => {

    const { graphsData } = useAppContext();

    const sortingalgorithmsperformancetable = graphsData[56].image;

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
                    R: First of all it state about a small ammount so match of the description of 
                       small ammount of data ( could be partially sorted ), so i can use 
                       <strong> Insertion Sort </strong> 
                </p>

                <li><strong> eBay sorts listings by the current Bid amount </strong></li>

                <p>
                    R: In this case it state about <strong> 'eBay Bid' </strong> that should be 
                       a big list of integers data, so ideal sorting algoritmhs to treat numbers 
                       are <strong> Radix or Counting Sort </strong> ( it is a fixed lenght of numbers )
                </p>

                <li><strong> Sort scores on ESPN</strong></li>

                <p>
                    R: By nature of this data, socores can be <strong> decimal </strong> and vary of their format
                       so for this case <strong> Quick Sort </strong> it is a good approach for this use case 
                       because can handle efficiently in <strong> space complexity </strong>, because of their 
                       diverse formats <strong> Quick Sort </strong> can handle it as one same set ( avoiding )
                       unnecessary memory increasing
                </p>

                <li><strong> Massive database (can't fit all into memory) needs to sort through past year's user data</strong></li>

                <p>
                    R: Base on the information, is a big ammount of data that need to be sorted in some type 
                       of <strong> data </strong>, so for this use case a good approach will be <strong> Merge Sort </strong>
                       because as the same of <strong> Quick Sort </strong> can handle worst case scenarios of 
                       <strong> complexity ( in time and space ) </strong> very efficiently ( and it is stating a really large 
                       data ammount, so i have to focus on performance, because it is already a worst case scenerario in 
                       space complexity, so what i need is <strong> fast sorting </strong> )
                </p>

                <li><strong> Almost sorted Udemy review data needs to update and add 2 new reviews</strong></li>

                <p>
                    R: It state about a big ammount of data, and it is  <strong> almost sorted </strong> so i can 
                       take this use case with a <strong> insertion sort </strong> approach, which can result in 
                       a good performance due to the ammount of data almost sorted
                </p>

                <li><strong> Temperature Records for the past 50 years in Canada</strong></li>

                <p>
                    R: The temperature has decimal places so a good approach will be <strong> Quick Sort </strong>,
                       it will sort efficiently perhaphs will have some <strong> space complexity </strong> increase 
                       in order to sort the listing but it will handle efficiently the treatment of <strong> decimal data </strong>
                </p>

                <li><strong> Large user name database needs to be sorted. Data is very random</strong></li>

                <p>
                    R: It is a very Random data so i cannot use algorithms that benefits of almost sorted data sets 
                       so will take this use case with a <strong> Merge Sort approach </strong>, because i do not 
                       much information about the data's nature, but it states that is random
                </p>

                <li><strong> You want to teach sorting for the first time</strong></li>

                <p>
                    R: <strong> Bubble sort or Selection sort  </strong> definitively
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

            <img src={sortingalgorithmsperformancetable} className="large" alt="sorting algorithms performance table"/> 

            <h4> Note: depending on the browser and the motor engine that uses (for example chrome uses V8 ), the '.sort()' ( the default method ),
                 uses a sorting algorithm ( <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"> check the reference to the .sort() implementation</a> ) of the browser
            </h4>
            
        </DataStructuresWrapper>
    )
}

export default SortingInterview;