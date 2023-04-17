import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  setEmail,
  setFirstName,
  setPassword,
  setWebsite,
} from '../actions/SignInAction';
import signInStyles from '../styles/signInStyles';
import textStrings from '../assets/textStrings';
import screenNames from '../navigation/screenNames';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidInput: false,
      isSubmitPressed: false,
    };
  }

  isValidInput() {
    const {email, password } = this.props;
    console.log(email+' '+password)
    
    if (
      email && email != '' &&
      password && password != ''
    ) {
      this.setState({ isValidInput: true });
      return true;
    }
    
    this.setState({ isValidInput: false });
    return false;
  }

  onSubmitPress() {
    const { navigate } = this.props.navigation;
    this.setState({ isSubmitPressed: true });

    if (this.isValidInput())
      navigate(screenNames.SignInSuccessScreen);
  }

  render() {  
    const {isValidInput, isSubmitPressed } = this.state;

    return (
      <LinearGradient 
        style={signInStyles.backgroundGradient}
        colors={['#00acdf', '#ccf9ff']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView 
            contentContainerStyle={signInStyles.contentContainer}
            behavior={'position'}
          >
            
            <View>
              <Text style={signInStyles.headerText}>
                {textStrings.profileCreationText}
              </Text>
            </View>

            <TouchableOpacity 
              style={signInStyles.profilePictureContainer}
              onPress={() => {
                this.props.navigation.navigate(screenNames.CameraScreen);
              }
              }
            >
              <SVGImageAssets.PersonIcon 
                style={{position: 'absolute', left: -118, top: 22}}
                height={120}
              />
              <Text style={signInStyles.addPictureText}>
                {textStrings.addPictureText}
              </Text>
            </TouchableOpacity>    

            <View style={signInStyles.inputContainer}>
              <Text style={signInStyles.descriptionText}>
                {textStrings.profileCreationDescriptionText}
              </Text>
              <TextInput
                style={signInStyles.textInput}
                placeholder={textStrings.firstNameText}
                placeholderTextColor={'gray'}
                onChangeText={
                  text => this.props.setFirstName(text)
                }
              />
              <TextInput
                style={signInStyles.textInput}
                placeholder={textStrings.emailText}
                placeholderTextColor={'gray'}
                keyboardType={'email-address'}
                onChangeText={
                  text => this.props.setEmail(text)
                }
              />
              <TextInput
                style={signInStyles.textInput}
                placeholder={textStrings.passwordText}
                placeholderTextColor={'gray'}
                onChangeText={
                  text => this.props.setPassword(text)
                }
              />
              <TextInput
                style={signInStyles.textInput}
                placeholder={textStrings.websiteText}
                placeholderTextColor={'gray'}
                keyboardType={'url'}
                onChangeText={
                  text => this.props.setWebsite(text)
                }
              />
            </View>
            
            <View style={signInStyles.buttonContiner}>
              <View style={signInStyles.errorMessageContainer}>
                  {isSubmitPressed && !isValidInput
                    ? <Text style={signInStyles.errorMessageText}>
                        {textStrings.emptyFieldText}
                      </Text>
                    : null
                  }
              </View>
              <TouchableOpacity
                style={signInStyles.submitButtonContainer} 
                onPress={() => this.onSubmitPress()}
              >
                <LinearGradient 
                  style={signInStyles.submitButton}
                  colors={['#0080bf', '#7ce8ff']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                >
                  <Text style={signInStyles.buttonText}>
                    {textStrings.submitText}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </LinearGradient>  
    );  
  }
}

export const mapStateToProps = state => ({
  firstName: state.signInReducer.firstName,
  email: state.signInReducer.email,
  password: state.signInReducer.password,
  website: state.signInReducer.website,
});

export const mapDispatchToProps = dispatch => ({
  setFirstName: name => dispatch(setFirstName(name)),
  setEmail: email => dispatch(setEmail(email)),
  setPassword: password => dispatch(setPassword(password)),
  setWebsite: website => dispatch(setWebsite(website)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)