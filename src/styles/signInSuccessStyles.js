import { StyleSheet } from "react-native";

export default signInSuccessStyles = StyleSheet.create({
    headerLeftText: {
        marginTop: 5,
        marginLeft: 5,
        alignSelf: 'flex-start',
        fontFamily: 'Lato-Bold',
        fontSize: 52,
        lineHeight: 60,
        color: '#00acdf',
    },
    headerRightText: {
        marginRight: 5,
        alignSelf: 'flex-end',
        fontFamily: 'Lato-Bold',
        fontSize: 52,
        lineHeight: 60,
        color: '#00acdf',
    },
    userProfileContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userInfoContainer: {
        marginTop: 10,
        marginLeft: 70
    },
    profilePictureContainer: {
        marginTop: 15,
        height: 150,
        width: 150,
        borderRadius: 80,
        borderWidth: 3,
        borderColor: 'white',
        opacity: 0.5,
        elevation: 3,
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },
    infoText: {
        paddingVertical: 8,
        fontFamily: 'Lato-Bold',
        fontSize: 15,
        letterSpacing: .6,
        color: 'gray',
    },
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    buttonContiner: {
        height: 70,
        marginTop: 100,
    },
});