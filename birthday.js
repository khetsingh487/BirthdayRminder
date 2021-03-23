
// -------------------------for let side----------------

//---------------------------close left side------------

//--------------------------open center side------------
function cross() {
    document.getElementById('crossclean').style.visibility = "visible";
}
function crosshide() {
    document.getElementById('crossclean').style.visibility = "hidden";
}
function searchselect(){
    document.getElementById('selectsearch').style.searchselect="select";
}
// ------------------------------close center side----------------

// --------------------------------open right side-----------------
function refreshpage()
{
    window.location.reload();
}

let size = document.querySelector('.rightside');
let viewtype = false;
function viewlisthidden() {
    if (viewtype) {
        document.getElementById("changeview").src = "./image/view_list.svg";
        size.style.flexBasis = '50%';
        viewtype = false;
    } else {
        document.getElementById("changeview").src = "./image/view.svg";
        size.style.flexBasis = '80%';
        viewtype = true;

    }
}



// -----------------------------------close left side---------------------

let leftside = document.querySelector('.leftside');
let rightside = document.querySelector('.rightside');
let sidetext = document.querySelector('.text');
let circle = document.querySelector('.circle');
let iconshow = document.querySelector('.iconshow');
// let imageicon = document.querySelector('.imageicon');
// this line represents prarent elements 
let childCircle = leftside.getElementsByClassName("circle");
let chileText = leftside.getElementsByClassName("text");

function leftsidemanuover(){
    // sidetext.style.visibility ="visible";
    // sidetext.style.color ="red";
    // sidetext.style.transition = "all 2s";
    // sidetext.style.display ="block";
    // sidetext.style.display ="block";
    // leftside.style.transition = 'all 1s';

    // sidetext.style.fontSize ="20px";

    leftside.style.width = '20%';
    // leftside.style.widthLeft = '-10%';
    
    // imageicon.style.backgroundColor = "wheat";
    // leftside.style.border_radius = '15px';
    // leftside.style.transition = 'all 0.5s';
    leftside.style.boxShadow = '5px 10px 10px #d8d8d8';
    // e.stopPropagation();
 
    for (let t = 0; t < chileText.length; t++) {
        chileText[t].style.display = 'block';
        
    }

      
}

function leftsidemanuout(){
    // sidetext.style.display ="none";
    leftside.style.width = '60px';
    // imageicon.style.backgroundColor = "white";
    leftside.style.boxShadow = 'none';
    
    // e.stopPropagation();
    for (let t = 0; t < chileText.length; t++) {
        chileText[t].style.display = 'none';
        
    }
}


leftside.addEventListener('mouseleave', (e)=>{
    leftsidemanuout();
})

for (let i = 0; i <= childCircle.length; i++) {
    childCircle[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });

    childCircle[i].addEventListener('mouseover', ()=>{
        leftsidemanuover();
    })
}

function sidemanuspread(){
    leftsidemanuover()
}