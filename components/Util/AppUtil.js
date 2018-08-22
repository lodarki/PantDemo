/**
 * Created by Loki on 2017/02/13.
 */
import React, {Component} from 'react';
import {Dimensions} from 'react-native';

export default class AppUtil extends Component {

    static ScreenWidth = Dimensions.get('window').width;
    static ScreenHeight = Dimensions.get('window').height;
}