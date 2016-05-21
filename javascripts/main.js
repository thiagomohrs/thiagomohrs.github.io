gString.prototype.replaceAll = String.prototype.replaceAll || function(needle, replacement) {
  return this.split(needle).join(replacement);
};
var totalLinhas = 2;

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


function myFunction() {
  //TODO Lógica do programa
  var row0col0 = document.getElementById('row0col0');
  var row1col0 = document.getElementById('row1col0');
  var row0col1 = document.getElementById('row0col1');
  var row1col1 = document.getElementById('row1col1');
  var resultadosSemNT = new Array;
  var aposReplace = row0col1.value.replaceAll(row0col0.value, row0col1.value);
  aposReplace = aposReplace.replaceAll(row1col0.value, row1col1.value);

  if (tem_apenas_minusculas(aposReplace)) {
    resultadosSemNT.push(aposReplace);
  }
  resultadosSemNT.sort();

  console.log(resultadosSemNT.toString());

  document.getElementById("resposta").innerHTML = resultadosSemNT.toString();
}

var numerolinhas = 2
var numerocolunaslinha = 2;

function AddTableRow() {
  var numerocolunas = 0;
  var newRow = $("<tr>");
  var cols = "";
  cols += '<td><input type="text" id=\"row' + numerolinhas + '\col' + numerocolunas + '"\> -></td>';
  numerocolunas++;
  cols += '<td><input type="text" id=\"row' + numerolinhas + '\col' + numerocolunas + '"\></td>';
  numerolinhas++;
  cols += '<td><button onclick="AddTableCol(this)" type="button" class="btn">+</button></td>';
  cols += '<td><button onclick="RemoveTableRow(this)" type="button" class="btn">-</button></td>';
  newRow.append(cols);
  $("#table").append(newRow);
  totalLinhas++;
  console.log("Numero Linhas: " + totalLinhas);
  return false;
};

function AddTableCol(linha) {
  //FIXME Arrumar ao adicionar campo na linha
  var tr = $(linha).closest('td');
  var rows = "";
  rows += '<td><input type="text" id="NT"></td>';
  tr.append(rows);
  return false;
};

function RemoveTableRow(linha) {
  if (totalLinhas === 1) {
    alert('Não é possível remover a linha pois a tabela deve ter pelo menos um registro.');
    return;
  }
  var tr = $(linha).closest('tr');
  tr.fadeOut(100, function() {
    tr.remove();
  });
  totalLinhas--;
  console.log("Numero Linhas: " + totalLinhas);
  return false;
};
