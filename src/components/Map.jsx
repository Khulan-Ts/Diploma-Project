import React from "react";
import { StyleSheet, View, Image, Pressable, Dimensions } from "react-native";
import HoverCard from "./hoverCard";
import data from "../../static.json";
import en from "../../staticEN.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";

const MapComponent = ({
    navigate,
    language
}) => {
  const [activeCard, setActiveCard] = React.useState(null);
  const mapImg = data.mapImg
  let content;
  switch (language){
    case 'mn':
      content = mn.map;
      break;
    case 'ru':
      content = ru.map;
      break;
    case 'en':
      content = en.map;
      break;
  }

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
          source={require("../../assets/images/map/map.png")}
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
                image={{uri: mapImg.sportImg}}
                type={"Sport"}
                title={content.hoverCardTitle1}
                bottomText={content.hoverCardbottomText}
              >
                {content.hoverCardContent1}
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
                image={{uri: mapImg.dormImg}}
                type={"Primary"}
                title={content.hoverCardTitle2}
                button={content.hoverCardButton}
                onPress1={navigate}
              >
                {content.hoverCardContent2}
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
                image={{uri: mapImg.MbldImg}}
                type={"Secondary"}
                title={content.hoverCardTitle3}
              >
                {content.hoverCardContent3}
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
              image={{uri: mapImg.DbldImg}}
              type={'Secondary'}
              title={content.hoverCardTitle4}
              >
              {content.hoverCardContent4}
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
