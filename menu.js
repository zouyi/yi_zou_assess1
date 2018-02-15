var openmenu = document.getElementById("open");
var closemenu = document.getElementById("close");
var makebg = document.getElementById("makeBG");
var bg = document.getElementById("bg");
var reset = document.getElementById("reset");
var hideApp = document.getElementById("hideapp");
var showapp = document.getElementById("showapp");
var appone = document.getElementById("app1");
var zoomDiv = document.getElementById("zoom");
var zoomCtr = document.getElementById("zoomcontrols");

var plusButton = document.getElementById("plus");
var minusButton = document.getElementById("minus");

var userInput = document.getElementById("myinput");

zoomCtr.style.display="none";



//var plusButton = document.getElementById("plus");
//var minusButton = document.getElementById("minus");

var zoomWidth = 100;
var zoomHeight = 100;


openmenu.addEventListener("click", function(){
  
  menu.style.left="0px";
  
});

closemenu.addEventListener("click", function(){
  
  menu.style.left="-110px";
  
});

makebg.addEventListener("click", function(){
  
  var zoomimage = document.getElementById("zoom").style.backgroundImage;
  //alert(zoomimage);
  bg.style.backgroundImage = zoomimage;
  
});

reset.addEventListener("click", function(){
    var zoomimage = document.getElementById("zoom").style.backgroundImage;

  //alert(zoomimage);
  bg.style.backgroundImage= "none";
  
});

hideapp.addEventListener("click", function(){
  
  
  //alert(zoomimage);
  appone.style.display = "none";
  
});

showapp.addEventListener("click", function(){
  
  
  //alert(zoomimage);
  appone.style.display = "block";
  
});

zoomDiv.addEventListener("click", function(){
  
  
  //alert(zoomimage);
  zoomCtr.style.display = "inline";
  
  
  //zoomWidth = parseInt(zoomDiv.offsetWidth);
  //zoomHeight = parseInt(zoomDiv.offsetHeight);
    
 
  //console.log(zoomWidth, zoomHeight);

  
});

plusButton.addEventListener("click", function(){
  var zoomDiv = document.getElementById("zoom");
  

    console.log(zoomWidth,zoomHeight);
    if(zoomWidth < 91){
            zoomWidth = zoomWidth + 10;
    }
    
    if(zoomHeight < 64){
            zoomHeight = zoomHeight +7;
    }
    zoomDiv.style.width = zoomWidth+"%";
    zoomDiv.style.height = zoomHeight+"%";

    
  });

  
  minusButton.addEventListener("click", function(){
    var zoomDiv = document.getElementById("zoom");

        //console.log(zoomWidth,zoomHeight);
    if(zoomWidth > 11){
            zoomWidth = zoomWidth - 10;
    }
    
    if(zoomHeight > 8){
            zoomHeight = zoomHeight -7;
    }

    zoomDiv.style.width = zoomWidth+"%";
    zoomDiv.style.height = zoomHeight+"%";

    
  });

userInput.addEventListener("change", function(){
  
  //console.log(userInput.value);

    userNum = parseInt(userInput.value);
    console.log(userNum);
      //console.log(typeof(userNum));
    if(userNum > 12 || userNum <1){
        alert("Doesn't exist!");
    }
    var imagename = "url('imgs/bg"+userNum+".jpg')";
    console.log(imagename);
    
    bg.style.backgroundImage = imagename;
});


