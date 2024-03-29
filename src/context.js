import React, { useContext, useState } from "react";
import { array1, array2, array3, array4, array5, array6, array7, basket, baskets, beasts, boxes, boxes1, boxesletters, everyoneCharacter, graphsData, largeArray, letters, linksData, n, nemo, numbers, numberssearching, numberssorting, spanishs } from "./data";

/**interview-prep-app - version 38.15 - context js - 
 * Features: 
 * 
 *     --> Placing and Providing  'bfsvalue', and 'setBFSvalue' 
 * 
 * 
 * Note: pending to clear 'basketsortedfixed', 'setBasketsortedfixed'
 * from the provider
 */


export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

    /**Algorithms intro states and handlers - start */
    const [ fibonacciterative100, setFibonacciterative100 ] = useState();
    // eslint-disable-next-line
    const [ inceptionund, setInceptionund ] = useState();

    /**--- logic for HowToSolveProblems Component start--*/



    const CommonElement = (arr1, arr2) => {
        /**big o (a * b) because is nested*/
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                    return console.log('(a * b) - if i get here is because arra3 and array4 have at least one equal ==>', true)
                }
            }
        }
        return console.log('(a * b) - array1 and array2 are not equal and is ==>', false)
    }

    const CommonElement2 = (arr3, arr4) => {
        /**big o (a + b) because they are comparing separately*/

        let map = {};

        for (let i = 0; i < arr3.length; i++) {
            if (!map[arr3[i]]) {
                const item = arr3[i]
                map[item] = true;
            }
        }
        //console.log('this is array 3 ==>', map)

        for (let j = 0; j < arr4.length; j++) {
            if (map[arr4[j]]) {
                return console.log('(a + b) - if i get here is because arra3 and array4 have at least one equal ==>', true)
            }
        }
        return console.log('(a + b) - array1 and array2 are not equal and is ==>', false)
    }

    const CommonElement3 = (arr5, arr6) => {
        return console.log('(a + b) es6 method - array1 and array2 are not equal and is ==>', arr5.some(item => arr6.includes(item)))

    }

    const CommonElement4 = (arr7, arr8) => {
        return console.log('(a + b) es6 - if i get here is because arra3 and array4 have at least one equal ==>', arr7.some(item => arr8.includes(item)))
    }


    /**--- logic for HowToSolveProblems Component end--*/

    /** states and hanldlers for arrayImplementations ---- start */

    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [third, setThird] = useState('')
    const [fourth, setFourth] = useState('')
    const [fifth, setFifth] = useState('')

    const [context, setContext] = useState(false)


    const handleFirst = () => {
        // eslint-disable-next-line 
        if ([]) {
            setFirst(<h4>[] === [] - true</h4>)
            return first
        }
        return setFirst(<h4>[] === [] - false</h4>)
    }

    const handleSecond = () => {
        var object1 = { value: 10 };
        var object3 = { value: 10 };

        if (object1 === object3) {
            setSecond(<h4>object1 === object3 - true</h4>)
            return second
        }
        setSecond(<h4>object1 === object3 - false</h4>)
        return second;
    }

    const handleThird = () => {
        var object1 = { value: 10 };
        var object2 = object1;
        var object3 = { value: 10 };

        if (object3 === object2) {
            setThird(<h4>object3 === object2 - true</h4>)
            return second
        }
        setThird(<h4>object3 === object2 - false</h4>)
        return second;
    }

    const handleFourth = () => {
        var object1 = { value: 10 };
        var object2 = object1;


        if (object1 === object2) {
            setFourth(<h4>object1 === object2 - true</h4>)
            return fourth
        }
        setThird(<h4>object1 === object2 - false</h4>)
        return fourth;
    }

    const handleContext = () => {
        setContext(!context)

        const object4 = {
            a: function () {
                console.log(this)
            }
        }

        setFifth(<h4>{`{a: ƒ}`}</h4>)

        return object4.a() && fifth
    }

    /** states and hanldlers for arrayImplementations ---- end */

    /**Big o notation states and handlers - start */

    const [showNemo, setShowNemo] = useState(false)
    const [showEveryone, setShowEveryone] = useState(false)
    const [showLarge, setShowLarge] = useState(false)
    const [showNemoWithTime, setShowNemoWithTime] = useState(false)
    const [showPrintMe, setShowPrintMe] = useState(false)

    const handleFindNemo = () => {
        setShowNemo(!showNemo)
        findNemo(nemo)
    }

    const handleFindNemoWithTime = () => {
        setShowNemoWithTime(!showNemoWithTime)

        findNemoWithTime(nemo)
    }

    const handleFindNemoEveryone = () => {
        setShowEveryone(!showEveryone)

        findNemoWithTime(everyoneCharacter)
    }

    const handleFindNemoLarge = () => {
        setShowLarge(!showLarge)

        findNemoWithTime(largeArray)
    }

    const findNemo = (array) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 'nemo') {
                return (
                    console.log("Found Nemo!!!")
                )
            }
        }
    }

    /**this is to measure the performance */
    const findNemoWithTime = (array) => {
        let t0 = performance.now()
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 'nemo') {
                return (
                    console.log("Found Nemo measuring time!!!")
                )
            }
        }
        let t1 = performance.now()
        console.log('call to find nemo took ==>', + (t1 - t0) + ' miliseconds')
    }

    const printMe = (arg) => {
        setShowPrintMe(!showPrintMe)
        return (arg);
    }

    /**Big o notation states and handlers - end */

    /**big o rule notation states and hanlders - start */

    const [worstcase, setWorstcase] = useState(false)
    const [count, setCount] = useState(0)
    const [counthi, setCounthi] = useState(0)
    const [boxescount, setBoxescount] = useState(0)
    const [boxescount1, setBoxescount1] = useState(0)
    // eslint-disable-next-line
    const [boxespair, setBoxespair] = useState([])
    const [boxespairshow, setBoxespairshow] = useState(false)



    //console.log('worstCase ==>', worstCase)

    const findNemoRule = (array) => {
        for (let i = 0; i < array.length; i++) {
            setWorstcase(!worstcase)
            console.log(worstcase)
            console.log('running')
            if (array[i] === 'nemo') {
                return (
                    console.log("Found Nemo!!! ==>", i)
                )
            }
            setCount(i)
        }

    }

    const compressBoxesTwice = (boxes, boxes2) => {
        boxes.forEach(function (boxes) {
            console.log(boxes);
            setBoxescount(boxes)
        });

        boxes2.forEach(function (boxes) {
            console.log(boxes);
            setBoxescount1(boxes)
        })
    }

    const logAllPairsBoxes = (boxes) => {

        for (let i = 0; i < boxes.length; i++) {
            for (let j = 0; j < boxes.length; j++) {
                console.log(boxes[i], boxes[j])
                setBoxespair(boxes[i], boxes[j])
            }
        }
        setBoxespairshow(!boxespairshow)
    }

    const printnumebersAndPairSums = (numbers) => {

        console.log('these are the numbers:')
        numbers.forEach(function (number) {
            console.log(number)
        })

        console.log('and these are their sums:')
        numbers.forEach(function (firstNumber) {
            numbers.forEach(function (secondNumber) {
                console.log(firstNumber + secondNumber)
            })
        })
    }

    const printItem = (items) => {
        console.log(items[0])

        var middleIndex = Math.floor(items.length / 2);
        var index = 0;

        while (index < middleIndex) {
            console.log(items[index]);
            index++;

        }

        for (var i = 0; i < 100; i++) {
            console.log('this is', 'hi')
        }
        setCounthi(items)

    }

    /**big o rule notation states and hanlders - end */

    /**Array destructure handlers and state -- start*/

    /**if they are not in a 'handdler' the order matter
     * when i do push, pop operations
     */
    const strings = ['a', 'b', 'c', 'd']

    /**i copy/spread it to avoid to push it in
     * the same memory reference than original 'strings'*/
    const newStrings = [...strings]

    const newStringspop = [...newStrings]

    const stringsUnshift = [...newStringspop]

    const newStringsunshift = [...stringsUnshift]

    const stringsSplice = [...newStringsunshift]

    /**data-structures-and-algoritmhs states and handlers */

    const [mathpow, setMathpower] = useState(0, 0);
    const [overflow, setOverflow] = useState(0, 0);

    const mathHandler = () => {
        const result = Math.pow(6, 100)
        setMathpower(result)

        return result;
    }

    const overflowHandler = () => {
        const result = Math.pow(6, 1000)
        setOverflow(result)

        return result;
    }

    /**hash collision  data structures*/
    let user = {
        age: 54,
        name: 'Kylie',
        magic: true,
        scream: function () {
            return 'ahhhhh!!'
        }
    }

    /**interview QA questions */
    const [stringgiven, setStringgiven] = useState('');

    const reverseString = (str) => {
        if (!str || str.length < 2 || typeof str !== 'string') {
            return 'mmm this is not a string';
        }

        const backwards = [];
        const totalItems = str.length - 1;

        for (let i = totalItems; i >= 0; i--) {
            backwards.push(str[i]);
        }

        return backwards.join('');
    };

    const handleReverse = () => {
        const fullString = reverseString(stringgiven);
        setStringgiven(fullString);
    };

    const handleChange = (e) => {
        setStringgiven(e.target.value);
    };

    /**SpaceComplexity states and handlers */
    const [boo, setBoo] = useState(0);
    const [hiarray, sethiArray] = useState(false);

    const booo = (array) => {
        setBoo(n.length)
        for (let i = 0; i < n.length; i++) {
            console.log('boooooo')
        }
    }

    const arrayOfHintTimes = (array) => {
        /**i have control over 'hiArray'*/
        let hiArray = [];
        for (let i = 0; i < n; i++) {
            hiArray[i] = 'hi'
        }
        sethiArray(!hiarray)
    }

    /**how to build hash tables handlers and states */
    const [grapes, setGrapes] = useState([]);
    const [apples, setApples] = useState([]);
    const [justapples, setJustApples] = useState([])

    /**linked.lists.component states and handlers --start */
    const [obj1, setObj1] = useState('{a: true}');
    const [ reversevalue, setReversevalue ]  = useState([]);

    /**linked.lists.component states and handlers --end */

    /**states and handlers from interview questions --start */
    const [recurring, setRecurring] = useState([]);
    const [recurring1, setRecurring1] = useState([]);
    const [recurring2, setRecurring2] = useState([]);

    const handlefirstRecurringCharacter = (input) => {
        for (let i = 0; i < input.length; i++) {
            for (let j = i + 1; j < input.length; j++) {
                if (input[i] === input[j]) {
                    setRecurring(input[i]);
                    return input[i];
                }
            }
        }
        setRecurring('undefined')
        return undefined;
    }

    const handlefirstRecurringCharacter1 = (input) => {
        for (let i = 0; i < input.length; i++) {
            for (let j = i + 1; j < input.length; j++) {
                if (input[i] === input[j]) {
                    setRecurring1(input[i]);
                    return input[i];
                }
            }
        }
        setRecurring1('undefined')
        return undefined;
    }

    /**this solution implements hash tables, comparing every key
     * of the array6 and returning the first recurring number, this
     * solution can be proven with the rest of the arrays and the 
     * result will be accurate*/
    const handlefirstRecurringCharacter2 = (input) => {
        let seenNumbers = {};
        for (let i = 0; i < input.length; i++) {
            if (seenNumbers[input[i]]) {
                setRecurring2(input[i]);
                return input[i];
            } else {
                seenNumbers[input[i]] = true;
                setRecurring2(seenNumbers[input[i]]);
            }
        }
        return undefined;
    };

    /**handlers and states for linked.lists.component */
    const [obj2, setObj2] = useState(obj1);
    const [mylinkedListvalue, setMylinkedList] = useState();
    const [mylinkedListappend, setMylinkedListappend] = useState('');
    const [mylinkedListprepend, setMylinkedListprepend] = useState('');
    const [inserListvalue, setInserListvalue] = useState([]);
    const [removeListvalue, setRemoveListvalue] = useState([]);


    /**pointer data start */

    const handleDelete = () => {
        setObj1(null);
        setObj2(null);
    }

    const Object1ValueBooya = () => {
        let obj1 = `{a: 'booya'}`;
        setObj1(obj1)
    }

    /**Stack and queues states and handlers */
    const [ a_state, setA_state ] = useState(0);
    const [ b_state, setB_state ] = useState(0);
    const [ c_state, setC_state ] = useState(0);

    //CALL STACK && CALLBACK QUEUE states 
    const [ a_time_state, setA_time_state ] = useState(0);
    const [ b_time_state, setB_time_state ] = useState(0);
    const [ c_time_state, setC_time_state ] = useState(0);

    //CALL STACK && CALLBACK QUEUE states for zero seconds case
    const [ a_zero_state, setA_zero_state ] = useState(0);
    const [ b_zero_state, setB_zero_state ] = useState(0);
    const [ c_zero_state, setC_zero_state ] = useState(0);

     //CALL STACK && CALLBACK QUEUE handler for 0 seconds case
     const callSetTimeoutStackZero = () => {
        return (
                setA_zero_state(1),
                setTimeout(() => {
                    setB_zero_state(2)
                }, 0),
                setC_zero_state(3),
                cleanUpSetTimeoutZerofunction()
                )
            }

    //CALL STACK && CALLBACK QUEUE handler
    const callSetTimeoutStack = () => {
        return (
                setA_time_state(1),
                setTimeout(() => {
                    setB_time_state(2)
                }, 2000),
                setC_time_state(3),
                cleanUpSetTimeoutfunction()
                )
    }
    
    //CALL STACK handler
    const callStack = () => {
        return (
                setA_state(1),
                setB_state(2),
                setC_state(3),
                cleanUpfunction()
                )
    }

        //CALL STACK handler cleanUp function
        const cleanUpfunction = () => {
            setTimeout(() => {
                return(
                    setA_state(0),
                    setB_state(0),
                    setC_state(0)
                )
            }, 6000)
        }

    //CALL STACK && CALLBACK QUEUE cleanup function
    const cleanUpSetTimeoutfunction = () => {
        setTimeout(() => {
            return(
                setA_time_state(0),
                setB_time_state(0),
                setC_time_state(0)
            )
        }, 6000)
    }
    
    //CALL STACK && CALLBACK QUEUE cleanup function for zero
    const cleanUpSetTimeoutZerofunction = () => {
        setTimeout(() => {
            return(
                setA_zero_state(0),
                setB_zero_state(0),
                setC_zero_state(0)
            )
        }, 6000)
    }

    //Quicksort states and handlers
    const [ quicksortvalue, setQuicksortvalue ] = useState([]);

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

    const cleanQuickSort = () => {
        setTimeout(() => {
            setQuicksortvalue(' value cleared!, hit again! ')
        }, 2000);
      }

      /**these are searching.algorithms.component handlers and state */

      const [ beastindexofvalue, setBeastindexofvalue ] = useState([]);

      const beastindexofHandler = (array) => {
        return(
            setBeastindexofvalue(array.indexOf('Godzilla')),
            array.indexOf('Godzilla')
        )
    }

    /**sorting.component states and handlers */
    const [ lettersorted, setLettersorted ] = useState([]);
    const [ basketsorted, setBasketsorted ] = useState([]);
    const [ spanishsorted, setSpanishsorted ] = useState([]);
    const [ basketsortedfixed, setBasketsortedfixed ] = useState([]);
    const [ spanishsortedfixed, setSpanishsortedfixed ] = useState([]);
    const [ bubblesortvalue, setBubblesortvalue ] = useState([]);
    const [ selectionsortvalue, setSelectionsortvalue ] = useState([]);
    const [ insertionsortvalue, setInsertionsortvalue ] = useState([]);
    const [ mergesortvalue, setMergesortvalue ] = useState([]);

    const spanish = spanishs;

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

    const handleSortbasketfixed = () => {
        let basketsort = basket.sort(function(a,b){
            return a-b;
        });

        setBasketsortedfixed(basketsort)
        console.log(basketsort)
    }

    /**searching algorithms states and handlers */
    const [ beastfindindexvalue, setBeastfindindexvalue ] = useState(false);
    const [ beastincludesvalue, setBeastincludesvalue ] = useState(false);
    const [ bfsvalue, setBFSvalue ] = useState([]);
    const [ bfsvaluerecursive, setBFSvaluerecursive ] = useState([]);
    
    const beastfindindexHandler = (array) => {
        return(
            array.findIndex(function(item){ return item === 'Godzilla'}),
            setBeastfindindexvalue(array.findIndex(function(item){ return item === 'Godzilla'}))
        )
    } 

    const beastincludesHandler = (array) => {
        const item = array.includes('Godzilla');
        setBeastincludesvalue(item); // Update the state with the result
        return item; // Return the result directly
      };

    
    return (
        <AppContext.Provider value={{
            nemo,
            everyoneCharacter,
            largeArray,
            graphsData,
            linksData,
            boxes,
            boxes1,
            boxesletters,
            numbers,
            n,
            first,
            second,
            third,
            fourth,
            fifth,
            context,
            showNemo,
            showEveryone,
            showLarge,
            showNemoWithTime,
            showPrintMe,
            worstcase,
            count,
            counthi,
            boxescount,
            boxescount1,
            boxespair,
            boxespairshow,
            strings,
            newStrings,
            newStringspop,
            stringsUnshift,
            newStringsunshift,
            stringsSplice,
            mathpow,
            overflow,
            user,
            stringgiven,
            boo,
            hiarray,
            grapes,
            apples,
            justapples,
            basket,
            obj1,
            recurring,
            recurring1,
            recurring2,
            obj2,
            mylinkedListvalue,
            mylinkedListappend,
            mylinkedListprepend,
            inserListvalue,
            removeListvalue,
            reversevalue,
            a_state,
            b_state,
            c_state,
            a_time_state,
            b_time_state,
            c_time_state,
            a_zero_state,
            b_zero_state,
            c_zero_state,
            letters,
            numberssorting,
            quicksortvalue,
            beastindexofvalue,
            lettersorted,
            basketsorted, 
            spanishsorted,
            basketsortedfixed,
            spanishsortedfixed, 
            bubblesortvalue,
            selectionsortvalue,
            insertionsortvalue, 
            mergesortvalue, 
            fibonacciterative100,
            inceptionund, 
            beastfindindexvalue, 
            beastincludesvalue,
            bfsvalue,
            bfsvaluerecursive, 
            setBFSvaluerecursive,
            setBFSvalue,
            beastincludesHandler,
            beastfindindexHandler,
            setInceptionund,
            setFibonacciterative100,
            merge,
            insertionSort,
            handleSelectionSort,
            handleBubblesort,
            setSpanishsortedfixed,
            setBasketsortedfixed,
            handleSortbasketfixed,
            handleSpanishsorted,
            setSpanishsorted,
            setBasketsorted,
            handleSortletters,
            setLettersorted,
            quickSort,
            cleanQuickSort,
            setA_zero_state,
            setB_zero_state,
            setC_zero_state,
            setReversevalue,
            Object1ValueBooya,
            setRemoveListvalue,
            setInserListvalue,
            setMylinkedListprepend,
            setMylinkedListappend,
            setMylinkedList,
            setObj2,
            setObj1,
            setJustApples,
            setApples,
            setGrapes,
            booo,
            sethiArray,
            setBoo,
            findNemoRule,
            compressBoxesTwice,
            logAllPairsBoxes,
            printnumebersAndPairSums,
            printItem,
            array1,
            array2,
            array3,
            array4,
            array5,
            array6,
            array7,
            beasts,
            numberssearching,
            baskets,
            spanishs,
            numberssorting,
            findNemo,
            handleFindNemo,
            handleFindNemoWithTime,
            handleFindNemoEveryone,
            handleFindNemoLarge,
            printMe,
            handleFirst,
            handleSecond,
            handleThird,
            handleFourth,
            handleContext,
            CommonElement,
            CommonElement2,
            CommonElement3,
            CommonElement4,
            mathHandler,
            overflowHandler,
            reverseString,
            handleReverse,
            handleChange,
            arrayOfHintTimes,
            handlefirstRecurringCharacter,
            handlefirstRecurringCharacter1,
            handlefirstRecurringCharacter2,
            handleDelete,
            callStack,
            callSetTimeoutStack,
            cleanUpSetTimeoutfunction,
            callSetTimeoutStackZero,
            cleanUpSetTimeoutZerofunction,
            beastindexofHandler
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => {
    return useContext(AppContext)
}