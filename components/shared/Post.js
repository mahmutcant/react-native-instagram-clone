import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Bookmark, CommentIcon, LikeButton, MoreIcon, SendIcon, Verified } from "../../Icons"
import FitImage from "./FitImage"
import { useState } from "react"
import dayjs from "dayjs"
import tr from "dayjs/locale/tr"
import {numFormat} from "../../utils/numberFormat"
function Post({post}){
    const [isMoreActive, setIsMoreActive] = useState(false)
    dayjs.locale(tr)
    var relativeTime = require("dayjs/plugin/relativeTime");
    var d = new Date()

    dayjs.extend(relativeTime)
    return(
        <View style={{borderBottomColor:"#E6E6E6",borderBottomWidth: 2,paddingBottom:10}}>
            <View style={styles.header}>
                <View style={styles.userName}>
                <Image style={styles.avatar} source={{
                    uri: post.user.avatar
                }}/>
                    <Text style={styles.userNameText}>{post.user.userName}</Text>
                    {post.isUserVerified && <Verified/>}
                </View>
                <MoreIcon/>
            </View>
            <FitImage src={post.image}/>
            <View style={styles.content}>
            <View style={styles.actions}>
                <View style={styles.leftActions}>
                    <TouchableOpacity style={styles.action} activeOpacity="0.6">
                        <LikeButton liked={post.isUserLiked}/>
                    </TouchableOpacity>
                    {post.commentable && <TouchableOpacity style={styles.action} activeOpacity="0.6">
                        <CommentIcon/>
                    </TouchableOpacity>}
                    <TouchableOpacity style={styles.action} activeOpacity="0.6">
                        <SendIcon/> 
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity="0.6">
                    <Bookmark/>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom: 5}}>
                <Text style={styles.like}>{numFormat(post.likes)} kişi beğendi</Text>
            </View>
                <Text onPress={() => {setIsMoreActive(!isMoreActive)}} numberOfLines={isMoreActive ? 100000 : 2}>
                    <Text style={{fontWeight:"bold"}}>{post.user.userName}  </Text>
                    <Text>{post.description}</Text>
                </Text>
            </View>
            {post.comments > 0 && <TouchableOpacity activeOpacity="0.3">
                <Text style={{paddingHorizontal:15, color:"#737373",fontWeight:"500"}}>{post.comments} yorumu gör</Text></TouchableOpacity>}
            <View>
                <Text style={{paddingHorizontal:15, color:"#737373",fontWeight:"400"}}>{d.getFullYear() == post.date.split("-")[0] ? dayjs(post.date).fromNow() : dayjs(post.date).format("DD MMMM YYYY")}</Text>
            </View>
        </View>
    )
}
export default Post

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 49,
        paddingHorizontal: 15
    },
    avatar: {
        width:30,
        height:30,
        borderRadius:30,
        marginRight:10
    },
    userName: {
        flexDirection: "row",
        alignItems:"center",
    },
    userNameText: {
        fontWeight:"600",
        color: "#000",
        fontSize: 14,
        marginRight:5
    },
    content: {
        paddingHorizontal: 15
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        height: 40,
    },
    leftActions: {
        flexDirection:"row",

    },
    action: {
        marginRight: 15
    },
    like: {
        fontWeight: "bold",
        marginRight: 10
    }
})