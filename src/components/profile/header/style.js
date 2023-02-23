import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    marginVertical: 30,
    alignItems: "center",
    flex: 1,
  },
  profile: {
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 18,
  },
  profileDetail: {
    alignItems: "center",
    marginHorizontal: 25,
  },
  containerDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  textNumber: {
    fontWeight: "600",
    marginVertical: 5,
  },
  containerButton: {
    paddingHorizontal: 40,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: "darkgrey",
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "500",
  },
  providerButton: {
    marginTop: 30,
  },
});

export default style;
