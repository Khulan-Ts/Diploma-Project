import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CardButton from "./src/components/cardButtons";

export default function App() {
  return (
    <View style={styles.container}>
      <CardButton image={require("./assets/image.png")} text={'Computer Science'}></CardButton>
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