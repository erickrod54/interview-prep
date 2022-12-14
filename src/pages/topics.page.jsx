import React from "react";
import { useAppContext } from "../context";
import { Link } from 'react-router-dom'
import styled from "styled-components";

/**interview-prep-app - version 15 - TopicsPage 
 * - Features: 
 * 
 *     --> Building 'TopicsPage' that is going to be 
 *          show instead of 'HomePageInterviewPrep'.
 * 
 *     --> Destructuring data from the context. 
 * 
 * Note: setting titles and sub titles for the topics
 * also filtering 'linksData' by topics section.
 */

const TopicsPage = () => {
    
    const { linksData } = useAppContext()
    
    return(
        <Wrapper>
        <h2 >General topics:</h2>
        <div className="topics-container">
        {linksData.filter((link) => link.id < 6 ).map((item) => {
            const { id, name } = item;
            
            return(
                <Link key={id} to={`${id}`}>{name}</Link>
                )
            })}
        </div>
        <h2>Specific Data Structures:</h2>
        <div className="topics-container">
        {linksData.filter((link) => link.id >= 6 ).map((item) => {
            const { id, name } = item;
            
            return(
                <Link key={id} to={`${id}`}>{name}</Link>
                )
            })}
        </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    h2{
        margin: 1rem;
        padding: 1rem;
        color: orange;
        text-decoration: 4px underline deepskyblue;
    }


`

export default TopicsPage;