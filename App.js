import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HoverCard from "./src/components/hoverCard";

export default function App() {
  return (
    <View style={styles.container}>
      <HoverCard image={require("./assets/D-bld.png")} image2={require("./assets/cs.png")} title={"D building"} button={"For More Information"} button2={"Dormitory Fee"}>
        The MIU Global Residence is a seven-floor building that houses both 
        male and female students from all over the world. The first four 
        floors are dedicated to students and the 5th to 7th floors are 
        occupied by faculty and staff members. MIU Global Residence a unique 
        residence hall that offers affordable, newly furnished, safe, and convenient 
        living quarters for students.
        </HoverCard>
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