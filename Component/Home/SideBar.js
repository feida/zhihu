

/**
 * 侧边栏
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    TouchableOpacity
} from 'react-native';

//引入字体文件
import Icomoon from 'react-native-vector-icons/Icomoon';
//引入登录页
import Login from '../Common/Login';
//侧边栏下面的主题列表
import ThemeListViewCell from './ThemeListViewCell';
//首页
import Home from './HomeComponent';

class SideBar extends Component {
    static defaultProps = {
        // 用于调用上级关闭侧栏的函数
        closeDrawer: null
    };

    constructor(props){
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        super(props);
        this.state={
            listResource:[],
            ds:ds,
        };
    }
    render() {
        return (
            <View style={{flex:1, backgroundColor:'gray'}}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={{backgroundColor:'#099fde' }}>
                        <TouchableOpacity activeOpacity={0.5} onPress = {() =>this.pushToLogin()}>
                            <View style={styles.headerTopStyle}>
                                <Image source={{uri: 'account_avatar',isStatic: true}} style={{width:36, height:36,borderRadius: 18,marginLeft:20}}/>
                                <Text style={{fontSize:16, color: '#fff',marginLeft:10}}>请登录</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.headerBottomStyle}>
                            <View style={styles.headerBottomLeft}>
                                <Icomoon
                                    name='collection'
                                    size={14}
                                    color='#fff'
                                />
                                <Text style={{fontSize:14,color:'#fff',marginLeft:20}}>我的收藏</Text>
                            </View>
                            <View style={styles.headerBottomRight}>
                                <Icomoon
                                    name='download'
                                    size={14}
                                    color='#fff'
                                />
                                <Text style={{fontSize:14,color:'#fff',marginLeft:20}}>离线下载</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} onPress = {() =>this.pushToHome()}>
                        <View style={styles.homeStyle}>
                            <Icomoon
                                name='home'
                                size={15}
                                color='#099fde'
                            />
                            <Text style={{fontSize:16, color: '#099fde',marginLeft:20}}>首页</Text>
                        </View>
                    </TouchableOpacity>
                    {/*主题列表*/}
                    {this.renderThemeList()}

                </ScrollView>
            </View>
        );
    }


    renderThemeList(){
        return(
            <ListView
                dataSource={this.state.ds}
                renderRow={
                    (rowData) =><ThemeListViewCell
                        //往下级页面传递数据
                        data={rowData}
                        navigator={this.props.navigator}
                        //往上传递 调用上面的关闭抽屉的函数
                        closeDrawer = {this.props.closeDrawer}
                    />
                }
            />
        )
    }


    componentDidMount(){
        //获取数据
        fetch("http://news-at.zhihu.com/api/4/themes")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    listResource:responseJson.others,
                    ds:this.state.ds.cloneWithRows(this.state.listResource.concat(responseJson.others))
                })
            })
    }

    pushToLogin(){
        // 先关闭侧栏
        this.props.closeDrawer();
        // 跳转登录页
        this.PushToDetail();

    }
    // 跳转登录页
    PushToDetail(){
        this.props.navigator.push({
            component: Login,
            title: '登录页'
        })
    }

    pushToHome(){
        this.props.navigator.replace({
            component: Home,
            title: 'home'
        })
    }



}

const styles = StyleSheet.create({
    headerTopStyle: {
        height: 60,
        flexDirection : 'row',
        alignItems: 'center'
    },
    headerBottomStyle: {
        height: 60,
        flexDirection : 'row',
        alignItems: 'center',

    },

    headerBottomLeft: {
        flexDirection : 'row',
        alignItems: 'center',
        marginLeft: 20,
    },

    headerBottomRight: {
        flexDirection : 'row',
        alignItems: 'center',
        marginLeft: 20,
    },

    homeStyle:{
        height: 50,
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center',
        backgroundColor: '#ddd'
    },

    themeListStyle: {
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    }
});

export default SideBar;
