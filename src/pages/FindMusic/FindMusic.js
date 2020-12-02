import React, { Component } from 'react'
import { Row, Col } from 'antd';
import HeaderRight from '../../components/HeaderRight/HeaderRight'

class FindMusic extends Component {
    render () {
        return (
            <div className="find-music">
                <header className="header">
                    <Row justify="center">
                        <Col span={2}>个性推荐</Col>
                        <Col span={2}>歌单</Col>
                        <Col span={2}>主播电台</Col>
                        <Col span={2}>排行榜</Col>
                        <Col span={2}>歌手</Col>
                        <Col span={2}>最新音乐</Col>
                        <Col span={12}><HeaderRight /></Col>
                    </Row>
                </header>
            </div>
        )
    }
}

export default FindMusic;