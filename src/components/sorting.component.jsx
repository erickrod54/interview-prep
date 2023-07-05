import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 29.18 - SortingComponent  
 * - Features: 
 * 
 *     --> Building 'selectionsortvalue' state   
 * 
 * Note: Pendind to create the sort algorithm handler
 */

const SortingComponent = () => {

    const [ lettersorted, setLettersorted ] = useState([]);
    const [ basketsorted, setBasketsorted ] = useState([]);
    const [ basketsortedfixed, setBasketsortedfixed ] = useState([]);
    const [ spanishsorted, setSpanishsorted ] = useState([]);
    const [ spanishsortedfixed, setSpanishsortedfixed ] = useState([]);
    const [ bubblesortvalue, setBubblesortvalue ] = useState([]);
    const [ selectionsortvalue, setSelectionsortvalue ] = useState([]);

    const { graphsData } = useAppContext();

    const sortingimportance = graphsData[41].image; 
    const sortelementaryandcomplex = graphsData[42].image;
    const sortingfindingscanning = graphsData[43].image;
    const selectionswappingelements = graphsData[44].image;

    console.log('graphsData ==>', graphsData)

    const letters = ['a', 'd', 'z', 'e', 'r', 'b'];

    const basket = [2, 65, 34, 2, 1, 7, 8];

    const spanish = ['único', 'árbol', 'cosas', 'fútbol'];

    const numbers = [99, 44, 6, 2, 1, 5, 63, 87,283, 4, 0 ];

    const handleBubblesort = (array) => {
        const length = array.length;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (array[i] > array[j + 1]) {
                    //Swap elements
                    let temp = array[j];
                    array[j] = array[j +1];
                    array[j +1] = temp;
                }
            }
            setBubblesortvalue(' ' + array + ' ' + ',')
            
        }
    }


    const handleSortletters = () => {
        let letterssort = letters.sort()
        setLettersorted(letterssort)
        console.log(lettersorted)
    }

    const handleSpanishsorted = () => {
        let spanishsort = spanish.sort()
        setSpanishsorted(spanishsort)
        console.log(spanishsort)
    }

    const handleSpanishsortedlocal = () => {
        let spanishsort = spanish.sort(function(a,b){
            return a.localeCompare(b)
        })
        setSpanishsortedfixed(spanishsort)
        console.log(spanishsort)
    }

    const handleSortbasket = () => {
        let basketsort = basket.sort()
        setBasketsorted(basketsort)
        console.log(basketsort)
    }

    const handleSortbasketfixed = () => {
        let basketsort = basket.sort(function(a,b){
            return a-b;
        });

        setBasketsortedfixed(basketsort)
        console.log(basketsort)
    }

    return(
        <DataStructuresWrapper>
        <h2>
            SortingComponent
        </h2>

        <p>
            Talking about <strong> 'sorting' </strong> ( that is a way to order data ),
            there is <strong> 'sorting' </strong> that come pre-built in languages 
            as the example as follows:   
        </p>

        <p>
            i have the following array of letters:
        </p>

        <section className="code-block code-block-row"> 
            [{letters.map((letter) => {

                return(
                    <div key={letter} >
                        <p>'{letter}',</p>
                    </div>
                )
            })}]
        </section>

        <p>
            And if i apply a <strong> 'sort' </strong> pre-built method as follows 
        </p>

        <section className="code-block code-block-row"> 
            <p>{`letters.sort()`}</p>
        </section>
        
        <button onClick={handleSortletters}> Sort letters </button>

        <p>
            will be resulting in the following:
        </p>

        {lettersorted ? 
        
        <section className="code-block code-block-row"> 
            [{lettersorted.map((letter) => {

                return(
                    <div key={letter} >
                        <p>'{letter}',</p>
                    </div>
                )
            })}]
        </section>
        :
        null
        }


        <p>
            and this is easy to do when i have smalll data sets, but what if i need to
            sort large data sets ( large in a size or billion of billions of data sets
            for example google articles, amazon products, netflix shows, apple store market 
            these companies need design sort methods that fits to their data needs ), because
            an inefficient way is not an option for these companies because translates 
            on money and time 
        </p>

        <img src={sortingimportance} className="large" alt="sorting importance"/>

        <p>
            mostly in interviews i wont have to built a sort method from scratch, but will be
            important to indentify it, knowing how it works, and knowing how to modify a given
            use case to make it efficient
        </p>

        <p>
            there is a lot of <a href="https://en.wikipedia.org/wiki/Sorting_algorithm">references</a> to a sorting and specially the fastest ones 
            are designed for academics that spend years and years researching to design them 
        </p>

        <p>
            the <strong> 'key' </strong> to remember is as more and more data is handled by the computers
            which is a big trending computing <strong> 'searching and sorting' </strong> are two of the 
            biggest problems in the software world
        </p>

        <p>
           for example i have the following array that involves sort numbers:
        </p> 

        <section className="code-block code-block-row"> 
            [{basket.map((number, index) => {

                return(
                    <div key={index} >
                        <p>'{number}',</p>
                    </div>
                )
            })}]
        </section>

        <p>
            and if apply sort:
        </p>

        <section className="code-block code-block-row"> 
            <p>{`basket.sort()`}</p>
        </section>
        
        <button onClick={handleSortbasket}> Sort numbers </button>

        <p>
            will be resulting in the following:
        </p>

        {basketsorted ? 
        
        <section className="code-block code-block-row"> 
            [{basketsorted.map((number, index ) => {

                return(
                    <div key={index} >
                        <p>'{number}',</p>
                    </div>
                )
            })}]
        </section>
        :
        null
        }       

        <p>
            it does not look ordered, this happen because the particular 
            implementation of the 
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">pre-built sort method in JavaScript</a> language
            and the treatment for data, in this case <strong> numbers </strong> are treated by the <strong> 'sort' </strong>
            method as <strong> 'strings' </strong>
        </p>

        <section className="code-block">
            <p>{`'2'.charCodeAt(0) = 50`}</p>
            <p>{`'65'.charCodeAt(0) = 54`}</p>
            <p>{`'34'.charCodeAt(0) = 51`}</p>
            <p>{`'7'.charCodeAt(0) = 55`}</p>
        </section>

        <p>
            so the value in <strong> 'unicode' </strong> is totally different
        </p>

        <p>
            and as the documentation says The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
        </p>

        <p>
            and the fix solution will be as follows:
        </p>

        <button onClick={handleSortbasketfixed}> Sort numbers fixed </button>

        <p>
            will be resulting in the following:
        </p>

        {basketsortedfixed ? 
        
        <section className="code-block code-block-row"> 
            [{basketsortedfixed.map((number, index ) => {

                return(
                    <div key={index} >
                        <p>'{number}',</p>
                    </div>
                )
            })}]
        </section>
        :
        null
        }

        <p>
            The comparison function (a, b) <span>{`-->`}</span> a - b is passed to the sort() method. This function 
            determines the sort order of the elements in the array. It subtracts b from a and returns 
            the result. If the result is negative, a is sorted before b, if the result is positive, b is 
            sorted before a, and if the result is zero, the order of a and b remains unchanged.
        </p>

        <p>
            let's make another example of <strong> 'sort method' </strong> data <strong> 'treatment' </strong>, this time 
            using an array of spanish words
        </p>

        <section className="code-block code-block-row"> 
            [{spanish.map((word) => {

                return(
                    <div key={word} >
                        <p>'{word}',</p>
                    </div>
                )
            })}]
        </section>

        <section className="code-block code-block-row"> 
            <p>{`spanish.sort()`}</p>
        </section>
        
        <button onClick={handleSpanishsorted}> Sort spanish words </button>

        <p>
            will be resulting in the following:
        </p>

        {spanishsorted ? 
        
        <section className="code-block code-block-row"> 
            [{spanishsorted.map((word, index ) => {

                return(
                    <div key={index} >
                        <p>'{word}',</p>
                    </div>
                )
            })}]
        </section>
        :
        null
        }

        <p>
            and in order to fix it will be as this:
        </p>  

        <button onClick={handleSpanishsortedlocal}> Sort spanish words fix </button>
        <p>
            it does not look ordered, this happen because the particular 
            implementation of the 
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"> pre-built sort method in JavaScript </a> language
            
        </p>

        {spanishsortedfixed ? 
        
        <section className="code-block code-block-row"> 
            [{spanishsortedfixed.map((word, index ) => {

                return(
                    <div key={index} >
                        <p>'{word}',</p>
                    </div>
                )
            })}]
        </section>
        :
        null
        }


        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare">Reference for localCompare() docs </a>

        <p>
            There are some Algorithms that are considered as the <strong> 'elementary sort' </strong> will be the first 
            3 algorithms, and the last two are more <strong> 'complex algorithms' </strong>, as the image that 
            follows:
        </p>

        <img src={sortelementaryandcomplex} className="large" alt="sort elementary and complex"/>

        <h3>
            Bubble sort:
        </h3>

        <p>
            let's start with <strong> 'bubble sort' </strong>
        </p>

        <p>
            Bubble sort is a simple sorting algorithm that works by repeatedly <strong> 'swapping' </strong> 
            adjacent elements if they are in the wrong order. The algorithm <strong> compares each pair of adjacent elements </strong> and swaps 
            them if they are in the wrong order. 
        </p>

        <p>
            <strong> This process is repeated until the entire list is sorted </strong>.
            Imagine you have a row of numbers, and you start from the beginning. You compare each pair of 
            adjacent numbers, and if they are out of order, you swap them. This way, the largest number 
            "bubbles" up to the end of the row in each pass.
        </p>

        <p>
        After the first pass, the largest number is 
            in its correct position at the end. Then, you repeat the process for the remaining unsorted numbers 
            until the entire list is sorted.
        </p>

        <p>
            let's make an exercise of bubble sort to sort the following array:
        </p>

        <section className="code-block code-block-row">
        
        [{numbers.map((number,index) => {
            return(
                <div key={index}>
                    <p>{number},</p>
                </div>
            )
        })}]

        </section>

        <button onClick={() => handleBubblesort(numbers)}> Apply bubble sort over the <strong> 'numbers array' </strong></button>

        <p>[{bubblesortvalue}]</p>

        <h3>
            Selection sort:
        </h3>

        <p>
            Selection sort is a straightforward sorting algorithm that works by repeatedly <strong> finding the smallest element
            from the unsorted part of the list </strong> and placing it <strong> at the beginning </strong>. The algorithm divides
            the list into two parts: the sorted part and the unsorted part.
        </p>

        <p>
            To begin, it finds the smallest element in the unsorted part and swaps it with the first element. This effectively expands 
            the sorted part by one element. Then, it moves to the next position in the unsorted part and repeats the process of finding 
            the smallest element and swapping it with the corresponding position in the sorted part. This continues until the entire list is sorted.
        </p>

        <p>
            In essence, selection sort repeatedly selects the smallest element and moves it to its correct position, gradually building up a 
            sorted portion of the list. Although it is simple to understand and implement, selection sort's time complexity is also O(n^2), making
            it less efficient for large lists. However, for small lists or situations where memory is limited, it can still be a reasonable choice.
        </p>

        <p>
            so the algorithm will <strong> find the smallest ( red color ) </strong>, and <strong> 'scan' the next</strong> looking for the smallest 
            again in the next element, as the graphic as follows:
        </p>

        <img src={sortingfindingscanning} className="large" alt="sorting finding scanning"/>

        <p>
            once that the smallest item is <strong> found </strong>, will swap as follows in the picture <strong> (the scanning value that is temporal - check the handler - 
            is a temporal varriable )</strong>
        </p>

        <img src={selectionswappingelements} className="large" alt="selection swapping elements"/>

        <p>
            let's apply selection sort in the previous <strong> 'numbers' </strong> array:
        </p>

        <section className="code-block code-block-row">
        
        [{numbers.map((number,index) => {
            return(
                <div key={index}>
                    <p>{number},</p>
                </div>
            )
        })}]

        </section>

        </DataStructuresWrapper>
    )
}

export default SortingComponent;