import React from "react";
import { View, StyleSheet, Image, Pressable, useWindowDimensions } from "react-native";
import Button from "./Button";

const Header = ({ 
  type, 
  buttontext,
  logoOnPress,
  ButtonPress,
  onTranslatePress,
  language,
  style,
}) => {
  const { width, height } = useWindowDimensions();

  const containerStyle = [
    styles.container,
    {
      paddingLeft: width * 0.1,
      paddingRight: width * 0.1,
      paddingTop: width * 0.02,
      paddingBottom: width * 0.02,
      height: width * 0.08
    },
    style
  ];

  const getLanguageButtonImage = (lang) => {
    switch (lang) {
      case 'mn':
        return require("../../assets/icons/MN_flag.png");
      case 'ru':
        return require("../../assets/icons/RU_flag.png");
      case 'en':
      default:
        return require("../../assets/icons/EN_flag.png");
    }
  };

  const getAvailableLanguages = () => {
    switch (language) {
      case 'mn':
        return ['en', 'ru'];
      case 'ru':
        return ['en', 'mn'];
      case 'en':
      default:
        return ['mn', 'ru'];
    }
  };

  const [lang1, lang2] = getAvailableLanguages();

  return (
    <View style={containerStyle}>
      <Pressable onPress={logoOnPress}>
        <Image
          source={require("../../assets/images/logo-1.png")}
          style={{ width: width * 0.16, height: height * 0.1 }}
          resizeMode="contain"
        />
      </Pressable>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Button
          type={type}
          text={buttontext[0]}
          style={{ marginRight: width * 0.01, height: width * 0.036, borderRadius: 0 }}
          onPress={ButtonPress[0]}
        />
        <Button
          type={type}
          text={buttontext[1]}
          style={{ marginRight: width * 0.01, height: width * 0.036, borderRadius: 0 }}
          onPress={ButtonPress[1]}
        />
        <Button
          type={type}
          text={buttontext[2]}
          style={{ marginRight: width * 0.01, height: width * 0.036, borderRadius: 0 }}
          onPress={ButtonPress[2]}
        />
        <Button
          type={type}
          text={buttontext[3]}
          style={{ marginRight: width * 0.01, height: width * 0.036, borderRadius: 0 }}
          onPress={ButtonPress[3]}
        />
        
        <Button
          type={type}
          img={getLanguageButtonImage(lang1)}
          style={{ marginRight: width * 0.01, height: width * 0.036, borderRadius: 0 }}
          onPress={() => onTranslatePress(lang1)}
        />
        <Button
          type={type}
          img={getLanguageButtonImage(lang2)}
          style={{ height: width * 0.036, borderRadius: 0 }}
          onPress={() => onTranslatePress(lang2)}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3d2562',
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    width: "100%",
    justifyContent: "space-between",
  },
});
