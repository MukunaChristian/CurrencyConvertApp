import { colors } from "@/constants/colors";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginVertical: 12,
    marginHorizontal: 24,
    padding: 14,
    borderRadius: 14,

    flexDirection: "row",
    alignItems: "center",
    gap: 12,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  button: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  input: {
    flex: 1,
    height: 50,
    borderWidth: 1.5,
    borderColor: colors.separator,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 18,
    color: "#000000",
    backgroundColor: "#FFFFFF",
    textAlign: "right", // ✅ better for currency
  },
});

export const ConversionInput = ({ text, onButtonPress, ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onButtonPress}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="0.00"
        placeholderTextColor="#9CA3AF"
        keyboardType="decimal-pad"
        {...props}  
      />
    </View>
  );
};
