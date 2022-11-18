import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

/**interview-prep-app - version 4 - 
 * Nav - Features: 
 * 
 *     --> Building 'Nav'
 * 
 * 
 * Note: to generate url's dinamicly
 */

const Nav = () => {

    return(
        <Wrapper>
            <Link to='/'>
                <h2 className="main-title">The interview prep</h2>
            </Link>
        </Wrapper>
        
    )
}

const Wrapper = styled.nav`
    padding: 1.5rem;
    margin-top:1rem ;
`

export default Nav;