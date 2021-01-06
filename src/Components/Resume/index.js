import {Row, Col } from 'antd';
import React from 'react';
import PDF from 'react-pdf-js'
const Resume = () => {
    const resumeEN = require("../../Assets/docs/JunjieYang.pdf");
    const resumeCN = require("../../Assets/pics/Resume/杨珺杰.jpg");
    return (
        <div style={{position:"0.5%"}} className='resume'>
            <Row justify="space-around" align="top">
                <Col span={4}>
                <PDF file={resumeEN} scale={1.2}/>
                </Col>
                <Col span={4}>
                </Col>
                <Col span={4}>
                <div className='resume-cn'>
                    <img alt="" src={resumeCN} style={{width:"220%"}}/>
                </div>
                </Col>
                <Col span={4}>
                </Col>
            </Row>
        </div>
    )
}

export default Resume;