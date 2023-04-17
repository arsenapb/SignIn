import React, { Component } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
// import { RNCamera } from 'react-native-camera'

export default class CameraView extends Component {

    render() {
        return (
            <View style={styles.container}>
            <RNCamera
                style={{ flex: 1, alignItems: 'center' }}
                ref={ref => {
                    this.camera = ref
                }}
            />
            </View>
        )
    }
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'transparent'
    }
})
