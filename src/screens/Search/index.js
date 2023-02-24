import { View, Text, SafeAreaView, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import style from "./style";
import Item from "../../components/search/item";
import { searchByUserEmail } from "../../services/user";

export default function SearchScreen() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    searchByUserEmail(search).then(setData);
  }, [search]);
  return (
    <SafeAreaView style={style.container}>
      <TextInput
        style={style.TextInput}
        placeholder="Search..."
        onChangeText={setSearch}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
