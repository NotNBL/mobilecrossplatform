import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, StatusBar } from "react-native";
import MapView, { Marker, UrlTile } from "react-native-maps";
import * as Location from "expo-location";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Izin lokasi diperlukan!");
      return;
    }

    let currentLoc = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: currentLoc.coords.latitude,
      longitude: currentLoc.coords.longitude,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {!location ? (
        <View style={styles.center}>
          <Text style={styles.welcomeText}>IF670 - Maps & Geolocation</Text>
          <TouchableOpacity style={styles.mainButton} onPress={getLocation}>
            <Text style={styles.buttonText}>Get Geo Location</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <MapView
            // Perbaikan: Tidak ada tanda '>' setelah MapView, langsung masuk props
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            onPress={(e) => setLocation(e.nativeEvent.coordinate)}
          >
            {/* <UrlTile urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
            
            <Marker
              coordinate={location}
              title="Lokasi Anda"
              draggable
              onDragEnd={(e) => setLocation(e.nativeEvent.coordinate)}
            />
          </MapView>

          {/* Panel Info UI/UX Dark Theme */}
          <View style={styles.infoCard}>
            <View style={styles.dragHandle} />
            <Text style={styles.infoTitle}>Koordinat Terkini</Text>
            
            <View style={styles.coordRow}>
              <View style={styles.coordBox}>
                <Text style={styles.label}>LATITUDE</Text>
                <Text style={styles.value}>{location.latitude.toFixed(6)}</Text>
              </View>
              <View style={styles.coordBox}>
                <Text style={styles.label}>LONGITUDE</Text>
                <Text style={styles.value}>{location.longitude.toFixed(6)}</Text>
              </View>
            </View>

            <TouchableOpacity style={[styles.mainButton, { marginTop: 10 }]} onPress={getLocation}>
              <Text style={styles.buttonText}>Refresh GPS</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212" }, // Background gelap
  center: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  map: { width: width, height: height * 0.7 },
  welcomeText: { fontSize: 18, fontWeight: "600", color: "#E0E0E0", marginBottom: 20 },
  
  // Button Style
  mainButton: {
    backgroundColor: "#2C2C2C",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#444",
  },
  buttonText: { color: "#FFF", fontWeight: "bold", textAlign: "center" },

  // Info Card Style
  infoCard: {
    position: "absolute",
    bottom: 0,
    width: width,
    backgroundColor: "#1E1E1E", // Card gelap
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  dragHandle: {
    width: 40,
    height: 5,
    backgroundColor: "#555",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 15,
  },
  infoTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 15, color: "#E0E0E0" },
  coordRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 15 },
  coordBox: { flex: 1, backgroundColor: "#2A2A2A", padding: 10, borderRadius: 8, marginHorizontal: 5 },
  label: { fontSize: 10, color: "#A0A0A0", marginBottom: 4 },
  value: { fontSize: 14, fontWeight: "600", color: "#FFF" },
});