import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#FFFFFF",
  },
  headerTitleText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#000000",
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 16,
  },
  searchBar: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  nameEmail: {
    justifyContent: "center",
  },
  boldText: {
    fontWeight: "bold",
    color: "#000000",
    fontSize: 16,
  },
  emailText: {
    color: "#555555",
    fontSize: 14,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333333",
  },
  divider: {
    backgroundColor: "#E0E0E0",
    marginHorizontal: 16,
    marginBottom: 12,
  },
  bioLabel: {
    fontSize: 12,
    color: "#888888",
    fontWeight: "bold",
    marginBottom: 4,
  },
  bioText: {
    color: "#333333",
    fontSize: 14,
    lineHeight: 20,
  },
  cardActions: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
    justifyContent: "flex-end",
  },

  // ── Week 5 tambahan ──
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: "#555555",
    marginBottom: 20,
  },
});

export default styles;