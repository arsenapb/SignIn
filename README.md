# SignIn
A simple three page application, to demonstrate a sign in work flow.

<h2>Sign In Screen</h2>
Here the user can enter information to build their profile, there are inputs for the user's first name, email, password and website.<br>
The email and password fields are required, so they must be filled out in order to progress to the next screen.<br>
<br>
Additionally, the user can opt to add a profile picture by tapping on the default person icon on the screen. Pressing this will take the <br>
user to the Camera View, where the user may take a photo to use as their profile picture.<br>
<br>
The profile picture and information from the user's input are taken and stored in a Redux state, to be easily accessible in other parts<br>
of the application.<br>
<br>

<h2>Sign In Success Screen</h2>
This screen simply displays the user's profile picture and input.<br>
Confirming that it has been stored successfuly and the user's account would be activated.<br>
<br>

<h2>Camera View Screen</h2>
This screen is a simple full page camera, and allows the user to take a picture that they may use for their profile picture.<br>
<br>
Pressing the capture button on the bottom of the screen will take a picture, and save it to the phone's photos.<br>
At this point a popup will appear, asking the user to accept or retake the picture.<br>
<br>
Selecting to retake the photo will close the popup and allow the user to take another picture. <br>
While selecting accept will navigate the user back to the Sign In Screen, with the new picture displayed.<br>
<br>
