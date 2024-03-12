import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import Header from "./src/components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        type={"Primary"}
        buttontext={["about us", "academics", "admissions", "LEI"]}
      ></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
