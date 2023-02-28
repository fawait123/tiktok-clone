import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FeedScreen from "../../screens/Feed";
import ProfileScreen from "../../screens/Profile";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();
export default function FeedNavigation() {
  return (
    <SafeAreaView>
      <Tab.Navigator initialRouteName="feedList">
        <Tab.Screen name="feedList" component={FeedScreen} />
        <Tab.Screen name="profileList" component={ProfileScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
