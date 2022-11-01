import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BigOnotation } from "./components/index.components";
import { HomePageInterviewPrep } from "./pages/index.pages";

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<HomePageInterviewPrep />}/>
          <Route path='/big-o-notation' element={<BigOnotation />}/>
      </Routes>
    </Router>
  );
}

export default App;
