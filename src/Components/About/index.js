import React from 'react';
import {GithubOutlined, ZhihuOutlined } from '@ant-design/icons'
import { Row, Col} from 'antd';
import './index.css';



const About = () => {
        return (
            <div className='about'>
                <Row>
                    <Col style={{padding: "2%"}} span={6}>
                        <img className='image' src={require("../../Assets/pics/About/IMG_0519.jpeg")} alt="pic-intro"/>
                    </Col>
                    <Col style={{padding: "0%"}} span={18}>
                        <h2 style={{marginTop:"10%"}}>
                        Interest Driven Developer, Curious and conscientious, a hard-working student, a good friend <br></br>-- From several of my friends<br/>


                        </h2>
                    </Col>
                </Row>
                <h2>Intro</h2>
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
                        <br/>
                    Meanwhile, I joined JD.com as a Software Engineering intern in Summer 2020, it was a great journey for me, I learned a lot while working with developers that works for at least 5 years.
                    </p>
                    <hr style={{marginLeft:"auto", marginRight:"auto"}}/>

                <h2>Skills</h2>
                <p>Since McGill uses Java for almost half of the entire CS/SE curriculum, I use Java for most of the time.
                    Yet, I'm also excellent at Python, and C. I also use other languages like C++, and Ocaml for different purposes.<br/>
                    Besides that, I can also do photo editing, video editing, and music mixing. Also, I'm capable of playing piano, chinese flute, and trumbone.
                    </p>
                    <hr style={{marginLeft:"auto", marginRight:"auto"}}/>

                <h2>Core Courses Completed</h2>
                <p>
                    CS Related<br/> Software Design&nbsp;&nbsp; Algorithms &nbsp;&nbsp;Applied ML <br/>
                    Math Related<br/> Calculus &nbsp;&nbsp; Linear Algebra &nbsp;&nbsp; Discrete Structures &nbsp;&nbsp; Probability <br/>
                </p>
                <hr style={{marginLeft:"auto", marginRight:"auto"}}/>

                <h2>Experiences</h2>
                <p>
                    CSUS Help Desk<br/>
                    Helps new students entering CS programs with their department related courses, hold office hour for 2 hours a week.<br/>
                    Interational Buddy Program<br/>
                    Provide new students entering University with cultural and necessary helps.<br></br>
                    Software Engineering Intern <br/>
                    Work with Developers at JD.com, helps to implement projects like JDH SaaS and JDH ERP. Also, implement a quality management platform called QM.
                </p>
                <hr style={{marginLeft:"auto", marginRight:"auto"}}/>
                <p style={{color:"gray"}}>
                    P.S.:  Not Single, got a diligent boyfriend who is pursuing his Master Degree at University Of British Columbia<br/>
                    I'm also looking for Internship oppotunities, if my skills fits your needs, please contact me via email or other method in my resume.
                </p>
            </div>
        )
}

export default About;