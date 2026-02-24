import { Text, View, StyleSheet } from "react-native";

interface iProfile {
  name: string;
  age: number;
}

const Profile = ({ name, age }: iProfile) => {
  return (
    <View style={styles.container}>
      <Text>Halo nama ku, {name}!</Text>
      <Text>Umur ku, {age} tahun</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginBottom: 20 }
});

export default Profile;