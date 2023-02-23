const { StyleSheet } = require("react-native");

const style = StyleSheet.create({
  contaier: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
    justifyContent: "space-evenly",
    position: "absolute",
    top: 20,
    right: 10,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  iconText: {
    color: "white",
  },
  buttonContainerBottom: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  recording: {
    borderWidth: 8,
    borderColor: "#ff404087",
    backgroundColor: "#ff4040",
    height: 68,
    width: 68,
    borderRadius: 100,
    alignSelf: "center",
  },
  recordButtonContainer: {
    flex: 1,
    marginVertical: 40,
  },
  galleryButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
    marginLeft: 30,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default style;
