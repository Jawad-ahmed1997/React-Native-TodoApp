import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import RoundedButton from "../../component/RoundedBtn";
import { mainLogo, bottomMain } from "../../assets/TodosAppImages";
import Typography from "../../component/TypoGraphy";
import { hp, wp } from "../../utils";
import { Entypo } from "@expo/vector-icons";

function Home({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Categories");
  };

  return (
    <View style={styles.main}>
      <View style={styles.skipBtnView}>
        <RoundedButton
          onPress={handlePress}
          title={"Skip"}
          buttonColor="#A896FD" // Change this to the desired button color
          borderRadius={15}
          height={40}
          width={80}
        />
      </View>

      <View style={styles.imgView}>
        <Image style source={mainLogo} />
      </View>
      <View style={styles.TextHeadView}>
        <Typography type="bolder" color="black" size={hp(5)}>
          Manage your task
        </Typography>
        <Typography
          additionalStyles={{ paddingHorizontal: wp(20), textAlign: "center" }}
          type="bolde"
          color="#A5A5B2"
          size={hp(2)}
        >
          Organize all your to-do's in lists and projects. Color tag them to set
          priorities and categories.
        </Typography>
      </View>

      <ImageBackground
        source={bottomMain}
        resizeMode="cover"
        style={styles.bottomImageView}
      >
        <RoundedButton
          onPress={handlePress}
          iconName="arrowright" // Change this to the desired icon name
          iconColor="white" // Change this to the desired icon color
          buttonColor="rgb(251, 127, 163)" // Change this to the desired button color
          borderRadius={50}
          height={50}
          width={50}
          customStyle={{ position: "absolute", top: 13 }}
        />
        <View style={styles.bottomTabs}>
          <TouchableOpacity>
            <Typography
              additionalStyles={{
                textAlign: "center",
              }}
              type="bolde"
              color="white"
              size={hp(2)}
            >
              Back
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Typography
              additionalStyles={{
                textAlign: "center",
              }}
              type="bolde"
              color="white"
              size={hp(2)}
            >
              Skip
            </Typography>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  skipBtnView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    width: "100%",
    marginTop: 10,
  },
  imgView: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  TextHeadView: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  bottomImageView: {
    width: "100%",
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  bottomTabs: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingVertical: hp(3),
    paddingHorizontal: wp(5),
  },
});
