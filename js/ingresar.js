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
      this.iniciaFastClick();
      this.iniciaFirebase();
    },

    iniciaFastClick: function() {
      FastClick.attach(document.body);
    },

    iniciaFirebase: function() {
      firebase.initializeApp(this.firebaseConfig);
    },
   //****************** FUNCIONES DE INGRESO *************************************************

    // 1) CORREO Y CONTRASEÑA

    ingresarconcorreo: function(){
      var database = firebase.database(); // objeto para hacer uso de la bd
      var auth=firebase.auth();
      var ucorreo;
      var ucontra;
      // capturamos los datos del fomulario ingresar
    ucorreo=document.querySelector("#userEmail").value;
    ucontra=document.querySelector("#userPass").value;
    // logeamos a el usuario
    const promise=auth.signInWithEmailAndPassword(ucorreo,ucontra);
    promise.then(function(snapshot){
        location.href="html/lobby.html"; // lo redireccionamos a la parte de ingresar para que ingrese a la aplicacion
      });
    // en caso de un error en el logeo
    promise.catch(function(error) {
      alert("Usuario o Correo invalido");
     });
    }
  };

  if ('addEventListener' in document) {
    document.addEventListener("DOMContentLoaded", function() {
      app.inicio();
    }, false);
  }
