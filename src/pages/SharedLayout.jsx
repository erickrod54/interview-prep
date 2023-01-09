import React from "react";
import { Outlet } from 'react-router-dom'
import styled from "styled-components";

/**interview-prep-app - version 16.02 - 
 * SharedLayout - Features: 
 * 
 *     --> Building a 'SharedLayout'
 *         for all pages. 
 * 
 * Note: to generate url's dinamicly
 */

const SharedLayout = () => {

    return(
        <Wrapper>
           <Outlet />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .topics-container{
        display: flex;
        justify-content: space-around;
        margin: 2rem;
        flex-wrap: wrap;

        a{
            padding: .5rem;
            text-transform: capitalize;
            text-decoration: 2px underline orange;
            color: deepskyblue;
        }
    }
`

export default SharedLayout;