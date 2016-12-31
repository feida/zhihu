/*新闻列表*/
import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
}from 'react-native'
//引入新闻详情页
import ListDetail from './ListDetail'

export default class  ListViewCell extends Component {
    constructor(props){
        super(props)
    }


    render(){
        let item = this.props.data;

        return(
            <View style={{backgroundColor:'#ddd'}}>
                {this.renderImgOrText(item)}
            </View>
        )
    }

    renderImgOrText(item){
        if(item.images){
            return (
                <TouchableOpacity activeOpacity={0.5} onPress={this.goDetail.bind(this,item.id)} style={styles.textContent}>
                    <Text style={styles.word} numberOfLines={2}>
                        {item.title}
                    </Text>
                    <View style={{flex:2,alignItems:'flex-start'}}>
                        <Image
                            source={{uri:item.images[0]}}
                            style={{width: 70, height:70}}
                        />
                    </View>
                </TouchableOpacity>
            )
        }else{
            return (
                <TouchableOpacity activeOpacity={0.5} onPress={this.goDetail.bind(this,item.id)} style={styles.textContent}>
                    <Text style={styles.word} numberOfLines={2}>
                        {item.title}
                    </Text>
                </TouchableOpacity>
            )
        }
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
    textContent:{
        backgroundColor:'#fff',
        marginLeft:5,
        marginRight:5,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:5,
        paddingRight:5,
        marginTop:10,
        borderRadius:4,
        height:100,
        flexDirection:'row',
        borderColor:'#fff',
        borderWidth:1
    },
    word:{
        fontSize:18,
        lineHeight:30,
        flex:7,
        paddingLeft:5,
        paddingRight:5,
        color: '#000'
    }
})
