import React from "react";
import { useParams } from 'react-router-dom'
import ArrayDataStructure from "../components/array-data-structure";
import DynamicVsStatic from "../components/arrays-dynamic-vs-static";
import ArraysImplementations from "../components/arrays.implementations";
import BigOnotation from "../components/big-o-notation.component";
import BigORuleBook from "../components/big-o-notation.rules.component";
import DataStructures from "../components/data-structures-and-algorithms";
import HashTables from "../components/hash.tables.components";
import HowToSolveProblems from "../components/how-to-solve-problems.component";
import BuildAndUseArrays from "../components/howtobuild.howtouse.an.array";
import SpaceComplexity from "../components/space.complexity.component";
import { useAppContext } from "../context";

/**interview-prep-app - version 16.06 - SingleTopicPage  
 * - Features: 
 * 
 *     --> Adding 'HashTables'. 
 * 
 * Note: by id this component make match and render the 
 * corresponding topic.
 */


const SingleTopicPage = () => {
    
    const { linksData } = useAppContext()
    console.log('links data in dataStructures ==>', linksData)

    const { topicId } = useParams();
   
    console.log('the topic id==>', useParams())


    const app = linksData.find((singleapp) => singleapp.id === topicId);
    
    console.log("i find this ==>", app);

    const { id } = app;

    if (id === '1') {
        return <BigOnotation />
    }

    if (id === '2') {
        return <BigORuleBook />
    }

    if (id === '3') {
        return <SpaceComplexity />
    }

    if (id === '4') {
        return <HowToSolveProblems />
    }

    if (id === '5') {
        return <DataStructures />
    }

    if (id === '6') {
        return <ArrayDataStructure />
    } 

    if (id === '7') {
        return <DynamicVsStatic/>
    }
    
    if (id === '8') {
        return <ArraysImplementations />
    }

    if (id === '9') {
        return <BuildAndUseArrays/>
    }

    if (id === '10') {
        return <HashTables />
    }
    
}

export default SingleTopicPage;