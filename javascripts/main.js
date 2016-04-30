String.prototype.replaceAll = String.prototype.replaceAll || function(needle, replacement) {
return this.split(needle).join(replacement);
};
function addInputTerminal() {}
function addInputNaoTerminal() {}
function tem_maiusculas(texto) {
var letras_mayusculas = "ABCDEFGHYJKLMNOPQRSTUVWXYZ";
for (i = 0; i < texto.length; i++) {
if (letras_maiusculas.indexOf(texto.charAt(i), 0) != -1) {
return 1;
}
}
return 0;
}
function tem_apenas_minusculas(texto) {
var letras_minusculas = "abcdefghyjklmnopqrstuvwxyz";
for (i = 0; i < texto.length; i++) {
if (letras_minusculas.indexOf(texto.charAt(i), 0) != -1) {
return 1;
}
}
return 0;
}
function replaceAll(str, needle, replacement) {
return str.split(needle).join(replacement);
}
function replace_all(string, encontrar, substituir) {
while (string.indexOf(encontrar) >= 0)
string = string.replace(encontrar, substituir);
return string;
}
function myFunction() {
var NT1 = document.getElementById('NT1');
var NT2 = document.getElementById('NT2');
var NT1_1 = document.getElementById('NT1_1');
var NT2_1 = document.getElementById('NT2_1');
var resultadosSemNT = new Array;
var aposReplace = NT1_1.value.replaceAll(NT1.value, NT1_1.value);
aposReplace = aposReplace.replaceAll(NT2.value, NT2_1.value);

if (tem_apenas_minusculas(aposReplace)) {
resultadosSemNT.push(aposReplace);
}
resultadosSemNT.sort();

console.log(resultadosSemNT.toString());

document.getElementById("resposta").innerHTML = resultadosSemNT.toString();
}

var numerolinhas = 2
function AddTableRow() {
var newRow = $("<tr>");
  var cols = "";
  cols += '<td><input type="text" id="NT2"> -></td>';
  cols += '<td><input type="text" id="NT2_1"></td>';
  cols += '<td><button onclick="AddTableCol(this)" type="button" class="btn">+</button></td>';
  cols += '<td><button onclick="RemoveTableRow(this)" type="button" class="btn">-</button></td>';
  newRow.append(cols);
  $("#table").append(newRow);
  return false;
  };
  function AddTableCol(linha) {
  var tr = $(linha).closest('td');
  var rows = "";
  rows += '<td><input type="text" id="NT4"></td>';
  tr.append(rows);
  $("#table").append(newRow);
  return false;
  };
  function RemoveTableRow(linha) {
  var tr = $(linha).closest('tr');
  tr.fadeOut(400, function(){
  tr.remove();
  });
  return false;
  };