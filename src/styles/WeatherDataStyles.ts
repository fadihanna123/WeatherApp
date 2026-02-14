import { StyleSheet } from "react-native";

export const weatherDataStyles = StyleSheet.create({
  contentContainer: {
    flexDirection: "column",
  },
  tempImg: {
    width: "100%",
    height: "50%",
    margin: 10,
    resizeMode: "contain",
  },
  info: {
    margin: 20,
  },
  cityname: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
  },
  tempInfo: {
    textAlign: "center",
    fontSize: 60,
  },
  decInfo: {
    textAlign: "center",
    fontSize: 40,
  },
  errorStyle: { textAlign: "center", fontSize: 30 },
});
