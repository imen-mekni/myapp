import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import * as ImagePicker from "expo-image-picker";
import { createPost } from "../services/postService";
export default function AddPostScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const openandchooseimage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    console.log(result, "result of picking image");

    if (result.assets.length > 0) setImage(result.assets[0].uri);
  };
  const removeImage = () => {
    setImage(null);
  };
  const sendblog = async () => {
    try {
      const formData = new FormData();
      const filename = image.split("/").pop();
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : "image/jpeg";

      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", {
        uri: image,
        name: filename,
        type: type,
      });
      console.log(formData.get("image"));

      const res = await createPost(formData);
      console.log(res);

      if (res) {
        console.log("c bien enregistré");
        Toast.show({
          text1: "blog is sent",
          visibilityTime: 2000,
          position: "top",
        });
        setContent("");
        setTitle("");
        setImage("");
      } else {
        Toast.show({
          text1: "error",
          text2: "error uploading the blog",
          visibilityTime: 2000,
          position: "top",
        });
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Create New Post</Text>
          <Text style={styles.headerSubtitle}>
            Share your story with the world
          </Text>
        </View>
        <View style={styles.imageSection}>
          <Text style={styles.sectionLabel}>Featured Image</Text>
          {image ? (
            <View>
              <Image source={{ uri: image }} style={styles.imagePreview} />
              <TouchableOpacity
                style={styles.removeImageButton}
                onPress={removeImage}
              >
                <Ionicons name="close-circle" size={24} color="#ff4444" />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.imageUploadArea}>
              <Ionicons name="image-outline" size={48} color="#666" />
              <Text style={styles.uploadText}>Add a featured image</Text>
              <Text style={styles.uploadSubtext}>Recommended: 16:9 ratio</Text>

              <View style={styles.uploadButtons}>
                <TouchableOpacity
                  style={styles.uploadButton}
                  onPress={openandchooseimage}
                >
                  <Ionicons
                    name="folder-open-outline"
                    size={20}
                    color="#0f0f10ff"
                  />
                  <Text style={styles.uploadButtonText}>
                    Choose from Library
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.uploadButton}>
                  <Ionicons name="camera-outline" size={20} color="#090a0bff" />
                  <Text style={styles.uploadButtonText}>Take Photo</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        <View style={styles.inputSection}>
          <Text style={styles.sectionLabel}>Title</Text>
          <TextInput
            placeholder="Enter a captivating title..."
            placeholderTextColor="#999"
            style={styles.titleInput}
            value={title}
            onChangeText={setTitle}
            maxLength={100}
          />
          <Text style={styles.charCount}>{title.length}/100</Text>
        </View>
        <View style={styles.inputSection}>
          <Text style={styles.sectionLabel}>Description</Text>
          <TextInput
            placeholder="Tell your story... (Minimum 50 characters)"
            placeholderTextColor="#999"
            style={styles.descriptionInput}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
            value={content}
            onChangeText={setContent}
            maxLength={1000}
          />
          <Text style={styles.charCount}>{content.length}/1000</Text>
        </View>
        <TouchableOpacity style={[styles.saveButton]} onPress={sendblog}>
          <Ionicons name="cloud-upload-outline" size={24} color="#fff" />
          <Text style={styles.saveButtonText}>Publish Post</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  imageSection: {
    marginBottom: 30,
  },
  inputSection: {
    marginBottom: 25,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 12,
  },
  imageUploadArea: {
    borderWidth: 2,
    borderColor: "#e1e5e9",
    borderStyle: "dashed",
    borderRadius: 16,
    padding: 40,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  uploadText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
    marginTop: 16,
    marginBottom: 4,
  },
  uploadSubtext: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  uploadButtons: {
    flexDirection: "row",
    gap: 12,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#007AFF",
    gap: 8,
  },
  uploadButtonText: {
    color: "#007AFF",
    fontWeight: "600",
    fontSize: 14,
  },
  imagePreviewContainer: {
    position: "relative",
    borderRadius: 16,
    overflow: "hidden",
  },
  imagePreview: {
    width: "100%",
    height: 200,
    borderRadius: 16,
  },
  removeImageButton: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 12,
    padding: 4,
  },
  titleInput: {
    borderWidth: 2,
    borderColor: "#e1e5e9",
    borderRadius: 12,
    padding: 16,
    fontSize: 18,
    fontWeight: "500",
    color: "#1a1a1a",
    backgroundColor: "#f8f9fa",
  },
  descriptionInput: {
    borderWidth: 2,
    borderColor: "#e1e5e9",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: "#1a1a1a",
    backgroundColor: "#f8f9fa",
    minHeight: 150,
  },
  charCount: {
    fontSize: 12,
    color: "#999",
    textAlign: "right",
    marginTop: 8,
  },
  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007AFF",
    paddingVertical: 18,
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 40,
    gap: 12,
    shadowColor: "#007AFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  saveButtonDisabled: {
    backgroundColor: "#ccc",
    shadowColor: "transparent",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
