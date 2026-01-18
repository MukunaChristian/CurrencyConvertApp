import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Alert, Linking, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RowItem, RowSeparator } from "../components/RowItem";
import { colors } from "../constants/colors";

const openUrl = (url) => {
  Linking.openURL(url).catch(() => {
    Alert.alert("sorry, something went wrong");
  });
};
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RowItem
          text="Theme"
          onPress={() => openUrl("hts://webmaxcodingacademy.co.za/")}
          rightIcon={
            <Entypo name="chevron-right" size={15} color={colors.icon} />
          }
        />

        <RowSeparator />
        <RowItem
          text={"Reacy Native Basics"}
          onPress={() => alert("chris hi")}
          rightIcon={<Entypo name="export" size={15} />}
        />

        <RowSeparator />

        <RowItem
          text={"React Native by Example"}
          onPress={() => alert("hi mukune")}
          rightIcon={<Entypo name="export" size={15} color={colors.icon} />}
        />
        <RowSeparator />

        <RowItem
          text={"React Native by Example"}
          onPress={() => alert("hi mukune")}
          rightIcon={<Entypo name="export" size={15} color={colors.icon} />}
        />
        <RowSeparator />

        <RowItem
          text={"React Native by Example"}
          onPress={() => alert("hi mukune")}
          rightIcon={<Entypo name="export" size={15} color={colors.icon} />}
        />
        <RowSeparator />
      </ScrollView>
    </SafeAreaView>
  );
}
