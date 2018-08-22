/**
 * Created by Loki on 2017/02/13.
 */
import React, {Component} from "react";
import {View, Text, Image} from "react-native";
import AppUtil from '../Util/AppUtil';
import CacheableImage from 'react-native-cacheable-image';

export default class CacheableImageDemo extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <View style={{flexDirection:'column',flex:1}}>
                <View style={{height:40,justifyContent:'center',alignItems:'center'}}>
                    <Text>缓存图片插件</Text>
                </View>
                <View style={{height:200,width:AppUtil.ScreenWidth,backgroundColor:'#eaeeff'}}>
                    <CacheableImage
                        source={{uri: 'http://static.oschina.net/uploads/img/201503/19111203_ubwL.jpg'}}
                        style={{height:200,width:AppUtil.ScreenWidth}}
                    />
                </View>
                <View style={{height:40,backgroundColor:'#b8b8b8',justifyContent:'center',alignItems:'center'}}>

                </View>
                <View style={{height:40,justifyContent:'center',alignItems:'center'}}>
                    <Text>ReactNative图片组件</Text>
                </View>
                <View style={{height:200,backgroundColor:'#eaeeff',width:AppUtil.ScreenWidth}}>
                    <Image
                        source={{uri: 'http://static.oschina.net/uploads/img/201503/19111203_ubwL.jpg'}}
                        style={{height:200,width:AppUtil.ScreenWidth}}
                    />
                </View>
            </View>
        );
    }
}