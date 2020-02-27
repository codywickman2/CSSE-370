function addImg() {
  var img = document.createElement("img");
  img.src = "waterpoloball.jpg";
  img.onclick = function(e) { this.parentNode.removeChild(this)};
  var class_name = "addImage";
  img.setAttribute("class", class_name);
  document.getElementById('newPic').appendChild(img);
}
