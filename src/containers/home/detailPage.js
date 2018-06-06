import React,{Component} from 'react'
import {
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

import NavigationBar from '../../navigators/NavigationBar'

import backIcon from '../../imgSource/back.png'

export default class DetailPage extends Component{

    _leftNavClick(){
        alert('左侧点击')
        this.props.navigation.goBack()
    }
    _rightNavClick(){
        alert('右侧点击')
    }

    render(){
        return(
            <View>
                <NavigationBar title={'详情'}
                               leftImage={ backIcon }
                               leftAction={ this._leftNavClick.bind(this) }
                               rightTitle={'right'}
                               rightAction={ this._rightNavClick.bind(this) }
                />
                <Text>
                    详情
                </Text>
            </View>
        )
    }
}