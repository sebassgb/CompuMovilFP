var config = {
      apiKey: "AIzaSyAyG1HV1xPaQcszIDZwSZVk4uMpcDldEso",
      authDomain: "tiendavirtual-81af8.firebaseapp.com",
      databaseURL: "https://tiendavirtual-81af8.firebaseio.com",
      projectId: "tiendavirtual-81af8",
      storageBucket: "tiendavirtual-81af8.appspot.com",
      messagingSenderId: "692746309618"
};

firebase.initializeApp(config);  // objeto para aceder a la bd
showTable();


function showTable() {//Traemos datos desde firebase
    var database = firebase.database(); // objeto para hacer uso de la bd
    var referencia = 'productos/';
    var bdEventos=database.ref(referencia);

    bdEventos.on('value', function(datos) {//Traemos de la BD los productos
      var i=0, j=0;
      var datos =  datos.val();
     $.each(datos,function(indice,valor)//Recorremos el arbol obteniendo los datos
     {
        document.querySelector("#category"+i).innerHTML =valor.categoria;
        document.querySelector("#price"+i).innerHTML =valor.precio;
        document.querySelector("#available"+i).innerHTML =valor.disponible;
         i++;
     });
},function(objetoError){
       alert("error en la lectura "+objetoError.code);
    });
}
