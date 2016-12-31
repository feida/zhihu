/*
 入口文件
 */
import React ,{Component} from 'react';
import {
    View,
    Navigator,
    BackAndroid,  //安卓返回键方法
    ToastAndroid  //安卓提示信息
} from 'react-native';

//首页
import HomeComponent from '../Home/HomeComponent.js';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.onBackAndroid = this.onBackAndroid.bind(this);
    }
    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
    onBackAndroid() {
        let navigator = this.refs.navigator;
        //获得路由级数
        let routers = navigator.getCurrentRoutes();
        if (routers.length >3) {
            navigator.popToTop();
            return true;
        }else if(routers.length > 1){
            navigator.pop();
            return true;
        } else {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            return true;
        }

    }
    render() {
        let homeComponent = HomeComponent;
        return (
            <Navigator
                ref="navigator"
                initialRoute={{ name: 'homeComponent', component: homeComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.FloatFromRight  ;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }} />
        );
    }
}
