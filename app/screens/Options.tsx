import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  row: {
    padding: 10,
  },

  text: {
    fontSize: 16,
    color: "blue",
  },

  separator: {
    backgroundColor: "gray",
    height: StyleSheet.hairlineWidth,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default function App() {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Theme</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Reacy Native Basics</Text>
      </TouchableOpacity>
      
      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native by Example</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
