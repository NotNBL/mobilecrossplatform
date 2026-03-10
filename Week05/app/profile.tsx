import { Link, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import styles from "./(tabs)/AppStyles"; // Menggunakan style yang sudah kamu buat

export default function Profile() {
  const params = useLocalSearchParams();
  // Memastikan data terambil dengan benar dari navigasi
  const { userName, userEmail, userPhoto } = params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#FFF" }}>
      <Avatar.Image
        size={120}
        source={{ uri: (userPhoto as string) || 'https://via.placeholder.com/150' }}
        style={{ marginBottom: 20 }}
      />
      
      {/* Teks sesuai instruksi Tugas Modul 5 [cite: 164] */}
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        {userName}'s Profile
      </Text>
      
      <Text style={{ fontSize: 16, color: "gray", marginBottom: 30 }}>
        {userEmail}
      </Text>

      <Link href="/home" push asChild>
        <Button title="Go to Home Screen" />
      </Link>
    </View>
  );
}