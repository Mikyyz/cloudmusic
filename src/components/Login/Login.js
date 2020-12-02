import React, { Component } from 'react'
import { Avatar } from 'antd';
import {
    UserOutlined,
    CaretRightFilled
} from '@ant-design/icons';
import './Login.less'

class Login extends Component {
    render () {
        return (
            <div className="userinfo">
                <Avatar size={44} icon={<UserOutlined />} />
                <span className="login">
                    未登录
                    <CaretRightFilled style={{ color: '#8e8e8e' }} />
                </span>
            </div>
        )
    }
}

export default Login