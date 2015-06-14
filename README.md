# Period Saver 

#<i>Description</i>
<p>When women start having their period and realize that they do not have any sanitary pads within reach they don't feel very comfortable. This is where Period Saver comes in. When a woman opens this app a list of other women (who happen to have sanitary pads) is shown. These women are nearby. The woman can ask them for help by sending them a text or Whatsapp message. They decide a place where they can meet to hand over some sanitary pads. </p>   

#<i>Functions</i>
<i>1. Register & login</i>
<p>The registerpage is short and simple. The user has to fill in her username and a password and <i>indicate wether she is in need of sanitary pads or if she wants to help someone</i>.</p>
<p>The loginpage is very simple. The user fills in her username and password and tabs the button "login"</p>
<p>To view how it's done, i've summed up the following pages; </br>
- index.html : Page with inlog form. The values are redirecting towards the function loginForm.submit in the index.js file. This function sends the values to the server (http://maritapeeters.nl/periodsaver/login.php), where it checks if the values are similar with the values in the database.When it's similar, the application redirects you towards the dashboard.html with the userID that logged in. If it isn't similar, you'll get an error on the same page. </br>
- register.html : Page with the register form. The values are redirecting towards the function registerForm.submit in the index.js file. This function sends the values to the server (http://maritapeeters.nl/periodsaver/save.php), where it checks if the values are valid to insert in the database. It checks if the username already excists. When it does it returns an error. </br>
</br>
The user can logout in the menu of the application. The logout-function in controller.js -- AppCtrl sends the user back to the index.html </p>


<i>2. Displaying list of superwomen</i>
<p>When a user asks for help a list of potential helpers is shown. This list is based on the distance between the user and women who happen to be in the possession of sanitary pads. The distance is calculated using the latitude and longitude, which will be refreshed every 5 minutes.</p>
<p>To view how it's done, i've summed up the following pages; </br>
- dashboard.html : In this html file it loads the ionic starter module in the app.js and redirects us towards the app/dashboard / DashboardCtrl in controller.js, which loads the listoftargets.html and the app/ AppCtrl, which loads the menu.html</br>
- menu.html : Ionic view with a slide navigation. It reads the values with AppCtrl. The menulist has the following options; <p> profile - it goes to #/app/dashboard/profile , it opens ProfileCtrl / profile.html. The ProfileCtrl sends the userId to the server (http://maritapeeters.nl/periodsaver/getdataprofile.php), which gives back the values of the user with that userId. Also the profilepage can delete the user with the function deleteuser. deleteuser() sends the userId towards the server(http://maritapeeters.nl/periodsaver/delete.php) and deletes that specific user out of the database.   </p>
<p> superwomen - it goes to default dashboard; #/app/dashboard, it opens dashboard.html  </p>
<p> Log out -Goes to the logout function in the AppCtrl, it sends the user back to index.html </p>
</br>
The AppCtrl reads the UserId from the URL with $location and returns it in a $scope , so every controller can reach it. Furthermore, the AppCtrl calls the interval-function callAtInterval every 5 minutes, which reads the longitude and latitude from the user and sends it to the server (http://maritapeeters.nl/periodsaver/getdatauser.php), which updates the longitude and latitude in the database.</br>
- listoftargets.html : Ionic view with a list in the content. It reads the values with DashboardCtrl. The DashboardCtrl sends the userId to the server (http://maritapeeters.nl/periodsaver/getdatasuperwomen.php), where it gives back all the other members in the database and calculates the distance between the user that is logged in and other users. </br>
</br>
</p>

<i>3. Sending messages</i>
<p>When a user has found someone who can help her she can send a text by tabbing the button. Currently a textmessage will be sent automatically. This is because not all people want their phonenumber to be public.</p>
<p>To view how it's done, i've summed up the following pages;</br>
- playlist.html : Ionic view with a list content. When the user clicked on a name in the listoftargets it goes to the following route : #/app/dashboard/{{playlist.naam}}, which redirects it towards playlist.html with the PlaylistCtrl. The PlaylistCtrl reads the username with stateparams and sends the value to the server (http://maritapeeters.nl/periodsaver/getdatauser.php), that gives back the data connected with that username (!important - a username is unique) </br>
- telephone.js : There is a plugin installed named Cordova SMS Plugin. At the playlist.html there is a button with contactme. When an user clicks on that button it calls the function contactme({{playlist.telephone}}) in PlaylistCtrl, which sends a SMS towards playlist.telephone (Data/telephonenumber from the user in the database)  </br>
</br>
</p>

</p>

<i>4. Adjust Profile </i>
<p>To adjust your profile one has to go to the menu en tab Profile. <i>The user can add a profile pic, adjust her username, chose "in need of sanitary pads" or "in possession of sanitary pads", the brand and sort.</i></p>

#<i>Plugins</i>
<p>The plugins used in this app are the following: 
Cordova, 
Simon Macdonald telephonenumber, 
Cordova plugin whitelist, 
Cordova Geolocation,
Cordova SMS Plugin</p>
