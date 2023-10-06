import "./App.css";

import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Speakerinfo from "./pages/Speakerinfo";
// import Teaminfo from './pages/Teaminfos';
import Footer from "./pages/Footer";
// import Spepageper from './pages/Homepage/SubHomepages/Spepageper';
// import Spepageone from './pages/Homepage/SubHomepages/Spepageone';
// import Spepagetwo from './pages/Homepage/SubHomepages/Spepagetwo';
// import Spepagethree from './pages/Homepage/SubHomepages/Spepagethree';
// import Spepagefour from './pages/Homepage/SubHomepages/Spepagefour';
// import Speapagefive from './pages/Homepage/SubHomepages/Speapagefive';
import Navigation from "./pages/nav";

import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import Team from "./pages/team";
import Error from "./pages/error";

function App() {
  return (
    <div className="App">
      {/* <nav> 
      <ul  className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-x-4 mx-auto py-4 justify-items-end">
        <li> <NavLink to = '/'>HOME</NavLink> </li>
        <li> <NavLink to = '/registration'> Registration</NavLink> </li>
        <li> <NavLink to='/Speakerinfo' > Speakerinfo</NavLink> </li>
        <li><NavLink to='/Teaminfo'> Teaminfo</NavLink></li>
        
      </ul>
    </nav> */}
      <Navigation />

      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>

        <Route path="/registration" element={<Registration></Registration>}>
          {" "}
        </Route>

        <Route path="/speaker" element={<Speakerinfo></Speakerinfo>}></Route>

        <Route path="/team" element={<Team></Team>}></Route>

        {/* <Route path='PERsonal' element={<Spepageper></Spepageper>}></Route> */}

        {/* <Route path='/speakerone' element={<Spepageone></Spepageone>}></Route>
      <Route path='/speakertwo' element={<Spepagetwo></Spepagetwo>}></Route>
      <Route path='/speakerthree' element={<Spepagethree></Spepagethree>}></Route>
      <Route path='/speakerfour' element={<Spepagefour></Spepagefour>}></Route>
      <Route path='/speakerfive' element={<Speapagefive></Speapagefive>}></Route> */}
        <Route path="/error_404" element={<Error />} />
        <Route path="*" element={<Navigate to="/error_404" />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
