import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import './index.css';
import Resources from "./user/pages/Resources";
import Playground from "./user/pages/Playground";
import Discussion from "./user/pages/Discussion";
import Profile from "./user/pages/ProfilePages/Profile";
import NewNav from './landpage/navigation/NewNav'





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewNav />} />
          {/* <Route path='/login' element={<Login />} /> */}

          {/* <Route path="/UserNav" element={<UserNav />} /> */}
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Playground" element={<Playground />} />
          <Route path="/Discussion" element={<Discussion />} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
