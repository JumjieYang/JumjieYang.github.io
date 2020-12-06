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