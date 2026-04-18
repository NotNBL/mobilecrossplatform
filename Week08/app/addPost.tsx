import { postData } from "@/services/api";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    // Validasi input
    if (!title.trim() || !body.trim() || !userId.trim()) {
      Alert.alert("Validation Error", "Semua field harus diisi!");
      return;
    }

    if (isNaN(Number(userId))) {
      Alert.alert("Validation Error", "User ID harus berupa angka!");
      return;
    }

    setLoading(true);
    postData({ title: title.trim(), body: body.trim(), userId: Number(userId) })
      .then((res) => {
        if (res.status === 201) {
          console.log("Post created:", res.data);
          Alert.alert(
            "✅ Berhasil!",
            `Post baru berhasil dibuat!\n\nID: ${res.data.id}\nTitle: ${res.data.title}`,
            [
              {
                text: "OK",
                onPress: () => router.back(),
              },
            ]
          );
        } else {
          Alert.alert("Error", "Gagal membuat post. Coba lagi.");
        }
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "Terjadi kesalahan. Cek koneksi internet.");
      })
      .finally(() => setLoading(false));
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>✏️ Add New Post</Text>
          <Text style={styles.headerSubtitle}>
            Isi form di bawah untuk membuat post baru
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* User ID */}
          <Text style={styles.label}>User ID *</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan User ID (angka)"
            placeholderTextColor="#aaa"
            value={userId}
            onChangeText={setUserId}
            keyboardType="numeric"
          />

          {/* Title */}
          <Text style={styles.label}>Title *</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan judul post"
            placeholderTextColor="#aaa"
            value={title}
            onChangeText={setTitle}
          />

          {/* Body */}
          <Text style={styles.label}>Body *</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Masukkan isi post"
            placeholderTextColor="#aaa"
            value={body}
            onChangeText={setBody}
            multiline
            numberOfLines={5}
            textAlignVertical="top"
          />

          {/* Buttons */}
          <View style={styles.buttonRow}>
            {/* Cancel */}
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={handleCancel}
              disabled={loading}
            >
              <Text style={styles.cancelButtonText}>✕ Cancel</Text>
            </TouchableOpacity>

            {/* Submit */}
            <TouchableOpacity
              style={[styles.button, styles.submitButton, loading && styles.buttonDisabled]}
              onPress={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={styles.submitButtonText}>✓ Submit</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Info Note */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            ℹ️ Data dikirim ke JSONPlaceholder (dummy API). Post tidak akan
            tersimpan permanen, namun response sukses akan diterima.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  content: {
    padding: 20,
    paddingTop: 54,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1e3a5f",
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  form: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1e3a5f",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#d0dbe8",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#333",
    backgroundColor: "#f8fafd",
    marginBottom: 18,
  },
  textArea: {
    height: 120,
    paddingTop: 12,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 4,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: "#f0f4f8",
    borderWidth: 1.5,
    borderColor: "#c5d0dc",
  },
  cancelButtonText: {
    color: "#555",
    fontWeight: "700",
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: "#1e3a5f",
  },
  submitButtonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 15,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  infoBox: {
    backgroundColor: "#e8f0fe",
    borderRadius: 10,
    padding: 14,
    borderLeftWidth: 3,
    borderLeftColor: "#1e3a5f",
  },
  infoText: {
    fontSize: 12,
    color: "#444",
    lineHeight: 18,
  },
});
