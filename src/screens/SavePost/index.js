import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import style from "./style";
import { saveCreatePost } from "../../redux/actions/post";

export default function SavePostScreen(props) {
  const navigation = useNavigation();
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const savePost = () => {
    setLoading(true);
    dispatch(
      saveCreatePost(
        description,
        props.route.params.source,
        props.route.params.sourceThumb
      )
    )
      .then((res) => {
        console.log("success", res);
        navigation.dispatch(StackActions.popToTop());
      })
      .catch((err) => {
        console.warn("err", err);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <View style={style.loading}>
        <ActivityIndicator color={"red"} />
      </View>
    );
  }
  return (
    <View style={style.container}>
      <View style={style.contentContainer}>
        <View style={style.inputContainer}>
          <TextInput
            placeholder="Description"
            style={style.TextInput}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View style={style.imageContainer}>
          <Image
            style={style.image}
            source={{ uri: props.route.params.sourceThumb }}
          />
        </View>
      </View>
      <View style={style.bottomContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.goBack()}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="arrow-left" size={24} color="black" />
            <Text
              style={{ ...style.textButton, color: "black", marginLeft: 10 }}
            >
              Cancel
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => savePost()}
          style={{
            ...style.button,
            backgroundColor: "red",
            borderColor: "white",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Feather name="corner-left-up" size={24} color="white" />
            <Text style={{ ...style.textButton, marginLeft: 10 }}>Post</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
