function changeImage(id) {
    var img = document.querySelector('#' + id);
    //var img = document.querySelector('#img1');
    var imageShowDiv = document.querySelector(".imageShow")
    imageShowDiv.innerHTML = "<img src='" + img.src + "' alt='Image' style='max-width: 100%; max-height: 100%;'>";
}