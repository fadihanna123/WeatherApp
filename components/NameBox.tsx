import React from "react";
import { StyleSheet, Text } from "react-native";

const NameBox = () => {
  return (
    <>
      <Text style={styles.myName}>Created by Fadi Hanna</Text>
    </>
  );
};

const styles = StyleSheet.create({
  myName: {
    textAlign: "center",
    marginTop: 100,
    marginRight: 20,
    fontSize: 20,
  },
});

export default NameBox;
