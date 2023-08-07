import React from "react";
import { BrowserRouter as Router, 
    Routes, 
    Route, 
    Link } from "react-router-dom";
import { 
    Header, 
    Campaign, 
    AddSubscriber, 
    NewCampaign, 
    SubscribersList } from "./components";
import "./style/style.css";
function App() {
  
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="nav">
            <p className="nav-menu">
              <p className="">
                <Link to="/" ><p>Główna</p></Link>
              </p>
              <p className="">
                <Link to="/Subscibers_List" ><p>Subscribers List</p></Link>
              </p>
              <p className="">
                <Link to="/Add_Subscriber" ><p>Add Subscriber</p></Link>
              </p>
              <p className="">
                <Link to="/Campaign" ><p>Campaign</p></Link>
              </p>
              <p className="">
                <Link to="/New_Campaign" ><p>New Campaign</p></Link>
              </p>
            </p>
            <p className="nav-link">
              <Link to="/" ><p>Główna</p></Link>
            </p>
            <p className="nav-link">
              <Link to="/Subscibers_List" ><p>Subscribers List</p></Link>
            </p>
            <p className="nav-link">
              <Link to="/Add_Subscriber" ><p>Add Subscriber</p></Link>
            </p>
            <p className="nav-link">
              <Link to="/Campaign" ><p>Campaign</p></Link>
            </p>
            <p className="nav-link">
              <Link to="/New_Campaign" ><p>New Campaign</p></Link>
            </p>
          </nav>
          <Routes>
            <Route exact path="/" element={ <Header /> } />
            <Route path="/Subscibers_List" element={ <SubscribersList /> } />
            <Route path="/Add_Subscriber" element={ <AddSubscriber /> } />
            <Route path="/Campaign" element={ <Campaign /> } />
            <Route path="/New_Campaign" element={ <NewCampaign /> } />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
