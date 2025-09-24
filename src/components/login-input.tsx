import { TextInput, TextInputProps } from "react-native";

import colors from "tailwindcss/colors";

type LoginInputProps = TextInputProps & {
  placeholder: string;
};

export function LoginInput({ placeholder, ...rest }: LoginInputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.slate[400]}
      className="h-12 bg-slate-100 rounded-lg px-4 font-body text-base text-slate-900 mb-4"
      {...rest}
    />
  );
}
