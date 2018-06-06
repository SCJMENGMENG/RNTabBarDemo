import React from 'react'
import {AppRegistry} from 'react-native'

import {AppNavigator} from './navigators/navigators';

//屏蔽警告
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class Root extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <AppNavigator/>
        )
    }
}

AppRegistry.registerComponent('RNTabBarDemo', () => Root)