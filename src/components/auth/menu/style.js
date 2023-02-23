import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMain: {
    flex: 1,
    padding: 30,
  },
  headerText: {
    fontWeight: "bold",
    color: "darkslategray",
    textAlign: "center",
    fontSize: 30,
  },
  providerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "darkgray",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  providerBottom: {
    padding: 20,
    backgroundColor: "ghostwhite",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    fontWeight: "bold",
  },
});

export default style;
