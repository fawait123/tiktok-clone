import { View, Text, Button } from "react-native";
import { FancyAlert } from "react-native-expo-fancy-alerts";
import React from "react";

const Alert = ({ message, visible, setVisible }) => {
  return (
    <FancyAlert
      visible={visible}
      icon={
        <View
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
            borderRadius: 50,
            width: "100%",
          }}
        >
          <Text>🤓</Text>
        </View>
      }
      style={{ backgroundColor: "white" }}
    >
      <Text style={{ marginTop: -16, marginBottom: 7 }}>{message}</Text>
      <Button title="OK" onPress={() => setVisible(!visible)} />
    </FancyAlert>
  );
};

export default Alert;
