function apppendImageElem(keyword, index){
    const imgElem = document.createElement('img');
    imgElem.src = 'https://source.unsplash.com/400x255/?'+keyword+'&sig='+index;

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElem);
}
function removephotos(){
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML = '';
}
function searchphotos(event){
    const keyword = event.target.value;
    if(event.key === 'Enter' && keyword){
        removephotos();
        for(let i = 1;i<= 10; i++){
            apppendImageElem(keyword,i)
        }
    }
}

function run(){
    
    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown',searchphotos)
}

run();