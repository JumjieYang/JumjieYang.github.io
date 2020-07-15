import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { InfoCircleOutlined, ProjectOutlined, MailOutlined, GithubOutlined, ProfileOutlined, HomeOutlined } from '@ant-design/icons';

const Top = (prop) => {
   return( 
       <div className="top-container">
           <div className="top-content">
           <h1>{prop.name}</h1>
           <h2>
                    <Link style={{color:"black"}} to="/"><HomeOutlined/></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link style={{color:"black"}} to="/about"><InfoCircleOutlined/></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link style={{color:"black"}} to="/projects"><ProjectOutlined rotate={270} /></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;

                {/* <Link style={{color:"black"}} to="/resume"><ProfileOutlined /></Link>
                &nbsp;&nbsp;&nbsp;&nbsp; */}

                <a href='mailto:junjie.yang2@mail.mcgill.ca' target='_blank' rel="noopener noreferrer">
                    <MailOutlined style={{color:"black"}}/>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href='https://github.com/JumjieYang' target='_blank' rel="noopener noreferrer">
                    <GithubOutlined style={{color:"black"}}/>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
            </h2>
            </div>
       </div>
   )
}

export default Top;