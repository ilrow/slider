
//объявляю переменные

const sliderLine = document.querySelector('.slider-line'),
     sliderImage = document.querySelectorAll('.slider-image'),
     sliderDot = document.querySelectorAll('.box__dot'),
     arrowLeft = document.querySelector('.box__arrow-left'),
     arrowRight = document.querySelector('.box__arrow-right'),
     listItem = document.querySelectorAll('.list-item');
     

//задаю значение счетчика 

let sliderCount = 0,
    sliderWidth,
    sliderCityChange = document.querySelector('.slider__city-change'),
     sliderAreaChange = document.querySelector('.slider__area-change'),
     sliderTimeChange = document.querySelector('.slider__time-change');

// адаптивность слайдера
    window.addEventListener('resize', pageSlide);

// определяю размер контейнера слайдера
function pageSlide(){
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImage.length + 'px';
    sliderImage.forEach(item => item.style.width = sliderWidth + 'px');

    moveSlide();
    sliderTwo();
    sliderThree();
    sliderOne()
}
pageSlide();

// вешаю клик на стрелки
arrowLeft.addEventListener('click', sliderLeft);
arrowRight.addEventListener('click', sliderRight);

// движение слайдера стрелка вправо
function sliderRight(){
    sliderCount++;
    if(sliderCount >= sliderImage.length){
        sliderCount = 0;
    }

    moveSlide();
    currentSlideDot(sliderCount);
    currentSlideList(sliderCount);
    sliderTwo();
    sliderThree();
    sliderOne()
}

// движение слайдера стрелка влево
function sliderLeft(){
    sliderCount--;
    if(sliderCount < 0){
        sliderCount = sliderImage.length - 1;
    }

    moveSlide();
    currentSlideDot(sliderCount);
    currentSlideList(sliderCount);
    sliderTwo();
    sliderThree();
    sliderOne()
}
function moveSlide(){
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// определяю текущее положение точки относительно текущего изображения
function currentSlideDot(index){
    sliderDot.forEach(item => item.classList.remove('dot-active'));
    sliderDot[index].classList.add('dot-active');
}
// определяю текущее положение list-item относительно текущего изображения
function currentSlideList(index){
    listItem.forEach(item => item.classList.remove('item-active'));         // удаление класса по умолчанию
    listItem[index].classList.add('item-active');                           // присвоение класса в зависимости от текущего положения img
}

// клик dot
sliderDot.forEach((dot, index) =>{
    dot.addEventListener('click', () =>{
        sliderCount = index;
        moveSlide();
        currentSlideDot(sliderCount);
        currentSlideList(sliderCount);
        sliderTwo();
        sliderThree();
        sliderOne()
    })
});

// клик list-item
listItem.forEach((item, index) =>{
    item.addEventListener('click', () =>{
        sliderCount = index;
        moveSlide();
        currentSlideList(sliderCount);
        currentSlideDot(sliderCount);
        sliderTwo();
        sliderThree();
        sliderOne()
    })
});

// добавление элементов на первый слайд
function sliderOne(){
    if(sliderCount === sliderImage.length-3){
        sliderCityChange.innerHTML = `<p class= 'slider__city-change'>Rostov-on-Don<br>
        LCD admiral</p>`;
        sliderAreaChange.innerHTML = `<p class= 'slider__area-change'>81 m2</p>`;
        sliderTimeChange.innerHTML = `<p class= 'slider__time-change'>3.5 months</p>`;
    }
}
sliderOne()

// добавление элементов на второй слайд
function sliderTwo(){
    if(sliderCount === sliderImage.length-2){
        sliderCityChange.innerHTML = `<p class= 'slider__city-change'>Sochi<br>
    Thieves</p>`;
        sliderAreaChange.innerHTML = `<p class= 'slider__area-change'>105 m2</p>`;
        sliderTimeChange.innerHTML = `<p class= 'slider__time-change'>4 months</p>`;
    }
}
sliderTwo();

// добавление элементов на третий слайд
function sliderThree(){
    if(sliderCount === sliderImage.length-1){
        sliderCityChange.innerHTML = `<p class= 'slider__city-change'>Rostov-on-Don<br>
        Patriotic</p>`;
        sliderAreaChange.innerHTML = `<p class= 'slider__area-change'>93 m2</p>`;
        sliderTimeChange.innerHTML = `<p class= 'slider__time-change'>3 months</p>`;
    }
}
sliderThree();


// интервальное перелистывание слайдов

setInterval(() => {
    sliderRight()
}, 7000);