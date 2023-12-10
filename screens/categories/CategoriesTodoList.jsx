import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, FlatList, Text } from "react-native";

function CategoriesTodoList() {
  const renderItem = ({ item, index }) => (
    <View style={styles.todoTask}>
      <Text style={{ paddingHorizontal: "3%" }}>{item.time}</Text>
      <TouchableOpacity
        style={[styles.taskRow, selectedTask === index && styles.selectedTask]}
        onPress={() => setSelectedTask(index)}
      >
        {selectedTask === index && (
          <LinearGradient
            colors={["#a1c4fd", "#c2e9fb"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >
            <View>
              <Text
                style={[
                  styles.TaskTex,
                  selectedTask === index && styles.selectedTaskText,
                ]}
              >
                {item.task}
              </Text>
              <Text
                style={[
                  styles.TaskTex,
                  selectedTask === index && styles.selectedTaskText,
                ]}
              >
                {item.date}
              </Text>
            </View>
          </LinearGradient>
        )}
        {selectedTask !== index && (
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
        )}
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.flatList}>
      {selectedDateTodos.length <= 1 ? (
        <Text style={{ marginTop: 20, fontSize: 24 }}>No Task</Text>
      ) : (
        <FlatList
          data={selectedDateTodos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

export default CategoriesTodoList;
