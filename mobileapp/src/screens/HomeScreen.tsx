import React, { useState } from "react";
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  StyleSheet, 
  StatusBar  , 
  TouchableOpacity
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import type {Post} from "../Types"
import data from "../DummyData"
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
const [posts , setposts] = useState(data.posts)

const renderItem = ({ item }: { item: Post }) => (
  <TouchableOpacity
          style={styles.card}
  > <View style={styles.userInfo}>
      <View style={styles.avatar} />
      <View style={styles.userText}>
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Text style={styles.timeAgo}>{item.timeAgo}</Text>
    </View>
    <Text style={styles.title}>{item.title}</Text>
<Image
  source={{ uri: item.imageUrl }}
/>    <View style={styles.engagement}>
      <View style={styles.engagementItem}>
        <Ionicons name="heart-outline" size={20} color="#666" />
        <Text style={styles.engagementText}>{item.likes}</Text>
      </View>
      <View style={styles.engagementItem}>
        <Ionicons name="chatbubble-outline" size={20} color="#666" />
        <Text style={styles.engagementText}>{item.comments}</Text>
      </View>
    </View>
  </TouchableOpacity>
);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feed</Text>
        <View style={styles.placeholder} />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginLeft : 180
  },
  placeholder: {
    width: 24,
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    marginRight: 12,
  },
  userText: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 2,
  },
  userHandle: {
    fontSize: 14,
    color: "#666",
  },
  timeAgo: {
    fontSize: 12,
    color: "#999",
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
    lineHeight: 22,
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  engagement: {
    flexDirection: "row",
    alignItems: "center",
  },
  engagementItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  engagementText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 6,
  },
});