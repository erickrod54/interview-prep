import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 31.06 - SortingComponent  
 * - Features: 
 * 
 *     --> Building 'cleanQuickSort'.
 * 
 * Note: Quick sort is going to be applied over
 * numebrs array
 */

const SortingComponent = () => {

    const [ lettersorted, setLettersorted ] = useState([]);
    const [ basketsorted, setBasketsorted ] = useState([]);
    const [ basketsortedfixed, setBasketsortedfixed ] = useState([]);
    const [ spanishsorted, setSpanishsorted ] = useState([]);
    const [ spanishsortedfixed, setSpanishsortedfixed ] = useState([]);
    const [ bubblesortvalue, setBubblesortvalue ] = useState([]);
    const [ selectionsortvalue, setSelectionsortvalue ] = useState([]);
    const [ insertionsortvalue, setInsertionsortvalue ] = useState([]);
    const [ mergesortvalue, setMergesortvalue ] = useState([]);
    const [ quicksortvalue, setQuicksortvalue ] = useState([]);
    

    const { graphsData } = useAppContext();

    const sortingimportance = graphsData[41].image; 
    const sortelementaryandcomplex = graphsData[42].image;
    const sortingfindingscanning = graphsData[43].image;
    const selectionswappingelements = graphsData[44].image;
    const mergesortdataset = graphsData[46].image;
    const mergesorthalfdataset = graphsData[47].image;
    const mergesorthalfagaindataset = graphsData[48].image; 
    const mergesortfinalhalfdataset = graphsData[49].image;
    const mergesortingdataset = graphsData[50].image;
    const mergemoresortingdataset = graphsData[51].image;
    const mergecomparingcombiningdataset = graphsData[52].image;
    const quicksortbargraph = graphsData[53].image;
    const quicksortpivotpickplace = graphsData[54].image;
    const quicksortpivotpickplaceagain = graphsData[55].image;

    
    console.log('graphsData ==>', graphsData)
    
    const letters = ['a', 'd', 'z', 'e', 'r', 'b'];
    
    const basket = [2, 65, 34, 2, 1, 7, 8];
    
    const spanish = ['único', 'árbol', 'cosas', 'fútbol'];
    
    const numbers = [99, 44, 6, 2, 1, 5, 63, 87,283, 4, 0 ];

    const quickSort = (array, left, right) => {
        const len = array.length; 
        let pivot;
        let partitionIndex;
      
        if(left < right) {
          pivot = right;
          partitionIndex = partition(array, pivot, left, right);
          
          //sort left and right

          /**the pivot is the last item 'partitionIndex - 1' of each 
           * split list ( this process is ramdom )*/
          quickSort(array, left, partitionIndex - 1);
          quickSort(array, partitionIndex + 1, right);
        }
        return (
                setQuicksortvalue(array + ',' ),
                array,
                cleanQuickSort()
                );
      }

      const cleanQuickSort = () => {
        setTimeout(() => {
            setQuicksortvalue(' value cleared!, hit again! ')
        }, 2000);
      }
         
      function partition(array, pivot, left, right){
        let pivotValue = array[pivot];
        let partitionIndex = left;
      
        for(let i = left; i < right; i++) {
          if(array[i] < pivotValue){
            swap(array, i, partitionIndex);
            partitionIndex++;
          }
        }
        swap(array, right, partitionIndex);
        return partitionIndex;
      }
      
      function swap(array, firstIndex, secondIndex){
          var temp = array[firstIndex];
          array[firstIndex] = array[secondIndex];
          array[secondIndex] = temp;
      }
    
    const length = numbers.length;
    const middle = Math.floor(length / 2 );
    const left = numbers.slice(0,middle);
    const right = numbers.slice(middle);

    /**handleMergeSort performs the Merge sort method */
   const handleMergeSort = (array) => {
    if (array.length <= 1) {
      return array;
    }
  
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
  
    return merge(handleMergeSort(left), handleMergeSort(right));
  };
  
  function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    setMergesortvalue(result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)) + ',')
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
    
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

    const insertionSort = (array) => {
        const length = array.length;
        for (let i = 1; i < length; i++) {
          let current = array[i];
          let j = i - 1;
      
          while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
          }
      
          array[j + 1] = current;
        }
      
        setInsertionsortvalue( '' + array + ',');
      };

    const handleSelectionSort = (array) => {
        const length = array.length;
        for (let i = 0; i < length; i++) {
            // set current index as minimum
            let min = i;
            let temp = array[i];
            for (let j = i + 1; j < length; j++) {
                if (array[j] < array[min]) {
                    //update the minimum if 
                    //current is lower that 
                    //what we had previously
                    min = j;
                }
                
            }
            
            array[i] = array[min]
            array[min] = temp;
        }
        setSelectionsortvalue(array + ',' + '')
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

        <p>
            let's apply the <strong> selection sort algorithm </strong>
        </p>

        <button onClick={() => handleSelectionSort(numbers)}> Apply bubble sort over the <strong> 'numbers array' </strong></button>

        <p>[{selectionsortvalue}]</p>

        <a href="https://www.youtube.com/@AlgoRythmics">Selection sort <strong> dancing </strong> algorithm reference</a>

        <h3>
            Insertion Sort:
        </h3>

        <p>
            Insertion sort is a simple sorting algorithm that works by dividing the list into two parts: the sorted part and
            the unsorted part. It starts with the first element as the sorted part and the rest as the unsorted part. 
        </p>

        <p>
            The algorithm iterates through each element in the unsorted part and "inserts" it into its correct position in the sorted part.
            It does this by comparing the current element with the elements in the sorted part, moving them to the right until it finds the 
            correct position to insert the current element. This process continues until the entire list is sorted.
        </p>

        <p>
            Imagine you have a hand of cards and you want to arrange them in ascending order. You start with one card in your hand 
            (the sorted part) and pick another card from the remaining pile (the unsorted part). You compare the new card with the cards
            in your hand, shifting them to the right until you find the correct spot to insert the new card. You repeat this process for
            each card until your hand is sorted.
        </p>

        <p>
            Insertion sort is efficient for small lists or nearly sorted lists. Its time complexity is also O(n^2), but it performs 
            better than bubble sort and selection sort in practice because it can exit early if the list is already sorted or nearly sorted.
        </p>

        <p>
            let's make an <strong> 'insertion sort' </strong> exersice base in the <strong> 'numbers' </strong> array:
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

        <button onClick={() => insertionSort(numbers)}> Apply insertion sort over the <strong> 'numbers array' </strong></button>

        <p>[{insertionsortvalue}]</p>

        <h4>
            Note: this method is important, has a level complexity of O(n^2), but is pretty much use for cases when i have a list 
            almost sorted, insertion sort is ideal for small data sets, when it comes to small data sets  insertion sort, performs
            better than other algorithms.
        </h4>

        <h3>
            Merge Sort:
        </h3>

        <p>
            So far the complexity until insertion sort has been of <strong> O(n^2) </strong> ( that is a little bit slow ), now 
            when it comes to <strong> Merge sort </strong> the complexity is <strong> 'O( n log n )' </strong>, this algorithm
            uses the technique <strong> 'divide and conquer' </strong> ( by divideding the problem, and combining the solutions,
            by the Big-O complexity chart is located in the yellow area )
        </p>

        <p>
            initially i have one subset of data as the graph as follows:
        </p>

        <img src={mergesortdataset} className="large" alt="merge sort data set"/>

        <p>
            Then the data subset is divided always in a <strong> 'half' ( divide and conquer ) </strong> as follows:
        </p>

        <img src={mergesorthalfdataset} className="large" alt="merge sort half data set"/>

        <p>
            And then the data subset is divided again <strong> 'half' ( divide and conquer ) </strong> as follows:
        </p>

        <img src={mergesorthalfagaindataset} className="large" alt="merge sort half again data set"/>

        <p>
            And then the data subset is divided again <strong> 'half', having as <strong> result one single element </strong> ( divide and conquer ) </strong> as follows:
        </p>

        <img src={mergesortfinalhalfdataset} className="large" alt="merge sort half again data set"/>

        <p>
            when finally get <strong> divided in half until get a single unit </strong>, starts the sorting comparing each single element
        </p>

        <img src={mergesortingdataset} className="large" alt="merge sorting data set"/>

        <p>
            then i start to sort <strong> comparing every single element </strong> and <strong> comparing the adjancent </strong> and <strong> combining them </strong> in an
            <strong> sorted data set </strong>
        </p>

        <img src={mergemoresortingdataset} className="large" alt="merge more sorting data set"/>

        <p>
            once that the data sets gets sorted, start to combined them again in one data set
        </p>

        <img src={mergecomparingcombiningdataset} className="large" alt="merge comparing combining data set"/>


        <h3>
            Merge sort exercise:
        </h3>

        <p>
            let's apply merge sort over the <strong> 'numbers' </strong> array:
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

        <p>
            First the array gets divided in <strong> 'half' </strong>, using the <strong> index </strong>
        </p>

        <section className="code-block">
        
        [{left.map((number,index) => {

            return(
                <div key={index}>
                    <p>{number},</p>
                </div>
            )
        })}]

        <p>and right side:</p>
        
        [{right.map((number,index) => {

        return(
            <div key={index}>
                <p>{number},</p>
            </div>
        )
        })}]

        </section>

        <p>
            it keeps dividing in <strong> half </strong> until get one single item, and then starts to 
            sort as follows:
        </p>
        
        <button onClick={() => handleMergeSort(numbers)}>Merge sort <strong> numbers </strong></button>

        <section className="code-block code-block-row">
            <p>
                [{mergesortvalue}]
            </p>
        </section>

        <h3>
            Quick Sort:
        </h3>

        <p>
            Quick sort is also a <strong> 'divide and conquer algorithm' </strong>, its complexity is also
            <strong> 'O( log n )' </strong> ( which is pretty good ), and it works using a <strong> 'pivoting technique' </strong>
            to bring the large list to a smallest list
        </p>

        <img src={quicksortbargraph} className="large" alt="quicksort bar graph"/>

        <p>
            as the graph above, <strong> 'the pivot' </strong> is chosen randomly and the list is split to sort 
            <strong> lesser item values </strong> to the <strong> 'the pivot' </strong> and <strong> greater item values </strong> 
            than the pivot 
        </p>

        <p>
            let's think in the following list of numbers, where the quick sort algorithm will choose randomly a 
            number <strong> '4' </strong> to use it as first <strong> pivot </strong>, to start sorting the list
        </p>

        <img src={quicksortpivotpickplace} className="large" alt="quicksort bar graph"/>

        <p>
            after everything is <strong> 'sorted' </strong> taking as reference the pivot with the value <strong> '4' </strong>,
            <strong> 'new pivots' </strong> are chosen to sort both sides ( now <strong> '4' </strong> is the old pivot that 
            split two list for new pivots ), these pivots are again randomly picked <strong> '2' </strong> and <strong> '7' </strong> 
        </p>

        <img src={quicksortpivotpickplaceagain} className="large" alt="quick sort pivot pick place again"/>

        <p>
            this <strong> 'divide and conquer technique' </strong> repeats while the list still unsorted, and will keep 
            split them, and sorted, as the graph shows above ( <strong> red </strong> when cannot divide more becuase is 
            sorted and <strong> 'purple' </strong> that keeps choosing new pivots, sorting and sorting the list )
        </p>

        <p>
            let's apply the <strong> 'quicksort' </strong> algorithm over the <strong> 'numbers' </strong> array, to sort 
            the numbers in the right order 
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
        
        <p>
            let's apply the <strong> 'quicksort' </strong> algorithm over the <strong> 'numbers' </strong> array, to sort 
            the numbers in the right order 
         </p> 

         {/**Select first and last index as 2nd and 3rd parameters */}   
         <button onClick={() => quickSort(numbers, 0, numbers.length - 1)}> Apply <strong> quick sort </strong> over <strong> numbers </strong> array </button>
         <p>
            [{quicksortvalue}]
         </p>

        </DataStructuresWrapper>
    )
}

export default SortingComponent;