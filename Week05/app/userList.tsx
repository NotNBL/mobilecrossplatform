import { Link } from "expo-router";
import { ScrollView, View } from "react-native";
import { Avatar, Text } from "react-native-paper";
import styles from "./(tabs)/AppStyles";
import userData from "./(tabs)/data.json";

export default function userList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userData.map((users, index) => (
        <Link
          key={index}
          href={{
            pathname: "/profile",
            params: {
              userName: users.name,
              userEmail: users.email,
              userPhoto: users.photo_url,
            },
          } as any}
          push
        >
          <View style={{
            backgroundColor: "#2C2C2E",
            borderRadius: 12,
            padding: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            marginBottom: 12,
            width: "100%",
          }}>
            <Avatar.Image size={70} source={{ uri: users.photo_url }} />
            <View>
              <Text variant="titleMedium" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                {users.name}
              </Text>
              <Text variant="bodyMedium" style={{ color: "#AAAAAA" }}>
                {users.email}
              </Text>
            </View>
          </View>
        </Link>
      ))}
    </ScrollView>
  );
}