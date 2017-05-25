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

  showInfo: function(nombreSilla, id) {
    var h1name; var refsText; var categoryText; var priceText;
    var availableText; var weightText; var brandText; var garantyText; var descriptionText;

 // capturamos los datos del formulario para registrar el usuario
     h1name = document.querySelector("#titleProduct");
     refsText= document.querySelector("#refsText");
     categoryText= document.querySelector("#categoryText");
     priceText= document.querySelector("#priceText");
     availableText= document.querySelector("#availableText");
     weightText= document.querySelector("#weightText");
     brandText= document.querySelector("#brandText");
     garantyText= document.querySelector("#garantyText");
     descriptionText= document.querySelector("#descriptionText");
     h1name.text = nombreSilla;
     refsText.text= varName;
     categoryText.text= varName;
     priceText.text= varName;
     availableText.text= varName;
     weightText.text= varName;
     brandText.text= varName;
     garantyText.text= varName;
     descriptionText.text= varName;
  },

crearusuario: function(nombre,correo,pass,repass){
  var database = firebase.database(); // objeto para hacer uso de la bd


    // cramos el objeto a guardar en la base de datos en forma JSON
    var usr= {
            nombre :nombre,
            correo : correo,
            pass: pass
     }

     // creamos el usuario en la parte de Authentication para poder manejar facilmente los logeos y el restablecimiento de contraseña.
    const auth=firebase.auth(); // obejto usado para crear usuaios con correo y contraseña.
    const promise=auth.createUserWithEmailAndPassword(correo,pass);
          // se procede a insertar en la base de datos el objeto creado, en la raiza usuarios

    // en caso de exito en la creacion del usuario en la BD en la parte de authentificationm  procedemos a crearlo en la Real timer "BATABASE"
    promise.then(function(snapshot){
        var sinpunto=app.quitarPuntoCorreo(correo);
        database.ref("usuarios/"+sinpunto).update(usr);
        location.href="../index.html"; // lo redireccionamos a la parte de ingresar para que ingrese a la aplicacion
    });
// en caso de ERROR se informa cual es el error
// funcion callback se ejecuta luego del registro
    promise.catch(function(error){
        alert(app.erroresCreacionUsuarios(error));
    });
}
};

if ('addEventListener' in document) {
  document.addEventListener("deviceready", function() {
    app.inicio();
  }, false);
}
