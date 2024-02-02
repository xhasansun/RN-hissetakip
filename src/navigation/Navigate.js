import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';


// İCONS
import SvgHome from '../assets/BottomNavigationIcon/Home';
import SvgMarkets from '../assets/BottomNavigationIcon/Markets';
import SvgPortfolio from '../assets/BottomNavigationIcon/Portfolio';
import SvgProfile from '../assets/BottomNavigationIcon/Profile';

// BOTTOM BAR SCREEN
import HomeScreen from '../screens/Home/Home';
import PortfolioScreen from '../screens/Portfolio/Portfolio';
import MarketsScreen from '../screens/Markets/Markets';
import ProfileScreen from '../screens/Profile/Profile';

// AUTH SCREEN
import LoginScreen from '../screens/Login/Login';
import RegisterScreen from '../screens/Register/Register';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);

const PortfolioStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="PortfolioScreen"
            component={PortfolioScreen}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);

const MarketsStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="MarketsScreen"
            component={MarketsScreen}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);

const ProfileStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

const Navigate = () => {

    // const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
    const isUserLoggedIn = true;

    return (
        <NavigationContainer>
            {isUserLoggedIn ? (
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: '#19173D',
                            borderTopColor: 'transparent',
                        },
                        // tabBarBackground:() =>(
                        //     <LinearGradient  colors={['rgba(38, 36, 80, 0.85)',  'rgba(25, 23, 61, 1)']} style={{height:100,}}/>
                        //   )
                    }}
                >
                    <Tab.Screen
                        name="Home"
                        component={HomeStack}
                        options={{
                            tabBarLabel: () => null,
                            tabBarIcon: ({ focused, color }) => {
                                const iconColor = focused ? "#00A6C2" : "#c3c3c3";
                                const tabIconStyle = {
                                    backgroundColor: focused ? 'rgba(0, 166, 194, 0.05)' : 'transparent',
                                    borderRadius: 50,
                                    padding: 5,
                                };
                                return (
                                    <View style={tabIconStyle}>
                                        <SvgHome width={35} height={35} stroke={iconColor} />
                                    </View>
                                )
                            },
                        }}
                    />
                    <Tab.Screen
                        name="Markets"
                        component={MarketsStack}
                        options={{
                            tabBarLabel: () => null,
                            tabBarIcon: ({ focused, color }) => {
                                const iconColor = focused ? "#00A6C2" : "#c3c3c3";
                                const tabIconStyle = {
                                    backgroundColor: focused ? 'rgba(0, 166, 194, 0.05)' : 'transparent',
                                    borderRadius: 50,
                                    padding: 10,
                                };
                                return (
                                    <View style={tabIconStyle}>
                                        <SvgMarkets width={25} height={25} stroke={iconColor} />
                                    </View>
                                )
                            },
                        }}
                    />
                    <Tab.Screen
                        name="Portfolio"
                        component={PortfolioStack}
                        options={{
                            tabBarLabel: () => null,
                            tabBarIcon: ({ focused, color }) => {
                                const iconColor = focused ? "#00A6C2" : "#c3c3c3";
                                const tabIconStyle = {
                                    backgroundColor: focused ? 'rgba(0, 166, 194, 0.05)' : 'transparent',
                                    borderRadius: 50,
                                    padding: 10,
                                };
                                return (
                                    <View style={tabIconStyle}>
                                        <SvgPortfolio width={25} height={25} stroke={iconColor} />
                                    </View>
                                )
                            },
                        }}
                    />
                    <Tab.Screen
                        name="Profile"
                        component={ProfileStack}
                        options={{
                            tabBarLabel: () => null,
                            tabBarIcon: ({ focused, color }) => {
                                const iconColor = focused ? "#00A6C2" : "#c3c3c3";
                                const tabIconStyle = {
                                    backgroundColor: focused ? 'rgba(0, 166, 194, 0.05)' : 'transparent',
                                    borderRadius: 50,
                                    padding: 10,
                                };
                                return (
                                    <View>
                                        <SvgProfile fill={iconColor} width={25} height={25} stroke={iconColor} />
                                    </View>
                                )
                            },
                        }}
                    />
                </Tab.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen
                        name="Auth"
                        component={AuthStack}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}

export default Navigate

const styles = StyleSheet.create({})