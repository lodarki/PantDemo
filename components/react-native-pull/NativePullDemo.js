/**
 * Created by Loki on 2017/02/13.
 */
import React, {Component} from "react";
import {View, Text, ActivityIndicator, ListView} from "react-native";
import {PullList} from "react-native-pull";

export default class NativePullDemo extends Component {
    constructor(props, context) {
        super(props, context);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataList = [
            '第1行',
            '第2行',
            '第3行',
            '第4行',
            '第5行',
            '第6行',
            '第7行',
            '第8行',
            '第9行',
            '第10行'
        ];
        this.state = {
            dataSource: ds.cloneWithRows(this.dataList)
        };
        this._onPullRelease = this._onPullRelease.bind(this);
        this._topIndicatorRender = this._topIndicatorRender.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
        this._renderRow = this._renderRow.bind(this);
        this._loadMore = this._loadMore.bind(this);
        this._renderFooter = this._renderFooter.bind(this);
    }

    _onPullRelease(resolve) {
        setTimeout(() => {
            resolve();
            this.dataList = [
                '第1行',
                '第2行',
                '第3行',
                '第4行',
                '第5行',
                '第6行',
                '第7行',
                '第8行',
                '第9行',
                '第10行'
            ];
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.dataList)
            });

        }, 3000);
    }

    _topIndicatorRender(pulling, pullok, pullrelease) {
        const hide = {position: 'absolute', left: -10000};
        const show = {position: 'relative', left: 0};
        if (pulling) {
            this.txtPulling && this.txtPulling.setNativeProps({style: show});
            this.txtPullok && this.txtPullok.setNativeProps({style: hide});
            this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
        } else if (pullok) {
            this.txtPulling && this.txtPulling.setNativeProps({style: hide});
            this.txtPullok && this.txtPullok.setNativeProps({style: show});
            this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
        } else if (pullrelease) {
            this.txtPulling && this.txtPulling.setNativeProps({style: hide});
            this.txtPullok && this.txtPullok.setNativeProps({style: hide});
            this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
        }
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
                <ActivityIndicator size="small" color="gray"/>
                <Text ref={(c) => {this.txtPulling = c;}}>当前为正在下拉状态： 继续下拉</Text>
                <Text ref={(c) => {this.txtPullok = c;}}>当前为下拉完成状态： 可以放手了</Text>
                <Text ref={(c) => {this.txtPullrelease = c;}}>当前为放手状态： 玩命加载中</Text>
            </View>
        );
    }

    _renderHeader() {
        return (
            <View style={{height:40,backgroundColor:'#b2ffeb',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold'}}>我是列表头部，提示：下拉刷新控件</Text>
            </View>
        );
    }

    _renderRow(item, sectionID, rowID, highlightRow) {
        return (
            <View key={rowID}
                  style={
                      {
                          height:50,
                          justifyContent:'center',
                          alignItems:'center',
                          borderBottomWidth:1,
                          borderBottomColor:'gray',
                          backgroundColor:'#d0d5e0'
                      }
                  }>
                <Text>{item}</Text>
            </View>
        );
    }

    _loadMore() {
        for (let i = 0; i < 3; i++) {
            this.dataList.push('所加载数据');
        }
        this._newRowTimeout = setTimeout(() => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.dataList)
            });
            this._newRowTimeout && clearTimeout(this._newRowTimeout);
        }, 2000);
    }

    _renderFooter() {
        return (
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:60}}>
                <ActivityIndicator/>
                <Text>上拉加载更多</Text>
            </View>
        );
    }

    render() {
        return (
            <View>
                <PullList
                    onPullRelease={this._onPullRelease}
                    topIndicatorRender={this._topIndicatorRender}
                    topIndicatorHeight={60}
                    renderHeader={this._renderHeader}
                    dataSource={this.state.dataSource}
                    pageSize={10}
                    renderRow={this._renderRow}
                    onEndReached={this._loadMore}
                    onEndReachedThreshold={60}
                    renderFooter={this._renderFooter}
                />
            </View>
        );
    }
}
