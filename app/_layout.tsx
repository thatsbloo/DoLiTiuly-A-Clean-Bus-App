import { Slot } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "./styles";


export default function RootLayout() {
  return <SafeAreaView style={{ flex: 1, backgroundColor: colors.onyx}}>
      <Text style={{ color: colors.honeydew }}>Do Li Tiuly</Text>
      <Slot />
    </SafeAreaView>;
}
