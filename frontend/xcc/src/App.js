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
import { Login } from "./landpage/log/Login";
import Start from "./landpage/navigation/Start";
import { AdLogin } from "./landpage/log/AdLogin";
// import SampleAdlog from "./landpage/log/SampleAdlog";
import Dashboard from "./admin/pages/Dashboard";
import ManageUsers from "./admin/pages/ManageUsers";
import AdEvents from "./admin/pages/Events"
import AResources from "./admin/pages/AResources";
import Teams from "./admin/pages/Teams";
import Gallery from "./admin/pages/Gallery";
import AddEvents from "./admin/tables/AddEvents";
import AddResources from "./admin/tables/AddResources";
import AddTeams from "./admin/tables/AddTeams";
import AddUsers from "./admin/tables/AddUsers";
import AddGallery from "./admin/tables/AddGallery";
import ErrorPage from "./admin/pages/ErrorPage";
import Leaderboard from "./admin/pages/Leaderboard";
import AdminProfile from "./admin/pages/AdminProfile";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Landing Page Route */}
          <Route path='/' element={<NewNav />} />
          <Route path="/start" element={<Start />} />
          <Route path='/NewNav' element={<NewNav />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/AdLogin' element={<AdLogin />} />

          {/* *****************Users Route************************ */}
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Playground" element={<Playground />} />
          <Route path="/Discussion" element={<Discussion />} />
          <Route path="/Profile/:id" element={<Profile />} />
          
          {/* **************Admin Routes*********************** */}
          <Route path="/admin" exact element={<Dashboard/>} />
          <Route path="/adminprofile/:id" element={<AdminProfile />} />
          <Route path="/adminmanageusers" exact element={<ManageUsers/>} />
          <Route path="/adminevents" exact element={<AdEvents/>} />
          <Route path="/adminresources" exact element={<AResources/>} />
          <Route path="/adminteams" exact element={<Teams/>} />
          <Route path="/admingallery" exact element={<Gallery/>} />
          <Route path="/adminAddEvents" exact element={<AddEvents />}/>
          <Route path="/adminaddresources" exact element={<AddResources />}/>
          <Route path="/adminaddteams" exact element={<AddTeams />}/>
          <Route path="/adminaddusers" exact element={<AddUsers />}/>
          <Route path="/adminaddgallery" exact element={<AddGallery />}/>
          <Route path="/adminleaderboard" exact element={<Leaderboard />}/>
          <Route path="*" exact element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
