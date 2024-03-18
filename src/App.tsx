import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import { Link } from 'react-router-dom'
import AssignmentEditor from "./Kanbas/Courses/Assignments/Editor";


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    

 
//     <HashRouter>      
//       <div> 
//         {/*<Link to="/hello">Hello World</Link> |
//         <Link to="/Labs/a3">Labs</Link> |
//         <Link to="/Kanbas">Kanbas</Link>*/}
  
//       <Routes>
//           <Route path="/"         element={<Navigate to="/Labs"/>}/>
//           <Route path="/hello"    element={<HelloWorld/>}/>
//           <Route path="/Labs/*"   element={<Labs/>}/>
//           <Route path="/Kanbas/*" element={<Kanbas/>}/>
          
//         </Routes>
//       </div>
//     </HashRouter>
//   );
// }

// export default App;
function App() {
  return (
<HashRouter>
<div>
<Routes>
<Route path="/"         element={<Navigate to="Kanbas"/>}/>
<Route path="/hello"    element={<HelloWorld/>}/>
<Route path="/Labs/*"   element={<Labs/>}/>
<Route path="/Kanbas/*" element={<Kanbas/>}/>
<Route path="/Kanbas/*" element={<AssignmentEditor />} />
</Routes>
</div>
</HashRouter>
  );
}
export default App;
