import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomTabNavigator from "./TabNavigator";
import { AboutStackNavigator } from "./StackNavigator";


const Drawer = createDrawerNavigator();

function ContactScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Contact Screen</Text>
    </View>
  );
}

  return (
    <DrawerContentScrollView style={{ backgroundColor: "#f9f9f9" }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          margin: 16,
          marginBottom: 24,
          color: "#222",
        }}
      >
        My Drawer
      </Text>

      {screens.map((screen) => (
        <TouchableOpacity
          key={screen.name}
          onPress={() => navigation.navigate(screen.name)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 14,
            paddingHorizontal: 20,
          }}
        >
          <MaterialCommunityIcons name={screen.icon} size={22} color="#333" />
          <Text style={{ fontSize: 16, marginLeft: 15 }}>{screen.name}</Text>
        </TouchableOpacity>
      ))}
    </DrawerContentScrollView>
  );


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DynamicDrawerContent {...props} />} 

      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: "black",
        drawerActiveBackgroundColor: "white",
        drawerStyle: { width: 250 },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="About"
        component={AboutStackNavigator}
        options={{
          title: "About",
          drawerIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "information" : "information-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: "Contact",
          drawerIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "email" : "email-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

