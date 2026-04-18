import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "All Posts" }} />
      <Stack.Screen name="postDetail" options={{ title: "Post Detail" }} />
      <Stack.Screen name="addPost" options={{ title: "Add New Post" }} />
    </Stack>
  );
}