
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBSu9flb1cs58EAbtCbWUKomVCfXkTKYeU",
    authDomain: "caritas-50fab.firebaseapp.com",
    databaseURL: "https://caritas-50fab.firebaseio.com",
    projectId: "caritas-50fab",
    storageBucket: "caritas-50fab.appspot.com",
    messagingSenderId: "414267024306"
};
  
var email = env.USER;
var passw = env.PASS;
 
  
firebase.initializeApp(config);   
firebase.auth().signOut();
firebase.auth().signInWithEmailAndPassword(email, passw).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	  });
