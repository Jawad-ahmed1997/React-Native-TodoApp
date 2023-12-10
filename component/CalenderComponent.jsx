import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { hp, wp } from "../utils";
import { colors } from "../utils/thems";

const CalendarComponent = ({ onSelectDate }) => {
  const [calendarDates, setCalendarDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const generateCalendarDates = () => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const nextMonth = (currentMonth + 1) % 12;

      const currentMonthDates = getMonthDates(
        currentDate.getFullYear(),
        currentMonth
      );
      const nextMonthDates = getMonthDates(
        currentDate.getFullYear(),
        nextMonth
      );

      const combinedDates = [...currentMonthDates, ...nextMonthDates];

      setCalendarDates(combinedDates);
    };

    const getMonthDates = (year, month) => {
      const startDate = new Date(year, month, 1);
      const endDate = new Date(year, month + 1, 0);

      const dates = [];
      const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      for (
        let date = startDate;
        date <= endDate;
        date.setDate(date.getDate() + 1)
      ) {
        const dayOfWeek = weekdays[date.getDay()];
        dates.push({
          date: new Date(date),
          dayOfWeek,
          dayOfMonth: date.getDate(),
        });
      }

      return dates;
    };

    generateCalendarDates();
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: "row", width: "100%" }}>
        {calendarDates.map((item, index) => (
          <TouchableOpacity
            style={styles.main}
            key={index}
            onPress={() => {
              onSelectDate(item.date);
              setSelectedDate(item.date);
            }}
          >
            <LinearGradient
              colors={
                selectedDate === item.date
                  ? ["#f6d365", "#fda085"]
                  : ["transparent", "transparent"]
              }
              start={{ x: 0.3, y: 0.4 }}
              end={{ x: 1, y: 0.6 }}
              style={styles.gradient}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={[
                    styles.text,
                    selectedDate === item.date && styles.selectedText,
                  ]}
                >
                  {item.dayOfWeek}
                </Text>
                <Text
                  style={[
                    styles.text,
                    selectedDate === item.date && styles.selectedText,
                  ]}
                >
                  {item.dayOfMonth}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default CalendarComponent;

const styles = StyleSheet.create({
  main: {
    width: 50,
    borderRadius: 20,
    marginHorizontal: wp(2),
  },
  gradient: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(2),
    paddingVertical: hp(5),
    borderRadius: 25,

    borderColor: colors.white, // You can set the border color based on your design
    elevation: 5, // Add elevation for Android shadow
    shadowColor: "#000", // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 0.2, // iOS shadow opacity
    shadowRadius: 2, // iOS shadow radius
  },
  text: {
    color: colors.black,
  },
  selectedText: {
    color: "white",
  },
});
