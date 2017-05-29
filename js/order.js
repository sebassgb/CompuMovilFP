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

putInfo: function (nombreProducto){//Obtenemos el seleccionado por el usuario
  document.querySelector("#nomProduct").value = nombreProducto;
},

makeOrder: function(){
  if(this.verificaDatos()){
  var database = firebase.database();
  var nombreProduct=document.querySelector("#nomProduct").value;
  var direccion=document.querySelector("#dirProduct").value;
  var tel=document.querySelector("#telfProduct").value;
  var dia=document.querySelector("#diaProduct").value;
  var correou=document.querySelector("#correoProduct").value;
  var numcard=document.querySelector("#numtProduct").value;
			var referencia="ordenes/";

			var ordenCreada={
        producto: nombreProduct,
        dir: direccion,
        num_card: numcard,
        pref: dia,
        telf: tel,
        correo: correou
			   }
			database.ref(referencia).push(ordenCreada);
      setTimeout(this.redirect, 2000);
      }
    }

    redirect: function(){
    alert('Orden Generada con éxito');
    location.href="lobby.html";
  }

verificaDatos: function(){//Verificamos que todo este correcto
  if(document.querySelector("#nomProduct").value.length==0){
    alert("Seleccione un producto de la lista");
    return false;
    }
   if (document.querySelector("#dirProduct").value.length==0) {
    alert("falta dirección");
    return false;
    }
   if (document.querySelector("#telfProduct").value.length==0) {
    alert("falta el Teléfono");
    return false;
    }
   if (document.querySelector("#diaProduct").value.length==0) {
    alert("falta el dia preferido");
    return false;
    }
   if (document.querySelector("#correoProduct").value.length==0) {
    alert("falta el correo");
    return false;
    }
   if (document.querySelector("#numtProduct").value.length==0) {
    alert("falta el Número de tarjeta");
    return false;
    }
return true;
  }
};

if ('addEventListener' in document) {
  document.addEventListener("deviceready", function() {
    app.inicio();
  }, false);
}
