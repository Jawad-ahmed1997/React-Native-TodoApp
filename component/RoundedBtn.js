// RoundedButton.js

import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const RoundedButton = ({
  onPress,
  title,
  iconName,
  iconColor,
  buttonColor,
  width,
  height,
  borderRadius,
  customStyle,
}) => {
  const buttonStyle = {
    backgroundColor: buttonColor || "#3498db",
    borderRadius: borderRadius || 25,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: width || 150, // Default width is 150
    height: height || 50, // Default height is 50
    shadowColor: buttonColor || "#3498db", // Set the shadow color same as the button color
    shadowOpacity: 0.8, // Set the shadow opacity
    shadowRadius: 10, // Set the shadow radius
    shadowOffset: { width: 0, height: 4 }, // Set the shadow offset
    elevation: 5,
    ...customStyle,
  };

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      {iconName && (
        <AntDesign name={iconName} color={iconColor || "white"} size={20} />
      )}
      {title && <Text style={{ color: "white", fontSize: 16 }}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default RoundedButton;
