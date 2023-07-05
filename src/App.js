import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Volunteer from './pages/volunteer';
import Work from './pages/work';
import Event from './pages/event';
import Squads from './pages/squad';
import Team from "./pages/team/team";
import Members from "./pages/Members/members.jsx";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <defaultRoute path='/' component={Home}/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Volunteer}/>
          <Route path='/work' component={Work}/>
          <Route path='/event' component={Event}/>
          <Route path='/squad' component={Squads}/>
          <Route path='/team' component={Team}/>
          <Route path='/members' component={Members}/>
          <Contact/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
