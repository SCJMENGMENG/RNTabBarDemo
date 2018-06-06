import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

import NavigationBar from '../../navigators/NavigationBar'

import icon from '../../imgSource/icon.png'

export default class Other extends Component {

    _rightNavClick() {
        alert('右侧点击')
        this.props.navigation.navigate('MessagePage')
    }

    render() {
        return (
            <View>
                <NavigationBar
                    title={'其他'}
                    style={{backgroundColor:'blue'}}
                    rightImage={icon}
                    rightAction={this._rightNavClick.bind(this)}
                />
                <Text>其他</Text>
            </View>
        )
    }
}