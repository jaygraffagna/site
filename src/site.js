var ImgContainer = document.getElementById('img-container');
var Photos = [];
var Index = 0;

const Loading = function(){
    var span = document.getElementById("loading");
    if ( span.innerHTML.length > 3 ) 
        span.innerHTML = "";
    else 
        span.innerHTML += ".";
}

function Load(){
    for(let i = Photos.length - 1; i > Index - 5; i--){
        let photo = Photos[i];
        let path = './photos/' + photo.Photo;
        var img = document.createElement('img');
        img.classList.add('img-content');
        img.setAttribute('src', path);
        ImgContainer.appendChild(img);
    }
    Index -= 5;
}

 function Scrolled(e){
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        Load();
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
//

const Init = function(){ 
    Debug();
    setInterval(Loading, 500);
    window.onscroll = Scrolled
}();

