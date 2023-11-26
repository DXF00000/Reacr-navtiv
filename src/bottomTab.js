









import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();
function HomeScreen(prop) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home  路由</Text>
        </View>
    );
}
function NestScreen(prop) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Nest  路由</Text>
        </View>
    );
}
const Stack = createNativeStackNavigator();
function App() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => {
                return (
                    {
                        // tabBarIcon Tab上面的图标函数
                        // focused 是否获取焦点
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName

                            if (route.name == 'Home') {
                                iconName = focused ? 'person' : 'person-outline'
                            } else if (route.name == 'archive-outline') {
                                iconName = focused ? 'mail-unread' : 'mail-unread-outline'
                            }
                            return (
                                <Ionicon name={'man'} color={color} size={size} />

                            )
                        }
                    }
                )
            }}
        //  activeTintColor 在活跃的时候 颜色，inactiveTinColor 不活跃的时候的颜色

        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Nest" component={NestScreen} />
        </Tab.Navigator>
    );
}
export default App;