import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

import { setProfilePicture } from '../actions/SignInAction';
import cameraViewStyles from '../styles/cameraViewStyles';
import textStrings from '../assets/textStrings';
import signInStyles from '../styles/signInStyles';
import SVGImageAssets from '../assets/SVGImageAssets';

export default function CameraView({ navigation }) {

    const [{ cameraRef }, { takePicture }] = useCamera(null);

    const dispatch = useDispatch()

    const [photo, setPhoto] = useState(null);

    const handleTakePicture = async () => {
        try {
            const data = await takePicture();
            
            const filePath = data.uri;
            await CameraRoll.save(filePath);
            
            var res = await CameraRoll.getPhotos({
                first: 1,
                assetType: 'Photos',
            });

            setPhoto(res.edges[0]);
        } catch (error) {
            console.log(error);
        }
    }

    const handleAcceptPress = () => {
        dispatch(setProfilePicture(photo));
        navigation.goBack();
    }

    const renderPhotoPopup = () => {
        return (
            <View style={cameraViewStyles.photoPopupContainer}>
                <View style={cameraViewStyles.photoContainer}>
                    <Image 
                        style={cameraViewStyles.photo}
                        source={{ uri: photo.node.image.uri }}
                    />
                </View>
                <Text style={signInStyles.descriptionText}>
                    {textStrings.acceptPhotoText}
                </Text>
                <TouchableOpacity 
                    style={cameraViewStyles.buttonsContainer}
                    onPress={() =>
                        handleAcceptPress()
                    }
                >
                    <Text style={signInStyles.buttonText}>
                        {textStrings.acceptText}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={cameraViewStyles.buttonsContainer}
                    onPress={() =>
                        setPhoto(null) 
                    }
                >
                    <Text style={signInStyles.buttonText}>
                        {textStrings.retakeText}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={cameraViewStyles.container}>
            <RNCamera
                style={cameraViewStyles.preview}
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
            >
                <TouchableOpacity
                    style={cameraViewStyles.backArrowContainer}
                    onPress={() => navigation.goBack()}
                >
                    <SVGImageAssets.BackArrow height={20}/>
                </TouchableOpacity>
                { photo ? renderPhotoPopup() : null }
                <TouchableOpacity
                    style={cameraViewStyles.takePictureButton}
                    onPress={() => handleTakePicture()}
                />
            </RNCamera>
            
        </View>
    );
}
