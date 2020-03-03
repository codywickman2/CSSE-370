/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function addImg() {
    var img = document.createElement("img");
    img.src = "tonyA.jpg";
    var class_name = "addImage";
    var altText = "Tony Azevedo";
    var classN = "tonyA";
    img.setAttribute("class", class_name);
    img.setAttribute("alt", altText);
    var p = document.createElement("p");
    var node = document.createTextNode("Tony Azevedo is a 5 time Olympian and is considered one of the greatest US Water Polo Players ever.");
    p.appendChild(node);
    var element = document.getElementById("newMessage");
    element.appendChild(p);
    p.setAttribute("class", classN);
    document.getElementById('newPic').appendChild(img);
    img.onclick = function(e) { 
        this.parentNode.removeChild(this);
        p.remove();
    };
}

function mouseMove(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coord = "Coordinates(" + x + "," + y + ")";
    document.getElementById("div1").innerHTML = coord;
}

function mouseOut() {
    document.getElementById("div1").innerHTML="Coordinates(?,?)";
};
