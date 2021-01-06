import React from 'react';
import Projects from './Components/Projects';
import Top from './Components/Top';
import About from './Components/About';
import Home from './Components/Home';
import Resume from './Components/Resume';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  return (

         <Router className='app'>
           <head>
           <meta
      name="description"
      content="Junjie Yang's website" />
      <title>Junjie Yang</title>
      </head>
             <Switch>
               <div>
               <Route exact path="/">
                 <Home/>
               </Route>
               <Route path="/about">
                  <Top />
                  <About/>
               </Route>
               <Route path="/projects">
                 <Top/>
                 <Projects/>
               </Route>
               <Route path="/resume">
                 <Top name = {"resume"}/>
                 <Resume/>
               </Route>
               </div>
             </Switch>
         </Router>
  );
}

export default App;
