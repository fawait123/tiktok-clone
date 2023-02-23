const { StyleSheet } = require("react-native");

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  buttonProvider: {},
  textTop: {
    fontWeight: "500",
    fontSize: 16,
  },
  profileContainer: {
    width: 100,
    height: 100,
    backgroundColor: "black",
    borderRadius: 50,
    alignSelf: "center",
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  icon: {
    position: "absolute",
  },
  EditProfile: {
    flex: 1,
    marginTop: 60,
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "darkgrey",
    paddingHorizontal: 14,
    paddingVertical: 15,
    borderRadius: 5,
  },
  providerButton: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
    borderRadius: 6,
    flexDirection: "row",
  },
  textButton: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 15,
  },
});

export default style;
