import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextInput: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "darkgrey",
    paddingHorizontal: 15,
  },
  imageContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  inputContainer: {
    flex: 2,
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: 80,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderColor: "darkgrey",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  textButton: {
    color: "white",
    fontWeight: "500",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default style;
