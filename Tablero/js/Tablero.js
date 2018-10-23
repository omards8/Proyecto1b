function pedirDatos() {
  dato = Number(prompt("Introduzca el numero (Entre 1 y 6)"));
  return dato;
}

function comprobarRango(columnas, filas) {
  alert("Comprobacion de columnas");
  if (columnas < 1 || columnas > 6 )  {
    var ok = false;
    alert("Columnas:Dato incorrecto");
  }
  alert("Comprobacion de filas");
  if (filas < 1 || filas > 6) {
    ok = false;
    alert("Filas:Dato incorrecto");
  }
  else {
      ok = true;
      alert("Columnas:Dato correcto");
      alert("Filas:Dato correcto");
  }
  return ok;
}
alert("El programa le pedira el numero de columnas y de filas para crear un tablero");
alert("Numero de columnas");
var col = pedirDatos();
alert("Numero de filas");
var fil = pedirDatos();

comprobarRango(col, fil);
