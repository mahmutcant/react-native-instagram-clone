import { StyleSheet, TouchableOpacity, View } from "react-native"
import { LikeButton, Logo, MessengerLogo } from "../../Icons"

const Header = () => {
  return (
    <View style={styles.header}>
        <Logo/>
        <View style={styles.actions}>
            <TouchableOpacity style={styles.button} activeOpacity="0.2">
                <LikeButton/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity="0.2">
                <MessengerLogo/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        height: 36,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal: 15
    },
    actions: {
        flexDirection: "row"
    },
    button: {
        marginLeft: 30
    }
})