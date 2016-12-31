/*登录页面*/

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import Header from './Header';

const {width, height} = Dimensions.get('window');
class Login extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#2490DB',flex:1}}>
                <Header
                    title ='登录'
                    leftNum = {1}
                    navigator={this.props.navigator}
                />
                <View style={{height:height*0.4,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:30, color:'#fff'}}>每日一读</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:20,color:'#fff',textAlign:'center',marginBottom:30}}>使用微博登录</Text>
                    <TouchableOpacity style={styles.loginStyle} activeOpacity={0.5} onPress={() => {alert('跳转新浪')}}>
                        <Text style={{fontSize:20,color:'#000'}}>新浪微博</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginStyle} activeOpacity={0.5} onPress={() => {alert('跳转腾讯')}}>
                        <Text style={{fontSize:20,color:'#000'}}>腾讯微博</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    loginStyle:{
        width: width*0.8,
        height: 60,
        backgroundColor:"#fff",
        borderRadius: 4,
        justifyContent: 'center',
        alignItems:'center',
        marginBottom: 30
    }
});

export default Login;

