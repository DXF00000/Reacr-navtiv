

import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(prop) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home  路由</Text>
            <Button title='跳转Nest' onPress={
                // prop.navigation.navigate 跳转路由
                () => (prop.navigation.navigate('Nest'))
            } />
        </View>
    );
}
function NestScreen(prop) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Nest  路由</Text>
            <Button title='跳转Nest' onPress={
                // prop.navigation.navigate 跳转路由
                () => (prop.navigation.navigate('Home'))
            } />
        </View>
    );
}
const Stack = createNativeStackNavigator();
function App() {
    return (

        <View>
            {/* initialRouteName 初始加载路由定义 */}
            <Stack.Navigator
                initialRouteName='Home'
                headerMode={'none'}
            >
                <Stack.Screen name="Home" component={HomeScreen}
                    options={
                        {
                            title: '首页',
                            headerStyle: {
                                backgroundColor: 'tomato'
                            },
                            headerRight: () => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            alert('Hellow')
                                        }}
                                    >
                                        <Text>
                                            Hello
                                        </Text>
                                    </TouchableOpacity>

                                )
                            }
                        }
                    }
                />
                <Stack.Screen name="Nest" component={NestScreen} />
            </Stack.Navigator>
        </View>

    );
}
export default App;