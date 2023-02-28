import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import React from "react";
import style from "./style";
import { useState } from "react";
import { login, register } from "../../../redux/actions";
import { db } from "../../../../App";

export default function AuthDetail({
  authDetail,
  setAuthDetail,
  authPage,
  setAuthPage,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(email, password))
      .then((response) => {
        db.collection("user")
          .doc(response.user.uid)
          .set({
            displayName: response.user?.displayName,
            email: response.user?.email,
          })
          .then(() => {
            console.log("Login successful");
            console.log(response.user);
          });
      })
      .catch((error) => {
        console.log("Login failed", error);
      });
  };

  const handleRegister = () => {
    dispatch(register(email, password))
      .then((response) => {
        console.log("Register successful", response);
      })
      .catch((error) => {
        console.log("Register failed", error);
      });
  };

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.providerButtonIcon}
        onPress={() => {
          setAuthDetail(!authDetail);
        }}
      >
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      <TextInput
        placeholder="Email"
        style={style.textInput}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        style={style.textInput}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity
        style={style.providerButton}
        onPress={() => {
          authPage == 0 ? handleLogin() : handleRegister();
        }}
      >
        <Text style={style.textButton}>
          {authPage == 0 ? "SIGN IN" : "SIGN UP"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
