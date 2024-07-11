import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/Home/Home';
import Profile from './Screens/Profile';
import Search from './Screens/Search';
import Reels from './Screens/Reels';
import { AddIcon, Home, HomeFocused, ReelsIcon, ReelsIconFocused, SearchIcon, SearchIconFocused } from './Icons';
import AddScreen from './Screens/AddScreen';
import { Image, StyleSheet } from 'react-native';
const Tab = createBottomTabNavigator();
function Screens() {
  return(
    <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#262626"
    }}>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
            headerTitle: "Anasayfa",
            tabBarIcon: ({focused, color}) => {
                if(focused)
                    return (<HomeFocused size={30} fill={color}/>)
                return(<Home size={30} fill={color}/>)
            },
        }}/>
      <Tab.Screen name="Search" component={Search} options={{
            headerTitle: "Anasayfa",
            tabBarIcon: ({focused, color}) => {
                if(focused)
                    return (<SearchIconFocused size={30} fill={color}/>)
                return(<SearchIcon size={30} fill={color}/>)
            }
        }}/>
    <Tab.Screen name="Ekle" component={AddScreen} options={{
        headerTitle: "Ekle",
        tabBarIcon: (() => (
            <AddIcon/>
        ))
    }}/>
      <Tab.Screen name="Reels" component={Reels} options={{
            headerTitle: "Anasayfa",
            tabBarIcon: ({focused, color}) => {
                if(focused)
                    return (<ReelsIconFocused size={30} fill={color}/>)
                return(<ReelsIcon size={30} fill={color}/>)
            }
        }} />
        
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({focused,color}) => {
            return <Image 
            style = {[styles.avatar, {
                borderColor: focused ? "#000" : "transparent"
            }]}
            source={{ uri: "https://instagram.fada1-13.fna.fbcdn.net/v/t51.2885-19/122413669_2873957092835386_8020060852412909719_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fada1-13.fna.fbcdn.net&_nc_cat=110&_nc_ohc=9ufln0d_QOUQ7kNvgEQJ2Kj&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYCcyxFJEBRMFR5qyav2vbhRdx7NnbYDk71-uvhe4eredA&oe=66922C55&_nc_sid=8f1549" }}
            />
        }
      }}/>
    </Tab.Navigator>
  )
}

export default Screens

const styles = StyleSheet.create({
    avatar: {
        width: 30,
        height: 30,
        borderWidth: 1.5,
        borderRadius: 30
    }
})