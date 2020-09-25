import React from 'react';
import {GithubOutlined, LinkedinOutlined, ZhihuOutlined } from '@ant-design/icons'
import { Row, Col} from 'antd';
import './index.css';



const About = () => {
        return (
            <div className='about'>
                <Row>
                    <Col style={{padding: "2%"}} span={6}>
                        <img className='image' src={require("../../Assets/pics/About/IMG_0519.jpeg")} alt="pic-intro"/>
                        <br/>
                        <h2 style={{marginLeft:"-40%"}}>
                        Grandescunt Aucta Labore<br/>By hard work, all things increase and grow <br></br>
                        &nbsp;-- from McGill University<br/>
                        </h2>
                        
                    </Col>
                    <Col style={{padding: "0%"}} span={18}>

                <p style={{paddingTop:"5%"}}>
                    Hi there. I'm Junjie Yang, a third year student at McGill University, and a growing software engineer.
                    </p>
                    <p>
                        I become intrested in computer when I was at elementary school. At that time, I often play several computer games like StarCraft, Dota, and several Chinese online games hosted by Tencent with my friends and my father.
                    </p>
                <p>When I was in junior high, my goal was to become a doctor. Everything changed when I took a Computer Course at 8th Grade. I knew a programming language called Basic. I was attracted by that language, I was shocked that by several lines of code, one can made a calculator with simple functionalites.
                    </p>
                <p>
                    I began to take part in several competitions related to Computer Science when I was in Gr.9, and I achieved several small achievements. With those in mind, when declaring major, I chose Computer Science as my major.
                </p>
                <p>
                    Since I enjoys the process of implementing my ideas by hand, I have implemented several mini projects in my spare time and hosted some of them on server or using a service called Heroku.
                </p>
                <p>
                    In Summer 2020, I joined a Chinese Tech Company called JD.COM as a Software Engineering Intern. During that time, I had a change to participate in the development of industrial-level Apps with some excellent programmers. And also, with the help of my mentor and other interns, we made a quality control platform called QM.
                    During the time I was in JD, I learned a lot about the industrial-level software development processes.
                </p>
                <p>
                    During the school years, I am involved in some volunteering activities. Began from Fall 2019, I started my journey as an international buddy, who is responsible for providing basic helps to new admitted students of my university. Also, I took part in CSUS Help Desk, which held office hour for 2 hours a week to help students in their freshman year to solve their course related problems.
                </p>

                <p>
                    Welcome to check my Github<a href="https://github.com/JumjieYang"><GithubOutlined/></a>, Linkedin
                        <a href="https://www.linkedin.com/in/junjie-yang-3b2918137/"><LinkedinOutlined/></a>, and Zhihu
                        <a href="https://www.zhihu.com/people/yang-jun-jie-76-12"><ZhihuOutlined/></a>
                </p>
                <p style={{color:"gray"}}>
                    I'm looking for Internship oppotunities for Summer 2021, if my skills fits your needs, please contact me via email or other method provided in my resume.
                </p>
                    </Col>
                </Row>
                
            </div>
        )
}

export default About;