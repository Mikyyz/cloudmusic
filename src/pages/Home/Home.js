import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';
import SideNav from '../../components/SideNav/SideNav'
import FooterBar from '../../components/FooterBar/FooterBar'
import FindMusic from '../FindMusic/FindMusic'
import PrivateFm from '../PrivateFm/PrivateFm'
import Video from '../Video/Video'
import Friends from '../Friends/Friends'
import ItunesMusic from '../ItunesMusic/ItunesMusic'
import ManageDownload from '../ManageDownload/ManageDownload'
import './Home.less'

const { Content } = Layout;

class Home extends Component {
    render () {
        return (
            <Layout style={{ height: '100%', fontSize: 20 }} >
                <Layout>
                    <SideNav />
                    <Content>
                        <Switch>
                            <Route exact path='/' component={FindMusic} />
                            <Route path='/private-fm' component={PrivateFm} />
                            <Route path='/video' component={Video} />
                            <Route Path='/friends' component={Friends} />
                            <Route Path='/itunes-music' component={ItunesMusic} />
                            <Route path='/manage-download' component={ManageDownload} />
                        </Switch>
                    </Content>
                </Layout>
                <FooterBar />
            </Layout>
        )
    }
}

export default Home