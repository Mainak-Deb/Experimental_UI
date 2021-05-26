var colors=[
  ["#ffffff","#FFCDB2","#FFB4A2","#E5989B","#B5838D","#6D6875"],
  ["#ffffff","#C7F9CC","#80ED99","#57CC99","#38A3A5","#22577A"]
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
var invert =false;
var col=0;

function toogle_invert(){
  if(invert==false){
    invert=true;
    thm.style.setProperty('filter',  'invert(100%)');
  }else{
    invert=false;
    thm.style.setProperty('filter',  'invert(0%)');
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