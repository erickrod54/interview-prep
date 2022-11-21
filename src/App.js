import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BigOnotation, BigORuleBook, Nav, SpaceComplexity } from "./components/index.components";
import { HomePageInterviewPrep } from "./pages/index.pages";

/**interview-prep-app - version 7 - App js - 
 * Features: 
 * 
 *     --> Adding 'SpaceComplexity'.  
 * 
 * Note: the first assets added to 'graphsData'
 * are for big notation app
 */

function App() {
  return (
    <Router>
    <Nav />
      <Routes>
          <Route path='/' element={<HomePageInterviewPrep />}/>
          <Route path='/big-o-notation' element={<BigOnotation />}/>
          <Route path='/big-o-rule-book' element={<BigORuleBook />}/>
          <Route path='/space-complexity' element={<SpaceComplexity />}/>
      </Routes>
    </Router>
  );
}

export default App;
