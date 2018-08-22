import React, {Component} from 'react';
import {View,TouchableOpacity,Text,StyleSheet, PixelRatio} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class MainTabBar extends Component {

    static propTypes = {
        goToPage: React.PropTypes.func, //跳转到对应的tab方法
        activeTab: React.PropTypes.number, //当前被选中的tab下标
        tabs: React.PropTypes.array, //所有tabs合集
        tabNames: React.PropTypes.array, //保存tab名称
        tabIconNames: React.PropTypes.array, //保存tab图标
    };

    setAnimationValue({value}) {

    }

    render() {
        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tab,i) => {
                    const color = this.props.activeTab == i? "#2acaa2" : "#b4b9bc";
                    return <TouchableOpacity key={i} onPress={()=>this.props.goToPage(i)} style={styles.tab} activeOpacity={1}>
                                <View style={styles.tabItem}>
                                    <Icon
                                        name={this.props.tabIconNames[i]}  // 图标
                                        size={24}
                                        color={color}/>
                                    <Text style={{color: color, fontSize: 12,}}>
                                        {this.props.tabNames[i]}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        height: 49,
        borderStyle:'solid',
        borderWidth: 1 / PixelRatio.get(),
        borderTopColor:'rgb(210, 210, 210)',
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderBottomColor:'transparent',
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
});
