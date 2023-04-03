document.addEventListener("DOMContentLoaded", checkPosition);

let offset = 0;
const sliderLine = document.querySelector('.my-pictures-section');

document.querySelector('#arrow-right').addEventListener('click', function(){
    offset = offset + 256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    checkPosition()
});

document.querySelector('#arrow-left').addEventListener('click', function () {
    offset = offset - 256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
    checkPosition()
});


function checkPosition(){
    if(offset == 0){
        document.getElementById("first").classList.add("active-link");
        document.getElementById("first").classList.remove("non-active-link");
    }else{
        document.getElementById("first").classList.remove("active-link");
        document.getElementById("first").classList.add("non-active-link");
    }

    if(offset == 256){
        document.getElementById("second").classList.add("active-link");
        document.getElementById("second").classList.remove("non-active-link");
    }else{
        document.getElementById("second").classList.remove("active-link");
        document.getElementById("second").classList.add("non-active-link");
    }

    if(offset == 512){
        document.getElementById("third").classList.add("active-link");
        document.getElementById("third").classList.remove("non-active-link");
    }else{
        document.getElementById("third").classList.remove("active-link");
        document.getElementById("third").classList.add("non-active-link");
    }

    if(offset == 768){
        document.getElementById("fourth").classList.add("active-link");
        document.getElementById("fourth").classList.remove("non-active-link");
    }else{
        document.getElementById("fourth").classList.remove("active-link");
        document.getElementById("fourth").classList.add("non-active-link");
    }
}