import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import HoverCard from "./hoverCard";

export default function MapComponent() {
  const [activeCard, setActiveCard] = React.useState(null);

  const showCardHandler = (cardId) => {
    setActiveCard(cardId);
  };

  const hideCardHandler = () => {
    setActiveCard(null);
  };

  return (
    <View >
      <Image
        source={require("../../assets/images/map.png")}
        style={styles.image}
      />

      <Pressable
        onHoverIn={() => showCardHandler(1)}
        onHoverOut={hideCardHandler}
        style={styles.overlay1}
      >
        {activeCard === 1 && (
          <View style={styles.sport}>
            <HoverCard
              image={require("../../assets/images/sports.png")}
              type={"Sport"}
              title={"Sport Complex"}
              button={"For More Information"}
            >
              The sports complex is a three-floor building currently featuring
              a large indoor sports hall and cross-fit style gym.
              <br />
              <br />
              <br />
              <br />
              Schedule: Monday 4:00 - 6:00 pm
              <br />
              Wednesday 4:00 - 6:00 pm
              <br />
              Friday 4:00 - 6:00 pm
              <br />
            </HoverCard>
          </View>
        )}
      </Pressable>

      <Pressable
        onHoverIn={() => showCardHandler(2)}
        onHoverOut={hideCardHandler}
        style={styles.overlay2}
      >
        {activeCard === 2 && (
          <View style={styles.dorm}>
            <HoverCard
              image={require("../../assets/images/dorm.png")}
              type={"Primary"}
              title={"Dorm"}
              button={"For More Information"}
              button2={"Dormitory Fee"}
            >
              The MIU Global Residence is a seven-floor building that houses
              both male and female students from all over the world. The first
              four floors are dedicated to students and the 5th to 7th floors
              are occupied by faculty and staff members. MIU Global Residence
              a unique residence hall that offers affordable, newly furnished,
              safe, and convenient living quarters for students. 
            </HoverCard>
          </View>
        )}
      </Pressable>

      <Pressable
        onHoverIn={() => showCardHandler(3)}
        onHoverOut={hideCardHandler}
        style={styles.overlay3}
      >
        {activeCard === 3 && (
          <View style={styles.mbld}>
            <HoverCard
              image={require("../../assets/images/M-bld.png")}
              type={"Secondary"}
              title={"M Building"}
              button={"For More Information"}
            >
              Student affairs - Academic - Admission - Finance - President`s office
              <br/><br/><br/><br/><br/>
              M building texts, LEI, offices
            </HoverCard>
          </View>
        )}
      </Pressable>

      <Pressable
        onHoverIn={() => showCardHandler(4)}
        onHoverOut={hideCardHandler}
        style={styles.overlay4}
      >
        {activeCard === 4 && (
          <View style={styles.dbld}>
            <HoverCard
            image={require("../../assets/images/D-bld.png")}
            type={'Secondary'}
            title={"D building"}
            button={"For More Information"}>
            The MIU Global Residence is a seven-floor building that houses both 
            male and female students from all over the world. The first four 
            floors are dedicated to students and the 5th to 7th floors are 
            occupied by faculty and staff members. MIU Global Residence a unique 
            residence hall that offers affordable, newly furnished, safe, and convenient 
            living quarters for students.
          </HoverCard>
          </View>
        )}
      </Pressable>
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
  image: {
    width: "100%",
    height: 821,
  },
  overlay1: {
    //borderWidth: 1,
    width: 241,
    height: 214,
    borderRadius: 10,
    position: "absolute",
    marginLeft: 265,
    marginTop: 45,
  },
  overlay2: {
    //borderWidth: 1,
    width: 248,
    height: 191,
    borderRadius: 10,
    position: "absolute",
    marginLeft: 555,
    marginTop: 5,
  },
  overlay3: {
    //borderWidth: 1,
    width: 146,
    height: 181,
    borderRadius: 10,
    position: "absolute",
    marginLeft: 838,
    marginTop: 124,
  },
  overlay4: {
    //borderWidth: 1,
    width: 183,
    height: 389,
    borderRadius: 10,
    position: "absolute",
    marginLeft: 1029,
    marginTop: 182,
  },
  sport: {
    top: "100%",
    marginTop: 5,
    marginLeft: -35,
  },
  dorm: {
    top: "100%",
    marginTop: -5,
  },
  mbld:{
    top: "100%",
    marginTop: 5,
    marginLeft: -368
  },
  dbld:{
    right: "100%",
    marginTop: 95,
    marginLeft: -720
  }
});
