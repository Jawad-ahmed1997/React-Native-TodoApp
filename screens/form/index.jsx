import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";
import Input from "../../component/Input";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome } from "@expo/vector-icons";
import { hp, wp } from "../../utils";
import RoundedButton from "../../component/RoundedBtn";
import { useTodosContext } from "../../context/TodoContext";
import Typography from "../../component/TypoGraphy";

const options = {
  items: ["illustration", "Mobail App Design", "Web Site Design"],
};
const TodosForm = ({ navigation }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const { updateTodos, todos } = useTodosContext();
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);

  const defaultValues = {
    category: "",
    task: "",
    date: new Date().toISOString(),
    time: new Date().toISOString(),
  };

  const validationSchema = yup.object().shape({
    category: yup.string().required(),
    task: yup.string().required(),
    date: yup.string(),
    time: yup.string(),
  });

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log("triger", data);
    updateTodos(data);
    reset();
    Alert.alert("Add Successfully", "Task Added Succesffuly into todos");
  };
  const handleStartDateChange = (event, selectedDate) => {
    setShowStartDatePicker(false);
    if (selectedDate) {
      setStartDate(selectedDate || startDate);
      setValue("date", selectedDate.toISOString()); // Format and update the "date" field in the form state
    }
  };
  const handleStartTimeChange = (event, selectedTime) => {
    setShowStartTimePicker(false);
    if (selectedTime) {
      setStartTime(selectedTime);
      setValue("time", selectedTime.toISOString());
    }
  };
  const toggleStartDatePicker = () => {
    setShowStartDatePicker(!showStartDatePicker);
  };
  const toggleStarTimePicker = () => {
    setShowStartTimePicker(!showStartTimePicker);
  };
  const formattedStartDate = startDate
    ? startDate.toLocaleDateString("en-GB")
    : "";

  const handlePress = () => {
    handleSubmit(onSubmit)();
    navigation.navigate("Categories");
  };

  const RenderItem = ({ item, onChange, index }) => {
    return (
      <TouchableOpacity
        index={index}
        style={{ width: "100%" }}
        onPress={() => {
          onChange(item);
          setShowDropdown(false);
        }}
      >
        <Text style={styles.dropdownItemText}>{item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
      <View style={styles.TodoHead}>
        <Text style={styles.title}>Add Todo</Text>
      </View>
      <View style={styles.InputView}>
        <Controller
          control={control}
          name={"category"}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <>
                <Pressable
                  style={styles.dropdownTextInput}
                  onPress={() => setShowDropdown(true)}
                >
                  <Text>{value ? value : "Select Category"}</Text>
                </Pressable>
                {showDropdown && (
                  <>
                    {options.items.map((item, index) => {
                      return (
                        <RenderItem
                          item={item}
                          key={index}
                          onChange={onChange}
                        />
                      );
                    })}
                  </>
                )}
                {errors && errors.category && (
                  <Typography
                    type={"paragraph2"}
                    additionalStyles={{ color: "red" }}
                  >
                    {errors.category?.message}
                  </Typography>
                )}
              </>
            );
          }}
        />
        <Input
          border={false}
          name={"task"}
          editable={true}
          control={control}
          error={errors}
          placeholder={"Enter Your Task"}
          customerStyle={{
            marginTop: -10,
            // paddingVertical: 10,
            width: "100%",
            borderColor: "white",
          }}
        />
        <View style={styles.pickerCont}>
          {showStartDatePicker && (
            <Controller
              control={control}
              name={"date"}
              render={({ field: { onChange, onBlur, value } }) => {
                return (
                  <DateTimePicker
                    key="start-date-picker"
                    value={value ? new Date(value) : new Date()}
                    mode="date"
                    display="calendar"
                    onChange={handleStartDateChange}
                  />
                );
              }}
            />
          )}
          <Text>{startDate.toLocaleDateString("en-GB")}</Text>
          <TouchableOpacity onPress={toggleStartDatePicker}>
            <FontAwesome name="calendar" size={18} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.pickerCont}>
          {showStartTimePicker && (
            <Controller
              control={control}
              name={"time"}
              render={({ field: { onChange, onBlur, value } }) => {
                return (
                  <DateTimePicker
                    key="start-time-picker"
                    value={value ? new Date(value) : new Date()}
                    mode="time"
                    display="clock"
                    onChange={handleStartTimeChange}
                  />
                );
              }}
            />
          )}
          <Text>
            {startTime.toLocaleTimeString("en-GB", { hour12: false })}
          </Text>
          <TouchableOpacity onPress={toggleStarTimePicker}>
            <FontAwesome name="clock-o" size={18} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.addtodoBtn}>
          <RoundedButton
            onPress={handlePress}
            title={"Add New Task"}
            buttonColor="#A896FD"
            borderRadius={15}
            height={50}
            width={"90%"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    justifyContent: "flex-start",
    paddingHorizontal: wp(3),
  },
  TodoHead: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "gray",
  },
  InputView: {
    flex: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: "3%",
  },
  dropdownTextInput: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
    width: "100%",
    marginVertical: "2%",
  },
  dropdownList: {
    width: "100%",
    maxHeight: 150,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  dropdownItemText: {
    padding: 10,
  },
  pickerCont: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
    paddingHorizontal: "3%",
    paddingVertical: hp(3),
    marginVertical: "3%",
    borderRadius: 10,
  },
  placeholderColor: "#999",
  addtodoBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  AddtodoBtnView: {
    paddingVertical: 20,
  },
});

export default TodosForm;
