//obtener todos los datos del localstorage

let fuentesAlmacenamiento = [window.localStorage, window.sessionStorage];

const tabla = document.getElementById("tbody");

for (let j = 0; j < fuentesAlmacenamiento.length; j++) {
   let myStorage = fuentesAlmacenamiento[j];
   

  for (let i = 0; i < myStorage.length; i++) {
    //Usando createElement
    /*
    let fila=document.createElement('tr');
    let celda=document.createElement('td');
    let texto=document.createTextNode(myStorage.key(i));
    celda.appendChild(texto);
    fila.appendChild(celda);
    celda=document.createElement('td');
    texto=document.createTextNode(myStorage.getItem(myStorage.key(i)));
    celda.appendChild(texto);
    fila.appendChild(celda);
    tabla.appendChild(fila);
    */

    //Usando innerHTML
    /*Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. 
    Con ellas, es posible utilizar cadenas de caracteres de más de una línea, 
    y funcionalidades de interpolación de cadenas de caracteres.
    */
    tabla.innerHTML += `<tr><td>${myStorage.key(i)}</td><td>${myStorage.getItem(
      myStorage.key(i)
    )}</td></tr>`;
  }
}

/*
//Agregar una fila a la tabla
let fila=tabla.insertRow(i);
//Agregar una celda a la fila
let celda=fila.insertCell(0);
//Agregar un texto a la celda
let texto=document.createTextNode(myStorage.key(i));
celda.appendChild(texto);
//Agregar una celda a la fila
celda=fila.insertCell(1);
//Agregar un texto a la celda
texto=document.createTextNode(myStorage.getItem(myStorage.key(i)));
celda.appendChild(texto);
*/
