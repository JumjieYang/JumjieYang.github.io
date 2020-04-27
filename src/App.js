import React, {Component} from 'react';
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import Top from './Components/Top'
import About from './Components/About'
import './App.css';
import { Layout } from 'antd';
class App extends Component{
  render (){
  return (
         <Layout id='app'>
           <Layout.Header>
            <Top/>
           </Layout.Header>
           <Layout className="contents">
           <Layout.Sider>
             <About/>
           </Layout.Sider>
           <Layout.Content>
             <Projects/>
           </Layout.Content>
           </Layout>
           <Layout.Footer>
             <Footer/>
           </Layout.Footer>
         </Layout>
  );
  }
}

export default App;
