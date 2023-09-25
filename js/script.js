const slider = document.querySelector('.slider');
const sliderItems = document.querySelector('.slider-items');
const sliderItemWidth = document.querySelector('.slider-item').offsetWidth;

let slideIndex = 0;
const slideDistance = sliderItemWidth * 4;

function slideToLeft() {
    if (slideIndex > 0) {
        slideIndex--;
        sliderItems.style.transform = `translateX(${-slideDistance * slideIndex}px)`;
    }
}

function slideToRight() {
    const maxSlideIndex = Math.ceil(sliderItems.childElementCount / 4) - 1;
    if (slideIndex < maxSlideIndex) {
        slideIndex++;
        sliderItems.style.transform = `translateX(${-slideDistance * slideIndex}px)`;
    }
}

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', slideToLeft);
nextButton.addEventListener('click', slideToRight);

// js slide category
const slider1 = document.querySelector('.slider-category');
const sliderItems1 = document.querySelector('.slider-items-category');
const sliderItemWidth1 = document.querySelector('.slider-item-category').offsetWidth;

let slideIndex1 = 0;
const slideDistance1 = sliderItemWidth1 * 4;

function slideToLeft1() {
    if (slideIndex1 > 0) {
        slideIndex1--;
        sliderItems1.style.transform = `translateX(${-slideDistance1 * slideIndex1}px)`;
    }
}

function slideToRight1() {
    const maxSlideIndex1 = Math.ceil(sliderItems1.childElementCount / 4) - 1;
    if (slideIndex1 < maxSlideIndex1) {
        slideIndex1++;
        sliderItems1.style.transform = `translateX(${-slideDistance1 * slideIndex1}px)`;
    }
}

const prevButton1 = document.querySelector('.prev-button-category');
const nextButton1 = document.querySelector('.next-button-category');

prevButton1.addEventListener('click', slideToLeft1);
nextButton1.addEventListener('click', slideToRight1);

