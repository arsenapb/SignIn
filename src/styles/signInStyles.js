import { StyleSheet } from "react-native";

export default signInStyles = StyleSheet.create({
    backgroundGradient: {
        height: '100%',
    },
    contentContainer: {
        height: 780,
        margin: 40,
        padding: 34,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: '#fdfdfd',
    },
    inputContainer: {
        height: 350,
    },
    buttonContiner: {
        height: 70,
        marginTop: 10,
    },
    headerText: {
        marginTop: 5,
        alignSelf: 'center',
        fontFamily: 'Lato-Bold',
        fontSize: 55,
        lineHeight: 60,
        color: '#00acdf',
    },
    descriptionText: {
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: 'gray',
    }, 
    placeholderText: {
        marginTop: 20,
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: 'gray',
    },
    textInput: {
        height: 43,
        marginTop: 20,
        paddingHorizontal: '6%',
        borderRadius: 25,
        elevation: 2.5,
        backgroundColor: 'white',

        fontFamily: 'Lato-Bold',
        fontSize: 14,
        letterSpacing: .6,
        color: 'gray',
    },
    submitButtonContainer: {
        height: 57,
        marginTop: 2,
    },
    submitButton: {
        height: 57,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    buttonText: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    errorMessageContainer: {
        height: 28,
        marginTop: 5,
    },
    errorMessageText: {
        textAlign: 'center',
        fontFamily: 'Lato-Italic',
        fontSize: 13,
        color: 'red',
        letterSpacing: 1,
    },
    emptyProfilePictureContainer: {
        marginTop: 15,
        height: 150,
        width: 150,
        borderRadius: 80,
        borderWidth: 3,
        borderColor: 'white',
        opacity: 0.5,
        elevation: 3,
        alignSelf:'center',
        justifyContent: 'center',
    },
    emptyProfilePicture: {
        position: 'absolute', 
        left: -118, 
        top: 22
    },
    profilePictureContainer: {
        marginTop: 15,
        height: 150,
        width: 150,
        borderRadius: 80,
        borderWidth: 3,
        borderColor: 'white',
        elevation: 3,
        alignSelf:'center',
        justifyContent: 'center',
    },
    profilePicture: {
        height: '100%',
        borderRadius: 80,
    },
    addPictureText: {
        marginTop: 55,
        textAlign: 'center',
        fontFamily: 'Lato-Bold',
        fontSize: 11,
        color: 'gray',
        letterSpacing: .6,
    },
});