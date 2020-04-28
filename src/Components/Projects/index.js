import React from 'react';
import { List, Card } from 'antd';
import './index.css'
import "antd/dist/antd.css";

const Projects = () => {
        const data = [
            {
                title: 'TuTorPlatform',
                description: "A course project involves using Django RestFramework, Channels, Redis, and Vue.js ",
                url: "https://github.com/JumjieYang/TutorPlatform"
            },
            {
                title: 'EventRegistration',
                description: "A course project involves using Springboot Framework and Vue.js",
                url: "https://github.com/JumjieYang/EventRegistration-Backend"
            },
            {
                title: 'SimpleForum',
                description: "A simple Forum implemented with PHP",
                url: "https://github.com/JumjieYang/SimpleForum"
            },
            {
                title: "MipsImageProcessor",
                description: "A simple image processor implemented in MIPS assembly language",
                url: "https://github.com/JumjieYang/MipsImageProcessor"
            },
            {
                title: "FindExamDate",
                description: "A script helps students to find their exam dates without open a browser",
                url: "https://github.com/JumjieYang/FindExamDate"
            },
            {
                title: "AutoRegister",
                description: "a script helps students to register their course",
                url: "https://github.com/JumjieYang/autoRegister"
            },
            {
                title: "3D-Tic-Tac-Toe",
                description: "My own C++ implementation of a classic game -- Tic-Tac-Toe",
                url: "https://github.com/JumjieYang/3D-Tic-Tac-Toe"
            },
            {
                title: "Blackjack",
                description: "a C++ implementation of Blackjack Game",
                url: "https://github.com/JumjieYang/Blackjack"
            },
            {
                title: "Text Classification",
                description: "A machine learning project for text classification on two datasets",
                url: "https://github.com/JumjieYang/TextClassification"
            },
            {
                title: "All-in-one Music Player (On Going)",
                description: "A cross platform project using React and React Native to implement a music player client",
                url: "https://github.com/JumjieYang"
            }
        ]
        return (
        <div style={{paddingRight: "0.5%"}} className ='projects'>
            <h1>Projects Exhibition</h1>
            <hr/>
            <List 
            style={{padding: "5%"}}
    grid={{
      gutter: 3,
      xs: 2,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 4,
      xxl: 4
    }}
            dataSource={data}
            renderItem={item => (
                <List.Item style={{alignItems:"auto"}}>
                    <Card 
                    onClick={() => {window.open(item.url)}}
                    bordered="false"
                    shape="round"
                    size="small"
                    style={{height: "170px", width: "220px",margin:"auto", textAlign:"center"}}
                     hoverable
                     title={item.title}
                     >
                    <p style={{textAlign:"left"}}>{item.description}</p>
                    </Card>
                </List.Item>
            )}
            />
        </div>
        )
}

export default Projects