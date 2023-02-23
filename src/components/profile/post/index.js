import { View, Text, FlatList } from "react-native";
import React from "react";
import style from "./style";
import ItemPost from "./item";

export default function ProfilePostList({ posts }) {
  console.log("post", posts);
  return (
    <View style={style.container}>
      <FlatList
        numColumns={3}
        removeClippedSubviews
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemPost item={item} />}
      />
    </View>
  );
}
