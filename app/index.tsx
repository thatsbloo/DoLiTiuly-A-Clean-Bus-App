import { BasicInput } from "@/components/BasicInput";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Dimensions, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { colors } from "./styles";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function Index() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <LinearGradient colors={[colors.onyx, colors.darkspruce]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={{ height: Math.max(Math.min(100, screenHeight * 0.075), 20), width: screenWidth, padding: 12, borderColor: colors.honeydew, borderBottomWidth: 1, borderStyle: 'dashed' }}>
        <BasicInput placeholderText="לאן אתה חושק לנסוע?" />
      </LinearGradient>
      <LinearGradient colors={[colors.onyx, colors.evergreen]} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} style={{ flex: 1, width: screenWidth, padding: 12}}>
        <Button title="Press me"  />
      <Text style={{ color: colors.honeydew }}>
        Edit app/index.tsx to edit this screen. sigma sigma
      </Text>
      </LinearGradient>
      
    </View>
    </TouchableWithoutFeedback>
  );
}
