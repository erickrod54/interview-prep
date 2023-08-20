import React from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 36.06-  NonTechnicalQuestions - Features:
 *
 *     --> Answering the questions for 'Non Technical Questions' - Work in Progress -
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
        <li>Can you do the job ?</li>

        <p className="answer">

        </p>

        <li>Can i work with you ?</li>

        <p className="answer"></p>

        <li>Are you going to improve ?</li>

        <p className="answer"></p>

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

        </p>

        <li>Secret Weapon</li>

        <p className="answer"></p>

        <li>After the interview</li>

        <p className="answer"></p>
      </ul>
    </DataStructuresWrapper>
  );
};

export default NonTechnicalQuestions;
