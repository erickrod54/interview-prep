import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BigOnotation, BigORuleBook, Nav } from "./components/index.components";
import { HomePageInterviewPrep } from "./pages/index.pages";

/**interview-prep-app - version 4 - App js - 
 * Features: 
 * 
 *     --> Importing and placing 'Nav'
 *          to provide common navigation.
 * 
 *     --> Importing 'BigORuleBook' and 
 *          building a route for it.  
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
      </Routes>
    </Router>
  );
}

export default App;
