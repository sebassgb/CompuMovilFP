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

  getDatos: function() {
    var unombre;
    var ucorreo;
    var upass;
    var urepass;
 // capturamos los datos del formulario para registrar el usuario
     unombre = document.querySelector("#userName").value;
     ucorreo= document.querySelector("#userEmail").value;
     upass= document.querySelector("#userPass").value;
     urepass=document.querySelector("#userRepass").value;

    if(app.validarcamposformulario(unombre,ucorreo,upass,urepass)==false){ // validamos que los campos del formulario sea valido
        app.crearusuario(unombre,ucorreo,upass,urepass);// creamos el usuario, luego de las validaciones
    }
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
        var sinpunto=this.quitarPuntoCorreo(correo);
        database.ref("usuarios/"+sinpunto).update(usr);
        location.href="../index.html"; // lo redireccionamos a la parte de ingresar para que ingrese a la aplicacion
    });
// en caso de ERROR se informa cual es el error
// funcion callback se ejecuta luego del registro
    promise.catch(function(error){
        alert(app.erroresCreacionUsuarios(error));
    });
},

replaceEvery: function(correo, target, replacement){
  var auxString=correo.split(target);
  auxString=auxString.join(replacement);
  return auxString;
},// funcion que remplaza todas la ocurrencias de un string en un string por otro string target es el string a remplazar y replacement es el string por el que se desea remplazar como se usa prototype esta funcion se invoca sobre los obejtos de tipo string

quitarPuntoCorreo: function(mcorreo){ // funcion encargada de remplazar los . de los correos por espacios para poder ingresarlos en la raiz del nodo de la bd en firebase
    var resp=app.replaceEvery(mcorreo,"."," ");
    return resp;
},

erroresCreacionUsuarios: function(error){ // metodo que identifica el error que sucede al crear el usuario y retorna un string o mensaje con el error que sucedio de una manera mas amigable para el usuario.
var cuentaenuso="The email address is already in use by another account.";
var contrasenacorta="Password should be at least 6 characters";
var correoinvalido ="";// fala confirmar que el correo sea valido
var correonovalido="The email address is badly formatted.";
var tipoerror=error.message; //almacenamos el tipo de error queda almacenado en el objeto error
//window.errorencreacion=true;
var mensaje="exito";// mensaje a retornar dependiendo el error

    switch(tipoerror) {
        case cuentaenuso:
            mensaje="el correo se encuentra en uso";
            break;
        case contrasenacorta:
            mensaje="la contraseña debe contener minimo 6 caracteres";
            break;
        case correonovalido:
            mensaje="el correo no es valido";
           break;
    }
return mensaje;
},

// error en los mensaje de correo existente

// validar todos los campos del formulario de registro
validarcamposformulario: function(nombre,correo,pass,rpass){
  var rs=false;

   if (nombre.length==0) {
    alert("falta el nombre");
    rs=true;
   }
   if (correo.length==0) {
    alert("falta el correo");
    rs=true;
   }
   if (pass.length==0) {
    alert("falta la contraseña");
    rs=true;
   }
   if (rpass.length==0) {
    alert("falta la repeticion de contraseña");
    rs=true;
   }
  if(pass != rpass ){ // validamos que las contraseñas conincidan
    alert("la contraseñas no coinciden");
    rs=true;
  }
  return rs;
  }

};

if ('addEventListener' in document) {
  document.addEventListener("deviceready", function() {
    app.inicio();
  }, false);
}
