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

var pageid= 0;

var skillset={
  C:"The C programming language is a computer programming language that was developed to do system programming for the operating system UNIX and is an imperative programming language. C was developed in the early 1970s by Ken Thompson and Dennis Ritchie at Bell Labs. ... C is a compiled language.",
  Cpp:"C++ is a cross-platform language that can be used to create high-performance applications. C++ was developed by Bjarne Stroustrup, as an extension to the C language. C++ gives programmers a high level of control over system resources and memory.",
  JavaScript:"JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.",
  Python:"Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. ... Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse.",
  Html:"HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.",
  Css:"CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once.",
  
  Django:"Django is an open-source python web framework used for rapid development, pragmatic, maintainable, clean design, and secures websites. ... The main goal of the Django framework is to allow developers to focus on components of the application that are new instead of spending time on already developed components.",
  Jquery:"jQuery is a lightweight, write less, do more, JavaScript library. The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.",
  OpenCv:"OpenCV is a cross-platform library using which we can develop real-time computer vision applications. It mainly focuses on image processing, video capture and analysis including features like face detection and object detection.",
  p5js:"p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else! p5.js is free and open-source because we believe software, and the tools to learn it, should be accessible to everyone.",
  Pygame:"Pygame is a cross-platform set of Python modules which is used to create video games. It consists of computer graphics and sound libraries designed to be used with the Python programming language.",
  BootStrap:"Bootstrap is a potent front-end framework used to create modern websites and web apps. It's open-source and free to use, yet features numerous HTML and CSS templates for UI interface elements such as buttons and forms. Bootstrap also supports JavaScript extensions.",
  
  Sqlite:"SQLite is a software library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine. SQLite is the most widely deployed SQL database engine in the world. The source code for SQLite is in the public domain.",
  VScode:"Visual Studio Code is a streamlined code editor with support for development operations like debugging, task running, and version control. It aims to provide just the tools a developer needs for a quick code-build-debug cycle and leaves more complex workflows to fuller featured IDEs, such as Visual Studio IDE.",
  Qgis:"QGIS functions as geographic information system (GIS) software, allowing users to analyze and edit spatial information, in addition to composing and exporting graphical maps. QGIS supports both raster and vector layers; vector data is stored as either point, line, or polygon features.",
  Sublime_text:"Sublime Text is a shareware cross-platform source code editor with a Python application programming interface (API). It natively supports many programming languages and markup languages, and functions can be added by users with plugins, typically community-built and maintained under free-software licenses.",
  SpyDer:"Spyder is an open-source cross-platform integrated development environment (IDE) for scientific programming in the Python language.",
  Colab:"Colaboratory, or “Colab” for short, is a product from Google Research. Colab allows anybody to write and execute arbitrary python code through the browser, and is especially well suited to machine learning, data analysis and education.",
  
  MS_Word:"Microsoft Word or MS Word (often called Word) is a graphical word processing program that users can type with. It is made by the computer company Microsoft. Its purpose is to allow users to type and save documents. Similar to other word processors, it has helpful tools to make documents.",
  MS_Excel:"Microsoft Excel is a helpful and powerful program for data analysis and documentation. It is a spreadsheet program, which contains a number of columns and rows, where each intersection of a column and a row is a “cell.” Each cell contains one point of data or one piece of information.",
  MS_PowerPoint:"Microsoft PowerPoint is a powerful slide show presentation program. It is a standard component of the company's Microsoft Office suite software, and is bundled together with Word, Excel, and other office productivity tools. The program uses slides to convey information rich in multimedia.",
  Google_Docs:"Google Docs is a very powerful real-time collaboration and document authoring tool. Multiple users can edit a document at the same time, while seeing each others' changes instantaneously. Users can produce text documents, slide presentations, spreadsheets, drawings, and surveys.",
  Google_Sheet:"Google Sheets allows users to edit, organize, and analyze different types of information. It allows collaborations, and multiple users can edit and format files in real-time, and any changes made to the spreadsheet can be tracked by a revision history.",
  Adobe_Photoshop:"Adobe Photoshop is an imaging and graphic design software used by thousands of people in many different roles across the world. Not only is it for photos but you can use Photoshop for designing websites, editing videos, and creating 3D artwork.",
  
  Editing:"I love to edit pictures, i like to play with colours, contrast, object moving, removing etc.",
  writing:"I love writing stories and articles, i love to write science fiction stories, and many type of scientific articles",
  Photography:"I love to click photos, i like to click nature photos, potrait photos of humans, object photos and mostly meaning containg social messege photos .",
  Painting:"Painting is one of my favourite hobby, i love painting, mostly i like opaque colors like Oio, Tempara or dry pastels, My most of the works are on pencil shading.",
  Guitar:"I love to play guitar, I like to play tabs of various songs",

  Bengali:"Bengali also known by its endonym Bangla (বাংলা Bengali pronunciation: [ˈbaŋla]), is an Indo-Aryan language and is the lingua franca of the Bengal region of the Indian subcontinent. It is the most widely spoken language of Bangladesh and the second most widely spoken of the 22 scheduled languages of India, after Hindi. With approximately 228 million native speakers and another 37 million as second language speakers,Bengali is the fifth most-spoken native language and the sixth most spoken language by total number of speakers in the world.",
  English:"English is a West Germanic language first spoken in early medieval England, which has become the leading language of international discourse in the 21st century. It is named after the Angles, one of the ancient Germanic peoples that migrated to the area of Great Britain that later took their name, England. Both names derive from Anglia, a peninsula on the Baltic Sea. English is most closely related to Frisian and Low Saxon, while its vocabulary has been significantly influenced by other Germanic languages, particularly Old Norse (a North Germanic language), as well as Latin and French.",
  Hindi:"Hindi or more precisely Modern Standard Hindi ,is an Indo-Aryan language spoken chiefly in India. Hindi has been described as a standardised and Sanskritised register of the Hindustani language, which itself is based primarily on the Khariboli dialect of Delhi and neighbouring areas of Northern India. Hindi, written in the Devanagari script, is one of the two official languages of the Government of India, along with the English language. It is an official language in 9 States and 3 Union Territories and an additional official language in 3 other States.Hindi is also one of the 22 scheduled languages of the Republic of India."
}



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
var logo = document.getElementsByClassName("plogo");


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
      console.log(i);
    }
    for (i = 0; i < logo.length; i++) {
      logo[i].style.setProperty('filter', 'invert(100%)');
      console.log(i);
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
      console.log(i);
    }
    for (i = 0; i < logo.length; i++) {
      logo[i].style.setProperty('filter', 'invert(0%)');
      console.log(i);
    }
  }

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
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.transform="rotate(180deg)";
    z.style.borderRadius="40px 40px 0px 0px";
  } else {
    x.style.display = "none";
    y.style.transform="rotate(0deg)";
    z.style.borderRadius="40px";
  }

}


function skillabout(x) {
      document.getElementById("abouthead").innerHTML=x;;
      about=document.getElementById("aboutskill").innerHTML=skillset[x];
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

}


var editmodal = document.getElementById("editModal");
function open_editmodal(){
  editmodal.style.display = "block";
}

function close_editmodal(){
  editmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == editmodal) {
    editmodal.style.display = "none";
  }
}

function bordermanipulate(){
  var brcg=document.getElementById("editRange").value;
  thm.style.setProperty('--borderwidth', String(brcg)+"px");
}

function shadowmanipulate(){
  var sdcg=document.getElementById("shadowRange").value;
  thm.style.setProperty('--shadow',"rgba(0, 0, 0, "+String(sdcg/100)+")");
  thm.style.setProperty('--shadow2',"rgba(0, 0, 0, "+String(sdcg/250)+")");
}


