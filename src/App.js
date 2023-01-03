import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "./components/index.components";
import SharedLayout from "./pages/SharedLayout";
import SingleTopicPage from "./pages/single.topic.page";
import TopicsPage from "./pages/topics.page";

/**interview-prep-app - version 13 - App js - 
 * Features: 
 * 
 *     --> Refactoring routing by adding a 
 *         SharedLayout.
 * 
 *     --> Adding TopicsPage.
 * 
 *     --> Adding SingleTopicPage. 
 *   
 * 
 * Note: TopicsPage Component will display
 * a route for all the topics, and 
 * SingleTopicPage will have the single 
 * topic
 */

function App() {
  return (
    <Router>
    <Nav />
      <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<TopicsPage />}/>
            <Route path=":topicId" element={<SingleTopicPage />}/>
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
