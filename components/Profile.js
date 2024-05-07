import React, { memo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Profile = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View style={styles.component5}>
        <View style={[styles.component5Child, styles.component5Position]} />
        <Image
          style={[styles.akarIconsarrowRight, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/akariconsarrowright.png")}
        />
        <Text style={styles.profile1}>Profile</Text>
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
        <View style={[styles.component5Item, styles.component5Position]} />
      </View>
      <Image
        style={[styles.profileChild, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-184081.png")}
      />
      <Text style={[styles.asdQwReqw, styles.qweqweqwTypo]}>
        asd qw reqw rqwrqw
      </Text>
      <Text style={[styles.shanneFelias, styles.qweqweqwTypo]}>
        SHANNE FELIAS
      </Text>
      <Text style={[styles.qweqweqw, styles.qweqweqwTypo]}>qweqweqw</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  component5Position: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  akarPosition: {
    left: "7.24%",
    right: "85.02%",
    width: "7.73%",
    position: "absolute",
  },
  qweqweqwTypo: {
    color: Color.colorBlack,
    lineHeight: 32,
    fontSize: FontSize.typographyLevel1_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.typographyLevel,
    fontWeight: "500",
    position: "absolute",
  },
  component5Child: {
    top: "0%",
    bottom: "0%",
    shadowColor: "rgba(5, 5, 5, 0.05)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    backgroundColor: Color.colorGray_100,
    height: "100%",
    right: "0%",
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
  profile1: {
    width: "18.22%",
    top: "60%",
    left: "40.89%",
    fontSize: FontSize.specialTextBig_size,
    lineHeight: 30,
    color: Color.colorGainsboro_100,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.typographyLevel,
    fontWeight: "500",
    position: "absolute",
  },
  icon: {
    width: "100%",
    maxWidth: "100%",
    height: "100%",
  },
  akarIconsarrowRight1: {
    top: "61.13%",
    bottom: "10.09%",
    height: "28.78%",
  },
  component5Item: {
    height: "241.74%",
    top: "99.13%",
    bottom: "-240.87%",
    backgroundColor: Color.colorCadetblue,
  },
  component5: {
    top: 0,
    left: 0,
    height: 115,
    position: "absolute",
    width: 428,
  },
  profileChild: {
    height: "12.31%",
    width: "27.1%",
    top: "17.39%",
    right: "36.45%",
    bottom: "70.3%",
    left: "36.45%",
    position: "absolute",
  },
  asdQwReqw: {
    top: 448,
    left: 108,
    width: 281,
    height: 85,
  },
  shanneFelias: {
    top: 275,
    left: 136,
    width: 178,
    height: 107,
  },
  qweqweqw: {
    top: 579,
    left: 160,
    width: 129,
    height: 58,
  },
  profile: {
    backgroundColor: Color.colorDarkslategray,
    height: 926,
    overflow: "hidden",
    width: 428,
  },
});

export default Profile;
