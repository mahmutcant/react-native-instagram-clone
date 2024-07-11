import React from 'react'
import defaultUser from '../../data/defaultUser'
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'

const UserPostSection = () => {
    const width = Dimensions.get("screen").width
  return (
    <View style={{width:width,flexDirection:"row",maxWidth:width,flexWrap:"wrap"}}>
      {defaultUser.posts.allPosts.sort((a,b) => b.date.localeCompare(a.date)).map((item,index) => (
        <TouchableOpacity key={index}>
          <Image style={{width:width/3,height:125,backgroundColor:"#000"}} source={{uri: item.image}}/>
        </TouchableOpacity>
      ))}
      </View>
  )
}

export default UserPostSection