import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImagePickerIOS,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import style from "./style";
import { userNameSave, userProfileImage } from "../../services/user";
import Alert from "../../components/alert";

export default function EditProfileScreen() {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const navigation = useNavigation();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const launchImagePicker = async () => {
    setLoading(true);
    setVisible(true);
    await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1],
      quality: 1,
    }).then((result) => {
      if (!result.canceled) {
        let source = result.assets[0].uri;
        // TODO save to database
        userProfileImage(source)
          .then((res) => {
            console.log("success", res);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            console.log("err", err);
          });
      }

      if (result.canceled) {
        setLoading(false);
        setVisible(false);
        console.warn("canceled");
      }
    });
  };

  const saveProfile = async () => {
    setLoading(true);
    setVisible(true);
    userNameSave(displayName)
      .then((res) => {
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  if (loading) {
    return (
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <ActivityIndicator color={"red"} />
      </SafeAreaView>
    );
  }

  if (visible) {
    return (
      <View>
        <Alert message={"Success"} visible={visible} setVisible={setVisible} />
      </View>
    );
  }
  return (
    <SafeAreaView style={style.container}>
      <View style={style.containerTop}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.buttonProvider}
        >
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={style.textTop}>General Profile</Text>
        <View />
      </View>
      <TouchableOpacity
        style={style.profileContainer}
        onPress={() => launchImagePicker()}
      >
        <Image style={style.image} source={{ uri: currentUser.photoURL }} />
        <Feather style={style.icon} name="camera" size={24} color={"white"} />
      </TouchableOpacity>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "500" }}>
        {currentUser.displayName}
      </Text>
      <View style={style.EditProfile}>
        <TextInput
          placeholder="displayName"
          style={style.textInput}
          onChangeText={(text) => setDisplayName(text)}
        />
        <TouchableOpacity
          style={style.providerButton}
          onPress={() => saveProfile()}
        >
          <Feather name="corner-right-up" size={24} color="white" />
          <Text style={style.textButton}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
