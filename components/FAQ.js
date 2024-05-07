import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FAQ = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.faq}
      locations={[0, 1]}
      colors={["#02b1cd", "#06090b"]}
    >
      <View style={styles.component5}>
        <View style={[styles.component5Child, styles.iconLayout1]} />
        <Image
          style={[styles.akarIconsarrowRight, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/akariconsarrowright.png")}
        />
        <Text style={[styles.faq1, styles.faq1FlexBox]}>FAQ</Text>
        <Pressable
          style={[styles.akarIconsarrowRight1, styles.akarPosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/akariconsarrowright2.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.howDoWeContainer, styles.faq1FlexBox]}>
        <Text style={styles.howDoWe}>{`“How do we use the app?”
`}</Text>
        <Text
          style={styles.ifYouDo}
        >{`If you do not have an account, you need to register first on the login page. Just tap the text at the bottom part of the login page and fill out the information field required. If you do have an account just input your credentials and you’ll be granted access to the account and be directed to the home page. There is a sidebar to navigate through the application.
`}</Text>
        <Text
          style={styles.howDoWe}
        >{`“Ok I’ve created an account and logged in, how do I check the functionality of the app?
`}</Text>
        <Text
          style={styles.ifYouDo}
        >{`Nice! You finally logged in. To check the functionality of the application just tap on where you want to go. If you want to go to the symptoms just tap it the same with the sterilization, you’ll be directed to the page of what you tap in the homepage.
`}</Text>
        <Text
          style={styles.howDoWe}
        >{`“I got into the symptoms page. What to do in here?”
`}</Text>
        <Text
          style={styles.ifYouDo}
        >{`The symptoms page is where you check your poultry on what kind of disease they have according to the symptoms they show, this may vary every symptom. The page can be scrolled horizontally to view different kinds of symptoms and what kind of disease it is associated with.
`}</Text>
        <Text
          style={styles.iWantTo}
        >{`“I want to know more about the diseases and symptoms, where do I go?”
`}</Text>
        <Text style={styles.ifYouDo}>
          To know more about the symptoms and diseases, just tap the symptoms
          name with underline below the image and you will be redirected to the
          pages about the symptoms and diseases along with specific links
          regarding it.
        </Text>
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  faq1FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  akarPosition: {
    left: "7.24%",
    right: "85.02%",
    width: "7.73%",
    position: "absolute",
  },
  component5Child: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(5, 5, 5, 0.05)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  akarIconsarrowRight: {
    height: "27.83%",
    top: "59.13%",
    bottom: "13.04%",
    display: "none",
    left: "7.24%",
    right: "85.02%",
    width: "7.73%",
    position: "absolute",
  },
  faq1: {
    width: "11.68%",
    top: "60.87%",
    left: "44.16%",
    fontSize: FontSize.specialTextBig_size,
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: FontFamily.typographyLevel,
    color: Color.colorGainsboro_100,
    display: "flex",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  akarIconsarrowRight1: {
    top: "61.13%",
    bottom: "10.09%",
    height: "28.78%",
  },
  component5: {
    top: 0,
    left: 0,
    width: 428,
    height: 115,
    position: "absolute",
  },
  howDoWe: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
  },
  ifYouDo: {
    fontFamily: FontFamily.interRegular,
  },
  iWantTo: {
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
  },
  howDoWeContainer: {
    top: 163,
    left: 15,
    fontSize: 16,
    color: Color.colorWhite1,
    width: 398,
    height: 677,
  },
  faq: {
    flex: 1,
    height: 926,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default FAQ;
