import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, ProjectOutlined } from '@ant-design/icons';

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
                &nbsp;&nbsp;&nbsp;&nbsp;
            </h2>
            </div>
       </div>
   )
}

export default Top;