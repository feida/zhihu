


/**
 *
 *
 * 轮播图组件
 */

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

import Swiper from 'react-native-swiper';
import ListDetail from '../Content/ListDetail';

const {width, height} = Dimensions.get('window');
class HomeSwiper extends Component {
    constructor(props){
        super(props)
    }
    static defaultProps = {
        data:[]
    };
    render() {
        return (
            <View style={{backgroundColor:'gray'}}>
                <Swiper height={220}
                        loop={true}
                        index={0}
                        autoplay={true}
                        horizontal={true}
                        autoplayTimeout={4}

                >
                    {this.renderImg()}
                </Swiper>
            </View>
        );
    }

    renderImg(){
        let imageViews=[];
        let Datas = this.props.data;
        for(var i=0;i<Datas.length;i++){
            let itemData = Datas[i];
            imageViews.push(
                <View key={i}>
                    <TouchableOpacity activeOpacity={0.5} onPress={this.goDetail.bind(this,itemData.id)} style={styles.textContent}>
                        <Image
                            resizeMode = 'cover'
                            style={{width:width,height:220}}
                            source={{uri:itemData.image}}
                        />
                        <Text style={styles.titleStyle}>{itemData.title}</Text>
                    </TouchableOpacity>
                </View>

            );
        }
        return imageViews;
    }

    goDetail(id){
        const {navigator} = this.props;
        navigator.push({
            name: 'ListDetail',
            component: ListDetail,
            params:{
                id:id
            }
        })
    }

}

const styles = StyleSheet.create({
    titleStyle: {
        width: width*0.9,
        position: 'absolute',
        fontSize: 23,
        color: '#fff',
        left: 20,
        bottom: 35
    }
});

export default HomeSwiper;

