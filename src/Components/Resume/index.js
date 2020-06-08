import React from 'react';
import './index.css';

const Resume = () => {
    return (
        <div className="resume">
            <div className="head">
                <h3> Junjie Yang</h3>
                <h6>Tel: +1 (514)-714-7347 | Email: junjie.yang2@mail.mcgill.ca </h6>
                <h6>Wechat: JumjieYang | Website: https://junjieyang.org</h6>
                <h3>SUMMARY</h3>
                <hr/>
                <b>A highly motivated and hardworking individual, who looks to start an internship in Computer Science related area where I can apply what I've learned</b>
                <h3>EDUCATION</h3>
                <hr/>
                <h5>McGill University - B.A. Software Engineering</h5>
                <ul>
                    <li>GPA: 3.72/4</li>
                    <li>Relevant Coursework: COMP307 -- Web Development, ECSE321 -- Intro to Software Engineering, COMP303 -- Software Design, COMP 251 -- Algorithms and Data Structures</li>
                </ul>
                <h3>PROJECT EXPERIENCE</h3>
                <hr/>
                
            </div>
        </div>
    )
}

export default Resume;