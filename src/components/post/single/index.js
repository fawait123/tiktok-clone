import { View, Text, ActivityIndicator } from "react-native";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { ResizeMode, Video } from "expo-av";
import style from "./style";
import { useUser } from "../../../hooks/useUser";
import Overlay from "../overlay";

export const SinglePost = forwardRef(({ item }, parentRef) => {
  const ref = useRef(null);
  const user = useUser(item.creator).data;

  useImperativeHandle(parentRef, () => ({
    play,
    stop,
    unload,
  }));

  useEffect(() => {
    return () => unload();
  }, []);

  const play = async () => {
    if (ref.current == null) {
      return;
    }

    await ref.current.getStatusAsync().then((status) => {
      if (status?.isPlaying) {
        return;
      }
    });

    try {
      await ref.current.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const stop = async () => {
    if (ref.current == null) {
      return;
    }

    await ref.current.getStatusAsync().then((status) => {
      if (!status?.isPlaying) {
        return;
      }
    });

    try {
      await ref.current.stopAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const unload = async () => {
    console.log("unlaod");
    if (ref.current == null) {
      return;
    }

    try {
      await ref.current.unloadAsync();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View>
        <Overlay user={user} />
      </View>
      <Video
        ref={ref}
        style={style.container}
        resizeMode={ResizeMode.COVER}
        shouldPlay={false}
        isLooping={true}
        isMuted={false}
        rate={1.0}
        volume={1.0}
        source={{
          uri: item.media[0],
        }}
      />
    </>
  );
});

export default SinglePost;
