import React from 'react';
import './index.css';
import { GithubOutlined, MailOutlined, ZhihuCircleFilled } from '@ant-design/icons'

const Footer = () => {
        let icon = {
            fontSize: '20px',
            color: 'black'
          }
        return (
            <div className='footer'>
                <p>
                    &copy; Junjie Yang, 2019-2020
                    <br />
                    <a href='mailto:junjie.yang2@mail.mcgill.ca' target='_blank' rel="noopener noreferrer">
                        <MailOutlined style={icon}/>
                    </a>
                    &nbsp;
                    <a href='https://github.com/JumjieYang' target="_blank" rel="noopener noreferrer">
                        <GithubOutlined style={icon}/>
                    </a>
                    &nbsp;
                    <a href='https://www.zhihu.com/people/yang-jun-jie-76-12' target="_blank" rel="noopener noreferrer">
                        <ZhihuCircleFilled style={icon}/>
                    </a>
                </p>
            </div>
        )
}

export default Footer
