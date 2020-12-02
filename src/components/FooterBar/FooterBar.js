import React, { Component } from 'react'
import { Layout } from 'antd';

import './FootBar.less'

const { Footer } = Layout;

class FooterBar extends Component {
    render () {
        return (
            <div className="footer_bar">
                <Footer style={{ backgroundColor: '#ededed' }}>Footer</Footer>
            </div>
        )
    }
}

export default FooterBar;