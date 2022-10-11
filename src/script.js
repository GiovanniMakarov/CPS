const tabsButton = document.querySelectorAll('.services__slider__radiobtn')
const tabsItems = document.querySelectorAll('.services__content__description__text');
const readMoreButton = document.querySelector('.button-readmore');

readMoreButton.addEventListener('click', function() {
    const activeDescription = document.querySelector('.services__content__description__text.active');
    if ( ! activeDescription ) return;
    
    activeDescription.classList.toggle('fullsize');
    updateReadMoreButton('.services__content__description__text.active', '.button-readmore');
})

tabsButton.forEach(function(item) {
    item.addEventListener('click', function() {
        const tabID = item.getAttribute("data-tab");
        const currentTab = document.querySelector(tabID);

        if ( ! currentTab.classList.contains('active')) {
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            })

            currentTab.classList.add('active');

            updateReadMoreButton('.services__content__description__text.active', '.button-readmore');
        }
    })
})

function updateReadMoreButton (blockClass, buttonClass) {
    const contentBlock = document.querySelector(blockClass);
    const readMoreButton = document.querySelector(buttonClass);
    if ( ! contentBlock) return;

    if (contentBlock.classList.contains('fullsize')) {
        readMoreButton.innerText = 'Скрыть';
        readMoreButton.classList.add('rotate');

    } else {
        readMoreButton.innerText = 'Читать далее';
        readMoreButton.classList.remove('rotate');
    }
}


// Mobile menu

const asideMenuButtonOpen = document.querySelector('.burger-menu-open');
const asideMenu = document.querySelector('.aside__container');
const blurBlock = document.querySelector('.blur-wrapper');

asideMenuButtonOpen.addEventListener('click', () => openAsideMenu());

blurBlock.addEventListener('click', () => closeAsideMenu());

asideMenu.addEventListener('click', event => {
    if (event.target.classList.contains('burger-menu-close')) {
        closeAsideMenu();
    };

    if (event.target.classList.contains('aside__menu__item__link')) {
        closeAsideMenu();
    };
});

function closeAsideMenu () {
    asideMenu.classList.remove('show');
    blurBlock.classList.remove('show');
    document.body.classList.remove('no-scroll');
}

function openAsideMenu () {
    asideMenu.classList.add('show');
    blurBlock.classList.add('show');
    document.body.classList.add('no-scroll');
}


// Swiper, read more button for brands block

const slider = document.querySelector('.swiper');
const readMoreButtonBrands = document.querySelector('.button-readmore.brands');
let swiper;

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
})

readMoreButtonBrands.addEventListener ('click', () => {
    const brandsBlock = document.querySelector('.swiper-wrapper.brands-wrapper');

    brandsBlock.classList.toggle('fullsize');

    updateReadMoreButton('.swiper-wrapper.brands-wrapper', '.button-readmore.brands');
})


function mobileSlider() {
    if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
        swiper = new Swiper(".swiper", {
            slidesPerView: "auto",
            spaceBetween: 16,
            centeredSlides: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        slider.dataset.mobile = 'true'; 
        readMoreButtonBrands.classList.add('hidden');
    }

    if (window.innerWidth >= 768) {
        slider.dataset.mobile = 'false'; 

        if (slider.classList.contains('swiper-initialized')) {
            swiper.destroy();
        }

        readMoreButtonBrands.classList.remove('hidden');
    }
}

