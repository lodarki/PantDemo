/**
 * Created by Loki on 2017/02/14.
 */
import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import CacheStorage from "./CacheStorage";
import AppUtil from "../Util/AppUtil";

const cacheKeyName = "cacheKey";

export default class StorageDemo extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            cacheValue: {},
            text: "",
            rate: 15,
            seconds : 15
        };
    }

    componentWillMount() {
        CacheStorage.setSync({
            cacheKey(param){
                let {id, resolve, reject} = param;
                resolve && resolve({
                    title: "缓存已经过期了，所以我是最新数据。",
                    value: "last data"
                });
            }
        });
        CacheStorage.load(cacheKeyName)
            .then((value) => {
                this.setState({
                    cacheValue: value,
                    text: "",
                });
            })
            .catch((err) => {
                this.setState({
                    cacheValue: {},
                    text: "",
                });
            });
    }

    _onPressHandler() {
        let data = new Date();
        CacheStorage.save(
            cacheKeyName,
            {
                title: `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`,
                value: this.state.text
            },
            1000 * this.state.seconds)
            .then(() => {
                this.componentWillMount();
                let rateCount = this.state.seconds;
                this._timer = setInterval(() => {
                    this.setState({
                        rate: rateCount--
                    });
                    if (this.state.rate == 0) {
                        this.componentWillMount();
                        clearInterval(this._timer);
                    }
                }, 1000);
            })
            .catch((err) => {
                alert(`异常：${err.message}`);
            });
    }

    _onPressReload() {
        this.componentWillMount();
    }

    render() {
        return (
            <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <View style={{height:120,alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                    <Text>
                        标题：{this.state.cacheValue.title}
                    </Text>
                    <Text>
                        缓存：{this.state.cacheValue.value}
                    </Text>
                </View>
                <View style={{height:60,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'gray'}}>
                    <TextInput
                        style={{height:40,width:AppUtil.ScreenWidth * (2/3)}}
                        onChangeText={(text) => {this.setState({text})}}
                        value={this.state.text}
                    />
                </View>
                <View style={{height:60,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'gray'}}>
                    <TextInput
                        style={{height:40,width:AppUtil.ScreenWidth * (2/3)}}
                        onChangeText={(seconds) => {this.setState({seconds})}}
                        value={this.state.seconds.toString()}
                    />
                </View>
                <TouchableOpacity onPress={this._onPressHandler.bind(this)}>
                    <View
                        style={{marginTop:50,height:35,width:90,backgroundColor:'#c89bff',alignItems:'center',justifyContent:'center'}}>
                        <Text>
                            点我缓存
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.componentWillMount()}}>
                    <View
                        style={{marginTop:50,height:35,width:90,backgroundColor:'#99dbff',alignItems:'center',justifyContent:'center'}}>
                        <Text>
                            {this.state.rate}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}