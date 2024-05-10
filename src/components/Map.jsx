import React from "react";
import { StyleSheet, View, Image, Pressable, Dimensions } from "react-native";
import HoverCard from "./hoverCard";

const MapComponent = ({
    navigate
}) => {
  const [activeCard, setActiveCard] = React.useState(null);

  const showCardHandler = (cardId) => {
    setActiveCard(cardId);
  };

  const hideCardHandler = () => {
      setActiveCard(null);
    
  };
  const windowWidth = Dimensions.get("window").width;

  return (
      <View style={[styles.imageContainer, {width: windowWidth, height: windowWidth* 0.56}]}>
        <Image
          source={require("../../assets/images/map.png")}
          style={[styles.image, {height: windowWidth * 0.56}]}
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
                bottomText={'Schedule: \nMonday 4:00 - 6:00 pm \nWednesday 4:00 - 6:00 pm\nFriday 4:00 - 6:00 pm'}
              >
                The sports complex is a three-floor building currently featuring a large indoor sports hall and cross-fit style gym.
                {"\n"}
                {"\n"}
                The cross-fit style gym has full equipment and tools for people who want to spend their time useful.
                {"\n"}
                {"\n"}
                To make a reservation at sport hall:
                {"\n"}+976 99223366
                {"\n"}
                To get price information on cross gym:
                {"\n"}
                +976 99223366
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
                onPress1={navigate}
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
              >
                Student affairs - Academic - Admission - Finance - President`s office
                {"\n\n\n"}
                This building is office building where students and applicants can get information 
                about school or their studies.
                {"\n\n\n"}
                One fact: MIU has Counseling Center 
                {"\n"}
                which is mental health service. 
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
              >
              Main Hall - Cafeteria - Library - Coffee Shop - GilGal
              {"\n\n\n"}
              This is where students spend most of their time and make their 
              university life with memories and friends
              {"\n\n\n"}
              One fact: MIU Cafeteria has international dishes 
              {"\n"}
              that you can have for your lunch time. 
            </HoverCard>
            </View>
          )}
        </Pressable>
      </View>
  );
}

export default MapComponent

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
    //borderWidth: 1
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
    transform: [{ translateX: '-25%' }],
  },
  dorm: {
    top: "100%",
    transform: [{ translateX: '-25%' }],
  },
  mbld:{
    top: "100%",
    transform: [{ translateX: '-250%' }],
  },
  dbld:{
    right: "100%",
    top: '50%',
    transform: [{ translateX: '-280%' }],
  }
});
