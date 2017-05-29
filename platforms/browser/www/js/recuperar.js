var app = {

  // Initialize Firebase
  firebaseConfig: {
    apiKey: "AIzaSyAyG1HV1xPaQcszIDZwSZVk4uMpcDldEso",
    authDomain: "tiendavirtual-81af8.firebaseapp.com",
    databaseURL: "https://tiendavirtual-81af8.firebaseio.com",
    projectId: "tiendavirtual-81af8",
    storageBucket: "tiendavirtual-81af8.appspot.com",
    messagingSenderId: "692746309618"
  },

inicio: function(){
  this.iniciaFirebase();
},

iniciaFirebase: function() {
  firebase.initializeApp(this.firebaseConfig);
},

recuperaPass: function(){
  var database = firebase.database(); // objeto para hacer uso de la bd
  var auth = firebase.auth();
  var emailAddress;
    emailAddress= document.querySelector("#correoPass").value;
    auth.sendPasswordResetEmail(emailAddress).then(function() {
    },function(error) {
    // An error happened.
    });
      alert("Mensaje Enviado");
}
  };

if ('addEventListener' in document) {
  document.addEventListener("deviceready", function() {
    app.inicio();
  }, false);
}
