import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

const BigOnotation = () => {

    const { nemo } = useAppContext()

    console.log('context works ==>', nemo)
    

    const findNemo = (array) => {
        for( let i = 0; i <  array.length; i++){
            if (array[i] === 'nemo') {
                return(
                    console.log("Found Nemo!!!")
                )
            }
        }
    }

    return(
        <Wrapper>
            <h2 className="main-title topics-title">
                Big O notation 
            </h2>
            <div className="topics-container">
                <section>
                    <p>In this example i have an instruction
                        that i give to the computer, so get
                        a result, there are two main thing
                        about differenciate 'good code' from
                        'bad code', so 'what's good code ?',
                        good code is code that have this two
                        qualities: 
                    </p>
                    <ul>
                        <li>
                            1.- Readable
                        </li>
                        <li>
                            2.- Scalable
                        </li>
                    </ul>
                <p>The instruction in this example is the following:</p>
                <ul>
                    <li>
                        <section className="code-block">
                            <p>{`for( let i = 0; i <  array.length; i++){`}</p>
                            <p>{`if (array[i] === 'nemo') {`}</p>
                            <p>{`return(`}</p>
                            <p>{`console.log("Found Nemo!!!")`}</p>
                            <p>{`)`}</p>
                            <p>{`}`}</p>
                        </section>
                    </li>
                </ul>
                </section>
                <p>
                    so what's main goal of this instruction ? is to find 
                    'nemo', the how efficient is the way that i do it ?
                     is evaluated with big-o notation ( Big O Asymptotic Analisys)
                </p>
                <button onClick={() => findNemo(nemo)}>
                    click to find nemo
                </button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .code-block{
        padding: 4rem;
        border: 1px solid black;
    }

    li{
        display: flex;
        justify-content: center;
        align-content: center;
    }
`


export default BigOnotation;