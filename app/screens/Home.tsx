import { Dimensions, Image, StatusBar, StyleSheet, View } from "react-native";
import { ConversionInput } from "../../components/ConversionInput";
import { colors } from "../../constants/colors";

const { width } = Dimensions.get("window");
const LOGO_SIZE = width * 0.6; // 60% of screen width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    resizeMode: "contain",
  },
});

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />

      <ConversionInput
      text="USD"
      value="123"
      onButtonPress={() => alert('hello chris')}
      onChangeText={(text) => console.log("text", text)}
      keyboardType="numeric"
      />



      <ConversionInput
      text="ZAR"
      value="123"
      onButtonPress={() => alert('hello chris')}/>
    </View>
  );
}
