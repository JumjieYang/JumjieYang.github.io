import React from 'react';
import Projects from './Components/Projects';
import Top from './Components/Top';
import About from './Components/About';
import Home from './Components/Home';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Resume from './Components/Resume';
const App = () => {
  return (
         <Router className='app'>
             <Switch>
               <div>
               <Route exact path="/">
                 <Home/>
               </Route>
               <Route path="/about">
                  <Top name={"About Me"}/>
                  <About/>
               </Route>
               <Route path="/projects">
                 <Top name = {"Projects Exhibition"}/>
                 <Projects/>
               </Route>
               <Route path="/resume">
                 <Top name = {"Resume"}/>
                 <Resume/>
               </Route>
               </div>
             </Switch>
         </Router>
  );
}

export default App;
