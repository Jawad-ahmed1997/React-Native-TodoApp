import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Typography from "../../component/TypoGraphy";
import { hp, wp } from "../../utils";
import { LinearGradient } from "expo-linear-gradient";
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

const CategoryCard = ({ item, index }) => {
  const { todos } = useTodosContext();

  const totalItem = todos.filter((cur) => cur.category === item.name);

  const generateGradient = (colors, start, end) => (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      style={styles.container}
    >
      <Image style={styles.catImg} source={item.image} />
      <Typography type="bolder" color="black" size={hp(3)}>
        {item.name}
      </Typography>
      <Typography>{totalItem?.length} Tasks</Typography>
      <AntDesign
        style={styles.arrowicon}
        name="arrowright"
        color="black"
        size={20}
      />
    </LinearGradient>
  );

  const renderCategory = () => {
    switch (index) {
      case 0:
        return generateGradient(
          ["#ff9a9e", "#fecfef", "#fecfef"],
          { x: 0, y: 0 },
          { x: 0, y: 1 }
        );
      case 1:
        return generateGradient(
          ["#a18cd1", "#fbc2eb"],
          { x: 0, y: 0 },
          { x: 0, y: 1 }
        );
      case 2:
        return generateGradient(
          ["#f6d365", "#fda085"],
          { x: 0.3, y: 0.4 },
          { x: 1, y: 0.6 }
        );
      case 3:
        return generateGradient(
          ["#a1c4fd", "#c2e9fb"],
          { x: 0, y: 0 },
          { x: 1, y: 0 }
        );
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity style={[styles.Catchild]} key={index}>
      {renderCategory()}
    </TouchableOpacity>
  );
};

function Categories() {
  const handlePress = () => {
    console.log("triger");
  };
  const todosCategories = [
    {
      date: "2023-12-08", // Example date (you can use any format that suits your needs)
      image: MobApp, // Example image path (replace with your actual image path)
      noOfTasks: 10, // Example number of tasks (replace with the actual number of tasks)
      status: "In Progress", // Example status (replace with the actual status)
      name: "Mobail App Design",
    },
    {
      date: "2023-12-08", // Example date (you can use any format that suits your needs)
      image: pending, // Example image path (replace with your actual image path)
      noOfTasks: 10, // Example number of tasks (replace with the actual number of tasks)
      status: "In Progress", // Example status (replace with the actual status)
      name: "pending",
    },
    {
      date: "2023-12-08", // Example date (you can use any format that suits your needs)
      image: illustration, // Example image path (replace with your actual image path)
      noOfTasks: 10, // Example number of tasks (replace with the actual number of tasks)
      status: "In Progress", // Example status (replace with the actual status)
      name: "illustration",
    },
    {
      date: "2023-12-08", // Example date (you can use any format that suits your needs)
      image: WebDesign, // Example image path (replace with your actual image path)
      noOfTasks: 10, // Example number of tasks (replace with the actual number of tasks)
      status: "In Progress", // Example status (replace with the actual status)
      name: "WebSite Design",
    },
  ];

  return (
    <View style={styles.main}>
      <View style={styles.topHead}>
        <Typography>My Task</Typography>
      </View>
      <View style={styles.CatView}>
        {todosCategories.map((item, index) => (
          <CategoryCard item={item} index={index} />
        ))}
      </View>
      <View style={styles.OnGoing}>
        <Typography>On Going</Typography>
        <TouchableOpacity>
          <Typography>see all</Typography>
        </TouchableOpacity>
      </View>
      <View style={styles.resentAlert}>
        <View style={styles.resContView}>
          <Typography>Startup Websites Desiggn With Responsive</Typography>
          <Typography>
            <AntDesign name="clockcircle" size={24} color="purple" />
            10:00 AM - 12:30 PM
          </Typography>
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
          customStyle={{ marginTop: 6 }}
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
    flex: 1,
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
  resentAlert: {
    flex: 2.7,
    width: "100%",
    flexDirection: "row",
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
    backgroundColor: "gray",
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
