import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CardButton from "./src/components/cardButtons";
import Title from "./src/components/Titles";

export default function App() {
  return (
    <View style={styles.container}>
        <Title type= 'Subtitle' text={'Undergraduate'} style={{color: '#62253E'}}></Title>
        <CardButton type={'Secondary'} image={require("./assets/image.png")} text={'Computer Science'}></CardButton>
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