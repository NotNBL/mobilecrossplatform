import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { CustomTextInput, NIMInput } from "./input";

export default function Index() {

  const [name, setName] = useState("");
  const [nim, setNim] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Student Data</Text>

      <CustomTextInput
        value={name}
        placeholder="Enter your name"
        onChangeText={setName}
      />

      <NIMInput
        value={nim}
        placeholder="Enter your NIM"
        onChangeText={setNim}
      />

      <Text>Name: {name}</Text>
      <Text>NIM: {nim}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});