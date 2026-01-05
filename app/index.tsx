import AutoCompleteInput from "@/components/AutoCompleteInput/AutoCompleteInput";
import { BasicInput } from "@/components/BasicInput";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Dimensions, Keyboard, LayoutChangeEvent, Platform, TouchableWithoutFeedback, View } from "react-native";
import { colors } from "./styles";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const isMobile = Platform.OS === "ios" || Platform.OS === "android";

export default function Index() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const Wrapper = isMobile ? TouchableWithoutFeedback : View;

  const [currentInput, setCurrentInput] = useState("");
  const [inputIsFocused, setInputIsFocused] = useState(false);

  return (  //says its error but dw its not 
    <Wrapper onPress={isMobile ? Keyboard.dismiss : undefined} accessible={false}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <LinearGradient onLayout={(event: LayoutChangeEvent) => {
          const { height } = event.nativeEvent.layout;
          setHeaderHeight(height);
        }} colors={[colors.onyx, colors.darkspruce]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ height: Math.max(Math.min(100, screenHeight * 0.075), 20), width: screenWidth, padding: 12, borderColor: colors.honeydew, borderBottomWidth: 1, borderStyle: 'dashed' }}>
          <BasicInput placeholderText="לאן נפשך חפצה להגיע?" borderRadius={12} onChangeText={setCurrentInput} onFocus={() => setInputIsFocused(true)} onBlur={() => setInputIsFocused(false)} />
        </LinearGradient>
        <View style={{ padding: 12, width: screenWidth }}>
          {inputIsFocused && <AutoCompleteInput height={Math.max(Math.min(100, screenHeight * 0.075), 20)} currentInput={currentInput} />}
        </View>

        {/* <LinearGradient colors={[colors.onyx, colors.evergreen]} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} style={{ flex: 1, width: screenWidth, padding: 12 }}>
          <Button title="Press me" />
          <Text style={{ color: colors.honeydew }}>
            Edit app/index.tsx to edit this screen. sigma sigma
          </Text>
        </LinearGradient> */}

      </View>
    </Wrapper>
  );
}
