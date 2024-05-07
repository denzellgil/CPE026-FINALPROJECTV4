import React, { useState, useCallback, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import SideBar from "./SideBar";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Home = memo(() => {
  const navigation = useNavigation();
  const [alignLeftIconVisible, setAlignLeftIconVisible] = useState(false);

  const openAlignLeftIcon = useCallback(() => {
    setAlignLeftIconVisible(true);
  }, []);

  const closeAlignLeftIcon = useCallback(() => {
    setAlignLeftIconVisible(false);
  }, []);

  return (
    <>
      <LinearGradient
        style={styles.home}
        locations={[0, 1]}
        colors={["#20252d", "#015967"]}
      >
        <Image
          style={styles.homeChild}
          contentFit="cover"
          source={require("../assets/frame-18266.png")}
        />
        <View style={[styles.facilities, styles.facilitiesLayout]}>
          <View style={styles.groupPosition}>
            <View style={styles.groupPosition}>
              <View style={styles.groupPosition}>
                <View style={styles.groupPosition}>
                  <View style={styles.groupPosition}>
                    <View style={styles.groupPosition}>
                      <LinearGradient
                        style={[styles.groupChild, styles.groupPosition]}
                        locations={[0, 1]}
                        colors={["#446063", "rgba(204, 212, 221, 0.5)"]}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <LinearGradient
              style={[styles.groupItem, styles.groupItemLayout]}
              locations={[0, 1]}
              colors={["#a50000", "#3656f3"]}
            />
            <View style={[styles.groupInner, styles.groupInnerLayout]} />
          </View>
          <Text style={[styles.sterilization, styles.symptomsTypo]}>
            Sterilization
          </Text>
        </View>
        <Pressable
          style={[styles.groupPressable, styles.facilitiesLayout]}
          onPress={() => navigation.navigate("Symptoms")}
        >
          <View style={[styles.groupParent1, styles.component4ShadowBox]}>
            <View style={styles.groupPosition}>
              <View style={styles.groupPosition}>
                <View style={styles.groupPosition}>
                  <View style={styles.groupPosition}>
                    <View style={styles.groupPosition}>
                      <LinearGradient
                        style={[styles.groupChild, styles.groupPosition]}
                        locations={[0, 1]}
                        colors={["#446063", "rgba(204, 212, 221, 0.5)"]}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.rectangleIcon, styles.rectangleIconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-859.png")}
            />
            <View style={[styles.rectangleView, styles.groupInnerLayout]} />
          </View>
          <Text style={[styles.symptoms, styles.symptomsTypo]}>Symptoms</Text>
        </Pressable>
        <View style={[styles.component4, styles.component4Position]}>
          <LinearGradient
            style={[styles.component4Child, styles.component4ShadowBox]}
            locations={[0, 1]}
            colors={["#20252d", "#015967"]}
          />
          <Image
            style={[styles.akarIconsarrowRight, styles.rectangleIconLayout]}
            contentFit="cover"
            source={require("../assets/akariconsarrowright.png")}
          />
          <Text style={[styles.home1, styles.home1Position]}>Home</Text>
          <Image
            style={[styles.healthcareCovid19Coronavirus, styles.home1Position]}
            contentFit="cover"
            source={require("../assets/healthcare-covid19-coronavirus-hand-hearth.png")}
          />
        </View>
        <Pressable style={styles.alignLeft} onPress={openAlignLeftIcon}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/alignleft.png")}
          />
        </Pressable>
        <Image
          style={[styles.homeItem, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/group-18408.png")}
        />
        <Image
          style={[styles.homeInner, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/group-18408.png")}
        />
        <Image
          style={[styles.image1Icon, styles.component4Position]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={[styles.arrowIcon, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-7.png")}
        />
        <Image
          style={[styles.homeChild1, styles.homeChildPosition]}
          contentFit="cover"
          source={require("../assets/arrow-7.png")}
        />
        <Image
          style={[styles.homeChild2, styles.homeChildPosition]}
          contentFit="cover"
          source={require("../assets/arrow-9.png")}
        />
        <Image
          style={[styles.cleanHandsIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/clean-hands.png")}
        />
        <Image
          style={[styles.searchIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </LinearGradient>

      <Modal animationType="fade" transparent visible={alignLeftIconVisible}>
        <View style={styles.alignLeftIconOverlay}>
          <Pressable
            style={styles.alignLeftIconBg}
            onPress={closeAlignLeftIcon}
          />
          <SideBar onClose={closeAlignLeftIcon} />
        </View>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  facilitiesLayout: {
    width: "43.62%",
    height: "21.21%",
    position: "absolute",
  },
  groupPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  groupItemLayout: {
    borderRadius: Border.br_8xs,
    left: "9.53%",
    right: "9.64%",
    width: "80.82%",
    height: "2.04%",
    position: "absolute",
  },
  groupInnerLayout: {
    backgroundColor: Color.colorWhite1,
    borderRadius: Border.br_11xs,
    bottom: "7.28%",
    top: "91.5%",
    width: "43.76%",
    height: "1.22%",
    position: "absolute",
  },
  symptomsTypo: {
    textAlign: "center",
    lineHeight: 25,
    fontSize: FontSize.typographyLevel_size,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.typographyLevel,
    fontWeight: "500",
    position: "absolute",
  },
  component4ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  rectangleIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  component4Position: {
    left: 0,
    position: "absolute",
    width: 428,
  },
  home1Position: {
    top: "60.87%",
    position: "absolute",
  },
  homeLayout: {
    height: 70,
    width: 71,
    position: "absolute",
  },
  arrowIconLayout: {
    width: 291,
    maxHeight: "100%",
  },
  homeChildPosition: {
    top: 463,
    left: 428,
    position: "absolute",
  },
  iconLayout: {
    height: 55,
    width: 45,
    position: "absolute",
  },
  homeChild: {
    marginTop: 369,
    marginLeft: -214,
    left: "50%",
    width: 94,
    height: 428,
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_7xl,
    borderStyle: "solid",
    borderColor: Color.colorWhite1,
    borderWidth: 2,
    backgroundColor: "transparent",
  },
  groupItem: {
    top: "91.09%",
    bottom: "6.87%",
    backgroundColor: "transparent",
  },
  groupInner: {
    right: "46.17%",
    left: "10.07%",
  },
  sterilization: {
    top: 114,
    left: 13,
    width: 157,
    height: 27,
  },
  facilities: {
    top: "50.1%",
    right: "4.02%",
    bottom: "28.69%",
    left: "52.36%",
  },
  rectangleIcon: {
    top: "91.14%",
    bottom: "6.82%",
    borderRadius: Border.br_8xs,
    left: "9.53%",
    right: "9.64%",
    width: "80.82%",
    height: "2.04%",
    position: "absolute",
  },
  rectangleView: {
    right: "46.12%",
    left: "10.12%",
  },
  groupParent1: {
    shadowColor: "rgba(115, 122, 148, 0.15)",
    elevation: 60,
    shadowRadius: 60,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  symptoms: {
    top: 110,
    left: 44,
  },
  groupPressable: {
    right: "52.41%",
    bottom: "28.79%",
    left: "3.97%",
    top: "50%",
  },
  component4Child: {
    shadowColor: "rgba(5, 5, 5, 0.05)",
    elevation: 60,
    shadowRadius: 60,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "transparent",
  },
  akarIconsarrowRight: {
    height: "27.83%",
    width: "7.73%",
    top: "59.13%",
    right: "85.02%",
    bottom: "13.04%",
    left: "7.24%",
    display: "none",
    position: "absolute",
  },
  home1: {
    width: "16.36%",
    left: "41.82%",
    fontSize: FontSize.specialTextBig_size,
    lineHeight: 30,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.typographyLevel,
    fontWeight: "500",
    top: "60.87%",
  },
  healthcareCovid19Coronavirus: {
    height: "26%",
    width: "7.2%",
    right: "7.55%",
    bottom: "13.13%",
    left: "85.26%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  component4: {
    top: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    height: 115,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 0,
  },
  alignLeftIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  alignLeftIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  alignLeft: {
    left: 29,
    top: 69,
    width: 32,
    height: 32,
    position: "absolute",
  },
  homeItem: {
    top: 486,
    left: 78,
  },
  homeInner: {
    top: 484,
    left: 280,
  },
  image1Icon: {
    top: 115,
    height: 210,
  },
  arrowIcon: {
    top: 464,
    left: 428,
    width: 291,
    position: "absolute",
  },
  homeChild1: {
    width: 291,
    maxHeight: "100%",
  },
  homeChild2: {
    width: 145,
    height: 1,
  },
  cleanHandsIcon: {
    top: 491,
    left: 295,
  },
  searchIcon: {
    top: 493,
    left: 91,
  },
  home: {
    height: 926,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: 428,
  },
});

export default Home;
