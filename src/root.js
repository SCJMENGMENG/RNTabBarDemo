import React from 'react'
import {AppRegistry} from 'react-native'

import {AppNavigator} from './navigators/navigators';

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