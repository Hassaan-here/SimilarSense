import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome"; // Importing the FontAwesome icon library

const MainTab = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [responseCount, setResponseCount] = useState(0); // State to track number of responses
  const insets = useSafeAreaInsets();

  useEffect(() => {
    // Set status bar to light content (dark icons) for visibility
    StatusBar.setBarStyle("dark-content");
    StatusBar.setBackgroundColor("#FFFFFF"); // White background for the status bar
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleCheckSimilarity = () => {
    // Increment the response count when checking similarity
    setResponseCount(responseCount + 1);
  };

  return (
    <ScrollView
      style={[styles.container, { paddingTop: insets.top }]}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View>
          {/* Profile Icon (positioned top-right) */}
          <TouchableOpacity
            onPress={toggleDropdown}
            style={styles.profileIconWrapper}
          >
            <View style={styles.profileIcon}>
              {/* FontAwesome profile icon */}
              <Icon name="user" size={20} color="#000000" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>SimilarSense</Text>
          {/* Text below the title */}
          <Text style={styles.subtitle}>Check similar queries</Text>
        </View>

        {/* Dropdown (for demonstration purposes, hidden initially) */}
        {isDropdownVisible && (
          <View style={styles.dropdown}>
            <Text style={styles.dropdownItem}>Username</Text>
            <TouchableOpacity>
              <Text style={styles.dropdownItem}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter first query..."
            placeholderTextColor="#B0B0B0"
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="Enter second query..."
            placeholderTextColor="#B0B0B0"
            multiline
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCheckSimilarity}>
          <Text style={styles.buttonText}>Check Similarity</Text>
        </TouchableOpacity>

        {/* Display the number of responses at the bottom */}
        <View style={styles.responseCountContainer}>
          <Text style={styles.responseCountText}>
            Number of responses: {responseCount}
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121", // Light shade of black for the main background
    paddingHorizontal: 20,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20, // Adjusted margin to ensure proper spacing
  },
  header: {
    width: "100%",
    height: 100,
    alignItems: "center",
    marginBottom: 30, // Space for profile icon above the title
  },
  profileIconWrapper: {
    position: "relative",
    right: -130,
    top: -120,
  },
  profileIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#FFFFFF", // White background for profile icon
    borderRadius: 20, // Round profile icon
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000000", // Black border for the icon
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#F1F1F1", // Light gray text for a classy look
  },
  subtitle: {
    fontSize: 18,
    color: "#B0B0B0", // Lighter gray text for the subtitle
    marginTop: 10, // Add space between the title and subtitle
  },
  dropdown: {
    position: "absolute",
    right: 20,
    top: 70,
    backgroundColor: "#333333", // Dark background for the dropdown
    borderRadius: 8,
    padding: 10,
    width: 150,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
  },
  dropdownItem: {
    color: "#FFFFFF",
    fontSize: 16,
    paddingVertical: 10,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#2C2C2C", // Softer dark gray background for input fields
    color: "#F1F1F1",
    borderColor: "#444444", // Slightly softer border for inputs
    borderWidth: 1,
    borderRadius: 8, // Rounded corners for input fields
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#F1F1F1", // Light gray button to contrast with the dark theme
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    borderRadius: 8, // Rounded corners for the button
    borderWidth: 1,
    borderColor: "#444444",
  },
  buttonText: {
    color: "#212121", // Dark gray text on the button
    fontSize: 18,
    fontWeight: "bold",
  },
  responseCountContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 30, // Add some space before the response count
  },
  responseCountText: {
    fontSize: 18,
    color: "#F1F1F1", // Light text for the response count
  },
});

export default MainTab;
