import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  AddFriendIcon,
  AddIcon,
  BridgeIcon,
  ListIcon,
  LockIcon,
  PostIconActive,
  PostsIcon,
  ReelsIcon,
  ReelsIconFocused,
  TagIcon,
  TagIconActive,
} from "../Icons";
import defaultUser from "../data/defaultUser";
import ProfileButton from "../components/shared/ProfileButtons";
import UserPostSection from "../components/shared/UserPostSection";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import ProfileReelsSection from "../components/shared/ProfileReelsSection";
import { numFormat, numFormatReels } from "../utils/numberFormat";
import TaggedPosts from "../components/shared/TaggedPosts";

const Profile = () => {
  const UserAllPostSection = () => <UserPostSection />;
  const [index, setIndex] = useState(0);

  const UserReelsSection = () => (
    <ProfileReelsSection/>
  );

  const ThirdRoute = () => (
    <TaggedPosts/>
  );

  const [routes] = React.useState([
    { key: "first", title: "" },
    { key: "second", title: "" },
    { key: "third", title: "" },
  ]);

  const initialLayout = { width: Dimensions.get("window").width };
  const renderIcon = ({ route }) => {
    switch (route["key"]) {
      case "first":
        return index === 0 ? <PostIconActive /> : <PostsIcon />;
      case "second":
        return index === 1 ? <ReelsIconFocused /> : <ReelsIcon />;
      case "third":
        return index === 2 ? <TagIconActive /> : <TagIcon isTagged={false}/>;
      default:
        return null;
    }
  };

  const renderScene = SceneMap({
    first: UserAllPostSection,
    second: UserReelsSection,
    third: ThirdRoute
  });
  const renderTabBar = (props) => {
    const windowWidth = initialLayout.width / routes.length
    return (
      <TabBar
        {...props}
        renderIcon={({ route }) => renderIcon({ route })}
        style={{ backgroundColor: "white" }}
        indicatorStyle={{
          backgroundColor: "black",
          width: windowWidth / 2,
          left: windowWidth / 4,
          height: 1,
          marginBottom:3
        }}
        pressColor="transparent"
        activeColor="transparent"
      />
    );
  };


  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ margin: 5 }}>
            <LockIcon />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {defaultUser.user.userName}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginRight: 20 }}>
            <AddIcon />
          </View>
          <View style={{ marginRight: 10 }}>
            <ListIcon />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: 70,
            marginHorizontal: 20,
            marginTop: 30,
          }}
          source={{
            uri: defaultUser.user.avatar,
          }}
        />
        <View style={{ flexDirection: "column", margin: 25, marginTop: 40 }}>
          <Text
            style={{ alignSelf: "center", fontWeight: "900", fontSize: 18 }}
          >
            {defaultUser.posts.allPosts.length}
          </Text>
          <Text style={{ fontSize: 15 }}>gönderi</Text>
        </View>
        <View style={{ flexDirection: "column", margin: 25, marginTop: 40 }}>
          <Text
            style={{ alignSelf: "center", fontWeight: "900", fontSize: 18 }}
          >
            {numFormatReels(defaultUser.user.userFollowers)}
          </Text>
          <Text style={{ fontSize: 15 }}>takipçi</Text>
        </View>
        <View style={{ flexDirection: "column", margin: 25, marginTop: 40 }}>
          <Text
            style={{ alignSelf: "center", fontWeight: "900", fontSize: 18 }}
          >
            {defaultUser.user.userFollowing}
          </Text>
          <Text style={{ fontSize: 15 }}>takip</Text>
        </View>
      </View>
      <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
        {defaultUser.user.name}
      </Text>
      <Text style={{ marginLeft: 10, color: "#0094F5", fontSize: 13 }}>
        {defaultUser.user.title}
      </Text>
      <Text style={{ marginLeft: 10, fontSize: 13 }}>
        {defaultUser.user.description}
      </Text>
      {defaultUser.user.connection && (
        <View style={{ marginLeft: 10, flexDirection: "row" }}>
          <View style={{ margin: 5 }}>
            <BridgeIcon />
          </View>
          <Text style={{ fontSize: 13, color: "#0866ff" }}>
            {defaultUser.user.connection}
          </Text>
        </View>
      )}
      <View style={{ flexDirection: "row" }}>
        <ProfileButton text={"Profili Düzenle"} />
        <ProfileButton text={"Profili Paylaş"} />
        <View
          style={{
            borderWidth: 1,
            padding: 8,
            borderColor: "transparent",
            borderRadius: 10,
            backgroundColor: "#EFEFEF",
            alignItems: "center",
            justifyContent: "center",
            margin: 5,
          }}
        >
          <AddFriendIcon />
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </ScrollView>
  );
};

export default Profile;
