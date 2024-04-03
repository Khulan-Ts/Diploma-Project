import React from "react";
import { StyleSheet, View, Image, Pressable, Dimensions } from "react-native";
import HoverCard from "./hoverCard";

export default function MapComponent() {
  const [activeCard, setActiveCard] = React.useState(null);

  const showCardHandler = (cardId) => {
    setActiveCard(cardId);
  };

  const hideCardHandler = () => {
      setActiveCard(null);
    
  };
  const windowWidth = Dimensions.get("window").width;
  const imageHeight = (600 / 1075) * windowWidth;

  return (
      <View style={[styles.imageContainer, {width: windowWidth, height: imageHeight}]}>
        <Image
          source={require("../../assets/images/map.png")}
          style={[styles.image, {height: imageHeight}]}
          resizeMode="contain"
        />

        <Pressable
          style={[styles.overlay, styles.overlay1]}
          onMouseEnter={() => showCardHandler(1)}
          onMouseLeave={hideCardHandler}
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
                {"\n \n \n \n"}
                Schedule: Monday 4:00 - 6:00 pm
                {"\n                     "}
                Wednesday 4:00 - 6:00 pm
                {"\n                     "}
                Friday 4:00 - 6:00 pm
                {"\n                     "}
              </HoverCard>
            </View>
          )}
        </Pressable>

        <Pressable
          style={[styles.overlay, styles.overlay2]}
          onMouseEnter={() => showCardHandler(2)}
          onMouseLeave={hideCardHandler}
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
          style={[styles.overlay, styles.overlay3]}
          onMouseEnter={() => showCardHandler(3)}
          onMouseLeave={hideCardHandler}
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
                {"\n\n\n\n\n"}
                M building texts, LEI, offices
              </HoverCard>
            </View>
          )}
        </Pressable>

        <Pressable
          style={[styles.overlay, styles.overlay4]}
          onMouseEnter={() => showCardHandler(4)}
          onMouseLeave={hideCardHandler}
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
  imageContainer:{
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: '100%',
  },
  overlay: {
    position: "absolute",
    borderRadius: 10,
    borderWidth: 1
  },
  overlay1: {
    width: '15%',
    height: '25%',
    top: '7%',
    left: '20%'
  },
  overlay2: {
    width: '20%',
    height: '30%',
    top: '2%',
    right: '38%'
    
  },
  overlay3: {
    width: '13%',
    height: '25%',
    top: '20%',
    right: '23%'
  },
  overlay4: {
    width: '15%',
    height: '35%',
    top: '30%',
    right: '5%',
  },
  sport: {
    top: "100%",
    marginLeft: -35,
  },
  dorm: {
    top: "100%",
    marginTop: -5,
  },
  mbld:{
    top: "100%",
    marginLeft: -368
  },
  dbld:{
    right: "100%",
    marginTop: 90,
    marginLeft: -690
  }
});
