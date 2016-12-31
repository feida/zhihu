
/**
 * 开机图片
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import Main from './Main.js';

class LaunchImage extends Component {
    render() {
        return (
            <Image source={{uri: 'launch_image'}} style={styles.launchimage}/>
        );
    }

    componentDidMount(){

        // 定时隔1.5s切换到Main

        setTimeout(() => {
            this.props.navigator.replace({
                component: Main
            });
        },1500);
    }
}

const styles = StyleSheet.create({
    launchimage: {
        flex: 1
    }
});

export default LaunchImage;
