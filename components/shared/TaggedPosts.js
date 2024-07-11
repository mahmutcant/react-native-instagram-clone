import React from "react";
import defaultUser from "../../data/defaultUser";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TagIcon } from "../../Icons";
import { LinearGradient } from "expo-linear-gradient";

const TaggedPosts = () => {
  const width = Dimensions.get("screen").width;
  return (
    <View
      style={{
        width: width,
        flexDirection: "row",
        maxWidth: width,
        flexWrap: "wrap",
      }}
    >
      {defaultUser.posts.taggedPosts.length > 0 ? (
        defaultUser.posts.allPosts
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((item, index) => (
            <TouchableOpacity key={index}>
              <Image
                style={{
                  width: width / 3,
                  height: 125,
                  backgroundColor: "#000",
                }}
                source={{ uri: item.image }}
              />
            </TouchableOpacity>
          ))
      ) : (
        <View
          style={{
            height: 600,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 200,
          }}
        >
          <View style={styles.cover}>
              <TagIcon isTagged={true} />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>
            Olduğun Fotograf ve Videolar
          </Text>
          <Text style={{ fontSize: 13, width: "55%", color: "gray" }}>
            İnsanlar seni fotoğraf ve videolarda etiketlediğinde, burada
            görünecek
          </Text>
        </View>
      )}
    </View>
  );
};

export default TaggedPosts;

const styles = StyleSheet.create({
  cover: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    padding: 10,
  },
})