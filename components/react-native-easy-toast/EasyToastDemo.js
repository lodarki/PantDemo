/**
 * Created by Loki on 2017/02/13.
 */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'

export default class EasyToastDemo extends Component {
    constructor(props, context){
        super(props, context);
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#ffc68a',justifyContent:'center'}}>
                <View style={{flex:1,flexDirection:'column',justifyContent:'center',backgroundColor:'#72daff'}}>
                    <TouchableOpacity
                        style={{padding: 10}}
                        onPress={()=>{
                            this.refs.toast.show('默认配置');
                        }}>
                        <Text>默认配置</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{padding: 10}}
                        onPress={()=>{
                            this.refs.toast1.show('红字 红背景 顶部显示');
                        }}>
                        <Text>蓝字 红背景 顶部显示</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{padding: 10}}
                        onPress={()=>{
                            this.refs.toast2.show('默认配色居中 透明度0.5');
                        }}>
                        <Text>默认配色居中 透明度0.5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{padding: 10}}
                        onPress={()=>{
                            this.refs.toast3.show('默认配色底部 展示时长 4 秒');
                        }}>
                        <Text>默认配色底部 内容展示时长2秒，淡入淡出各2秒</Text>
                    </TouchableOpacity>
                </View>
                <Toast
                    ref="toast"
                />
                <Toast
                    ref="toast1"
                    style={{backgroundColor:'red'}}
                    textStyle={{color:'blue'}}
                    position='top'
                />
                <Toast
                    ref="toast2"
                    position='center'
                    opacity={0.5}
                />
                <Toast
                    ref="toast3"
                    position='bottom'
                    positionValue={200}
                    fadeInDuration={2000}
                    fadeOutDuration={2000}
                />
            </View>
        );
    }
}


