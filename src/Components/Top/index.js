import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
const Top = () => {

        return (
            <div className='top'>
                <h1>
                Junjie Yang
                </h1>
                <h2>
                    <Link style={{color:"rgb(77, 76, 76)"}} to="/">Home </Link> |
                    <Link style={{color:"rgb(77, 76, 76)"}} to="/About"> About </Link> |
                    <Link style={{color:"rgb(77, 76, 76)"}} to="/projects"> Projects </Link> |
                    <a href="https://github.com/JumjieYang"> GitHub </a> |
                    <Link style={{color:"rgb(77,76,76)"}} to="/Resume"> Resume</Link>
                </h2>
            </div>
        )
}


export default Top;