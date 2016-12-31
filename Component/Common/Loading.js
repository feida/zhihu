/**
 * 加载菊花
 */
import React,{Component} from 'react'
import{
    View,
    ActivityIndicator
}from 'react-native'

class CommonLoading extends Component {
    render(){
        return (
            <View
                style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            >
                <ActivityIndicator
                    style={{height: 80,alignItems: 'center',justifyContent: 'center', padding: 8}}
                    color='#099fde'
                    size="large" />
            </View>
        )
    }
}

export default CommonLoading
