import { View, TextInput, StyleSheet } from "react-native";

interface InputProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

export function CustomTextInput({ value, placeholder, onChangeText }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export function NIMInput({ value, placeholder, onChangeText }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        keyboardType="numeric"
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:"100%",
    marginVertical:10
  },
  input:{
    borderWidth:1,
    borderColor:"#ccc",
    padding:10,
    borderRadius:8
  }
});