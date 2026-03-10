import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Email() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}>
        Email List Page
      </Text>
      <Button
        title="Go to Home Screen"
        onPress={() => router.push("/home" as any)}
      />
    </View>
  );
}