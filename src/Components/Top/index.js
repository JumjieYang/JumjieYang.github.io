import React, { Component } from 'react';
import Typed from 'react-typed';
class Top extends Component {
    render() {
        return (
            <div style={{marginLeft: "700px"}} className='top'>
                <h1 style={{color: "white"}}>
                A website for &nbsp;
                <Typed
                    strings={[
                        'a student',
                        'a programmer',
                        'a passionist',
                        'Junjie Yang'
                    ]}
                    typeSpeed={100}
                    backSpeed={80}
                    loop
                    showCursor={false}
                    />
                </h1>
                
            </div>
        )
    }
}

export default Top;