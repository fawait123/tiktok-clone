import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAuthStateListener } from "../redux/actions";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../screens/Auth";
import Home from "../screens/Home";
import SavePostScreen from "../screens/SavePost";

const Stack = createStackNavigator();
export default function Route() {
  const currentUserObj = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAuthStateListener());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {currentUserObj == null ? (
          <Stack.Screen
            name="auth"
            component={AuthScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="savePost"
              component={SavePostScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
