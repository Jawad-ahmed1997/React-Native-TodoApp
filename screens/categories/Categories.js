import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Typography from "../../component/TypoGraphy";
import { hp, wp } from "../../utils";
import {
  gnmainLogo,
  bottomMain,
  illustration,
  MobApp,
  OnGoing,
  pending,
  WebDesign,
} from "../../assets/TodosAppImages";
import { AntDesign } from "@expo/vector-icons";
import RoundedButton from "../../component/RoundedBtn";
import { useTodosContext } from "../../context/TodoContext";

const CategoryCard = ({ item, index, navigation }) => {
  const { todos } = useTodosContext();

  const totalItem = todos.filter((cur) => cur.category === item.name);

  const handleRouteToCategory = (name) => {
    navigation.navigate("TaskByDates", { categoryName: name });
  };
  return (
    <TouchableOpacity
      key={index}
      style={[styles.Catchild, { backgroundColor: item.bg }]}
      onPress={() => handleRouteToCategory(item.name)}
    >
      <Image style={styles.catImg} source={item.image} />
      <Typography additionalStyles={styles.catTexts} type="bolder" size={hp(3)}>
        {item.name}
      </Typography>
      <Typography additionalStyles={styles.catTexts}>
        {totalItem?.length} Tasks
      </Typography>
      <AntDesign
        style={styles.arrowicon}
        name="arrowright"
        color="black"
        size={20}
      />
    </TouchableOpacity>
  );
};

function Categories({ navigation }) {
  const handlePress = () => {
    navigation.navigate("TodosForm");
  };
  const todosCategories = [
    {
      date: "2023-12-08", // Example date (you can use any format that suits your needs)
      image: MobApp, // Example image path (replace with your actual image path)
      noOfTasks: 10, // Example number of tasks (replace with the actual number of tasks)
      status: "In Progress", // Example status (replace with the actual status)
      name: "Mobail App Design",
      bg: "rgb(255,105,180)",
    },
    {
      date: "2023-12-08", // Example date (you can use any format that suits your needs)
      image: pending, // Example image path (replace with your actual image path)
      noOfTasks: 10, // Example number of tasks (replace with the actual number of tasks)
      status: "In Progress", // Example status (replace with the actual status)
      name: "pending",
      bg: "#FFC55C",
    },
    {
      date: "2023-12-08", // Example date (you can use any format that suits your needs)
      image: illustration, // Example image path (replace with your actual image path)
      noOfTasks: 10, // Example number of tasks (replace with the actual number of tasks)
      status: "In Progress", // Example status (replace with the actual status)
      name: "illustration",
      bg: "#87CEEB",
    },
    {
      date: "2023-12-08", // Example date (you can use any format that suits your needs)
      image: WebDesign, // Example image path (replace with your actual image path)
      noOfTasks: 10, // Example number of tasks (replace with the actual number of tasks)
      status: "In Progress", // Example status (replace with the actual status)
      name: "Web Site Design",
      bg: "rgb(203, 195, 227)",
    },
  ];

  return (
    <View style={[styles.main]}>
      <View style={styles.topHead}>
        <Typography additionalStyles={{ fontSize: 24 }}>My Tasks</Typography>
      </View>
      <View style={styles.CatView}>
        {todosCategories.map((item, index) => (
          <CategoryCard
            item={item}
            key={index}
            index={index}
            navigation={navigation}
          />
        ))}
      </View>
      <View style={styles.OnGoing}>
        <Typography additionalStyles={styles.OnGoingHead}>On Going</Typography>
        <TouchableOpacity>
          <Typography additionalStyles={styles.seeall}>see all</Typography>
        </TouchableOpacity>
      </View>
      <View style={styles.resentAlert}>
        <View style={styles.resContView}>
          <Typography>Startup Websites Desiggn With Responsive</Typography>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <AntDesign name="clockcircle" size={24} color="#DDA0DD" />
            <Text style={{ marginLeft: 3 }}>10:00 AM - 12:30 PM</Text>
          </TouchableOpacity>
          <Typography additionalStyles={styles.Completed}>
            Completed 80%
          </Typography>
        </View>
        <View style={styles.resImgView}>
          <Image
            style={{ height: 120, width: 120, resizeMode: "contain" }}
            source={OnGoing}
          />
        </View>
      </View>
      <View style={styles.addTodoBtn}>
        <RoundedButton
          onPress={handlePress}
          iconName="plus" // Change this to the desired icon name
          iconColor="white" // Change this to the desired icon color
          buttonColor="rgb(251, 127, 163)" // Change this to the desired button color
          borderRadius={50}
          height={50}
          width={50}
          // customStyle={{ marginTop: }}
        />
      </View>
    </View>
  );
}

export default Categories;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topHead: {
    flex: 1.3,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: wp(6),
  },
  CatView: {
    flex: 6,
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },
  catTexts: {
    color: "white",
  },
  Catchild: {
    width: "45%",
    resizeMode: "cover",
    borderWidth: 1,
    marginVertical: hp(0.5),
    marginHorizontal: wp(2),
    borderRadius: 30,
    justifyContent: "space-evenly",
    alignItems: "top",
    paddingHorizontal: "3%",
  },
  catImg: {
    height: "30%",
    width: "30%",
    resizeMode: "contain",
  },
  arrowicon: {
    position: "absolute",
    top: 30,
    right: 10,
  },
  OnGoing: {
    flex: 0.7,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: wp(6),
  },
  OnGoingHead: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
  },
  seeall: {
    fontSize: 12,
    color: "red",
  },
  resentAlert: {
    // borderWidth: 2,
    flex: 2.7,
    paddingHorizontal: "3%",
    width: "95%",
    borderRadius: 10,
    flexDirection: "row",
    elevation: 5,
    // Add shadow properties for iOS box shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 2,
  },
  resContView: {
    width: "67%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingHorizontal: wp(2),
  },
  resImgView: {
    width: "33%",
    justifyContent: "center",
  },
  Completed: {
    backgroundColor: "#DCDCDC",
    borderRadius: 10,
    paddingHorizontal: wp(5),
    paddingVertical: hp(0.5),
  },
  addTodoBtn: {
    flex: 1,
    alignItems: "center",

    width: "100%",
    marginTop: 10,
  },
});
