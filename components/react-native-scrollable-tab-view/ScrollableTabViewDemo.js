/**
 * Created by Loki on 2017/02/14.
 */
import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, ScrollView, Dimensions} from "react-native";
import EchartsDemo from "../native-echarts/EchartsDemo";
import CacheableImageDemo from "../react-native-cacheable-image/CacheableImageDemo";
import EasyToastDemo from "../react-native-easy-toast/EasyToastDemo";
import NativePullDemo from "../react-native-pull/NativePullDemo";
import ScrollableTabView from "react-native-scrollable-tab-view";
import StorageDemo from "../react-native-storage/StorageDemo";
import MainTabBar from "./CustomTabBar";
import AppUtil from '../Util/AppUtil';

export default class PantDemo extends Component {

    constructor(props, context) {
        super(props, context);
        this.screenWidth = Dimensions.get('window').width;
        this.tabNames = [
            '图表',
            '图片',
            '土司',
            '下拉',
            '缓存'
        ];
        this.tabIconNames = [
            'ios-home',
            'ios-book',
            'md-person',
            'ios-home',
            'ios-book'
        ];
    }

    render() {
        return (
            <ScrollableTabView
                tabBarPosition="top"
                locked={false}
            >
                <View style={{width:AppUtil.ScreenWidth,height:AppUtil.ScreenHeight - 60}} tabLabel="key1">
                    <EchartsDemo/>
                </View>
                <View style={{width:AppUtil.ScreenWidth,height:AppUtil.ScreenHeight - 60}} tabLabel="key2">
                    <CacheableImageDemo/>
                </View>
                <View style={{width:AppUtil.ScreenWidth,height:AppUtil.ScreenHeight - 60}} tabLabel="key3">
                    <EasyToastDemo/>
                </View>
                <View style={{width:AppUtil.ScreenWidth,height:AppUtil.ScreenHeight - 60}} tabLabel="key4">
                    <NativePullDemo />
                </View>
                <View style={{width:AppUtil.ScreenWidth,height:AppUtil.ScreenHeight - 60}} tabLabel="key5">
                    <StorageDemo />
                </View>
            </ScrollableTabView>
        );
    }
}