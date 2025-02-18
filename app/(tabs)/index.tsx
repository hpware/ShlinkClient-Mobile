import { Text, View, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { storeData, getData } from "@/components/data";

export default function Index() {
  return (
    <View style={s.mainview}>
        <Text>Please add a host to start using this app.</Text>
    </View>
  );
}

const s = StyleSheet.create({
  mainview: {
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputBox: {
    width: 274,
    height: 40,
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
    alignSelf: "center",
  },
  label: {
    fontSize: 13,
    color: "black",
    fontFamily: "Inter",
  },
});
