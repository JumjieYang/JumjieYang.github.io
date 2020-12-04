import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { BookOutlined, HomeOutlined, InfoCircleOutlined, ProjectOutlined } from '@ant-design/icons';

const Top = () => {
   return( 
       <div className="top-container">
           <div className="top-content">
                <h2>
                    <Link style={{color:"black"}} to="/"><HomeOutlined/></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link style={{color:"black"}} to="/about"><InfoCircleOutlined/></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link style={{color:"black"}} to="/projects"><ProjectOutlined rotate={270} /></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <BookOutlined onClick={() => window.open("https://github.com/JumjieYang/JumjieYang.github.io/src/Assets/docs/JunjieYang.pdf")} style={{color:"black"}}/>
                &nbsp;&nbsp;&nbsp;&nbsp;
            </h2>
            </div>
       </div>
   )
}

export default Top;