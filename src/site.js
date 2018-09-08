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
                //Load();
                setTimeout(Load, 2000);
            }
        }
        else{
            Loading.style.display = "none";
            ImgContainer.classList.add('img-container');
        }
    }
}

//debug
var input = document.getElementById('input-file');
var header = document.getElementById('header');
function Debug(){
    header.addEventListener('click', function(e){ input.click(); }, false);
    input.addEventListener('change', 
    function(e){
        var file = e.target.files[0];
        if (!file) {
          return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
          Photos = JSON.parse(e.target.result);
          Index = Photos.length - 1;
          Load();
        };
        reader.readAsText(file);
    }, false);
};

function Info(){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200){
            Photos = JSON.parse(req.responseText);
            Load();
        }
    };
    req.open('GET', "/photos/photos.json", true);
    req.setRequestHeader('Access-Control-Allow-Origin', 'https://romantic-colden-d012cf.netlify.com/photos/photos.json');
    req.send(null);
}

const Init = function(){ 
    Info();
    window.onscroll = Scrolled
}();

