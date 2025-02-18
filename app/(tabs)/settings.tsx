// Import
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useState, useEffect } from "react";
import { storeData, getData } from "@/components/data";
import Ionicons from "@expo/vector-icons/Ionicons";
import checkStatus from "@/components/api/checkStatus";
import tstyles from "@/components/tstyles";
const t = tstyles();
// Get Hosts from local database
const getHosts = async () => await getData("hosts");

// Remove https:// or http://
const rmhttpands = (text: string) => {
  if (!text || text === null) {
    return "";
  }
  return text.replace("https://", "").replace("http://", "");
};
/*
// Check server status
const fetchNetwork = (host: string) => {
  if (!host) {
    return null;
  } else {
    try {
      checkStatus(host).then((data) => {
        if (data.error || data.version === "v0" || data.passed === false) {
          setisonline(false);
          return;
        } else {
            setisonline(true);
            return {
                version: data.version,
                host: host,

            }
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
};*/

export default function settings() {
  // Values
  const [isonline, setisonline] = useState<boolean>(false);
  const [servers, setservers] = useState<any[] | null>(null);
  const [isemptyarray, setisemptyarray] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);
  // GetHosts
useEffect(() => {
  getHosts().then((hosts) => {
    if (!hosts || hosts === null) {
      setisemptyarray(true);
    } else {
      setservers(hosts);
    }
  });
  }, []);
  

  useEffect(() => {
    if (isemptyarray) {
      setservers([{ host: "https://yhw.tw" }]);
    }
  }, []);
  return (
    <View style={s.mainview}>
      <Text>
        {isonline ? (
          <Ionicons
            name={"checkmark-circle-outline"}
            color={"#2eca12"}
            size={100}
          />
        ) : (
          <Ionicons
            name={"alert-circle-outline"}
            color={"#ff0000"}
            size={100}
          />
        )}      </Text>
      <Text style={s.currentserver}>
        Current Server: {servers?.[0]?.host}
      </Text>
      <View style={s.addnewhost}>
        <Text style={t.fff}>Add a New Host</Text>
      <TextInput
              style={[s.label, t.fff]}
              placeholder="Host"
              placeholderTextColor="white"
              secureTextEntry={true}
            ></TextInput>
      </View>
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
  label: {
    fontSize: 13,
    color: "black",
    fontFamily: "Inter",
    margin: 3,
    height: 30,
  },
  addnewhost: {
    position: "fixed",
    backgroundColor: "#00aaff",
    color: "white",
    width: "50%",
  },
});

