// Initialize Firebase
var config = {
  apiKey: "AIzaSyAyG1HV1xPaQcszIDZwSZVk4uMpcDldEso",
  authDomain: "tiendavirtual-81af8.firebaseapp.com",
  databaseURL: "https://tiendavirtual-81af8.firebaseio.com",
  projectId: "tiendavirtual-81af8",
  storageBucket: "tiendavirtual-81af8.appspot.com",
  messagingSenderId: "692746309618"
};
firebase.initializeApp(config);  // objeto para aceder a la bd
//variables


var database = firebase.database(); // objeto para hacer uso de la bd
var auth=firebase.auth();
var ucorreo;
var ucontra;
// BOTONES CON SUS FUNCIONES

// BTN ingresar con correo
var btncorreo=document.getElementById("btnEntrar");
btncorreo.addEventListener('click',ingresarconcorreo,false);


//****************** FUNCIONES DE INGRESO *************************************************

// 1) CORREO Y CONTRASEÑA

function ingresarconcorreo(){
  // capturamos los datos del fomulario ingresar
ucorreo=document.getElementById("userEmail").value;
ucontra=document.getElementById("userPass").value;

// logeamos a el usuario
const promise=auth.signInWithEmailAndPassword(ucorreo,ucontra);

promise.then(function(snapshot){
    location.href="html/lobby.html"; // lo redireccionamos a la parte de ingresar para que ingrese a la aplicacion
});

// en caso de un error en el logeo
promise.catch(function(error) {
   alert(erroreslogin(error));
});

}


//****************************************************************
