const firebaseConfig = {
  apiKey: "AIzaSyASNiPF94T_wxLDQ7i1hXEjml4fNyu3lO8",
  authDomain: "samaveda-foundation.firebaseapp.com",
  projectId: "samaveda-foundation",
  storageBucket: "samaveda-foundation.appspot.com",
  messagingSenderId: "1099356436681",
  appId: "1:1099356436681:web:17c2552af4e795b1e9b518",
  measurementId: "G-6PPX3ZEVXY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

  function signUp(){
    console.log("inside signUp")
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up Successfully");
  }
  
  function signIn(){
    console.log("inside signIn")
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Logged Successfully");
    window.location.replace("home.html");
  }

  function signOut(){
    auth.signOut();
    alert("Signed Out");
    window.location.replace("index.html");
  }


  auth.onAuthStateChanged(function(user){
    if(user){
      var email = user.email;
      alert("Active Users are there!");
    }
    else{
      alert("No Active User");
    }
  });


