import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { useAppContext } from "../context";

/**interview-prep-app - version 7 - 
 * HomePageInterviewPrep - Features: 
 * 
 *     --> Setting some white space. 
 * 
 * Note: to generate url's dinamicly
 */

const HomePageInterviewPrep = () => {

    const { linksData } = useAppContext()
    console.log(linksData)

    return(
        <Wrapper>
            <div className="topics-container">
                {linksData.map((item) => {
                    const { id, url, name } = item;

                    return(
                        <Link key={id} to={url}>{name}</Link>
                    )
                })}

            </div>
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

export default HomePageInterviewPrep;