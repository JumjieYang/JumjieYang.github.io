import React, { Component } from 'react';
import { List, Card } from 'antd';
import './index.css'
import "antd/dist/antd.css";

class Projects extends Component {
    render () {
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
            }
        ]
        return (
        <div style={{paddingRight: "0.5%"}} className ='projects'>
            <hr/>
            <h1>Projects</h1>
            <hr />
            <List
    grid={{
      gutter: 3,
      xs: 3,
      sm: 3,
      md: 3,
      lg: 3,
      xl: 3,
      xxl: 3,
    }}
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Card 
                    onClick={() => {window.open(item.url)}}
                    bordered="false"
                    shape="round"
                    size="small"
                    style={{height: "170px", width: "250px",margin:"auto"}}
                     hoverable
                     title={item.title} >
                    <p>{item.description}</p>
                    </Card>
                </List.Item>
            )}
            />
        </div>
        )
    }
}

export default Projects