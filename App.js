import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import Header from "./src/components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        buttontext={["About", "Academics", "Admission", "Life at MIU", "LEI"]}
      ></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
