import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const MainTab = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={[styles.container, { paddingTop: insets.top + 20 }]}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <LinearGradient colors={["#3B82F6", "#1E40AF"]} style={styles.header}>
          <Text style={styles.headerText}>SimilarSense</Text>
        </LinearGradient>

        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
          Find out if your queries convey the same meaning.
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter first query..."
            placeholderTextColor="#9CA3AF"
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="Enter second query..."
            placeholderTextColor="#9CA3AF"
            multiline
          />
        </View>

        <TouchableOpacity style={styles.buttonShadow}>
          <LinearGradient colors={["#2563EB", "#1D4ED8"]} style={styles.button}>
            <Text style={styles.buttonText}>Check Similarity</Text>
          </LinearGradient>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E293B", // Dark blue background
    paddingHorizontal: 20,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#D1D5DB",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#374151", // Slightly lighter dark background
    color: "#E5E7EB",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 10,
  },
  buttonShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 10,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MainTab;
