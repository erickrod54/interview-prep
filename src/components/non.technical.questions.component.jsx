import React from "react";
import { DataStructuresWrapper } from "../styled.components";
import { useAppContext } from "../context";

/**interview-prep-app - version 36.04-  NonTechnicalQuestions - Features:
 *
 *     --> Setting the questions for 'Non Technical Questions' 
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
        <li>Tell me about a problem you solved ?</li>

        <p className="answer"></p>

        <li>Why do you want work with us ?</li>

        <p className="answer"></p>
        <li>What to ask to the interviewer ?</li>

        <p className="answer"></p>
        <li>Tell me about yourself ?</li>

        <p className="answer"></p>

        <li>What is your biggeest weakness ?</li>

        <p className="answer"></p>

        <li>Secret Weapon</li>

        <p className="answer"></p>

        <li>After the interview</li>

        <p className="answer"></p>
      </ul>
    </DataStructuresWrapper>
  );
};

export default NonTechnicalQuestions;
