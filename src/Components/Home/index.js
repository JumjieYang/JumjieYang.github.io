import React from 'react';
import Typed from 'react-typed';
import { Link } from "react-router-dom";
import { InfoCircleOutlined} from '@ant-design/icons';
import './index.css'
const Home = () => {
        return (
            <div className="home">
                <p style={{whiteSpace:"nowrap"}}>
                I'm &nbsp;
                <Typed
                    strings={[
                        'a student',
                        'a programmer',
                        'a passionist',
                        'Junjie Yang',
                    ]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                    showCursor={false}
                    />
                    </p>
                <h2 className="icons"> 
                    <Link style={{color:"black"}} to="/about"><InfoCircleOutlined/></Link>
                </h2>
        </div>

        )
}

export default Home;