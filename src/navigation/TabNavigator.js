import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
// import ekrana
import Home from "../screens/Home";
import About from "../screens/About";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import Contact from "../screens/Contact";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const [badgeCount, setBadgeCount] = useState(0);

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "lightgrey",
                tabBarStyle: {
                    backgroundColor: "#FF6347",
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                headerShown: false,
            }}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{ // opcije za odvojene tabove
                    tabBarLabel: "Home",
                    tabBarIcon: ({color}) => ( // ikonica
                        <MaterialCommunityIcons name="home" size={26} color={color} />
                    ),
                }}
            />

            <Tab.Screen 
                name="About"
                component={About}
                options={{
                    tabBarLabel: "About",
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="information-circle" size={26} color={color} />
                    ),
                }}
            />

            <Tab.Screen 
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="account-circle" size={26} color={color} />
                    ),
                }}
            />

            <Tab.Screen 
                name="Settings"
                component={Settings}
                listeners={{
                    focus: () => setBadgeCount(prev => prev + 1),
                }}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({color}) => (
                        <Ionicons name="settings-sharp" size={26} color={color} />
                    ),
                    tabBarBadge: badgeCount > 0 ? badgeCount : undefined,
                    tabBarBadgeStyle: { backgroundColor: "white", color: "#FF6347" },
                }}
            />

            <Tab.Screen 
                name="Contact"
                component={Contact}
                options={{
                    tabBarLabel: "Contact",
                    tabBarIcon: ({color}) => (
                        <FontAwesome5 name="contact-book" size={22} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;