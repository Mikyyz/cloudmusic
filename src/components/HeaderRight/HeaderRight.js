import React, { Component } from 'react'
import { Input } from 'antd';
import {
    SettingOutlined,
    MailOutlined,
    SkinOutlined,
    FolderOutlined
} from '@ant-design/icons';

class HeaderRight extends Component {
    render () {
        return (
            <div className="header-right">
                <Input style={{width: '200px'}}/>
                <SettingOutlined />
                <MailOutlined />
                <SkinOutlined />
                <FolderOutlined />
            </div>
        )
    }
}

export default HeaderRight