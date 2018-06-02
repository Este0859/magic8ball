var sec //Cria a variável sec como 0
var imgsrc //Cria a variável imgsrc
function getsec() { //Define a variável sec como os segundos do momento presente, que podem tomar qualquer valor entre 0 e 59
var date = new Date()
sec = date.getSeconds()
}
function getnum() { //Função com condições do tipo if else colocadas umas dentro das outras, que verificam qual é o valor se sec, e subtraiem-lhe o valor necessário para que sec só possa tomar valores entre 0 e 9  
if (sec > 49) {
sec = sec - 50
}
else {
if (sec > 39){
sec = sec - 40
}
else {
if (sec > 29){
sec = sec - 30
}
else {
if (sec > 19){
sec = sec - 20
}
else {
if (sec > 9){
sec = sec - 10
}}}}}}
function display() { //Define a variável imgsrc, dependo do valor da variável sec
imgsrc = '<img align="center" src=imagens/'+ sec  +'.jpg>'
}
function doit(){ //Executa as funções getsec(), getnum() e display(), e depois introduz no código html que o executar o valor de imgsrc
getsec();
getnum();
display();
document.write(imgsrc);
}
