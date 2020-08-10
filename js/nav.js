/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    var elements = document.getElementsByClassName("content");
    for(var i=0; i<elements.length; i++) { 
        elements[i].style.marginLeft = "250px";
    }
    document.getElementById("smallnav").style.display = "none";
    document.getElementById("page-container").style.paddingTop = "0";
    document.getElementById("page-container").style.transition = "0";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    var elements = document.getElementsByClassName("content");
    for(var i=0; i<elements.length; i++) { 
        elements[i].style.transition = "margin-left .25s";
        elements[i].style.marginLeft = "0";
    }
    document.getElementById("smallnav").style.display = "block";
    document.getElementById("page-container").style.transition = ".25s";
    document.getElementById("page-container").style.paddingTop = "65px";
}