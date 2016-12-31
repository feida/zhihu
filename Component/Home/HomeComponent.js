

/**
 * 首页
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    ScrollView,
    TouchableOpacity,
    DrawerLayoutAndroid
} from 'react-native';

//头部导航
import Header from '../Common/Header';
//侧栏
import SideBar from './SideBar';
//登录页
import Login from '../Common/Login';
//轮播图
import HomeSwiper from './HomeSwiper';
//加载动图
import CommonLoading from '../Common/Loading';
//list 列表
import ListViewCell from '../Content/ListViewCell';


class HomeComponent extends Component {
    constructor(props){
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        super(props);
        this.state={

            listResource:[],
            //开关 控制 数据条数
            isAllLoad:false,
            ds:ds,
            swiperData: []
        };
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref={(drawer) => { this.drawer = drawer; }}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() =>this.renderSideBar()}>

                    <View style={{backgroundColor: '#ddd',flex:1}}>
                        <Header
                            title = '首页'
                            openMenu = {()=>this.open()}
                            leftNum = {0}
                            rightNum = {0}
                            navigator={this.props.navigator}
                        />
                        <ScrollView>
                            {/*轮播图*/}
                            {this.renderHomeSwiper()}
                            {/*轮播图下面列表组件*/}
                            {this.renserNewsList()}
                        </ScrollView>
                    </View>
            </DrawerLayoutAndroid>
        );
    }


    //侧边栏内容
    renderSideBar(){
        return(
            <SideBar
                navigator={this.props.navigator}
                closeDrawer = {() => this.close()}
            />
        )
    }

    //打开侧边栏调用事件
    open=()=>{
        this.drawer.openDrawer();
    }

    close=()=>{
        this.drawer.closeDrawer();
    }

    componentDidMount(){
        // 请求首页数据
        this.getData()
    }

    getData(){
        fetch('http://news-at.zhihu.com/api/4/news/latest')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    listResource:responseJson.stories,
                    swiperData:responseJson.top_stories,
                    ds:this.state.ds.cloneWithRows(this.state.listResource.concat(responseJson.stories))
                })
                if(responseJson.stories.length < 10){
                    this.setState({
                        isAllLoad:true
                    })
                }
            })
    }

    renderHomeSwiper(){
        if(this.state.swiperData.length){
            return (
                <HomeSwiper
                    data = {this.state.swiperData}
                    navigator={this.props.navigator}
                />
            )
        }else{
            return (
                <CommonLoading />
            )
        }
    }

    //首页下面新闻列表渲染
    renserNewsList(){
        if(this.state.listResource.length){
            return (
                <ListView
                    dataSource={this.state.ds}
                    renderRow={(rowData) =><ListViewCell data={rowData} navigator={this.props.navigator} />}
                />
            )
        }else{
            return (
                <CommonLoading />
            )
        }
    }
}

const styles = StyleSheet.create({

});

export default HomeComponent;
