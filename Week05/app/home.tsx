import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function home() {  
  return (    
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 15 }}>      
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Navigation List</Text>      

      {/* Hanya menyisakan navigasi ke User List */}
      <Link href="/userList" push asChild>        
        <Button title="Go to User List Page" color="blue" />      
      </Link>    
    </View>  
  );
}