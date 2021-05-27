var colors=[
  ["#ffffff","#FFCDB2","#FFB4A2","#E5989B","#B5838D","#6D6875"],
  ["#ffffff","#C7F9CC","#80ED99","#57CC99","#38A3A5","#22577A"],
  ["#ffffff","#012A4A","#01497C","#2A6F97","#61A5C2","#A9D6E5"],
  ["#ffffff","#FEFAE0","#DDA15E","#BC6C25","#606C38","#283618"],
  ["#ffffff","#FAE0E4","#F9BEC7","#FF85A1","#FF477E","#FF0A54"],
  ["#ffffff","#FFEA00","#FFD000","#FFAA00","#FF9500","#FF7B00"],
  ["#ffffff","#E9ECEF","#CED4DA","#6C757D","#495057","#212529"],
  ["#FFFFFF","#E5383B","#D90429","#A4161A","#660708","#161A1D"],
  ["#FFFFFF","#FFD166","#06D6A0","#EF476F","#118AB2","#073B4C"],

]



function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }


  
var slider = document.getElementById("myRange");
var output = document.getElementsByClassName("overlay");
console.log(output[0] )
output[0].style.backdropFilter = "blur("+String(parseInt(slider.value)/50)+"rem)";

slider.oninput = function() {
  console.log("blur("+String(parseInt(slider.value)/50)+"rem)")
  output[0].style.backdropFilter = "blur("+String(parseInt(slider.value)/50)+"rem)";
  console.log(output[0].style.backdropFilter)

}


var thm = document.querySelector(':root');
var country=document.getElementById("country");
var meimg=document.getElementById("mepic");
var Earth =document.getElementById("Earth");
var welcome =document.getElementById("welcome");
var names=document.getElementById("names");
var invert =false;
var col=0;

function toogle_invert(){
  if(invert==false){
    invert=true;
    thm.style.setProperty('filter',  'invert(100%)');
    meimg.style.setProperty('filter',  'invert(100%)');
    country.style.setProperty('filter',  'invert(100%)');
    Earth.style.setProperty('filter',  'invert(100%)');
    welcome.style.setProperty('filter',  'invert(100%)');
    welcome.style.borderColor="#000000"
  }else{
    invert=false;
    thm.style.setProperty('filter',  'invert(0%)');
    meimg.style.setProperty('filter',  'invert(0%)');
    country.style.setProperty('filter',  'invert(0%)');
    Earth.style.setProperty('filter',  'invert(0%)');
    welcome.style.setProperty('filter',  'invert(0%)');
    welcome.style.borderColor="white"
  }
  console.log(invert);
}


function theme_set(x) {
  col=parseInt(x)
  color_set();
}

function color_set() {
  thm.style.setProperty('--theme',  colors[parseInt(col)][0]);
  thm.style.setProperty('--light',  colors[parseInt(col)][1]); 
  thm.style.setProperty('--light2', colors[parseInt(col)][2]);
  thm.style.setProperty('--mid',    colors[parseInt(col)][3]);
  thm.style.setProperty('--dark2',  colors[parseInt(col)][4]);
  thm.style.setProperty('--dark',   colors[parseInt(col)][5]);

}

var modal = document.getElementById("myModal");
function open_modal(){
  modal.style.display = "block";
}

function close_modal(){
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function ageCalc() {
  var minutes = 1000 * 60;
  var hours = minutes * 60;
  var days = hours * 24;
  var years = days * 365.25;

  d = new Date("2001-05-28");
  dt = d.getDate();
  mn = d.getMonth();
  mn++;
  yy = d.getFullYear();
  var date1 = new Date(mn + "/" + dt + "/" + yy);

  var date2 = new Date();
  var timeDiff = (date2.getTime() - date1.getTime());
  var age = (timeDiff / years);
  age = parseFloat(Math.round(age * 100000000000) / 100000000000).toFixed(11);

  document.getElementById("age").innerHTML = age;

  setTimeout("ageCalc()", 50);

}
window.onload = ageCalc();

function convertDigitIn(str) {
  return str.split('/').reverse().join('/');
}