function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    $("#tuhkur").after("<p>Tuhkur edukalt päästetud!</p>");
}
function vasak() {
               alert("Vajutasid edukalt nupule")
            }
/*
document.oncontextmenu=RightMouseDown;
document.onmousedown = mouseDown; 



function mouseDown(e) {
    if (e.which==3) {//righClick
        alert("Right-click menu goes here");
    }
}


function RightMouseDown() { return false; }
*/
 function RightClickFunction() {
alert("Vajutasid edukalt parenake nupule.");
  return false;
 }