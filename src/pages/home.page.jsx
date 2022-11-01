import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const HomePageInterviewPrep = () => {

    return(
        <Wrapper>
            <h2 className="main-title">The interview prep</h2>
            <div className="topics-container">
                <Link to='/big-o-notation'>Big O notation</Link>

            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    
`

export default HomePageInterviewPrep;