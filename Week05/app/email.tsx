import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function email() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Email List Page</Text>
      <Link href="/home" push asChild>
        <Button title="Go to Home Screen" />
      </Link>
    </View>
  );
}