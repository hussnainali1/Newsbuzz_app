import React from "react";
import { View, Text, Image } from "react-native";
import ViewMoreText from "react-native-view-more-text";
import {
  Ionicons as Icons,
  FontAwesome as FIcons,
  Feather as FeatherIcon,
  MaterialIcons as Mat,
  EvilIcons,
  Entypo,
} from "@expo/vector-icons";
const Jobs_travelGuid = ({
  placeUri,
  placeName,
  placeDes,
  place_img_detail,
}) => {
  // const a = JSON.parse(placeUri);
  // console.log(a);
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
        <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "600" }}>
          {placeName.trim()}
        </Text>
        {/* <Text style={{ fontSize: 18 }}>
          <FeatherIcon name="clock" size={24} /> {duration}
        </Text> */}
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={renderViewMore}
          renderViewLess={renderViewLess}
          textStyle={{ fontSize: 15, textAlign: "left" }}
        >
          <Text
            style={{
              fontSize: 14,
              opacity: 0.6,
              textAlign: "left",
            }}
          >
            {placeDes.trim()}
          </Text>
          <Text
            style={{
              fontSize: 18,
              opacity: 1,
              textAlign: "center",
            }}
          >
            IMAGE DESCRIPTion
          </Text>
          <Text
            style={{
              fontSize: 14,
              opacity: 0.6,
              textAlign: "left",
            }}
          >
            {place_img_detail.trim()}
          </Text>
        </ViewMoreText>
      </View>
    </View>
  );
};

export default Jobs_travelGuid;
