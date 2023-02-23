import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import style from "./style";

export default function AuthMenu({
  authPage,
  setAuthPage,
  authDetail,
  setAuthDetail,
}) {
  return (
    <View style={style.container}>
      <View style={style.containerMain}>
        <Text style={style.headerText}>
          {authPage == 0 ? "Sign In" : "Sign Up"}
        </Text>
        <TouchableOpacity
          style={style.providerButton}
          onPress={() => {
            setAuthDetail(!authDetail);
          }}
        >
          <Feather name="user" size={24} color="black" />
          <Text>Use Email</Text>
          <View />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={style.providerBottom}
        onPress={() => {
          authPage == 0 ? setAuthPage(1) : setAuthPage(0);
        }}
      >
        {authPage == 0 ? (
          <Text>
            Dont an account ? <Text style={style.bottomText}>Sign Up</Text>{" "}
          </Text>
        ) : (
          <Text>
            Already account ? <Text style={style.bottomText}>Sign In</Text>{" "}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
