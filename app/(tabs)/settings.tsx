import { View, Text, TextInput, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useState, useEffect } from "react";
import { storeData, getData } from "@/components/data";

const getHosts = async () => await getData("hosts");

const rmhttpands = (text: string) => {
  if (!text || text === null) {
    return "";
  }
  return text.replace("https://", "").replace("http://", "");
};

export default function settings() {
  const [server, setserver] = useState<any[] | null>(null);
  const [isemptyarray, setisemptyarray] = useState<boolean>(false);
  useEffect(() => {
    getHosts().then((hosts) => {
      if (!hosts) {
        setisemptyarray(true);
      } else {
        setserver([{ host: "https://yhw.tw" }]);
      }
    });
  }, []);
  return (
    <View style={s.mainview}>
      <Text style={s.currentserver}>
        Current Server: {rmhttpands(server?.[0]?.host)}{" "}
      </Text>
    </View>
  );
}
const s = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  linkbutton: {
    borderWidth: 5,
    backgroundColor: "#000",
    color: "#fff",
  },
  currentserver: {},
});
