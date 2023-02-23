import { View, Text } from "react-native";
import React from "react";
import style from "./style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import CameraScreeen from "../Camera";
import ProfileScreen from "../Profile";

const Tab = createBottomTabNavigator();

const Feed = () => {
  return (
    <View style={style.container}>
      <Text>Feed</Text>
    </View>
  );
};
export default function Home() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { backgroundColor: "black" },
        activeTintColor: "white",
      }}
      initialRouteName="feed"
    >
      <Tab.Screen
        name="feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="discover"
        component={Feed}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={CameraScreeen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="plus-square" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="inbox"
        component={Feed}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="me"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
