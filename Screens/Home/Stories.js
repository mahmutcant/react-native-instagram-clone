import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import stories from "../../data/stories";
import { LinearGradient } from 'expo-linear-gradient';
import { AddStoryIcon } from "../../Icons";
function Stories(){
    return(
        <View style={styles.stories}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.story}>
                <LinearGradient colors={["#fff","#fff"]} style={styles.cover}>
                    <Image style={styles.userImage} source={{
                        uri: "https://instagram.fada1-13.fna.fbcdn.net/v/t51.2885-19/122413669_2873957092835386_8020060852412909719_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fada1-13.fna.fbcdn.net&_nc_cat=110&_nc_ohc=9ufln0d_QOUQ7kNvgEQJ2Kj&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYCcyxFJEBRMFR5qyav2vbhRdx7NnbYDk71-uvhe4eredA&oe=66922C55&_nc_sid=8f1549"
                    }}/>
                </LinearGradient>
                <Text style={[styles.userName,{alignSelf:"center"}]} numberOfLines={1}>Hikayen</Text>
                <View style={styles.coverAddStory}>
                        <AddStoryIcon/>
                </View>
                </View>
            {stories && stories.map(story => (
                <View key={story.id} style={styles.story}>
                <LinearGradient colors={['#C913B9', '#F9373F',"#FECD00"]} style={styles.cover}>
                    <Image style={styles.userImage} source={{
                        uri: story.user.photo
                    }}/>
                </LinearGradient>
                <Text style={styles.userName} numberOfLines={1}>{story.user.nickName}</Text>
                </View>
            ))}
        </ScrollView>
        </View>
    )
}
export default Stories

const styles = StyleSheet.create({
    stories:{
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#E6E6E6"
    },
    story:{
        width: 65,
        marginHorizontal: 8
    },
    cover: {
        width: 65,
        height: 65,
        borderRadius: 33.5,
        alignItems:"center",
        justifyContent: "center"
    },
    coverAddStory: {
        width: 25,
        height: 25,
        borderWidth: 2.5,
        borderRadius: 20,
        borderColor:"#fff",
        position:"absolute",
        bottom:15,
        right:0,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: "#fff"
    },
    userName: {
        fontSize: 12,
        textAlign:"center"
    },
    
})