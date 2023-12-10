import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Controller } from "react-hook-form";
import Typography from "./TypoGraphy";
import { hp, wp } from "../utils";
import { colors, fonts } from "../utils/thems";
const Input = ({
  customerStyle,
  label,
  placeholder,
  border,
  name,
  control,
  error,
  editable,
  numberOfLines,
  value,
  keyboardType,
}) => {
  const styleGenerater = () => {
    return {
      ...styles.inputConatiner,
      ...customerStyle,
    };
  };
  console.log(error);

  return (
    <View style={styleGenerater()}>
      <Typography type={"paragraph1"} customStyle={{ color: "black" }}>
        {label}
      </Typography>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={border ? styles.inputWithBorder : styles.input}
              placeholderTextColor="#ADADAD"
              multiline={numberOfLines ? true : false}
              numberOfLines={numberOfLines}
              textAlignVertical={numberOfLines ? "top" : "center"}
              editable={editable ? true : false}
              placeholder={placeholder}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              keyboardType={keyboardType || "default"}
            />
          );
        }}
      />
      {error && error[name] && (
        <Typography type={"paragraph2"} additionalStyles={{ color: "red" }}>
          {error[name]?.message}
        </Typography>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  inputWithBorder: {
    backgroundColor: "#F8F8F8",
    // borderWidth: 0.2,
    borderStyle: "solid",
    borderColor: "gray",
    borderRadius: 3,
    color: "#000",
    fontSize: fonts.medium,
    // marginTop: 8,
    // paddingHorizontal: 20,

    // paddingVertical: hp(1.7),
  },
  input: {
    backgroundColor: colors.textlight,
    borderRadius: 8,
    color: "#000",
    fontSize: fonts.medium,
    paddingHorizontal: 10,
    // marginTop: 8,
    paddingVertical: 15,
  },
});

export default Input;
