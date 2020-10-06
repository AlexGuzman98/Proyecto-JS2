let bigImg = document.getElementById('grande');
let subImg = document.getElementById('subimagen').getElementsByTagName('img');
 
for (let i = 0; i < subImg.length; i++) {
    subImg[i].addEventListener('click', full_image);

}
function full_image(){
    let imgSrc = this.getAttribute('src');
    bigImg.innerHTML= "<img src="+ imgSrc+">";
}