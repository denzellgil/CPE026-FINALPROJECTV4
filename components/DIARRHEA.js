import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Component from "./Component";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DIARRHEA = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.diarrhea}>
      <Component
        onAkarIconsarrowRightPress={() => navigation.navigate("Symptoms")}
        onHomePagePress={() => navigation.navigate("Home")}
      />
      <View style={styles.diarrheaInner}>
        <LinearGradient
          style={[styles.frameChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#ccd4dd", "#3656f3"]}
        />
      </View>
      <View style={styles.diarrhea1}>
        <LinearGradient
          style={[styles.diarrheaChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#20252d", "#015967"]}
        />
        <Text style={[styles.diarrhea2, styles.diseaseTypo1]}>DIARRHEA</Text>
        <View style={[styles.diarrheaWrapper, styles.diarrheaLayout]}>
          <View style={[styles.diarrhea3, styles.diarrheaLayout]}>
            <LinearGradient
              style={[styles.diarrhea4, styles.diarrheaLayout]}
              locations={[0, 1]}
              colors={["#20252d", "#015967"]}
            />
            <View
              style={[styles.salmonellosis1Parent, styles.diseaseParentLayout]}
            >
              <Image
                style={styles.salmonellosis1Icon}
                contentFit="cover"
                source={require("../assets/salmonellosis-1.png")}
              />
              <Text
                style={[styles.avianSalmonellosis, styles.diseaseTypo1]}
              >{`AVIAN
SALMONELLOSIS`}</Text>
              <Text
                style={[styles.salmonellosisAnInfectious, styles.diseaseTypo]}
              >
                Salmonellosis, an infectious disease triggered by enterobacteria
                belonging to the genus Salmonella, primarily presents as acute
                gastroenteritis. Among the most prevalent infectious diseases,
                it spreads through the consumption of tainted food and water,
                with meat being a common source of contamination. Avian carriers
                of Salmonella often exhibit symptoms such as watery or mucoid
                diarrhea, potentially resulting in dehydration. Additionally,
                lethargy and weakness are commonly observed, alongside a
                decrease in appetite and water intake. Consequently, affected
                birds may undergo weight loss due to reduced feed consumption
                and gastrointestinal distress.
              </Text>
              <Text style={[styles.clickHereFor, styles.clickTypo]}>
                CLICK HERE FOR MORE INFORMATION
              </Text>
            </View>
            <View
              style={[styles.bursalDiseaseParent, styles.diseaseParentLayout]}
            >
              <Text style={[styles.bursalDisease, styles.diseaseTypo1]}>
                BURSAL DISEASE
              </Text>
              <Text
                style={[styles.infectiousBursalDisease, styles.diseaseTypo]}
              >
                Infectious bursal disease is seen in young domestic chickens
                worldwide and is caused by infectious bursal disease virus
                (IBDV). Clinical signs include listlessness, watery diarrhea,
                ruffled feathers, and dehydration. Morbidity rate is high and
                mortality rate is usually low, but some virulent strains cause
                mortality rates of 60% or higher. Macroscopic and microscopic
                lesions in the cloacal bursa and molecular identification of the
                viral genome are used for diagnosis. Vectored and attenuated
                live virus vaccines can be used to induce active immunity in
                chicks as the maternal antibodies wane.
              </Text>
              <Text style={styles.clickHereFor1}>
                CLICK HERE FOR MORE INFORMATION
              </Text>
              <Image
                style={styles.bursal1Icon}
                contentFit="cover"
                source={require("../assets/bursal-1.png")}
              />
            </View>
            <View
              style={[
                styles.newcastleDiseaseParent,
                styles.diseaseParentLayout,
              ]}
            >
              <Text
                style={[styles.newcastleDisease, styles.clickHereFor2Position]}
              >{`NEWCASTLE
DISEASE`}</Text>
              <Text style={[styles.newcastleDiseaseIs, styles.diseaseTypo]}>
                Newcastle disease is one of the most serious of all infectious
                bird diseases. It is a devastating virus that can spread rapidly
                and could kill thousands of native and introduced bird species,
                and could severely damage Australia’s egg, chicken, bird meat
                and aviary industries. Once it infects a flock, many birds can
                be affected. The number of deaths can be high and those birds
                that do recover can transmit the disease to healthy birds.
              </Text>
              <Text
                style={[styles.clickHereFor2, styles.clickHereFor2Position]}
              >
                CLICK HERE FOR MORE INFORMATION
              </Text>
              <Image
                style={[styles.newcastle1Icon, styles.diseaseParentLayout]}
                contentFit="cover"
                source={require("../assets/newcastle-1.png")}
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
  diseaseTypo1: {
    textAlign: "center",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.rowdiesBold,
    fontWeight: "700",
    fontSize: FontSize.size_21xl,
  },
  diarrheaLayout: {
    height: 2493,
    width: 460,
    left: 0,
    position: "absolute",
  },
  diseaseParentLayout: {
    width: 405,
    position: "absolute",
  },
  diseaseTypo: {
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
    width: 405,
    left: 0,
    color: Color.colorGainsboro_100,
    lineHeight: 30,
    position: "absolute",
  },
  clickTypo: {
    height: 30,
    color: Color.colorRoyalblue,
    textDecoration: "underline",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
  },
  clickHereFor2Position: {
    left: 64,
    lineHeight: 30,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_10xl,
    backgroundColor: "transparent",
  },
  diarrheaInner: {
    height: "0.59%",
    width: "27.2%",
    top: "98.16%",
    right: "36.36%",
    bottom: "1.24%",
    left: "36.45%",
    position: "absolute",
  },
  diarrheaChild: {
    backgroundColor: "transparent",
  },
  diarrhea2: {
    top: 33,
    left: 113,
    lineHeight: 30,
    position: "absolute",
  },
  diarrhea4: {
    top: 0,
    backgroundColor: "transparent",
  },
  salmonellosis1Icon: {
    top: 484,
    left: 29,
    width: 347,
    height: 284,
    position: "absolute",
  },
  avianSalmonellosis: {
    left: 18,
    top: 0,
    lineHeight: 30,
    position: "absolute",
  },
  salmonellosisAnInfectious: {
    top: 66,
    height: 399,
  },
  clickHereFor: {
    top: 779,
    left: 57,
    width: 292,
    lineHeight: 30,
    position: "absolute",
  },
  salmonellosis1Parent: {
    top: 1649,
    height: 809,
    left: 27,
    width: 405,
  },
  bursalDisease: {
    left: 13,
    top: 0,
    lineHeight: 30,
    position: "absolute",
  },
  infectiousBursalDisease: {
    top: 45,
    height: 369,
  },
  clickHereFor1: {
    top: 792,
    left: 58,
    color: Color.colorRoyalblue,
    textDecoration: "underline",
    textAlign: "left",
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
    lineHeight: 30,
    position: "absolute",
  },
  bursal1Icon: {
    top: 434,
    left: 39,
    width: 327,
    height: 349,
    position: "absolute",
  },
  bursalDiseaseParent: {
    top: 57,
    height: 822,
    left: 27,
    width: 405,
  },
  newcastleDisease: {
    top: 0,
    textAlign: "center",
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.rowdiesBold,
    fontWeight: "700",
    fontSize: FontSize.size_21xl,
  },
  newcastleDiseaseIs: {
    top: 96,
    height: 270,
  },
  clickHereFor2: {
    top: 641,
    width: 298,
    height: 30,
    color: Color.colorRoyalblue,
    textDecoration: "underline",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
  },
  newcastle1Icon: {
    top: 383,
    height: 241,
    width: 405,
    left: 0,
  },
  newcastleDiseaseParent: {
    top: 939,
    height: 671,
    left: 27,
    width: 405,
  },
  diarrhea3: {
    top: 0,
  },
  diarrheaWrapper: {
    top: 79,
  },
  diarrhea1: {
    height: "92.87%",
    width: "107.48%",
    top: "12.85%",
    right: "-3.74%",
    bottom: "-5.72%",
    left: "-3.74%",
    position: "absolute",
  },
  diarrhea: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    height: 926,
    width: "100%",
  },
});

export default DIARRHEA;
