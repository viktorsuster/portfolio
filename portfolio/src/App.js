import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom'
import './App.css'; 
import Header from './component/Header';
import Home from "./views/Home";
import About from "./views/About";
import Skills from "./views/Skills";
import Contact from "./views/Contact";

function App() {
  return (
    <>
  <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/skills" element={<Skills />}/>
      <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;

// import { Routes, Route, Link } from "react-router-dom";
// import Skills from "./views/Skills";
// import Home from "./views/Home";
// import Contact from "./views/Contact";
// import About from "./views/About";

// function App() {
//   return (
//     <>
    // <nav>
    //   <ul>
    //   <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/skills">Skills</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //   </ul>
    // </nav>
//       <Routes>
//         <Route path="/" element={<Home />}>
//           <Route path="about" element={<About />} />
//           <Route path="skills" element={<Skills />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//       </>
//   );
// }

// export default App;