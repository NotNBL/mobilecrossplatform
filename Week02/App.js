import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import ProfileCard from './components/ProfileCard';

export default function App() {
  const profiles = [
    {
      id: 1,
      name: "Nabil Rabbani",
      nim: "12345678",
      bio: "Mahasiswa Informatika yang tertarik pada Mobile Development.",
      image: require('./assets/profile1.jpg'),
    },
    {
      id: 2,
      name: "Teman Dekat 1",
      nim: "87654321",
      bio: "Frontend Developer Enthusiast.",
      image: require('./assets/profile2.jpg'),
    },
    {
      id: 3,
      name: "Teman Dekat 2",
      nim: "11223344",
      bio: "Backend Developer dan Database Lover.",
      image: require('./assets/profile2.jpg'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Profile Page</Text>

        {profiles.map((item) => (
          <ProfileCard
            key={item.id}
            name={item.name}
            nim={item.nim}
            bio={item.bio}
            image={item.image}
          />
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
