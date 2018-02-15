var bg1 = document.getElementById("bg1");
var bg2 = document.getElementById("bg2");
var bg3 = document.getElementById("bg3");
var bg4 = document.getElementById("bg4");

var ch1 = document.getElementById("ch1");
var ch2 = document.getElementById("ch2");
var ch3 = document.getElementById("ch3");

var prevButton = document.getElementById("previous");
var nextButton = document.getElementById("next");


var zoom =  document.getElementById("zoom");

var imgOption;

var threeImages;
var imagesIndex = 0;
var img1;
var img2;
var img3;

bg1.addEventListener("click", function(){

  
  ch1.style.backgroundImage="url(imgs/bg1.jpg)";
  ch2.style.backgroundImage="url(imgs/bg2.jpg)";
  ch3.style.backgroundImage="url(imgs/bg3.jpg)";
  
  ch1.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg1.jpg)";
    
  });
  
  ch2.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg2.jpg)";
    
  });

  ch3.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg3.jpg)";
    
  });

        imagesIndex = 0;



  
});

bg2.addEventListener("click", function(){
  
   ch1.style.backgroundImage="url(imgs/bg4.jpg)";
  ch2.style.backgroundImage="url(imgs/bg5.jpg)";
  ch3.style.backgroundImage="url(imgs/bg6.jpg)";
  
   ch1.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg4.jpg)";
    
  });
  
  ch2.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg5.jpg)";
    
  });

  ch3.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg6.jpg)";
    
  });
    
            imagesIndex = 1;


  
});

bg3.addEventListener("click", function(){
  
  ch1.style.backgroundImage="url(imgs/bg7.jpg)";
  ch2.style.backgroundImage="url(imgs/bg8.jpg)";
  ch3.style.backgroundImage="url(imgs/bg9.jpg)";
  
   ch1.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg7.jpg)";
    
  });
  
  ch2.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg8.jpg)";
    
  });

  ch3.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg9.jpg)";
    
  });
    
                imagesIndex = 2;


  
});

bg4.addEventListener("click", function(){
  
  ch1.style.backgroundImage="url(imgs/bg10.jpg)";
  ch2.style.backgroundImage="url(imgs/bg11.jpg)";
  ch3.style.backgroundImage="url(imgs/bg12.jpg)";
  
   ch1.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg10.jpg)";
    
  });
  
  ch2.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg11.jpg)";
    
  });

  ch3.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg12.jpg)";
    
  });
    
   imagesIndex = 3;

  
});


prevButton.addEventListener("click", function(){
    
    threeImages = document.getElementsByClassName("bgthumbs");
            console.log(imagesIndex);
/*
    console.log(threeImages[0].style.backgroundImage);
    console.log(threeImages[1].style.backgroundImage);
    console.log(threeImages[2].style.backgroundImage);*/
    
    if(imagesIndex==0){
        imagesIndex = 3;

       ch1.style.backgroundImage="url(imgs/bg10.jpg)";
       ch2.style.backgroundImage="url(imgs/bg11.jpg)";
       ch3.style.backgroundImage="url(imgs/bg12.jpg)";
        
        img1 =10;
        img2 =11;
        img3 =12;
        

    } else {
        imagesIndex--;
        img1 = 3*imagesIndex+1;
        img2 = 3*imagesIndex+2;
        img3 = 3*imagesIndex+3;
        
        ch1.style.backgroundImage="url(imgs/bg"+img1+".jpg)";
        ch2.style.backgroundImage="url(imgs/bg"+img2+".jpg)";
        ch3.style.backgroundImage="url(imgs/bg"+img3+".jpg)";
        
    }
    



  ch1.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg"+img1+".jpg)";
    
  });
  
  ch2.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg"+img2+".jpg)";
    
  });

  ch3.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg"+img3+".jpg)";
    
  });
  
});

nextButton.addEventListener("click", function(){
  
   threeImages = document.getElementsByClassName("bgthumbs");
        console.log(imagesIndex);

    /*console.log(threeImages[0].style.backgroundImage);
    console.log(threeImages[1].style.backgroundImage);
    console.log(threeImages[2].style.backgroundImage);*/
    
    if(imagesIndex==3){
       ch1.style.backgroundImage="url(imgs/bg1.jpg)";
       ch2.style.backgroundImage="url(imgs/bg2.jpg)";
       ch3.style.backgroundImage="url(imgs/bg3.jpg)";
        
        img1 =1;
        img2 =2;
        img3 =3;
        
        
        //reset index of three images to 0
        imagesIndex = 0;

    } else {
        imagesIndex++;

        img1 = 3*imagesIndex+1;
        img2 = 3*imagesIndex+2;
        img3 = 3*imagesIndex+3;
        
        ch1.style.backgroundImage="url(imgs/bg"+img1+".jpg)";
        ch2.style.backgroundImage="url(imgs/bg"+img2+".jpg)";
        ch3.style.backgroundImage="url(imgs/bg"+img3+".jpg)";
        
    }
    


  ch1.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg"+img1+".jpg)";
    
  });
  
  ch2.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg"+img2+".jpg)";
    
  });

  ch3.addEventListener("mouseenter", function(){
    
    zoom.style.backgroundImage = "url(imgs/bg"+img3+".jpg)";
    
  });
  
  
});



