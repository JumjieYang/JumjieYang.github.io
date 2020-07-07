import React from 'react';
import {GithubOutlined, ZhihuOutlined } from '@ant-design/icons'
import { Row, Col} from 'antd';
import './index.css';



const About = () => {
        return (
            <div className='about'>
                <Row>
                    <Col style={{padding: "2%"}} flex={2}>
                        <img className='image' src={require("../../Assets/pics/About/IMG_0519.jpeg")} alt="pic-intro"/>
                    </Col>
                    <Col style={{padding: "0%"}} flex={3}>
                    <p>
                    Hi there. I'm Junjie Yang, a second year SE student of McGill University. In my spare time, I'd like to travel, watch Netflix, and play video games
                    with my friends. I also like to use programming techniques to implement something that I'm interested at, you may check the detail in Projects tab. I usually post what I'm doing and what I've done on Github &nbsp;
                        <a href='https://github.com/JumjieYang' target='_blank' rel="noopener noreferrer">
                        <GithubOutlined style={{fontSize: "20px" ,color:"black"}}/>
                        </a> &nbsp;
                    and share my thoughts on a Chinese Platform called Zhihu.&nbsp;
                        <a href='https://www.zhihu.com/people/yang-jun-jie-76-12' target='_blank' rel="noopener noreferrer">
                        <ZhihuOutlined style={{fontSize: "20px" ,color:"black"}}/>
                        </a>
                    </p>
                    </Col>
                </Row>
                <hr style={{marginLeft:"auto", marginRight:"auto"}}/>
                <h2>Skills</h2>
                <p>Since McGill uses Java for almost half of the entire CS/SE curriculum, I use Java for most of the time.
                    Yet, I'm also excellent at Python, and C. I also use other languages like Go, C++, and Ocaml for different purposes.<br/>
                    Besides that, I can also do photo editing, video editing, and music mixing. Also, I'm capable of playing piano, chinese flute, and trumbone.
                    </p>
                    <hr style={{marginLeft:"auto", marginRight:"auto"}}/>

                <h2>Core Courses Completed</h2>
                <p>
                    CS Related<br/> Software Design&nbsp;&nbsp; Algorithms &nbsp;&nbsp;Applied ML <br/>
                    Math Related<br/> Calculus &nbsp;&nbsp; Linear Algebra &nbsp;&nbsp; Discrete Structures &nbsp;&nbsp; Probability <br/>
                    Linguistic Related<br/> Phonetics &nbsp;&nbsp; Syntax
                </p>
                <hr style={{marginLeft:"auto", marginRight:"auto"}}/>

                <h2>Experiences</h2>
                <p>
                    CSUS Help Desk<br/>
                    Helps new students entering CS programs with their department related courses, hold office hour for 2 hours a week.<br/>
                    Interational Buddy Program<br/>
                    Helps new students entering University to find himself in to the culture.
                </p>
                <hr style={{marginLeft:"auto", marginRight:"auto"}}/>

            </div>
        )
}

export default About;