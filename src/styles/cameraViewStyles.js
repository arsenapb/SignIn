import { StyleSheet } from "react-native";

export default cameraViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backArrowContainer: {
        height: 50,
        width: 50,
        backgroundColor: '#00acdf',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        top: 25,
        left: 25,
        position: 'absolute'
    },
    takePictureButton: {
        position: 'absolute',
        bottom: 40,
        height: 90,
        width: 90,
        borderRadius: 45,
        borderWidth: 8,
        borderColor: 'white', 
    },
    photoPopupContainer: {
        marginBottom: 120,
        height: 550,
        width: 320,
        borderRadius: 30,
        elevation: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoContainer: {
        marginTop: 50,
        marginBottom: 30,
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    photo: {
        height: '100%',
        borderRadius: 100,
    },
    buttonsContainer: {
        width: '85%',
        height: 50,
        marginTop: 20,
        marginHorizontal: 40,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#00acdf',
        alignItems: 'center',
        justifyContent: 'center',
    }
});