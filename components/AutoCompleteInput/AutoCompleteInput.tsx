import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { BasicInput } from "../BasicInput";
import suggestionsFile from "./AutoCompleteInputOptions.json";

interface AutoCompleteInputProps {
  height: number;
}
const suggestions: string[] = suggestionsFile.suggestions;

export default function AutoCompleteInput({ height }: AutoCompleteInputProps) {
  const [currentInput, setCurrentInput] = useState("");
  
  let filtered = suggestions.filter((option) => 
    option.toLowerCase().includes(currentInput.toLowerCase())
  ).slice(0, 4);

  

  return (
    <View style={{ width: "100%" }}>
      <BasicInput
        value={currentInput}
        onChangeText={setCurrentInput}
        placeholderText="לאן אתה חושק לנסוע?"
      />

      {filtered.map((item, index) => (
        <Pressable key={index} onPress={() => alert(item)}>
          <Text>{item}</Text>
        </Pressable>
      ))}
    </View>
  );
}