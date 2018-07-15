import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Members from '../components/Members';
import MemberDetail from '../components/MemberDetail';
import Me from '../components/Me';

export const MemberStack = StackNavigator({
    Members: {
        screen: Members,
        navigationOptions: {
            title: 'Thông tin thành viên',
        },
    },
    Details: {
        screen: MemberDetail,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
        }),
    },
});

export const Tabs = TabNavigator({
    Members: {
        screen: MemberStack,
        navigationOptions: {
            tabBarLabel: 'Thành viên của lớp',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
        },
    },
    Me: {
        screen: Me,
        navigationOptions: {
            tabBarLabel: 'Tôi',
            tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        },
    },
});

export const Root = StackNavigator({
    Tabs: {
        screen: Tabs,
    }
}, {
    mode: 'modal',
    headerMode: 'none',
});