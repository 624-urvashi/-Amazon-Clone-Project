// panel Dropdown
function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}
// slider style

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const slideInterval = 3000; // Interval in milliseconds

function updateSliderPosition() {
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function showNextSlide() {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSliderPosition();
}

function showPrevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSliderPosition();
}

nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);

setInterval(showNextSlide, slideInterval);


// slider style ends here!

// second slide starts
const slider2 = document.querySelector('.slider-2');
const slides2 = document.querySelectorAll('.slide-2');
const prevBtn2 = document.querySelector('.prev-btn-2');
const nextBtn2 = document.querySelector('.next-btn-2');

let currentSlide2 = 0;
const slideInterval2 = 3000; // Interval in milliseconds

function updateSlider2Position() {
    slider2.style.transform = `translateX(${-currentSlide2 * 100}%)`;
}

function showNextSlide2() {
    currentSlide2 = (currentSlide2 < slides2.length - 1) ? currentSlide2 + 1 : 0;
    updateSlider2Position();
}

function showPrevSlide2() {
    currentSlide2 = (currentSlide2 > 0) ? currentSlide2 - 1 : slides2.length - 1;
    updateSlider2Position();
}

nextBtn2.addEventListener('click', showNextSlide2);
prevBtn2.addEventListener('click', showPrevSlide2);

setInterval(showNextSlide2, slideInterval2);


// second slide ends here


// for media queries show ALL 

function toggleDropdown() {
    var dropdown = document.getElementById('dropdownMenu');
    var panel = document.querySelector('.panel');

    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
        panel.classList.add('show-options');
    } else {
        dropdown.style.display = 'none';
        panel.classList.remove('show-options');
    }
}

// Cart //