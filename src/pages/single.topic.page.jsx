import React from "react";
import { useParams } from 'react-router-dom'

import { ArrayDataStructure,
         DynamicVsStatic,
         ArraysImplementations,
         BigOnotation,
         BigORuleBook,
         DataStructures,
         DoublyLinkedList,
         HashCollisions,
         HashTables,
         BuildHashTables,
         HowToSolveProblems,
         BuildAndUseArrays,
         InterviewQA,
         LinkedLists,
         SpaceComplexity,
         StackAndQueues,
         StacksAndLinkedList,
         QueueAndLinkedList,
         TreeDataStructure,
         BTSComponent,
         BTSBalanced,
         GraphsStructure,
         GraphsImplementation,
         AlgorithmsIntro,
         SortingComponent,
         SortingInterview,
         SearchingAlgorithms,
         DynamicProgramming,
         NonTechnicalQuestions
        } from '../components/index.components';
        
import { useAppContext } from "../context";

/**interview-prep-app - version 36.01 - SingleTopicPage  
 * - Features: 
 * 
 *     --> Adding 'NonTechnicalQuestions' to the single topic. 
 * 
 * Note: Pending to re structure imports using the index.
 */

const SingleTopicPage = () => {
    
    const { linksData } = useAppContext()
    //console.log('links data in dataStructures ==>', linksData)

    const { topicId } = useParams();
   
    //console.log('the topic id==>', useParams())


    const app = linksData.find((singleapp) => singleapp.id === topicId);
    
    //console.log("i find this ==>", app);

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

    if (id === '11') {
        return <HashCollisions />
    }

    if (id === '12') {
        return <BuildHashTables />
    }

    if (id === '13') {
        return <InterviewQA />
    }

    if (id === '14') {
        return <LinkedLists />
    }

    if (id === '15') {
        return <DoublyLinkedList />
    }

    if (id === '16') {
        return < StackAndQueues />
    }

    if (id === '17') {
        return <StacksAndLinkedList />
    }

    if (id === '18') {
        return <QueueAndLinkedList />
    }
    
    if (id === '19') {
        return <TreeDataStructure />
    }

    if (id === '20') {
        return <BTSComponent />
    }

    if (id === '21') {
        return <BTSBalanced />
    }

    if (id === '22') {
        return <GraphsStructure />
    }

    if (id === '23') {
        return <GraphsImplementation />
    }

    if (id === '24') {
        return <AlgorithmsIntro />
    }

    if (id === '25') {
        return <SortingComponent />
    }

    if (id === '26') {
        return <SortingInterview />
    }

    if (id === '27') {
        return <SearchingAlgorithms />
    }

    if (id === '28') {
        return <DynamicProgramming />
    }

    if (id === '29') {
        return <NonTechnicalQuestions />
    }
    
}

export default SingleTopicPage;