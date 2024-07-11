import React, { useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import profileSectionsElements from "../../utils/profileSectionsElements";
export const width = Dimensions.get("screen").width;
const ProfileSectionButtons = ({selectedSection,setSelectedSection}) => {
    
  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      {profileSectionsElements.map((item) => (
        <TouchableOpacity
        onPress={() => setSelectedSection(item.id)}
        style={[style.profileSectionButtons, {
            width: width / profileSectionsElements.length,
        },selectedSection === item.id && style.profileSectionButtonActive]}
      >
        {selectedSection === item.id ? item.icon.active:item.icon.passive}
      </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProfileSectionButtons;

const style = StyleSheet.create({
  profileSectionButtons: {
    alignItems: "center",
    paddingVertical: 10,
    
  },
  profileSectionButtonActive: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  }
});
