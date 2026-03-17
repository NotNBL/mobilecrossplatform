import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// Interface untuk props yang digunakan oleh kedua komponen
interface CustomProps {
  onChange: (val: string) => void;
  input: string;
}

// Komponen untuk input Nama
export const CustomTextInput = ({ input, onChange }: CustomProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Input your name"
        style={styles.input}
        onChangeText={onChange}
        value={input}
      />
    </View>
  );
};

// Komponen untuk input NIM
export const NIMInput = ({ input, onChange }: CustomProps) => {
  return (
    <View style={{ width: 200, marginBottom: 10 }}>
      <Text style={styles.label}>NIM</Text>
      <TextInput
        placeholder="Input your NIM/Student ID"
        style={styles.input}
        onChangeText={onChange}
        value={input}
        keyboardType="numeric" // Memastikan input berupa angka
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 200,
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});