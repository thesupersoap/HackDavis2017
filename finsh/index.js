var config = {
    apiKey: "AIzaSyBZanPJnJsLtmx5--EmfnxsMPGNrF6idNA",
    authDomain: "hackdavis2017-fbda4.firebaseapp.com",
    databaseURL: "https://hackdavis2017-fbda4.firebaseio.com",
    storageBucket: "hackdavis2017-fbda4.appspot.com",
    messagingSenderId: "660390013154"
  	};
firebase.initializeApp(config);

var database = firebase.database();

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

writeUserData('jkstein', 'Sunny', 'jarred@gmail.com', 'url');