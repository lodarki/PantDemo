/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, ScrollView, Dimensions} from "react-native";
import ScrollableTabViewDemo from './components/react-native-scrollable-tab-view/ScrollableTabViewDemo';

export default class PantDemo extends Component {


    render() {
        return (
            <ScrollableTabViewDemo />
        );
    }
}

AppRegistry.registerComponent('PantDemo', () => PantDemo);
