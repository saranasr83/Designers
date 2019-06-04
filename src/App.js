
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper"
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Result from "./pages/Result";
import Login from "./pages/Login";



// import './App.css';

const App = () => (
  <Router>
    <div>
       <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/result" component={Result} />
        </Wrapper>
    </div>
  
  </Router>
 
)

export default App;

