import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    width: 40,
    height: 40,
    backgroundColor: "black",
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
  },
});

export default style;
