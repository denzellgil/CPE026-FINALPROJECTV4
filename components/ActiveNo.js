import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ActiveNo = memo(
  ({ rectangle1010, activeNoMarginLeft, onSymptomsPress }) => {
    const activeNoStyle = useMemo(() => {
      return {
        ...getStyleValue("marginLeft", activeNoMarginLeft),
      };
    }, [activeNoMarginLeft]);

    return (
      <View style={[styles.activeno, activeNoStyle]} onPress={onSymptomsPress}>
        <Image
          style={styles.activenoChild}
          contentFit="cover"
          source={rectangle1010}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  activenoChild: {
    position: "absolute",
    height: "75%",
    width: "89.3%",
    top: "12.52%",
    right: "5.23%",
    bottom: "12.48%",
    left: "5.47%",
    borderRadius: Border.br_xl,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  activeno: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_300,
    width: 298,
    height: 250,
    overflow: "hidden",
  },
});

export default ActiveNo;
