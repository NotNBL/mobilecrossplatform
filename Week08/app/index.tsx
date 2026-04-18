import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getPosts } from "../services/api";

export default function Index() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = () => {
    setLoading(true);
    getPosts()
      .then((res) => {
        if (res.status === 200) {
          setPosts(res.data);
          console.log(res.data);
        } else {
          console.log("error");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📋 All Posts</Text>
        {/* TUGAS 1 – Tombol Add New Post */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push({ pathname: "/addPost" })}
        >
          <Text style={styles.addButtonText}>+ Add New Post</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.centerBox}>
          <Text style={styles.loadingText}>Loading posts…</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.listContainer}>
          {posts.map((post) => (
            <Pressable
              key={post.id}
              style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
              ]}
              onPress={() =>
                router.push({
                  pathname: "/postDetail",
                  params: {
                    id: post.id,
                    userId: post.userId,
                  },
                })
              }
            >
              <Text style={styles.postNumber}>Post Number: {post.id}</Text>
              <Text style={styles.postTitle}>Title: {post.title}</Text>
              <Text style={styles.postBody} numberOfLines={2}>
                Body: {post.body}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  header: {
    backgroundColor: "#1e3a5f",
    paddingTop: 54,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  addButton: {
    backgroundColor: "#f0a500",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  listContainer: {
    padding: 16,
    gap: 12,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: "#1e3a5f",
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  postNumber: {
    fontSize: 12,
    color: "#888",
    marginBottom: 4,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  postTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1e3a5f",
    marginBottom: 6,
  },
  postBody: {
    fontSize: 13,
    color: "#555",
    lineHeight: 18,
  },
  centerBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#888",
    fontSize: 16,
  },
});
