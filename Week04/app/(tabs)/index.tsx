import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Avatar, Card, Text, Button, Searchbar, Appbar, Divider } from "react-native-paper";
import { useState } from "react";
import styles from "./AppStyles";
import userData from "./data.json";

interface User {
  name: string;
  email: string;
  photo_url: string;
  status: string;
  bio: string;
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.mainContainer}>
        <Appbar.Header style={styles.header}>
          <Appbar.Action icon="menu" onPress={() => {}} color="#000" />
          <Appbar.Content title="User List" titleStyle={styles.headerTitleText} />
          <Appbar.Action icon="dots-vertical" onPress={() => {}} color="#000" />
        </Appbar.Header>

        <ScrollView contentContainerStyle={styles.container}>
          <Searchbar
            placeholder="Search users..."
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchBar}
            iconColor="#000"
            inputStyle={{ color: '#000' }}
          />

          {/* Mengatasi error type-casting data JSON */}
          {(userData as User[]).map((user, index) => (
            <Card key={index} style={styles.card} mode="elevated" elevation={2}>
              
              {/* Layout Menyamping (Horizontal) */}
              <View style={styles.cardTopRow}>
                <View style={styles.userInfo}>
                  <Avatar.Image source={{ uri: user.photo_url }} size={50} />
                  <View style={styles.nameEmail}>
                    <Text variant="titleMedium" style={styles.boldText}>{user.name}</Text>
                    <Text variant="bodyMedium" style={styles.emailText}>{user.email}</Text>
                  </View>
                </View>
                
                {/* Badge Status Monokrom */}
                <View style={styles.statusBadge}>
                  <View style={[styles.statusDot, { backgroundColor: user.status === 'Online' ? '#000' : '#888' }]} />
                  <Text style={styles.statusText}>{user.status}</Text>
                </View>
              </View>

              <Divider style={styles.divider} />

              <Card.Content>
                <Text style={styles.bioLabel}>BIO</Text>
                <Text style={styles.bioText}>{user.bio}</Text>
              </Card.Content>

              {/* Action Buttons Abu-abu */}
              <Card.Actions style={styles.cardActions}>
                <Button 
                  icon="email-outline" 
                  mode="text" 
                  textColor="#757575" // Warna abu-abu untuk teks "Contact"
                  onPress={() => {}}
                >
                  Contact
                </Button>
                <Button 
                  icon="account" 
                  mode="contained" 
                  buttonColor="#757575" // Warna abu-abu untuk background "View Profile"
                  textColor="#ffffff" // Teks putih agar terbaca jelas
                  onPress={() => {}}
                >
                  View Profile
                </Button>
              </Card.Actions>
            </Card>
          ))}
        </ScrollView>
      </View>
    </>
  );
}