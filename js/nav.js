
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    var elements = new Set([
        ...document.getElementsByClassName("content"),
        ...document.getElementsByClassName("wide-content")
    ]);
    elements.forEach(function(value){
        value.style.marginLeft = "250px"
    });
    var smallnav = document.getElementById("smallnav");
    smallnav.style.display = "none";
    var page = document.getElementById("page-container");
    page.style.paddingTop = "0";
}

function hamburgerMenu() {
    var menu = document.getElementById("hamburgerMenu");
    var overlay = document.getElementById("overlay");
    var body = document.getElementsByTagName("body")[0];
    menu.classList.toggle("change");
    overlay.classList.toggle("change");
    body.classList.toggle("body-change");
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    var elements = new Set([
        ...document.getElementsByClassName("content"),
        ...document.getElementsByClassName("wide-content")
    ]);
    elements.forEach(function(value){
        value.style.marginLeft = "0"
    });
    var smallnav = document.getElementById("smallnav");
    smallnav.style.display = "block";
    var page = document.getElementById("page-container");
    page.style.paddingTop = "75px";
}

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};


function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

function setWidth(item, width){
    try{
        item.style.width = width;
        item.style.maxWidth = width;
    } catch(err){
        return false;
    }
    return true;
}

function responsive(){
    var width = getWidth();
    var pic = document.getElementById("mainpic");
    var contents = document.getElementsByClassName("content");
    var blocks = document.getElementsByClassName("block");
    
    var education_items = document.getElementsByClassName("education-item");
    var education_logos = document.getElementsByClassName("education-logo");
    
    var career_logos = document.getElementsByClassName("career-logo");


    // small screen 768
    if (width < 1024 || mobileCheck()) {
        closeNav(); // minimize sidebar
//        setWidth(pic, "50%"); //make picture fullwidth
        for(var i=0; i<contents.length; i++) { 
            contents[i].style.paddingLeft = "5%";
            contents[i].style.paddingRight = "5%";
        }
        for(var i=0; i<blocks.length; i++) { 
            setWidth(blocks[i], "90%")
        }
        for(var i=0; i<education_items.length; i++) { 
            setWidth(education_items[i], "100%")
        }
        for(var i=0; i<education_logos.length; i++) { 
            education_logos[i].style.display = "none";
        }
        for (var i=0; i<career_logos.length; i++) {
            career_logos[i].style.display = "none";
        }
    }
    
    // large screen
    else {
        var overlay = document.getElementById("overlay")
        if (overlay.classList.contains("change")){
            hamburgerMenu();
        }
        openNav();
//        setWidth(pic, "50%");
        for(var i=0; i<contents.length; i++) { 
            contents[i].style.paddingLeft = "15%";
            contents[i].style.paddingRight = "15%";
        }
        for(var i=0; i<blocks.length; i++) { 
            setWidth(blocks[i], "75%")
        }
        for(var i=0; i<education_items.length; i++) { 
            setWidth(education_items[i], "80%")
        }
        for(var i=0; i<education_logos.length; i++) { 
            education_logos[i].style.display = "flex";
        }
        for (var i=0; i<career_logos.length; i++) {
            career_logos[i].style.display = "flex";
        }
    }
}


