var ImgContainer = document.getElementById('img-container');
var Loading = document.getElementById('loading');
var Photos = [];
var Index = 0;

function Load(){
    for(let i = Index; i > Index - 5; i--){
        if(i < 0){
            Loading.style.display = "none";
            Index = 0;
            return;
        }
        let photo = Photos[i];
        let path = './photos/' + photo.Photo;
        var img = document.createElement('img');
        img.classList.add('img-content');
        img.setAttribute('src', path);
        img.setAttribute('alt', photo.Desc);        
        ImgContainer.appendChild(img);
    }
    Index -= 5;
    Loading.style.display = "none";
}

function Scrolled(e){
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if(Index > 0){
            if(Loading.style.display != "flex"){
                Loading.style.display = "flex";
                setTimeout(Load, 1000);
            }
        }
        else{
            Loading.style.display = "none";
            ImgContainer.classList.add('img-container');
        }
    }
}

function Info(){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200){
            Photos = JSON.parse(req.responseText);
            Index = Photos.length - 1;
            Load();
        }
    };
    req.open('GET', "/photos/photos.json", true);
    req.send(null);
}

const Init = function(){ 
    Info();
    window.onscroll = Scrolled
}();

