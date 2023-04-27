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

<img src="https://user-images.githubusercontent.com/61637095/234722713-2e8cf67a-db8a-4867-ac2c-ca377b3c6c75.png" width="206" height="457"> <img src="https://user-images.githubusercontent.com/61637095/234724393-b8902e06-2139-4b6f-a1a5-67fec0e5704d.png" width="206" height="457">

<h2>Camera View Screen</h2>
This screen is a simple full page camera, and allows the user to take a picture that they may use for their profile picture.<br>
<br>
Pressing the capture button on the bottom of the screen will take a picture, and save it to the phone's photos.<br>
At this point a popup will appear, asking the user to accept or retake the picture.<br>
<br>
Selecting to retake the photo will close the popup and allow the user to take another picture. <br>
While selecting accept will navigate the user back to the Sign In Screen, with the new picture displayed.<br>
<br>

<img src="https://user-images.githubusercontent.com/61637095/234723985-09cca4d6-a8eb-4f4a-8ead-89000c35d393.png" width="206" height="457"> <img src="https://user-images.githubusercontent.com/61637095/234724104-c56c24b6-9399-4298-a419-f2e7dab9d8cb.png" width="206" height="457">

<h2>Sign In Success Screen</h2>
This screen simply displays the user's profile picture and input.<br>
Confirming that it has been stored successfuly and the user's account would be activated.<br>
<br>

<img src="https://user-images.githubusercontent.com/61637095/234723847-89cefe48-2666-4b96-b5b3-aa9feba98e6d.png" width="206" height="457"> <img src="https://user-images.githubusercontent.com/61637095/234724232-774d0121-771a-484b-93be-3d17f48db55f.png" width="206" height="457">

