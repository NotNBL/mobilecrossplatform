import { useRouter, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Profile() {
  const router = useRouter();
  const { userName, userEmail, userPhoto } = useLocalSearchParams<{
    userName: string;
    userEmail: string;
    userPhoto: string;
  }>();

  return (
    <View style={profileStyles.container}>
      <Image
        source={{ uri: userPhoto as string }}
        style={profileStyles.image}
      />
      <Text style={profileStyles.name}>{userName}'s Profile</Text>
      <Text style={profileStyles.email}>{userEmail}</Text>
      <TouchableOpacity onPress={() => router.push("/home" as any)}>
        <Text style={profileStyles.link}>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "#555555",
    marginBottom: 20,
  },
  link: {
    fontSize: 14,
    color: "#007AFF",
  },
});