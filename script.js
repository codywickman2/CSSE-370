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
    document.getElementById("div1").innerHTML="Coordinates(x,y)";
};


function fetchMovies() {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=37ef3f094e636371fe71693eef9606c9&language=en-US&page=1")
        .then(response => response.json())
        .then(results => {
            var elMovies = document.getElementById("movies")
            elMovies.innerHTML = "";
            movies = results.results;
            for(var i=0;i<11;i++){
                var li = document.createElement('li')
                li.addEventListener('click', (e)=>clickMovie(e))
                li.id = i;
                var mnode = document.createTextNode(movies[i].original_title)
                li.appendChild(mnode)
                elMovies.appendChild(li)
            }
    });
}

function clickMovie(e) {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=37ef3f094e636371fe71693eef9606c9&language=en-US&page=1")
    .then(response => response.json())
            .then(results => {
            movieDescription = results.results;
            alert(movieDescription[e.target.id].overview)
    });    
}
