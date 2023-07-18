// parameters
let names = [
    'Ceramica 1',
    'Ceramica 2',
    'Ceramica 3',
    'Ceramica 4',
    'Ceramica 5',
    'Ceramica 6',
    'Ceramica 7',
    'Ceramica 8',
    'Ceramica 9',
    'Ceramica 10',
    'Ceramica 11',
    'Ceramica 12'
];

let carouselState = 1;
let minLimit = 1;
let maxLimit = 12;

//runs on Init
showImgByNumber(carouselState);
changeTitleByNumber(carouselState);

// functions
function goForward() {
    if (carouselState < maxLimit) {
        carouselState++;

        showImgByNumber(carouselState);
        changeTitleByNumber(carouselState);
    } else { carouselState = 0; goForward(); }
}

function goBackward() {
    if (carouselState == minLimit) {
        carouselState = maxLimit - 1;

        showImgByNumber(carouselState);
        changeTitleByNumber(carouselState);
    } else {
        carouselState--;

        showImgByNumber(carouselState);
        changeTitleByNumber(carouselState);
    }
}

function showImgByNumber(number) {
    resetOpacities();
    document.getElementById(`carousel__img-${number}`).style.opacity = 1;
}

function changeTitleByNumber(number) {
    if (typeof number === 'number') document.getElementById('carousel__title').innerText = names[number - 1];
}

function resetOpacities() {
    document.getElementById('carousel__img-1').style.opacity = 0;
    document.getElementById('carousel__img-2').style.opacity = 0;
    document.getElementById('carousel__img-3').style.opacity = 0;
    document.getElementById('carousel__img-4').style.opacity = 0;
    document.getElementById('carousel__img-5').style.opacity = 0;
    document.getElementById('carousel__img-6').style.opacity = 0;
    document.getElementById('carousel__img-7').style.opacity = 0;
    document.getElementById('carousel__img-8').style.opacity = 0;
    document.getElementById('carousel__img-9').style.opacity = 0;
    document.getElementById('carousel__img-10').style.opacity = 0;
    document.getElementById('carousel__img-11').style.opacity = 0;
    document.getElementById('carousel__img-12').style.opacity = 0;
}