import React, { useContext, useState } from "react";
import { array1, array2, array3, array4, boxes, boxes1, boxesletters, everyoneCharacter, graphsData, largeArray, linksData, n, nemo, numbers } from "./data";

/**interview-prep-app - version 17.04 - context js - 
 * Features: 
 * 
 *     --> Importing and Providing interviewQA
 *         handlers and states 'handleChange'
 * 
 * 
 * Note: pending to migrate functionalities from
 * local components
 */


export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    
    /**--- logic for HowToSolveProblems Component start--*/
    
    
    
    const CommonElement = (arr1, arr2 ) => {
        /**big o (a * b) because is nested*/
        for(let i=0; i < arr1.length; i++){
            for(let j=0; j < arr2.length; j++){
                if (arr1[i] === arr2[j]) {
                    return console.log('(a * b) - if i get here is because arra3 and array4 have at least one equal ==>',true)
                }
            }
        }
        return console.log('(a * b) - array1 and array2 are not equal and is ==>',false)
    }
    
    const CommonElement2 = (arr3, arr4 ) => {
        /**big o (a + b) because they are comparing separately*/
        
        let map = {};
        
        for(let i=0; i < arr3.length; i++){
            if (!map[arr3[i]]) {
                const item = arr3[i]
                map[item] = true;
            }
        }
        //console.log('this is array 3 ==>', map)
        
        for(let j=0; j < arr4.length; j++){
            if (map[arr4[j]]) {
                return console.log('(a + b) - if i get here is because arra3 and array4 have at least one equal ==>',true)
            }
        }
        return console.log('(a + b) - array1 and array2 are not equal and is ==>',false)
    }
    
    const CommonElement3 = (arr5, arr6 ) => {
        return console.log('(a + b) es6 method - array1 and array2 are not equal and is ==>',arr5.some(item => arr6.includes(item)))
        
    }
    
    const CommonElement4 = (arr7, arr8 ) => {
        return console.log('(a + b) es6 - if i get here is because arra3 and array4 have at least one equal ==>',arr7.some(item => arr8.includes(item)))
    }
    
    
    /**--- logic for HowToSolveProblems Component end--*/

    /** states and hanldlers for arrayImplementations ---- start */

    const [ first, setFirst ] = useState('')  
    const [second, setSecond ] = useState('')
    const [third, setThird ] = useState('')
    const [fourth, setFourth ] = useState('')
    const [fifth, setFifth ] = useState('')

    const [ context, setContext ] = useState(false)

    
    const handleFirst = () => {
        // eslint-disable-next-line 
        if ( [] === []) {
            setFirst(<h4>[] === [] - true</h4>)
            return first
        }
        return setFirst(<h4>[] === [] - false</h4>)
    }
    
    const handleSecond = () => {
        var object1 = {value: 10};
        var object3 = {value: 10};
        
        if (object1 === object3) {
            setSecond(<h4>object1 === object3 - true</h4>)
            return second
        }
        setSecond(<h4>object1 === object3 - false</h4>)
        return second;
    }
    
    const handleThird = () => {
        var object1 = {value: 10};
        var object2 = object1;
        var object3 = {value: 10};
        
        if (object3 === object2) {
            setThird(<h4>object3 === object2 - true</h4>)
            return second
        }
        setThird(<h4>object3 === object2 - false</h4>)
        return second;
    }
    
    const handleFourth = () => {
        var object1 = {value: 10};
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
            a:function() {
                console.log(this)
            }
        }
        
        setFifth(<h4>{`{a: ƒ}`}</h4>)

        return object4.a() && fifth
    }

    /** states and hanldlers for arrayImplementations ---- end */

    /**Big o notation states and handlers - start */

    const [ showNemo, setShowNemo ] = useState(false)
    const [ showEveryone, setShowEveryone ] = useState(false)
    const [ showLarge, setShowLarge ] = useState(false)
    const [showNemoWithTime, setShowNemoWithTime ] = useState(false)
    const [ showPrintMe, setShowPrintMe ] = useState(false)
    
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
        for( let i = 0; i <  array.length; i++){
            if (array[i] === 'nemo') {
                return(
                    console.log("Found Nemo!!!")
                )
            }
        }
    }

    /**this is to measure the performance */
    const findNemoWithTime = (array) => {
        let t0 = performance.now()
        for( let i = 0; i <  array.length; i++){
            if (array[i] === 'nemo') {
                return(
                    console.log("Found Nemo measuring time!!!")
                    )
                }
            }
            let t1 = performance.now()
            console.log('call to find nemo took ==>', + (t1-t0) + ' miliseconds')
        }

    const printMe = (arg) => {
        setShowPrintMe(!showPrintMe)
        return console.log(arg);
    }

    /**Big o notation states and handlers - end */

    /**big o rule notation states and hanlders - start */

    const [ worstcase, setWorstcase ] = useState(false)
    const [ count, setCount ] = useState(0)
    const [counthi, setCounthi ] = useState(0)
    const [ boxescount, setBoxescount ] = useState(0)
    const [ boxescount1, setBoxescount1 ] = useState(0)
    // eslint-disable-next-line
    const [ boxespair, setBoxespair ] = useState([])
    const [ boxespairshow, setBoxespairshow ] = useState(false) 

    

    //console.log('worstCase ==>', worstCase)

    const findNemoRule = (array) => {
        for( let i = 0; i <  array.length; i++){
            setWorstcase(!worstcase)
            console.log(worstcase)
            console.log('running')
            if (array[i] === 'nemo') {
                return(
                    console.log("Found Nemo!!! ==>", i)
                    )
                }
                setCount(i)
            }
           
        }

    const compressBoxesTwice = (boxes, boxes2) => {
        boxes.forEach(function(boxes) {
            console.log(boxes);
            setBoxescount(boxes)
        });

        boxes2.forEach(function(boxes) {
            console.log(boxes);
            setBoxescount1(boxes)
        })
    }

    const logAllPairsBoxes = (boxes) => {

        for(let i=0; i < boxes.length; i++){
            for(let j=0; j < boxes.length; j++){
                console.log(boxes[i], boxes[j])
                setBoxespair(boxes[i], boxes[j])
            }   
        }
        setBoxespairshow(!boxespairshow)
    }

    const printnumebersAndPairSums = (numbers) => {

        console.log('these are the numbers:')
        numbers.forEach(function(number) {
            console.log(number)
        })

        console.log('and these are their sums:')
         numbers.forEach(function(firstNumber){
            numbers.forEach(function(secondNumber){
                console.log( firstNumber + secondNumber)
            })
         })
    }

    const printItem  = (items) => {
        console.log(items[0])

        var middleIndex = Math.floor(items.length / 2);
        var index = 0;

        while(index < middleIndex){
            console.log(items[index]);
            index++;
           
        }

        for(var i = 0; i < 100; i++){
            console.log('this is', 'hi')
        }
        setCounthi(items)

    }

    /**big o rule notation states and hanlders - end */

    /**Array destructure handlers and state -- start*/

    /**if they are not in a 'handdler' the order matter
     * when i do push, pop operations
     */
     const strings = ['a','b','c','d']

     /**i copy/spread it to avoid to push it in
     * the same memory reference than original 'strings'*/
    const newStrings = [...strings]

    const newStringspop = [...newStrings]

    const stringsUnshift = [...newStringspop]

    const newStringsunshift = [...stringsUnshift]

    const stringsSplice = [...newStringsunshift]

    /**data-structures-and-algoritmhs states and handlers */

    const [ mathpow, setMathpower ] = useState(0,0);
    const [ overflow, setOverflow ] = useState(0,0);

    const mathHandler = () => {
        const result = Math.pow(6,100)
        setMathpower(result)
        
        return result;
    }

    const overflowHandler = () => {
        const result = Math.pow(6,1000)
        setOverflow(result)
        
        return result;
    }

    /**hash collision  data structures*/
    let user = {
        age: 54,
        name:'Kylie',
        magic:true,
        scream: function() {
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
    
    return(
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
            findNemoRule,
            compressBoxesTwice,
            logAllPairsBoxes,
            printnumebersAndPairSums,
            printItem,
            array1,
            array2, 
            array3, 
            array4,
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
            handleChange
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}