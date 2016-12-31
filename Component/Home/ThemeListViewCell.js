
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
    TouchableOpacity
} from 'react-native';

//引入字体文件
import Icomoon from 'react-native-vector-icons/Icomoon';
//主题日报详情页
import ThemePage from '../Theme/ThemePage';

class ThemeListViewCell extends Component {
    static defaultProps = {
        closeDrawer:null
    }
    render() {
        let item = this.props.data;
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={(e) => {this.pushToThemePage(item)}}>
                <View style={styles.themeListStyle}>
                    <Text style={{fontSize: 16,color:'#000', marginLeft:15}}>{item.name}</Text>
                    <Icomoon
                        name='followBtn'
                        size={14}
                        color='#ddd'
                        style={{marginRight: 50}}
                    />
                </View>
            </TouchableOpacity>
        );
    }
    //跳转到主题日报详情页
    pushToThemePage(item){
        this.props.closeDrawer();
        this.props.navigator.replacePrevious({
            name: 'ThemePage',
            component: ThemePage,
            params:{
                data:item
            }
        })
    }

}

const styles = StyleSheet.create({
    themeListStyle: {
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    }
});

export default ThemeListViewCell;

