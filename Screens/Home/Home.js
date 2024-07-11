import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Header from './Header'
import Stories from './Stories'
import Post from '../../components/shared/Post'
import posts from '../../data/posts'

const HomeScreen = () => {
  const scroll = React.createRef();
  return (
    <View style={styles.container}>
      <ScrollView ref={scroll}>
        <Header/>
        <Stories/>
        {posts.sort((a,b) => b.date.localeCompare(a.date)).map((item) => (
          <Post key={item.id} post={item}/>
        ))}
        </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})