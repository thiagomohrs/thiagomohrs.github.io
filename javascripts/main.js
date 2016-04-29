String.prototype.replaceAll = String.prototype.replaceAll || function(needle, replacement) {
return this.split(needle).join(replacement);
};
function addInputTerminal() {
}
function addInputNaoTerminal() {
}
function tem_maiusculas(texto){
  var letras_mayusculas="ABCDEFGHYJKLMNOPQRSTUVWXYZ";

   for(i=0; i<texto.length; i++){
      if (letras_maiusculas.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}
function tem_minusculas(texto){
  var letras_minusculas="abcdefghyjklmnopqrstuvwxyz";
  for(i=0; i<texto.length; i++){
      if (letras_minusculas.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}

function replaceAll(str, needle, replacement) {
return str.split(needle).join(replacement);
}

function replace_all(string,encontrar,substituir){
while(string.indexOf(encontrar)>=0)
string = string.replace(encontrar,substituir);
return string;
}
function myFunction() {
  var NT1 = document.getElementById('NT1');
  var NT2 = document.getElementById('NT2');
  var NT1_1 = document.getElementById('NT1_1');
  var NT2_1 = document.getElementById('NT2_1');
  // var posicao = NT1.value.indexOf(NT2.value);
  var resultadosSemNT =  new Array;
  // console.log(posicao);
  // console.log(NT1.value.length);
  var aposReplace = NT1_1.value.replaceAll(NT2.value,NT2_1.value);
  aposReplace.replaceAll(NT1.value,NT1_1.value);

  if (tem_minusculas(aposReplace))
  {
    resultadosSemNT.push(aposReplace);
  }
  if(NT1_1.value.search(NT2.value) == -1){
    //  document.write("NT1 contém NT2");
     console.log("NT1 não contém NT2");
  }else{
    console.log("NT1 contém NT2");
  }
  resultadosSemNT.sort();
  console.log(resultadosSemNT.toString());
  document.getElementById("resposta").innerHTML = resultadosSemNT.toString();
  // window.document.write(resultadosSemNT.toString());
  // document.getElementById('resp').write(resultadosSemNT.toString());
  }
