import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={s.mainview}>
      <Text>Hi</Text>
    </View>
   );
}

const s = StyleSheet.create({
  mainview: {
    alignItems: "center",
    textAlign: "center",
    
  }
})