import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 16,
    paddingVertical: 15, // ⬅️ REDUCED (was too big)
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  text: {
    fontSize: 16,
    color: colors.background,
  },

  icon: {
    color: "gray",
  },

  separator: {
    backgroundColor: "gray",
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 15,
  },
});

export function RowItem({ rightIcon, text, onPress }) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
}

export function RowSeparator() {
  return <View style={styles.separator} />;
}
