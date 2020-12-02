import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
    CustomerServiceOutlined,
    SoundOutlined,
    YoutubeOutlined,
    TeamOutlined,
    AppleOutlined,
    DownloadOutlined,
    HeartOutlined
} from '@ant-design/icons';

import './SideNav.less'
import Login from  '../Login/Login'


const { SubMenu } = Menu;
const { Header, Sider } = Layout;

class SiderNav extends Component {
    render() {
        return (
            <div className="sider">
                <div className="sider-top"></div>
                <Sider width={250} style={{ height: '92%' }} theme="light" collapsible={false}>
                    <Login />
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1', 'sub2']}
                    >
                        <Menu.Item key="1">
                            <Link to="/">
                                <CustomerServiceOutlined style={{ fontSize: 18 }} />
                                发现音乐
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/private-fm'>
                                <SoundOutlined  style={{ fontSize: 18 }} />
                                私人FM
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to='/video'>
                                <YoutubeOutlined style={{ fontSize: 18 }} />
                                视频
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to='/friends'>
                                <TeamOutlined style={{ fontSize: 18 }} />
                                朋友
                            </Link>
                        </Menu.Item>
                        <SubMenu title="我的音乐" key="sub1" style={{ color: '#929292'}}>
                            <Menu.Item key="5">
                                <Link to='/itunes-music'>
                                    <AppleOutlined style={{ fontSize: 18 }}/>
                                    iTunes音乐
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to='/manage-download'>
                                    <DownloadOutlined style={{ fontSize: 18 }}/>
                                    下载管理
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu title="创建的歌单" key="sub2" style={{ color: '#929292'}}>
                            <Menu.Item key="7">
                                <HeartOutlined style={{ fontSize: 18 }}/>
                                我喜欢的音乐
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </div>
        )
    }
}

export default SiderNav