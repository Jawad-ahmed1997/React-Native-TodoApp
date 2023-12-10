import React, { useEffect, useState } from "react";
import CalendarComponent from "../../component/CalenderComponent";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { hp, wp } from "../../utils";
import RoundedButton from "../../component/RoundedBtn";
import { useTodosContext } from "../../context/TodoContext";

function TaskByDates({ route, navigation }) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);
  const [selectedDateTodos, setSelectedDateTodos] = useState([]);
  const { todos } = useTodosContext();

  const categoryName = route.params?.categoryName || "Default Category";

  const handleSelectDate = (selectedDate) => {
    console.log("selectedDate", selectedDate);
    const datedTodos = todos
      .filter((item) => {
        const itemDate = new Date(item.date);
        const selectedDateUTC = new Date(selectedDate);
        var isToday =
          itemDate.getFullYear() === selectedDateUTC.getFullYear() &&
          itemDate.getMonth() === selectedDateUTC.getMonth() &&
          itemDate.getDate() === selectedDateUTC.getDate();
        console.log(
          "Todos Category:",
          item.category,
          "Selected Category:",
          categoryName
        );
        return categoryName === item.category && isToday;
      })
      .sort((a, b) => {
        return new Date(a.time) - new Date(b.time);
      });
    setSelectedDateTodos(datedTodos);
    console.log("datedTodos", datedTodos);
  };

  console.log();
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
    setFormattedDate(formattedDate);
  }, []);

  const renderItem = ({ item, index }) => {
    const taskTime = new Date(item.time).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    return (
      <View style={styles.todoTask}>
        <Text style={{ paddingHorizontal: "3%" }}>{taskTime}</Text>
        <TouchableOpacity
          style={[
            styles.taskRow,
            selectedTask === index && { backgroundColor: "#ADD8E6" },
          ]}
          onPress={() => setSelectedTask(index)}
        >
          <View>
            <Text
              style={[
                styles.TaskTex,
                selectedTask === index && styles.selectedTaskText,
              ]}
            >
              {item.date}
            </Text>
            <Text
              style={[
                styles.TaskTex,
                selectedTask === index && styles.selectedTaskText,
              ]}
            >
              {item.task}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const handlePress = () => {
    navigation.navigate("TodosForm");
  };

  useEffect(() => {
    handleSelectDate(new Date());
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.TodayDate}>
        <View style={styles.TodayDateChild}>
          <Text style={styles.TodayDateText}>{formattedDate}</Text>
          <Text style={styles.TextTask}>10 Task Today</Text>
        </View>
        <View>
          <RoundedButton
            iconName="calendar" // Change this to the desired icon name
            iconColor="white" // Change this to the desired icon color
            buttonColor="rgb(207, 159, 255)" // Change this to the desired button color
            borderRadius={50}
            height={50}
            width={50}
          />
        </View>
      </View>
      <View style={styles.dateSelector}>
        <CalendarComponent onSelectDate={handleSelectDate} />
      </View>
      <View style={styles.flatList}>
        {selectedDateTodos.length <= 0 ? (
          <Text style={{ marginTop: 20, fontSize: 24 }}>No Task</Text>
        ) : (
          <FlatList
            data={selectedDateTodos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        )}
      </View>
      <RoundedButton
        onPress={handlePress}
        title={"Add New Tasks"}
        buttonColor="#FB84A8"
        width={200}
        customStyle={{ marginVertical: "2%" }}
      />
    </View>
  );
}

export default TaskByDates;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  TodayDate: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "5%",
  },
  TodayDateChild: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  TextTask: {
    fontSize: 12,
  },
  TodayDateText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  dateSelector: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    flex: 10,
  },
  taskRow: {
    borderColor: "white",
    width: "70%",
    borderRadius: 10,
    marginVertical: "2%",
    marginHorizontal: "2%",
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    // Add elevation for Android box shadow
    elevation: 5,
    // Add shadow properties for iOS box shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  todoTask: {
    backgroundColor: "white",
    marginHorizontal: "2.5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    borderBottomWidth: 1,
  },

  selectedTaskText: {
    color: "white",
  },

  gradient: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
