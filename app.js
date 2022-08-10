var change = document.getElementById("change_color");
var text = document.getElementById("text");

change.addEventListener("click", changecolor)

function changecolor(){
    var col1 = getcolor();
    var col2 = getcolor();
    var col3 = getcolor();

    var color = `rgb(${col1}, ${col2}, ${col3})`;


    // console.log(color);
    // change.style.background = color;
    text.style.background = color;
}


function getcolor() {
    return Math.floor(Math.random() * 256)
}