import React from 'react';
import Typed from 'react-typed';
import { Link } from "react-router-dom";
import { GithubOutlined, MailOutlined, InfoCircleOutlined, ProjectOutlined, ProfileOutlined, } from '@ant-design/icons';
import './index.css'
const Home = () => {
        return (
            <div className="home">
                <p style={{whiteSpace:"nowrap"}}>
                I'm &nbsp;
                <Typed
                    strings={[
                        'a student',
                        'a programmer',
                        'a passionist',
                        'Junjie Yang',
                    ]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                    showCursor={false}
                    />
                    </p>
                <h2>
                    <Link style={{color:"black"}} to="/about"><InfoCircleOutlined/></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link style={{color:"black"}} to="/projects"><ProjectOutlined rotate={270} /></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Link style={{color:"black"}} to="/resume"><ProfileOutlined /></Link>&nbsp;&nbsp;&nbsp;&nbsp; */}

                <a href='mailto:junjie.yang2@mail.mcgill.ca' target='_blank' rel="noopener noreferrer">
                    <MailOutlined style={{color:"black"}}/>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href='https://github.com/JumjieYang' target='_blank' rel="noopener noreferrer">
                    <GithubOutlined style={{color:"black"}}/>
                </a>
                </h2>
        </div>

        )
}

export default Home;