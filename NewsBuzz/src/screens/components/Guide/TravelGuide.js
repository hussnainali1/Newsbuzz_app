import React from "react";
import { View, Text, Image } from "react-native";
import ViewMoreText from "react-native-view-more-text";
import {
  Ionicons as Icons,
  FontAwesome5 as FIcons,
  Feather as FeatherIcon,
  MaterialIcons as Mat,
  EvilIcons,
  Entypo,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const TravelGuide = ({
  placeUri,
  placeName,
  duration,
  placeDes,
  date,
  time,
  location,
  capacity,
}) => {
  // const a = JSON.parse(placeUri);
  function renderViewMore(onPress) {
    return (
      <Text style={{ color: "blue" }} onPress={onPress}>
        View more
      </Text>
    );
  }
  function renderViewLess(onPress) {
    return (
      <Text style={{ color: "red" }} onPress={onPress}>
        View less
      </Text>
    );
  }
  return (
    <View
      style={{
        height: "auto",
        width: "auto",
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 20,
        borderWidth: 0.5,
        borderColor: "#dddddd",
      }}
    >
      {/* <TouchableOpacity onPress={() => navigation.navigate('Graduate')}><Text>CLOSE</Text></TouchableOpacity> */}

      <Image
        // style={{ height: 120, width: 120, justifyContent: "center",alignItems }}
        source={placeUri}
        style={{
          flex: 1,
          width: "auto",
          height: 450,
          // resizeMode: "cover"
        }}
      />
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 10,
          //   justifyContent: "space-between"
        }}
      >
        {placeName ? (
          <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "600" }}>
            {placeName.trim()}{" "}
          </Text>
        ) : null}

        <ViewMoreText
          numberOfLines={3}
          renderViewMore={renderViewMore}
          renderViewLess={renderViewLess}
          textStyle={{ fontSize: 15, textAlign: "left" }}
        >
          {date ? (
            <Text
              style={{
                fontSize: 14,
                opacity: 0.6,
                textAlign: "left",
                marginBottom: 20,
              }}
            >
              <FIcons name="calendar-alt" size={19} color="black" />
              &nbsp;&nbsp;
              {date.trim()}&nbsp;&nbsp;{time.trim()}
            </Text>
          ) : null}
          {location ? (
            <Text
              style={{
                fontSize: 14,
                opacity: 0.6,
                textAlign: "left",
              }}
            >
              {"\n"}
              <Entypo name="globe" size={19} color="black" />
              &nbsp;
              {location.trim()}
              {"\n"}
            </Text>
          ) : null}
          <Text
            style={{
              fontSize: 14,
              opacity: 0.6,
              textAlign: "left",
            }}
          >
            {placeDes.trim()}
          </Text>
        </ViewMoreText>
      </View>
    </View>
  );
};

export default TravelGuide;
