// The Main JavaScript File//

//Dynamic Year//
var d = new Date();
document.getElementById("demo").innerHTML = d.getUTCFullYear();
//End of Dynamic Year//

//TEDx logo on small devices
if (window.matchMedia("(max-width: 1199px)").matches) {
    document.getElementById("navbar-logo").src = "images/TEDxLogo.png";
} else {
    //navbar background style on scroll
    window.onscroll = function myFunction() {
    
        "use strict";

        var navh = document.getElementById("navbar").offsetHeight;

        if (document.body.scrollTop > navh || document.documentElement.scrollTop > navh) {
            document.getElementById("navbar-logo").src = "images/TEDxLogo.png";
            document.getElementById("navbar").classList.add("scrolled");
        } else {
            document.getElementById("navbar-logo").src = "images/TEDxLogoLight.png";
            document.getElementById("navbar").classList.remove("scrolled");
        }

    };
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("read-more-target");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read full article"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
}

function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("read-more-target2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read full article"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
}

function myFunction3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("read-more-target3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read full article"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
}

/* global $, window */

$(function () {

    console.log("hellooo");
                                      
});