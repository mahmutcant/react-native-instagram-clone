import React from 'react'
import { Dimensions, Image, View } from 'react-native'

const FitImage = ({src}) => {
    const screenWidth = Dimensions.get('window').width
    const ratio = 1440 / screenWidth
    const height = 1440 / ratio
  return (
    <Image
    style={{
        width: screenWidth,
        height: height
    }}
    source={{
        uri: src
    }}/>
  )
}

export default FitImage