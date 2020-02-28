/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function addImg() {
  var img = document.createElement("img");
  img.src = "waterpoloball.jpg";
  img.onclick = function(e) { this.parentNode.removeChild(this);};
  var class_name = "addImage";
  img.setAttribute("class", class_name);
  document.getElementById('newPic').appendChild(img);
}


function mouseMove(e) {
    var x = e.clientX;
    var y = e.clientY;
    var rgbColor = "rgb(" + x + "," + y + ")";
    document.getElementById("div1").innerHTML = rgbColor;
    
}
