import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Component from "./Component";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ATAXIA = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ataxia}>
      <Component
        onAkarIconsarrowRightPress={() => navigation.navigate("Symptoms")}
        onHomePagePress={() => navigation.navigate("Home")}
      />
      <View style={styles.ataxiaInner}>
        <LinearGradient
          style={[styles.frameChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#ccd4dd", "#3656f3"]}
        />
      </View>
      <View style={styles.ataxia1}>
        <LinearGradient
          style={[styles.ataxiaChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#20252d", "#015967"]}
        />
        <Text style={[styles.ataxia2, styles.ataxia2Typo]}>ATAXIA</Text>
        <View style={[styles.ataxiaWrapper, styles.ataxiaLayout]}>
          <View style={[styles.ataxia3, styles.ataxiaPosition]}>
            <LinearGradient
              style={[styles.ataxia4, styles.ataxiaPosition]}
              locations={[0, 1]}
              colors={["#20252d", "#015967"]}
            />
            <View
              style={[
                styles.mareksDiseaseIsAHighlyCoParent,
                styles.parentLayout,
              ]}
            >
              <Text
                style={[styles.mareksDiseaseIs, styles.mareksDiseaseIsTypo]}
              >
                Marek's disease is a highly contagious viral infection that
                affects poultry worldwide, characterized by the development of
                T-cell lymphomas and the enlargement of peripheral nerves. This
                disease is one of the most ubiquitous avian infections, with
                virtually every chicken flock presumed to be infected, except
                for those maintained under strict pathogen-free conditions.
                While clinical manifestations of the disease are not always
                apparent, subclinical effects such as decreased growth rates and
                reduced egg production can have significant economic
                implications for poultry operations. When clinical signs do
                occur, leg paralysis is a common presenting symptom. The
                diagnosis of Marek's disease relies on a combination of factors,
                including the animal's history, clinical signs, gross necropsy
                findings, and histopathological examination. Although no
                treatment is currently available for this disease, highly
                protective vaccines play a crucial role in disease management
                and prevention. Despite the widespread prevalence of Marek's
                disease in poultry populations, effective vaccination strategies
                have been instrumental in mitigating the impact of this
                economically important viral infection on the poultry industry.
              </Text>
              <Text style={[styles.mareksDisease, styles.ataxiaPosition]}>
                MAREKS DISEASE
              </Text>
              <Text style={[styles.clickHereFor, styles.clickTypo]}>
                CLICK HERE FOR MORE INFORMATION
              </Text>
              <Image
                style={[styles.mareks2Icon, styles.parentLayout]}
                contentFit="cover"
                source={require("../assets/mareks-2.png")}
              />
            </View>
            <View
              style={[styles.avianEncephalomyelitisParent, styles.parentLayout]}
            >
              <Text
                style={[styles.avianEncephalomyelitis, styles.ataxiaPosition]}
              >{`AVIAN
ENCEPHALOMYELITIS`}</Text>
              <Text
                style={[
                  styles.avianEncephalomyelitisIs,
                  styles.mareksDiseaseIsTypo,
                ]}
              >
                Avian encephalomyelitis is a viral infection that targets the
                central nervous system (CNS) in various bird species.
                Characterized by a range of symptoms including tremors, ataxia,
                and weakness, the disease can progress to paralysis over time.
                The primary clinical manifestations of avian encephalomyelitis
                often involve ataxia and varying degrees of leg weakness, which
                can range from sitting on hocks to partial paralysis and
                eventual recumbency.
              </Text>
              <Text style={[styles.clickHereFor1, styles.clickTypo]}>
                CLICK HERE FOR MORE INFORMATION
              </Text>
              <Image
                style={styles.encep1Icon}
                contentFit="cover"
                source={require("../assets/encep-1.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: "transparent",
    position: "absolute",
    width: "100%",
  },
  ataxia2Typo: {
    textAlign: "center",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.rowdiesBold,
    fontWeight: "700",
    lineHeight: 30,
  },
  ataxiaLayout: {
    height: 1775,
    width: 460,
    left: 0,
  },
  ataxiaPosition: {
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    width: 426,
    position: "absolute",
  },
  mareksDiseaseIsTypo: {
    width: 405,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
    left: 10,
    color: Color.colorGainsboro_100,
    lineHeight: 30,
    position: "absolute",
  },
  clickTypo: {
    color: Color.colorRoyalblue,
    textDecoration: "underline",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
    lineHeight: 30,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_10xl,
    backgroundColor: "transparent",
  },
  ataxiaInner: {
    height: "0.59%",
    width: "27.2%",
    top: "98.16%",
    right: "36.36%",
    bottom: "1.24%",
    left: "36.45%",
    position: "absolute",
  },
  ataxiaChild: {
    backgroundColor: "transparent",
  },
  ataxia2: {
    top: 33,
    left: 146,
    fontSize: FontSize.size_21xl,
    textAlign: "center",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.rowdiesBold,
    fontWeight: "700",
    lineHeight: 30,
    position: "absolute",
  },
  ataxia4: {
    height: 1775,
    width: 460,
    left: 0,
    backgroundColor: "transparent",
  },
  mareksDiseaseIs: {
    top: 39,
  },
  mareksDisease: {
    left: 18,
    textAlign: "center",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.rowdiesBold,
    fontWeight: "700",
    lineHeight: 30,
    fontSize: FontSize.size_21xl,
  },
  clickHereFor: {
    top: 954,
    left: 68,
    width: 290,
  },
  mareks2Icon: {
    top: 773,
    height: 177,
    left: 0,
  },
  mareksDiseaseIsAHighlyCoParent: {
    top: 766,
    height: 984,
    left: 17,
    width: 426,
  },
  avianEncephalomyelitis: {
    fontSize: FontSize.size_17xl,
    left: 0,
    textAlign: "center",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.rowdiesBold,
    fontWeight: "700",
    lineHeight: 30,
  },
  avianEncephalomyelitisIs: {
    top: 69,
    height: 270,
  },
  clickHereFor1: {
    top: 644,
    left: 67,
    width: 292,
    height: 30,
  },
  encep1Icon: {
    top: 345,
    left: 42,
    width: 341,
    height: 292,
    position: "absolute",
  },
  avianEncephalomyelitisParent: {
    top: 42,
    height: 674,
    left: 17,
    width: 426,
  },
  ataxia3: {
    height: 1775,
    width: 460,
    left: 0,
  },
  ataxiaWrapper: {
    top: 77,
    position: "absolute",
  },
  ataxia1: {
    height: "92.87%",
    width: "107.48%",
    top: "12.85%",
    right: "-3.74%",
    bottom: "-5.72%",
    left: "-3.74%",
    position: "absolute",
  },
  ataxia: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    height: 926,
    width: "100%",
  },
});

export default ATAXIA;
