import React from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import defaultUser from '../../data/defaultUser'
import { PlayIcon } from '../../Icons'
import { numFormatReels } from '../../utils/numberFormat'

const ProfileReelsSection = () => {
    const width = Dimensions.get("screen").width
  return (
    <View style={{width:width,flexDirection:"row",maxWidth:width,flexWrap:"wrap"}}>
      {defaultUser.posts.reels.sort((a,b) => b.date.localeCompare(a.date)).map((item,index) => (
        <TouchableOpacity key={index}>
          <Image style={{width:width/3,height:220,backgroundColor:"#000"}} source={{uri: item.image}}/>
          <View style={{flexDirection:"row",position:"absolute",bottom:0,left:5}}><PlayIcon/><Text style={{color:"white",bottom:4,left:5,fontSize:12,fontWeight:"bold"}}>{numFormatReels(item.viewedCount)}</Text></View>
        </TouchableOpacity>
      ))}
      </View>
  )
}

export default ProfileReelsSection