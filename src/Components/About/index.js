import React, { Component } from 'react';
import GithubButton from 'react-github-btn';
import './index.css';



class About extends Component {
    render () {
        return (
            <div style={{paddingLeft:"5%"}} className='about'>
                        <hr/>
                        <h1>About Me</h1>
                        <hr/>
                        <p id='introduction'>
                        Hi there. <br/>I'm Junjie Yang, a second year SE student of McGill University.
                        </p>
                        <p>I usually post what I'm doing on Github.
                        <GithubButton href="https://github.com/JumjieYang">@JumjieYang</GithubButton>
                        </p>

                <hr />
                <h3>Skills</h3>
                <p>Proficient: <br/>Java Python C<br/>Fluent:<br/> JavaScript C++ Ocaml</p>
                <h3>Hobbies</h3>
                <p>Travel<br/>Watch Netflix<br/>Gaming with friends</p>
                <h3>Core Courses Completed</h3>
                <p>Software Design (CS303)<br/>Algorithms (CS251)<br/>Applied ML (CS551)</p>
            </div>
        )
    }
}

export default About;