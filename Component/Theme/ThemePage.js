
/**
 * 主题日报详情页
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ListView,
    ScrollView,
    DrawerLayoutAndroid,
    TouchableOpacity
} from 'react-native';

//头部导航
import Header from '../Common/Header';
//侧栏
import SideBar from '../Home/SideBar';
//加载动图
import CommonLoading from '../Common/Loading';
//list 列表
import ListViewCell from '../Content/ListViewCell';
//获取宽高
const {width, height} = Dimensions.get('window');

class ThemePage extends Component {

    constructor(props){
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        super(props);
        this.state={
            //新闻列表
            listResource:[],
            isAllLoad:false,
            ds:ds,
            //主编
            editors: []
        };
    }

    render() {
         let data = this.props.data;
        return (
            <DrawerLayoutAndroid
                ref={(drawer) => { this.drawer = drawer; }}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() =>this.renderSideBar()}>

                <View style={{backgroundColor: '#ddd',flex:1}}>
                    <Header
                        title = {data.name}
                        openMenu = {()=>this.open()}
                        leftNum = {0}
                        rightNum = {2}
                        navigator={this.props.navigator}
                    />
                    <ScrollView>
                        {/*头部图片标题*/}
                        {this.rederView()}
                        {/*主编*/}
                        {this.rendereditors()}
                        {/*新闻列表*/}
                        {this.renserNewsList()}
                    </ScrollView>
                </View>
            </DrawerLayoutAndroid>
        );
    }

    //打开侧边栏调用事件
    open=()=>{
        this.drawer.openDrawer();
    }
    //关闭侧边栏调用事件
    close=()=>{
        this.drawer.closeDrawer();
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



    //头部图片标题
    rederView(){
        let data = this.props.data;
        return(
            <View style={{height:230}}>
                <Image source={{uri:data.thumbnail}} style={{width:width,height:230}}/>
                <Text style={styles.topTitleStyle}>{data.description}</Text>
            </View>
        )
    }

    //主编信息
    rendereditors(){
        return(
            <TouchableOpacity activeOpacity={0.5}>
                <View style={{height:60, backgroundColor:'#ddd',flexDirection: 'row', alignItems:'center'}}>
                    <Text style={{fontSize:12, color:'#000', marginLeft:5}}>主编</Text>
                    {/*主编头像渲染*/}
                    {this.renderImage()}
                </View>
            </TouchableOpacity>

        )
    }

    //主编头像渲染
    renderImage(){
        let imageArr = [];
        let dataArr = this.state.editors;
        for ( let i=0;i<dataArr.length;i++){
            let itemData = dataArr[i];
            imageArr.push(
                <Image key={i} source={{uri:itemData.avatar}} style={{width:36,height:36,borderRadius:18,marginLeft:15}}/>
            )
        }
        return imageArr;
    }

    //新闻列表
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

    componentDidMount(){
        // 请求主题日报详细数据
        this.getData()
    }

    getData(){
        fetch('http://news-at.zhihu.com/api/4/theme/'+ this.props.data.id)
            .then((response) => response.json())
            .then((responseJson) => {

                console.log(responseJson)
                this.setState({
                    listResource:responseJson.stories,
                    editors:this.state.listResource.concat(responseJson.editors),
                    ds:this.state.ds.cloneWithRows(this.state.listResource.concat(responseJson.stories))
                })
                if(responseJson.stories.length < 10){
                    this.setState({
                        isAllLoad:true
                    })
                }
            })
    }

}

const styles = StyleSheet.create({
    topTitleStyle: {
        position: 'absolute',
        left:20,
        bottom:30,
        fontSize:18,
        color: '#fff',
        width:width*0.9
    }
});

export default ThemePage;

