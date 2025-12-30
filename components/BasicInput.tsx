import { TextInput } from "react-native";
import { colors } from "../app/styles";

interface BasicInputProps {
  placeholderText?: string;
  borderRadius?: number;
}

export function BasicInput({ placeholderText = "Type here...", borderRadius = 12 }: BasicInputProps) {
    return <TextInput
      style={{
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        color: colors.honeydew,
        borderRadius: borderRadius,
        textAlign: "right",
      }}
      placeholder={placeholderText}
      placeholderTextColor={colors.honeydew + 80}
    />;
}