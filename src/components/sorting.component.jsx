import React, { useState } from "react";
import { DataStructuresWrapper } from "../styled.components";

/**interview-prep-app - version 29.04 - SortingComponent  
 * - Features: 
 * 
 *     --> Building 'SortingComponent'.
 * 
 *     --> Developing localCompare example. 
 * 
 * Note: Pending to re structure imports using the index.
 */

const SortingComponent = () => {

    const [ lettersorted, setLettersorted ] = useState([]);
    const [ basketsorted, setBasketsorted ] = useState([]);
    const [ spanishsorted, setSpanishsorted ] = useState([]);
    const [ spanishsortedfixed, setSpanishsortedfixed ] = useState([]);

    const letters = ['a', 'd', 'z', 'e', 'r', 'b'];

    const basket = [2, 65, 34, 2, 1, 7, 8];

    const spanish = ['único', 'árbol', 'cosas', 'fútbol'];

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
        
        <button onClick={handleSortbasket}> Sort letters </button>

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

        </DataStructuresWrapper>
    )
}

export default SortingComponent;