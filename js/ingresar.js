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
      this.iniciaBotones();
    },

    iniciaFastClick: function() {
      FastClick.attach(document.body);
    },

    iniciaFirebase: function() {
      firebase.initializeApp(this.firebaseConfig);
    },

    iniciaBotones: function() {
      var btncorreo=document.querySelector("#btnEntrar");
      btncorreo.addEventListener('click',this.ingresarconcorreo,false);
    },// Initialize Firebase

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
      alert("Contraseña o usuario invalidos");
     });
    }
  };

  if ('addEventListener' in document) {
    document.addEventListener("deviceready", function() {
      app.inicio();
    }, false);
  }
