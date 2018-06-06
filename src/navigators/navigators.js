import React from 'react';
import {StackNavigator} from 'react-navigation';

import TabBar from '../tabBar/tabBar';

import DetailPage from '../containers/home/detailPage';
import MessagePage from '../containers/other/messagePage';

export const AppNavigator = StackNavigator({
    TabBar:{
        screen:TabBar,
        navigationOptions: {
            header: null,
            headerBackTitle: null
        }
    },
    DetailPage:{
       screen:DetailPage,
       navigationOptions:{
           header: null,
           headerBackTitle: null
       }
    },
    MessagePage:{
        screen:MessagePage,
        navigationOptions:{
            headerTitle:"信息",
        }
    }
},{
    mode:'card',
    headerMode:'float',
    initialRouteName:'TabBar',
});
