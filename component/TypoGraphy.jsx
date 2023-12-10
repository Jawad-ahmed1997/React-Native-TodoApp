// Typography.js

import React from "react";
import { Text as RNText, StyleSheet } from "react-native";

const Typography = ({
  children,
  type = "regular",
  color = "black",
  size = 16,
  style,
  additionalStyles,
  ...props
}) => {
  const textStyles = {
    color,
    fontSize: size,
  };

  return (
    <RNText
      style={[styles.text, textStyles, style, additionalStyles]}
      {...props}
    >
      {children}
    </RNText>
  );
};

// const getFontFamily = (type) => {
//   switch (type) {
//     case "bold":
//       return "Helvetica-Bold";
//     case "bolder": // Add case for "bolder"
//       return "Helvetica-Black";
//     case "italic":
//       return "Helvetica-Oblique";
//     // Add more font types as needed
//     default:
//       return "Helvetica";
//   }
// };

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 4,
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: "",
  },
});

export default Typography;
