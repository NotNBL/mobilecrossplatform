import { getCommentsByPost, getPostDetail, getUserDetail } from "@/services/api";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PostDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { userId } = useLocalSearchParams<{ userId: string }>();

  const [user, setUser] = useState<any>(null);
  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getPostDetailData();
      getUserData();
      getCommentsData();
    }
  }, []);

  // ─── GET Post Detail ───────────────────────────────────────────────────────
  const getPostDetailData = () => {
    getPostDetail(Number(id)).then((res) => {
      if (res.status === 200) {
        setPost(res.data);
        console.log(res.data);
      } else {
        console.log("error");
      }
    });
  };

  // ─── GET User Detail ───────────────────────────────────────────────────────
  const getUserData = () => {
    getUserDetail(Number(userId)).then((res) => {
      if (res.status === 200) {
        setUser(res.data);
        console.log(res.data);
      } else {
        console.log("error");
      }
    });
  };

  // ─── TUGAS 2 – GET Comments ─────────────────────────────────────────────────
  const getCommentsData = () => {
    getCommentsByPost(Number(id))
      .then((res) => {
        if (res.status === 200) {
          setComments(res.data);
          console.log(res.data);
        } else {
          console.log("error fetching comments");
        }
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#1e3a5f" />
        <Text style={styles.loadingText}>Loading detail…</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      {/* Post Card */}
      <View style={styles.postCard}>
        <Text style={styles.postTitle}>{post?.title}</Text>
        <Text style={styles.postBody}>{post?.body}</Text>

        {/* Author Info */}
        <View style={styles.divider} />
        <Text style={styles.sectionLabel}>Post Created By</Text>
        <Text style={styles.authorRow}>
          <Text style={styles.authorKey}>Name: </Text>
          <Text style={styles.authorValue}>{user?.name}</Text>
        </Text>
        <Text style={styles.authorRow}>
          <Text style={styles.authorKey}>Email: </Text>
          <Text style={styles.authorValue}>{user?.email}</Text>
        </Text>
      </View>

      {/* TUGAS 2 – Comments Section */}
      <View style={styles.commentsSection}>
        <Text style={styles.commentsHeader}>
          💬 Comments ({comments.length})
        </Text>

        {comments.length === 0 ? (
          <Text style={styles.noComments}>No comments yet.</Text>
        ) : (
          comments.map((comment) => (
            <View key={comment.id} style={styles.commentCard}>
              <View style={styles.commentMeta}>
                <Text style={styles.commentName}>{comment.name}</Text>
                <Text style={styles.commentEmail}>{comment.email}</Text>
              </View>
              <Text style={styles.commentBody}>{comment.body}</Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
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
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8",
  },
  loadingText: {
    marginTop: 12,
    color: "#888",
    fontSize: 15,
  },
  backButton: {
    marginBottom: 16,
  },
  backText: {
    color: "#1e3a5f",
    fontSize: 16,
    fontWeight: "600",
  },
  // Post Card
  postCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 24,
    borderTopWidth: 4,
    borderTopColor: "#1e3a5f",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1e3a5f",
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 26,
    textTransform: "capitalize",
  },
  postBody: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#e8edf2",
    marginVertical: 12,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center",
    marginBottom: 8,
  },
  authorRow: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 4,
    color: "#444",
  },
  authorKey: {
    fontWeight: "700",
    color: "#1e3a5f",
  },
  authorValue: {
    color: "#333",
  },
  // Comments
  commentsSection: {
    marginTop: 4,
  },
  commentsHeader: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1e3a5f",
    marginBottom: 14,
  },
  noComments: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
  },
  commentCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
    borderLeftWidth: 3,
    borderLeftColor: "#f0a500",
  },
  commentMeta: {
    marginBottom: 8,
  },
  commentName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1e3a5f",
  },
  commentEmail: {
    fontSize: 12,
    color: "#f0a500",
    fontStyle: "italic",
  },
  commentBody: {
    fontSize: 13,
    color: "#555",
    lineHeight: 20,
  },
});
