import React, { useState, useEffect} from "react";
import { fetchSubscribers } from "./server/fetchApi";
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
  const [subs, setSubs ] = useState();

  const FetchData = async() => {
    const data = await fetchSubscribers();
    setSubs(data)
  }
  useEffect(() => {
    FetchData()

  },[])
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="nav">
            <p>
              <Link to="/" >Główna</Link>
            </p>
            <p>
              <Link to="/Subscibers_List" >Subscribers List</Link>
            </p>
            <p>
              <Link to="/Add_Subscriber" >Add Subscriber</Link>
            </p>
            <p>
              <Link to="/Campaign" >Campaign</Link>
            </p>
            <p>
              <Link to="/New_Campaign" >New Campaign</Link>
            </p>
          </nav>
          <Routes>
            <Route exact path="/" element={ <Header /> } />
            <Route path="/Subscibers_List" element={ <SubscribersList subs={subs} /> } />
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
