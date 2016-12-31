/*关于页面*/
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Header from './Header'


export default class About extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{flexDirection:'column',flex:1,backgroundColor:'#ddd'}}>
                <Header
                    title = '关于'
                    leftNum = {1}
                    navigator={this.props.navigator}
                />

                <Text style={styles.word}>本软件属于个人学习产品，本着学习的原则，非盈利！</Text>

            </View>
        )
    }
}
const styles  = StyleSheet.create({
    word:{
        lineHeight:20,
        fontSize:20,
        padding:30,
        marginTop:200,
        color: 'red'
    }
})
