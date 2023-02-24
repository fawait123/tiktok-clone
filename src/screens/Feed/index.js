import { View, Text, FlatList, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import style from "./style";
import SinglePost from "../../components/post/single";
import { getPosts } from "../../services/post";

export default function FeedScreen() {
  const [posts, setPosts] = useState([]);
  const mediaRef = useRef([]);
  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  const onViewableItemsChanged = useRef(({ changed }) => {
    changed.forEach((element) => {
      const cell = mediaRef.current[element.key];
      if (cell) {
        if (element.isViewable) {
          cell.play();
        } else {
          cell.stop();
        }
      }
    });
  });
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          { flex: 1, height: Dimensions.get("window").height - 49 },
          index % 2 === 0
            ? { backgroundColor: "black" }
            : { backgroundColor: "black" },
        ]}
      >
        <SinglePost
          item={item}
          ref={(PostSingleRef) => (mediaRef.current[item.id] = PostSingleRef)}
        />
      </View>
    );
  };
  return (
    <View style={style.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        windowSize={4}
        initialNumToRender={0}
        maxToRenderPerBatch={2}
        removeClippedSubviews
        pagingEnabled
        keyExtractor={(item) => item.id}
        decelerationRate={"normal"}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
}
