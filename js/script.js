// -- -- -- -- OPEN MENU

const menu = document.querySelector('.menu-top__mobile');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.close');

openMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
});

closeMenu.addEventListener('click', function () {
    menu.classList.remove('active');
});

// -- -- -- -- -- MENU ANIMATION

document.addEventListener('DOMContentLoaded', function () {
    const menuAnimate = document.querySelector('.menu');
    const headerHeight = document.querySelector('.header');
    const headerOffset = headerHeight.offsetHeight / 2;
    const headerTitle = document.querySelector('.header__title__container');

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;

        if (scrollY > headerOffset) {
            menuAnimate.classList.add('active');
            headerTitle.classList.add('active');
        }
    });
});





// -- -- -- -- -- MENU ANIMATION

// -- -- -- -- OPEN MENU

// -- -- -- -- -- DOMContentLoaded Header
const headerAnimation = document.querySelector('.header-title__items');

document.addEventListener('DOMContentLoaded', function () {
    headerAnimation.classList.toggle('opacity');
});

// -- -- -- -- -- DOMContentLoaded Header

// -- -- -- -- -- SECTION-2 ANIMATION

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const titleOpacity = document.querySelector('.title-1');
        const section2Animate = document.querySelector('.section-2__service');
        const scrollY = window.scrollY;

        if (scrollY > 2000) {
            section2Animate.classList.add('active');
            titleOpacity.classList.add('active');
        }
    });
});

// -- -- -- -- -- SECTION-2 ANIMATION

// -- -- -- -- -- SECTION-3 ANIMATION

document.addEventListener('DOMContentLoaded', function () {
    const sectionThree = document.querySelector('.section-3');
    const sectionLeftAnimate = document.querySelector('.section-3__left');
    const sectionRightAnimate = document.querySelector('.section-3__right');

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;

        if (scrollY > 2915) {
            sectionLeftAnimate.classList.add('active');
            sectionRightAnimate.classList.add('active');
        }
    });
});

// -- -- -- -- -- SECTION-3 ANIMATION

// -- -- -- -- -- SECTION-4

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const sectionFourBody = document.querySelector('.section-4__content');
        const scrollY = window.scrollY;

        if (scrollY > 3800) {
            sectionFourBody.classList.add('active');
        }
    });
});

// -- -- -- -- --FOOTER-BOTTOM

const goUp = document.querySelector('.footer-bottom__iconUP');


goUp.addEventListener('click', function () {
    const goUpHeader = document.querySelector('.header');
    goUpHeader.scrollIntoView(true);
});


// -- -- -- -- -- SLIDER

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button__next',
        prevEl: '.swiper-button__back',
    },
});
