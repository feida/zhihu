# zhihu
  最近在学react-native,从网上找了下 有整理好的知乎日报API接口(接口文档:https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90) 就仿造做了一个
  无Mac机 做的安卓版
# 主要完成的功能有:
  * 首页的每日最新推荐
  * 侧边栏主题日报列表
  * 详情页的webview内嵌
  * 添加icon和启动图片 
  * 菜单侧边栏抽屉效果
  
# 安卓打包生成apk 效果如下图所示：  
  * 首页
  ![image](https://github.com/feida/zhihu/blob/master/Component/src/home.png)
  * 侧边栏
  ![image](https://github.com/feida/zhihu/blob/master/Component/src/sideBar.png)
  * 内容详细页
  ![image](https://github.com/feida/zhihu/blob/master/Component/src/detail.png)
# 跑起来
 * 配置好android环境
 * clone本项目
 * 在根目录里执行 run npm install
 * 然后 输入命令 run react-native run-android
 
# 在本项目中用到的一些技术
 * 弹性盒子 样式 这些不必多说
 * DrawerLayoutAndroid  react-native原生组件  做侧边栏 抽屉效果用 
 * 第三方组件react-native-swiper 做轮播图  具体用法 可以看这篇文章 http://blog.csdn.net/jing85432373/article/details/52702274
 * 第三方组件react-native-vector-icons 字体图标 做自定义图标 用法可以参照这2篇文章http://blog.csdn.net/uuq/article/details/53150841和
   http://www.jianshu.com/p/9016703cfe49
 * ToastAndroid/BackAndroid  这2个是调用安卓机原生方法的, 一个是提示信息 一个是返回按钮  
 * ...
 
# 其他
  测试机 小米5 安卓6.0
  安装包地址: https://github.com/feida/zhihu/blob/master/Component/src/%E6%AF%8F%E6%97%A5%E4%B8%80%E8%AF%BB.apk
