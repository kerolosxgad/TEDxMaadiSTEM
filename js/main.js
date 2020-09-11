// The Main JavaScript File//

//Dynamic Year//
var d = new Date();
document.getElementById("demo").innerHTML = d.getUTCFullYear();
//End of Dynamic Year//

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

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

