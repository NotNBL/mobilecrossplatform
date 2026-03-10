import { useRouter } from "expo-router"; 
import { ScrollView, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";

// 1. PERBAIKAN PATH: Karena userList.tsx ada di folder 'app' 
// dan file ini ada di folder '(tabs)', maka tambahkan /(tabs)/
import styles from "./(tabs)/AppStyles"; 
import userData from "./(tabs)/data.json";

export default function UserList() {
  const router = useRouter();

  const handlePress = (user: any) => {
    router.push({
      pathname: "/profile",
      params: {
        userName: user.name,
        userEmail: user.email,
        userPhoto: user.photo_url,
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 2. PERBAIKAN TYPE: Tambahkan ': any' dan ': number' pada parameter map */}
      {userData.map((users: any, index: number) => (
        <Card 
          key={index} 
          style={[styles.card, { marginVertical: 8, marginHorizontal: 16 }]}
          onPress={() => handlePress(users)}
        >
          <Card.Content style={styles.cardContent}>
            <Avatar.Image
              size={70}
              source={{ uri: users.photo_url }}
            />
            <View style={styles.textContainer}>
              <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>
                {users.name}
              </Text>
              <Text variant="bodyMedium">
                {users.email}
              </Text>
            </View>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}