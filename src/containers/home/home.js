import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

import NavigationBar from '../../navigators/NavigationBar'
import backIcon from '../../imgSource/back.png'

export default class Home extends Component{

    _rightNavClick(){

        this.props.navigation.navigate('DetailPage')
    }

    render(){
        return(
            <View>
                <NavigationBar title={'首页'}
                               rightTitle={'去看图文详情'}
                               rightImage={ backIcon }
                               rightAction={ this._rightNavClick.bind(this) }
                />
                <Text>首页</Text>
            </View>
        )
    }
}