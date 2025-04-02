import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Platform, StyleSheet, Pressable, View } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...Platform.select({
            android: {
              backgroundColor: "transparent",
              position: "absolute",
              borderTopWidth: 0,
              elevation: 0,
            },
            ios: {
              borderTopWidth: 1,
              elevation: 0,
            },
            default: {
              backgroundColor: "#fff",
              borderTopWidth: 1,
              borderTopColor: "#e5e5e5",
            },
          }),
        },
        ...Platform.select({
          android: {
            /**https://stackoverflow.com/questions/79180521/how-to-remove-ripple-effect-in-tab-navigator-react-native */
            tabBarButton: (props) => (
              <Pressable
                {...props}
                android_ripple={{ color: "transperent" }}
              ></Pressable>
            ),
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "首頁",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="status"
        options={{
          title: "status",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "checkmark-circle-sharp" : "checkmark-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "設定",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings-sharp" : "settings-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      {/**https://stackoverflow.com/questions/76494104/how-can-we-hide-an-entire-folder-of-routes-in-expo-router */}
      {/**<Tabs.Screen
        name="SettingsSubMenu"
        options={{
          href: null,
          headerShown: false,
        }}
      />*/}
    </Tabs>
  );
}

const s = StyleSheet.create({
  top: {
    color: "black",
    position: "absolute",
    width: "100%",
    height:30,
  }
})