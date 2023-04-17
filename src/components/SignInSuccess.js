import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import textStrings from '../assets/textStrings';
import signInStyles from '../styles/signInStyles';
import signInSuccessStyles from '../styles/signInSuccessStyles';
import SVGImageAssets from '../assets/SVGImageAssets';

export class SignInSuccess extends Component {

    render() {  
      const { firstName, email, website } = this.props;

      return (
        <LinearGradient
          style={signInStyles.backgroundGradient}
          colors={['#00acdf', '#ccf9ff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
        >
          <View style={signInStyles.contentContainer}>
              
            <View>
              <Text style={signInSuccessStyles.headerLeftText}>
                {textStrings.greetingText}
              </Text>
              <Text style={signInSuccessStyles.headerRightText}>
                {firstName}!
              </Text>
              <Text style={signInStyles.descriptionText}>
                {textStrings.greetingDescriptionText}
              </Text>
            </View>

            <View style={signInSuccessStyles.userProfileContainer}>
              <View style={signInSuccessStyles.profilePictureContainer}>
                <SVGImageAssets.PersonIcon 
                  style={{left:-118, top: 10}}
                  height={120}
                />
              </View>
              <View style={signInSuccessStyles.userInfoContainer}>
                <Text style={signInSuccessStyles.infoText}>
                  {firstName}
                </Text>
                <Text style={signInSuccessStyles.infoText}>
                  {email}
                </Text>
                <Text style={[signInSuccessStyles.infoText, signInSuccessStyles.linkText]}>
                  {website}
                </Text>
              </View>
            </View>   
            
            <View style={signInSuccessStyles.buttonContiner}>
              <TouchableOpacity
                style={signInStyles.submitButtonContainer} 
                onPress={() => {}}
              >
                <LinearGradient 
                  style={signInStyles.submitButton}
                  colors={['#0080bf', '#7ce8ff']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                >
                  <Text style={signInStyles.buttonText}>
                    {textStrings.signInText}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

          </View>
        </LinearGradient> 
      );  
    }
  }

  export const mapStateToProps = state => ({
    firstName: state.signInReducer.firstName,
    email: state.signInReducer.email,
    website: state.signInReducer.website,
  });
  
  export default connect(mapStateToProps, {})(SignInSuccess)