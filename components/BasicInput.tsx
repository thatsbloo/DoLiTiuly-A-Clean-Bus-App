import { TextInput } from "react-native";
import { colors } from "../app/styles";

interface BasicInputProps {
  placeholderText?: string;
  borderRadius?: number;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
}

export function BasicInput({ placeholderText = "Type here...", borderRadius = 12, onChangeText, value, onFocus, onBlur }: BasicInputProps) {
    return <TextInput
      style={{
        height: "100%",
        borderColor: colors.honeydew + 80,
        borderWidth: 1,
        paddingRight: 12,
        color: colors.honeydew,
        borderRadius: borderRadius,
        textAlign: "right",
      }}
      value={value}
      onChangeText={onChangeText}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholderText}
      placeholderTextColor={colors.honeydew + 80}
    />;
}