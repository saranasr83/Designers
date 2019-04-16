// import React from 'react';
// // import './App.css';
//  import { BrowserRouter as Router, Route } from "react-router-dom";
// import Wrapper from "./components/Wrapper";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Teaching from "./pages/Teaching";




// const App = () => (
//    <Router>
//     <div>
      
//       <Navbar />
//       <hr style={{border: "1px solid white", marginTop:"1px"}} />
//       <br/>
//       <Wrapper>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/teaching" component={Teaching} />
//         <Route exact path="/about" component={About} />
        
//       </Wrapper>
//     </div>
//    </Router>
// );

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Register from "./pages/Register";
import Wrapper from "./components/Wrapper/Wrapper"
import Navbar from './components/Navbar/Navbar';

// import './App.css';

const App = () => (
  <Router>
    <div>
       <Navbar />
       <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/register" component={Register} />
      </Wrapper>
    </div>
  
  </Router>
 
)

export default App;

