import { View, Text, TouchableOpacity, Button, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera, CameraType, FlashMode, VideoQuality } from "expo-camera";
import { Feather } from "@expo/vector-icons";
import { Audio } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import style from "./style";

export default function CameraScreeen() {
  const [type, setType] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [galleryStatus, setGalleryStatus] =
    ImagePicker.useMediaLibraryPermissions();
  const [mediaLibraryStatus, setMediaLibraryStatus] =
    MediaLibrary.usePermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const [camereReady, setCamereReady] = useState(false);
  const [mediaAsset, setMediaAsset] = useState([]);

  useEffect(() => {
    (async () => {
      // audio permissions
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      if (galleryStatus !== null && galleryStatus.status === "granted") {
        await MediaLibrary.getAssetsAsync({
          sortBy: "creationTime",
          mediaType: "photo",
        }).then((media) => {
          console.log(media);
          setMediaAsset(media.assets);
        });
      }
    })();
  }, []);

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
    console.log(type);
  };

  const startRecording = async () => {
    if (cameraRef) {
      try {
        let options = {
          maxDuration: 60,
          quality: VideoQuality["480p"],
        };

        const videoRecordingPromise = await cameraRef.recordAsync(options);
        if (videoRecordingPromise) {
          const source = videoRecordingPromise.uri;
        }
        console.log(videoRecordingPromise);
      } catch (error) {
        console.warn(error);
      }
    }
  };

  const stopRecording = async () => {
    if (cameraRef) {
      cameraRef.stopRecording();
    }
  };

  const toggleFlashMode = () => {
    setFlashMode((current) =>
      current === FlashMode.off ? FlashMode.on : FlashMode.off
    );
    console.log(flashMode);
  };

  const pickFromGallery = async () => {
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    })
      .then((result) => {
        if (!result.canceled) {
          let source = result.assets[0].uri;
          // TODO post to database
          console.log(source);
        }

        if (result.canceled) {
          console.warn("canceled");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (mediaLibraryStatus !== null && !mediaLibraryStatus.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={style.contaier}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the gallery
        </Text>
        <Button onPress={setMediaLibraryStatus} title="grant permission" />
      </View>
    );
  }

  if (galleryStatus !== null && !galleryStatus.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={style.contaier}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the media
        </Text>
        <Button onPress={setGalleryStatus} title="grant permission" />
      </View>
    );
  }

  if (permission !== null && !permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={style.contaier}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  if (!permission) {
    return <View />;
  }

  return (
    <View style={style.contaier}>
      <Camera
        style={style.camera}
        type={type}
        flashMode={flashMode}
        ref={(ref) => setCameraRef(ref)}
        onCameraReady={() => setCamereReady(true)}
      >
        <View style={style.buttonContainer}>
          <TouchableOpacity style={style.button} onPress={toggleCameraType}>
            {type == "back" ? (
              <Feather name="refresh-cw" size={24} color="white" />
            ) : (
              <Feather name="refresh-ccw" size={24} color="white" />
            )}

            <Text style={style.iconText}>
              {type == "back" ? "front" : "back"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={toggleFlashMode}>
            {flashMode == "on" ? (
              <Feather name="zap-off" size={24} color="white" />
            ) : (
              <Feather name="zap" size={24} color="white" />
            )}

            <Text style={style.iconText}>
              {flashMode == "on" ? "off" : "on"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.buttonContainerBottom}>
          <View style={{ flex: 1 }} />
          <View style={style.recordButtonContainer}>
            <TouchableOpacity
              style={style.recording}
              disabled={!camereReady}
              onLongPress={() => startRecording()}
              onPressOut={() => stopRecording()}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => pickFromGallery()}
              style={style.galleryButton}
            >
              {mediaAsset[0] == undefined ? (
                <></>
              ) : (
                <Image
                  style={style.image}
                  source={{ uri: mediaAsset[0].uri }}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
}
