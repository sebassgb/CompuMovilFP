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

  showInfo: function(nombreSilla, id) {//Traemos datos desde firebase
      var list = document.querySelector("#addImage");
      while (list.firstChild) {//Ciclo que elimina lo anterior
        list.removeChild(list.firstChild);
        }
      var li=document.createElement('li');
      li.innerHTML='<img src="../img/'+nombreSilla+'.png">';
      document.querySelector("#addImage").appendChild(li);
      var database = firebase.database(); // objeto para hacer uso de la bd
      var referencia = 'productos/'+nombreSilla;
      var bdEventos=database.ref(referencia);


      bdEventos.on('value', function(datos) {//Traemos de la BD los productos
        var datos =  datos.val();
  // capturamos los datos del formulario para registrar el usuario
        document.querySelector("#titleProduct").innerHTML = nombreSilla;
        document.querySelector("#refs").innerHTML = datos.categoria;
        document.querySelector("#category").innerHTML = datos.descripcion;
        document.querySelector("#price").innerHTML = datos.disponible;
        document.querySelector("#available").innerHTML = datos.garantia;
        document.querySelector("#weight").innerHTML = datos.marca;
        document.querySelector("#brand").innerHTML = datos.peso;
        document.querySelector("#garanty").innerHTML = datos.precio;
        document.querySelector("#description").innerHTML = datos.referencia;
  },function(objetoError){
          alert("error en la lectura "+objetoError.code);
      });
  }
};

if ('addEventListener' in document) {
  document.addEventListener("deviceready", function() {
    app.inicio();
  }, false);
}
