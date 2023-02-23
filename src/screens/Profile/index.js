import { View, Text } from "react-native";
import React from "react";
import style from "./style";
import Navbar from "../../components/profile/navbar";
import { useSelector } from "react-redux";
import Header from "../../components/profile/header";
import ProfilePostList from "../../components/profile/post";

export default function ProfileScreen() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const currentPost = useSelector((state) => state.post.currentPost);
  console.log(currentPost);
  return (
    <View style={style.contaier}>
      <Navbar user={currentUser} />
      <Header user={currentUser} />
      <ProfilePostList posts={currentPost} />
    </View>
  );
}
