import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';

export default function ProfileCard({ name, nim, bio, image }) {
  const [comment, setComment] = useState('');

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.nim}>NIM: {nim}</Text>
      <Text style={styles.bio}>{bio}</Text>

      {comment !== '' && (
        <Text style={styles.comment}>Komentar: {comment}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 15,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  nim: {
    color: '#555',
  },
  bio: {
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginTop: 10,
  },
  comment: {
    marginTop: 5,
    fontStyle: 'italic',
  },
});
