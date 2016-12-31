

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    BackAndroid,
    ToastAndroid,
    TouchableOpacity
} from 'react-native';

//引入字体文件
import Icomoon from 'react-native-vector-icons/Icomoon';
//引入登录
import Login from './Login';
//引入关于
import About from './About';


class Header extends Component {
    static defaultProps = {
        commentNum: '',  //评论数
        praiseNum: '',   //赞数
        openMenu: null,  //菜单回调函数
        //goBack: null,    //返回按钮回调

        leftNum: '',        //设立标记 让左边的图标显示为什么样  0 为菜单图标 加标题 1为返回图标加标题
        rightNum: '',      //设立标记 让右边的图标显示为什么样
                            // 0为 首页的铃铛和三个点 2个图标
                            //1 为内容页面的分享 收藏 评论 赞 这4个图标
                            // 2 为加关注这个图标'+'

    };
    constructor(props) {

        super(props)
        this.state = {
            color: '#fff',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                {this.renderRightView()}
            </View>
        );
    }
    // 左边
    renderLeftView(){
        if (this.props.leftNum == 0){
            return(
                <View style={styles.headerLeftStyle}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.clickBtn()}>
                            <Icomoon
                                name='menu'
                                size={25}
                                color='#fff'
                            />
                    </TouchableOpacity>
                    <Text style={styles.leftTitleStyle}>{this.props.title}</Text>
                </View>
            )
        }else if (this.props.leftNum == 1){
            return(
                <View style={styles.headerLeftStyle}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.PressBack()}>
                        <Icomoon
                            name='backBtn'
                            size={25}
                            color='#fff'
                        />
                    </TouchableOpacity>
                    <Text style={styles.leftTitleStyle}>{this.props.title}</Text>
                </View>
            )
        }
    }

    renderRightView(){
        if(this.props.rightNum == 0){
            return(
                <View style={styles.headerRightStyle}>
                    <TouchableOpacity activeOpacity={0.5} onPress = {() =>{this.PushToDetail()}}>
                        <Icomoon
                            name='login'
                            size={18}
                            color='#fff'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:30}} activeOpacity={0.5} onPress={() => {this.PushToAbout()}}>
                        <Icomoon
                            name='more'
                            size={25}
                            color='#fff'
                        />
                    </TouchableOpacity>
                </View>
                )

        }else if(this.props.rightNum == 1) {
            return(
                <View style={styles.headerRightStyle}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {alert('分享页')}}>
                        <Icomoon
                            name='share'
                            size={25}
                            color='#fff'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:30}} activeOpacity={0.5} onPress={() => this.changeColor()}>
                        <Icomoon
                            name='collection'
                            size={18}
                            color={this.state.color}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:30}} onPress={() => {alert('评论页')}}>
                        <View style={{flexDirection: 'row', alignItems: 'center' }}>
                            <Icomoon
                                name='comment'
                                size={18}
                                color='#fff'
                            />
                            <Text style={{fontSize:12, color:'#fff',marginLeft:3}}>{this.props.commentNum}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:15}} activeOpacity={0.5} onPress={() => {alert('赞了')}}>
                        <View style={{flexDirection: 'row', alignItems: 'center' }}>
                            <Icomoon
                                name='praise'
                                size={18}
                                color='#fff'
                            />
                            <Text style={{fontSize:12, color:'#fff', marginLeft:3}}>{this.props.praiseNum}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }else if(this.props.rightNum == 2){
            return(
                <View style={styles.headerRightStyle}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {alert('加关注')}}>
                        <Icomoon
                            name='followBtn'
                            size={15}
                            color='#fff'
                        />
                    </TouchableOpacity>
                </View>
            )
        }
    }
    //打开侧边栏
    clickBtn(){
        this.props.openMenu();
    }

    //按返回键 返回上一级
    PressBack(){
        const {navigator} = this.props;
        navigator.pop()
    }

    //点击图标改变颜色的 只做了收藏这个
    changeColor(){
        let isOn;
        if (this.state.color=='#fff'){
            isOn = true;
        }else{
            isOn = false;
        }
            this.setState({
                color: isOn==true ? 'orange' : '#fff'
            })

    }

    //跳转登录页
    PushToDetail(data){
        this.props.navigator.push({
            component: Login,
            title: '登录'
        })
    }

    //跳转软件声明页
    PushToAbout(){
        this.props.navigator.push({
            component: About,
            title: '关于'
        })
    }
}

const styles = StyleSheet.create({
    container: {
        height:60,
        backgroundColor:'#099fde',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between'

    },

    headerLeftStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 18

    },
    leftTitleStyle: {
        marginLeft: 30,
        color: '#fff',
        fontSize: 16
    },

    headerRightStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 18
    }

});

export default Header;
