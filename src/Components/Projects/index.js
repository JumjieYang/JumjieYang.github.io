import React from 'react';
import { List, Card, Carousel } from 'antd';
import './index.css'
import "antd/dist/antd.css";
import Meta from 'antd/lib/card/Meta';
import { GithubOutlined } from '@ant-design/icons';

const Projects = () => {
        const data = [
            {
                title: 'TuTorPlatform',
                description: "A course project involves using Django RestFramework, Channels, Redis, and Vue.js ",
                url: "https://github.com/JumjieYang/TutorPlatform",
                pic: require("../../Assets/pics/Projects/TutorPlatform.png")
            },
            {
                title: 'EventRegistration',
                description: "A course project involves using Springboot Framework and Vue.js",
                url: "https://github.com/JumjieYang/EventRegistration-Backend",
                pic: require("../../Assets/pics/Projects/EventRegistration.png")
            },
            {
                title: 'SimpleForum',
                description: "A simple Forum implemented with PHP",
                url: "https://github.com/JumjieYang/SimpleForum",
                pic: require("../../Assets/pics/Projects/Simple Forum.png")
            },
            {
                title: "FindExamDate",
                description: "A script helps students to find their exam dates without open a browser",
                url: "https://github.com/JumjieYang/FindExamDate",
                pic: require("../../Assets/pics/Projects/FindExamDate.png")
            },
            {
                title: "3D-Tic-Tac-Toe",
                description: "My own C++ implementation of a classic game -- Tic-Tac-Toe",
                url: "https://github.com/JumjieYang/3D-Tic-Tac-Toe",
                pic: require("../../Assets/pics/Projects/tictactoe.png")
            },
            {
                title: "Blackjack",
                description: "a C++ implementation of Blackjack Game",
                url: "https://github.com/JumjieYang/Blackjack",
                pic: require("../../Assets/pics/Projects/Blackjack.png")
            },
            {
                title: "Text Classification",
                description: "A machine learning project for text classification on two datasets",
                url: "https://github.com/JumjieYang/TextClassification",
                pic: require("../../Assets/pics/Projects/TextClassification.png")
            },
            {
                title: "Music App",
                description: "A cross platform project using React and React Native to implement a music player client",
                url: "https://github.com/JumjieYang/musicapp",
                pic: require("../../Assets/pics/Projects/MusicApp.png")
            }
        ]
        const render = () => {
            return data.map((project) => {
                return (
                    <div>
                        <Card
                        bordered
                            size="small"
                            style={{width:"600px", height:"500px"}}
                            cover={<img alt="" src={project.pic} style={{width:"600px", height:"500px"}}/>}
                            actions= {[
                                <GithubOutlined key="check it on Github" onClick= {() => window.open(project.url)}/>
                            ]}                            
                            >
                                <Meta title = {project.title} description={project.description}/>
                            </Card>
                    </div>
                )
            })
        }

        return (
        <div style={{position: "0.5%"}} className ='projects'>
           <Carousel autoplay autoplaySpeed={2000} style={{position:"relative", marginTop:"5%",marginLeft:"32%"}}>
               {render()}
           </Carousel>
        </div>
        )
}

export default Projects