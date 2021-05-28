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

var pageid=0;


// home=document.getElementById("myNav")
// about=document.getElementById("myNav")
// skills=document.getElementById("myNav")
// projects=document.getElementById("myNav")
// experience=document.getElementById("myNav")
// achivements=document.getElementById("myNav")
// contact=document.getElementById("myNav")



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
var slides = document.getElementsByClassName("bg-image");
  
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
    for (i = 0; i < slides.length; i++) {
      slides[i].style.setProperty('filter', 'invert(100%)');
    }
  }else{
    invert=false;
    thm.style.setProperty('filter',  'invert(0%)');
    meimg.style.setProperty('filter',  'invert(0%)');
    country.style.setProperty('filter',  'invert(0%)');
    Earth.style.setProperty('filter',  'invert(0%)');
    welcome.style.setProperty('filter',  'invert(0%)');
    welcome.style.borderColor="white"
    for (i = 0; i < slides.length; i++) {
      slides[i].style.setProperty('filter', 'invert(0%)');
    }
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
  updatecolform();

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

function updateCounter(){
  fetch('https://api.countapi.xyz/update/mainakportfolio/8be99649-2e88-4e49-8276-a0cde7a7e295/?amount=1')
  .then(response => {return response.json()})
  .then((data) => {
      document.getElementById('count').innerHTML = data.value;
      console.log( data)
    }
  )
}
updateCounter();
 // Selecting all of the css classes 
        // on which we want to apply functionalities
        const hr = document.querySelector('.hr')
        const min = document.querySelector('.min')
        const sec = document.querySelector('.sec')
  
        // Setting up the period of working
        setInterval(() => {
  
            // Extracting the current time 
            // from DATE() function
            let day = new Date()
            let hour = day.getHours()
            let minutes = day.getMinutes()
            let seconds = day.getSeconds()
  
            // Formula that is explained above for 
            // the rotation of different hands
            let hrrotation = (30 * hour) + (0.5 * minutes);
            let minrotation = 6 * minutes;
            let secrotation = 6 * seconds;
  
            hr.style.transform =
                `translate(-50%,-100%) rotate(${hrrotation}deg)`
            min.style.transform =
                `translate(-50%,-100%) rotate(${minrotation}deg)`
            sec.style.transform =
                `translate(-50%,-85%) rotate(${secrotation}deg)`
        });
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

    var day = weekday[d.getDay()];
    var date= d.getDate();
    document.getElementById("day").innerHTML = day;
    document.getElementById("date").innerHTML = date;

function updatecolform(){
  
  document.getElementById("colr1").value =  colors[parseInt(col)][0];
  document.getElementById("colr2").value =  colors[parseInt(col)][1];
  document.getElementById("colr3").value =  colors[parseInt(col)][2];
  document.getElementById("colr4").value =  colors[parseInt(col)][3];
  document.getElementById("colr5").value =  colors[parseInt(col)][4];
  document.getElementById("colr6").value =  colors[parseInt(col)][5];

}
updatecolform();
function customcol(){
  thm.style.setProperty('--theme', document.getElementById("colr1").value);
  thm.style.setProperty('--light',  document.getElementById("colr2").value); 
  thm.style.setProperty('--light2', document.getElementById("colr3").value);
  thm.style.setProperty('--mid',    document.getElementById("colr4").value);
  thm.style.setProperty('--dark2', document.getElementById("colr5").value );
  thm.style.setProperty('--dark',   document.getElementById("colr6").value);
}
var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("bg-image");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  slides[parseInt((slideIndex-1)%5)].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
showSlides();


function chngpage(x) {
  pageid=parseInt(x);
  hideshow();
  closeNav();
  
}


function hideshow() {
  var i;
  var pages = document.getElementsByClassName("ids");
  console.log(pages)
  console.log(pageid)
  for (i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";  
  }
  pages[parseInt(pageid)].style.display = "block";  
}
hideshow();

function skilltoogle(ids) {
  var x = document.getElementById(ids);
  var y = document.getElementById("down"+ids);
  var z = document.getElementById("h"+ids);
  console.log(ids)
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.transform="rotate(180deg)";
    z.style.borderRadius="40px 40px 0px 0px";
  } else {
    x.style.display = "none";
    y.style.transform="rotate(0deg)";
    z.style.borderRadius="40px";
  }

}
