import React from 'react';
import Typed from 'react-typed';
import { Link } from "react-router-dom";
import { GithubOutlined, MailOutlined} from '@ant-design/icons';
import './index.css'
const Home = () => {
        return (
            <div className="home">
                <p>
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
                    <Link style={{color:"black"}} to="/about">About</Link>
                    &nbsp; | &nbsp;
                    <Link style={{color:"black"}} to="/projects">Project</Link>
                </h2>
                <hr/>
                <div className="icons">
                   <a href='mailto:junjie.yang2@mail.mcgill.ca' target='_blank' rel="noopener noreferrer">
                    <MailOutlined style={{color:"black"}}/>
                </a>
                &nbsp;&nbsp;
                <a href='https://github.com/JumjieYang' target='_blank' rel="noopener noreferrer">
                    <GithubOutlined style={{color:"black"}}/>
                </a>
                </div>
        </div>

        )
}

export default Home;