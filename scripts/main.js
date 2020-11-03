
// Initialize Firebase
var config = {
    apiKey: "",
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
firebase.auth().signInWithEmailAndPassword(email,passw).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	  });

document.getElementById('File').addEventListener('change', newCampaign, false);

function newCampaign(evt){
	var r = confirm("Êtes vous sûr de vouloir commencer une nouvelle campagne?");
	
	if (r == true) {
		// Check for the various File API support.
		if (window.File && window.FileReader && window.FileList && window.Blob) {
	        // Delete current survey data. Save it somewhere maybe?
	        var db = firebase.database().ref('survey').remove();
	        
			var files = evt.target.files; 
			var file  = files[0];
			// Create the file metadata
			var metadata = {
			  contentType: 'application/json'
			};
			// Create a root reference
			var storageRef = firebase.storage().ref();
			// Create a reference to 'images/mountains.jpg'
			var fileToUpload = storageRef.child('current_survey/survey.json');
			// Upload file and metadata to the object 'images/mountains.jpg'
			var uploadTask = storageRef.child('current_survey/' + file.name).put(file, metadata);
			
		} else {
		  alert('The File APIs are not fully supported in this browser.');
		}
	}
}
