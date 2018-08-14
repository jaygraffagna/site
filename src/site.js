var photos;

const Init = function(){
    photos = JSON.parse('[ { "ID": 1, "Photo": "water_drop.jpg", "Camera": "Sony A6000", "Location": "Bettendorf, IA USA", "Editor": "darktable" }, { "ID": 2, "Photo": "river_path_reflection.jpg", "Camera": "Sony A6000", "Location": "Davenport, IA USA", "Editor": "darktable" }, { "ID": 3, "Photo": "sunset_illinois.jpg", "Camera": "Sony A6000", "Location": "Amboy, Illinois USA", "Editor": "darktable" }, { "ID": 4, "Photo": "tree_centennial.jpg", "Camera": "Sony A6000", "Location": "Davenport, Iowa USA", "Editor": "darktable" }, { "ID": 5, "Photo": "74_bridge.jpg", "Camera": "Sony A6000", "Location": "Bettendorf, Iowa USA", "Editor": "darktable" } ]');

    var container = document.getElementById('img-container');

    photos.forEach(photo => {
        let path = './photos/' + photo.Photo;
        var img = document.createElement('img');
        img.classList.add('img-content');
        img.setAttribute('src', path);
        container.appendChild(img);
    });
}();

