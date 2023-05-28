import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Resources from "../pages/Resources";
import Teams from "../pages/Teams";
import Events from "../pages/Events";
import Leaderboard from "../pages/Leaderboard";
import ErrorPage from "../pages/ErrorPage";
import AddEvents from "../tables/AddEvents";
import AddResources from "../tables/AddResources";
import AddTeams from "../tables/AddTeams";
import ManageUsers from "../pages/ManageUsers";
import AddUsers from "../tables/AddUsers";
import Gallery from "../pages/Gallery";
import AddGallery from "../tables/AddGallery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" exact element={<Dashboard />}></Route>
          <Route path="/manageusers" exact element={<ManageUsers />}></Route>
          <Route path="/events" exact element={<Events />}></Route>
          <Route path="/resources" exact element={<Resources />}></Route>
          <Route path="/teams" exact element={<Teams />}></Route>
          <Route path="/gallery" exact element={<Gallery />}></Route>
          <Route path="/leaderboard" exact element={<Leaderboard />}></Route>
          <Route path="/addevents" exact element={<AddEvents />}></Route>
          <Route path="/addresources" exact element={<AddResources />}></Route>
          <Route path="/addteams" exact element={<AddTeams />}></Route>
          <Route path="/addusers" exact element={<AddUsers />}></Route>
          <Route path="/addgallery" exact element={<AddGallery />}></Route>
          <Route path="*" exact element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
