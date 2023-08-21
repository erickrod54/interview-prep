import React from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 36.08-  NonTechnicalQuestions - Features:
 *
 *     --> Answering the questions for 'Non Technical Questions' - Finish answers -
 *
 * Note: this 'fasterFib' will invoke fibonacciMaster().
 */

const NonTechnicalQuestions = () => {

  const { graphsData } = useAppContext();

  const heroesnontechnicalinterview = graphsData[79].image;

  return (
    <DataStructuresWrapper>
      <h2>Non Technical Questions</h2>

      <p>
        when it comes to <strong> interview ( non technical )</strong>, is good
        to set a <strong> mindest </strong> that every party involve in the
        interview is excited to be there ( have the mindset that i am familiar
        with the interviewer making him/her feel comfortable )
      </p>

      <p>
        always try to <strong> sense </strong> and <strong> match </strong> at
        energy level
      </p>

      <p>
          there is a story component based for an interview as <strong> heroes </strong>
          composition, and is as follows:
      </p>

      <img src={heroesnontechnicalinterview} className="large" alt="heroes non technical interview"/>

      <p>there is a list of questions and common answers following:</p>

      <ul>

        <li>Why did i leave my last job ?</li>

        <p className="answer">
            No negativity, i have to include my motivation to work with 
            really smart people, and to earn credit as an expert in the field 
        </p>

        <li>Tell me about a problem you solved ?</li>

        <p className="answer">
            this kind of question is answered using the SAR method (
            that is situation, action and result ), starting with the 
            situation is to tell the story how the project was and focus 
            in the problem to solve, and the second part is the action 
            that focuses in what did i do to solve that situation ( workflow, 
            to do list, and tests ), and then the result as can be big improve 
            in the performance, or scaling in a number of users, or more 
            safety for users and appliaction
            the tips for this question is to do as follows
            <ul>
                <li>have this prepared ( state the situation or problem )</li>
                <li>have metrics and numbers ( is related with the action taken - workflow, to lists, tests, etc )</li>
                <li>Scaling, performance and security ( is related with the result - the benefit )</li>
            </ul>

            a variation of this questions can be:

                <ul>
                    <li>Tell me aboout an interesting project ?</li>
                </ul>

                First i have to show that i am different, and i have to relate this interesting project to the job description
        </p>

        <li>Why do you want work with us ?</li>

        <p className="answer">
            the key here is to make the interviewer feel special, make them feel 
            that i research the company, and the job description, and a small talk 
            about related skills that match with the job description that were 
            implemented in a past project,  this also related with the 4 heroes
        </p>

        <li>What to ask to the interviewer ?</li>

        <p className="answer"></p>
        <li>Tell me about yourself ?</li>

        <p className="answer">
            the balance in time for this question cannot be too short or too long, 
            if it is too short they don't get a chance to get to know you, and if 
            it is to long the interviewer it's going to get bored, and they key 
            here is to tell about my 4 heroes journey

            <ul>
                <li>
                    My triggers of success ( how do i went from somebody
            with to little skills to somebody that eventually they want to hire )
                </li>
                <li>
                    Mention things that i want to be asked ( as past projects, past companies, and challenges, medium writting to help to other junior people in React basics )
                </li>

                <li>
                    Skills relevant in the job ( as React JS, Data Integration, API's, workflow as separation 
                    of Business logic and presentation, state management as useState, Context API, and Redux )
                </li>
            </ul>

            talk about how i taught myself and start to be flexible with my skills to adapt to every requirement
            situation
        </p>

        <li>What is your biggeest weakness ?</li>

        <p className="answer">
            the key for this question is to 

            <ul>
                <li>
                    Real answer
                </li>

                <li>
                    Show how i improved 
                </li>
            </ul>

            the answer for this question to explain how i after starting in my early career with a solid
            IT background, i end up switching to develop software due to my migration process and how throught 
            that path i discover that i were really skillful and capable to build amazing things and to use 
            this skill to survive in my difficult migration journey, until this point that i reach,
            stability and focus that even when i lost my gear, i never gave up and code even from my phone
            ( the bad thing it is that was really difficult to deploy and test the code )
        </p>

        <li>Do you have any questions for me ?</li>

        <p className="answer">

            this is a direct questions to the interviewer, how do they grow to that point,
            and mention something that they mention, th goal is to meet them 

            <ul>
                <li>
                    Focus on them, not company 
                </li>
                <li>
                    Mention something that they mention 
                </li>
            </ul>
            
            questions can be like:

            <ul>
                <li>
                    What was the greatest mistake that you made in the first month of this job ? 
                </li>
                <li>
                    Where do you see this company going in a period of 5 years ? 
                </li>
                <li>
                    Why did you join to this company ? 
                </li>
                <li>
                    The first time that you messed up, how was handle by the company ?
                </li>
            </ul>                      
        </p>

        <li>Secret Weapon</li>

        <p className="answer">
            these are key concepts that must be include in every answer:
            
            <ul>
                <li>Simplicity over complexity ( solving problems in a way that the code is maintainable and readable )</li>
                <li>Premature optimization us the root of all evil ( based on time and resources i have to probe the value of this in order to make optimizations )</li>
                <li>Overall goal, not myopic ( probe that i can attach to the business or customer goals, even on situation that the code don't have my personal 
                    expections, when i consider that have right numbers to go to production and get aligned with the deadline i deply it  ) </li>
            </ul>
        </p>

        <li>After the interview</li>

        <p className="answer">
            First of all i have to show them my good impression, thank them for their time, and focus that i expect hear back 
            from them, and get somefeedback whatever the final decision is, the keys for answer this questions are:

            <ul>
                <li>
                    Don't overuse 'I'
                </li>
                <li>
                    Talk about the interviewer
                </li>
                <li>
                    Express that i am the ideal candidate ( how my workflow approach novel and creative ideas, 
                    that i don't need micromanagement due to my experience and in one year i'll be one of your best assets, focus on my freelancer experience to adapt and grow )
                </li>
                <li>
                    Don't brag
                </li>
            </ul>

            express my expection to be sorrounded of a diverse and creative group of people that i can work and grow with like the same
            interviewer
        </p>
      </ul>
    </DataStructuresWrapper>
  );
};

export default NonTechnicalQuestions;
