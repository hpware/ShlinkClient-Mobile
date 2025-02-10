import { Text, View, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { storeData, getData } from "@/components/data";


export default function Index() {
  const [host, setHost] = useState<string>("");
  if ()
  return (
    <View style={s.mainview}>
      <Text>Hi</Text>
              
      <View style={s.inputBox}>
          <TextInput style={s.label} placeholder="Host" placeholderTextColor="black" value={pwd} onChangeText={setpwd} secureTextEntry={true}></TextInput>
        </View>
    </View>
   );
}

const s = StyleSheet.create({
  mainview: {
    alignItems: "center",
    textAlign: "center",
  },
  inputBox: {
    width: 274,
    height: 40,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
    alignSelf:"center",
    
  },
  label: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'Inter',
  },
})  