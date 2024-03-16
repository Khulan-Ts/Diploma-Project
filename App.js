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
          style ={{backgroundColor: "#3d2562" }}
        />
        <Button type='Secondary' text="Undergraduate"></Button>
        <Button type='Secondary' text="Graduate"></Button>
        <Button type='Secondary' text="Exchange Student Program" numberOfLines={2}></Button>
        <Button type='Third' text="Sport Hall"></Button>
        <Button type='Fourth' text="Housing"></Button>
        <Button type='Fifth' text="For More Information"></Button>
        <Button type='Sixth' text="Dormitory Fee"></Button>
        <Button type='Apply' text="Application Fee"></Button>
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