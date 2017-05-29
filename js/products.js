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
    this.showTable();
},

  iniciaFirebase: function() {
    firebase.initializeApp(this.firebaseConfig);
},

  showTable: function(){//Traemos datos desde firebase
      var database = firebase.database(); // objeto para hacer uso de la bd
      var referencia = 'productos/';
      var bdEventos=database.ref(referencia);

      bdEventos.on('value', function(datos) {//Traemos de la BD los productos
        var datos = datos.val();
        var i=0;
       $.each(datos,function(indice,valor)
       {
         document.querySelector("#category"+i).innerHTML = valor.categoria;
         document.querySelector("#price"+i).innerHTML = valor.precio;
         document.querySelector("#available"+i).innerHTML = valor.disponible;
           i++;
       });
  // capturamos los datos del formulario para registrar el usuario

  },function(objetoError){
        // alert("error en la lectura "+objetoError.code);
      });
  }
};

if ('addEventListener' in document) {
  document.addEventListener("deviceready", function() {
    app.inicio();
  }, false);
}
