import { colors } from "@/app/styles";
import { Pressable, Text, View } from "react-native";
import suggestionsFile from "./AutoCompleteInputOptions.json";

interface AutoCompleteInputProps {
  height: number;
  width?: number;
  currentInput: string;
}
const suggestions: string[] = suggestionsFile.suggestions;

export default function AutoCompleteInput({ height, width, currentInput }: AutoCompleteInputProps) {
  
  let filtered = suggestions.filter((option) => 
    option.toLowerCase().includes(currentInput.toLowerCase())
  ).slice(0, 4);

  
  return (
    <View style={{width: width, borderRadius: 12}}>
      {filtered.map((item, index) => (
        <AutoCompleteInputPressable key={index} height={height} first={index === 0} last={index === filtered.length - 1} text={item} />
      ))}
    </View>
    // <View style={{ width: "100%" }}>
    //   <BasicInput
    //     value={currentInput}
    //     onChangeText={setCurrentInput}
    //     placeholderText="לאן אתה חושק לנסוע?"
    //   />

    //   {filtered.map((item, index) => (
    //     <Pressable key={index} onPress={() => alert(item)}>
    //       <Text>{item}</Text>
    //     </Pressable>
    //   ))}
    // </View>
  );
}

interface AutoCompleteInputPressableProps {
  height: number;
  first?: boolean;
  last?: boolean;
  borderRadius?: number;
  text: string;
}

function AutoCompleteInputPressable({ height, first, last, borderRadius = 12, text }: AutoCompleteInputPressableProps) {
  const style = {
    height: height,
    backgroundColor: colors.carbon,
    borderColor: colors.honeydew + 80,
    borderBottomWidth: last ? 1 : 0,
    borderWidth: 1,
    borderTopLeftRadius: first ? borderRadius : 0,
    borderTopRightRadius: first ? borderRadius : 0,
    borderBottomLeftRadius: last ? borderRadius : 0,
    borderBottomRightRadius: last ? borderRadius : 0,
    textAlign: "right"
  };

  return <Pressable onPress={() => alert("Pressed AutoCompleteInput!")} style={style}><Text style={{ textAlign: "right", paddingRight: 12, color: colors.honeydew }}>{text}</Text></Pressable>;
}