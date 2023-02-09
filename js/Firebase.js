import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

<div>Identity Platform Quickstart</div>
<div id="message">Loading...</div>
<script src="https://www.gstatic.com/firebasejs/8.0/firebase.js"></script>
<script>
  var config = {
    apiKey: "AIzaSyD_ei--SyNbBsfC7kwn4LSmDJRce5-ZWbk",
    authDomain: "capstone-project-375618.firebaseapp.com",
  };
  firebase.initializeApp(config);
</script>

<script>
    var email = "EMAIL_ID";
    var password = "PASSWORD";
  
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        document.getElementById("message").innerHTML = "Welcome, " + user.email;
     } else {
        document.getElementById("message").innerHTML = "No user signed in.";
      }
    });
  
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      document.getElementById("message").innerHTML = error.message;
    });
  </script>
