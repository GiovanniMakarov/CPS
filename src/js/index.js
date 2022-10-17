import '../scss/style.scss'; 

// ------------ Modals
const asideMenuButtonOpen = document.querySelector('.burger-menu-open');
const asideMenu = document.querySelector('.aside__container--menu');

asideMenuButtonOpen.addEventListener('click', () => {
    openModal(asideMenu);
    blurBlock.addEventListener('click', () => closeModal(asideMenu));
});

asideMenu.addEventListener('click', event => {
    if (event.target.classList.contains('burger-menu-close'&&'menu-close')) {
        closeModal(asideMenu);
    };

    if (event.target.classList.contains('aside__link')) {
        closeModal(asideMenu);
    };

    if ((event.target.classList.contains('call-button')) || 
         event.target.classList.contains('chat-button')) {
            closeModal(asideMenu, 'false');
    };
});


const buttonFeedbackOpen = document.querySelectorAll('.chat-button');
const asideFeedback = document.querySelector('.aside__container--modal.feedback');
const buttonFeedbackClose = document.querySelector('.feedback-close');
const buttonCallbackOpen = document.querySelectorAll('.call-button');
const asideCallback = document.querySelector('.aside__container--modal.callback');
const buttonCallbackClose = document.querySelector('.callback-close');
const blurBlock = document.querySelector('.blur-wrapper');

buttonCallbackOpen.forEach(function(button) {
    button.addEventListener('click', function() {
        openModal(asideCallback);
        blurBlock.addEventListener('click', () => closeModal(asideCallback));
        buttonCallbackClose.addEventListener('click', () => closeModal(asideCallback));
    })
});

buttonFeedbackOpen.forEach(function(button) {
    button.addEventListener('click', function() {
        openModal(asideFeedback);
        blurBlock.addEventListener('click', () => closeModal(asideFeedback));
        buttonFeedbackClose.addEventListener('click', () => closeModal(asideFeedback));
    })
});

function closeModal (block, hideBlur = 'true') {
    block.classList.remove('show');
    if (hideBlur === 'true') {
        blurBlock.classList.remove('show');
        document.body.classList.remove('no-scroll');
    }
}

function openModal (block) {
    block.classList.add('show');
    blurBlock.classList.add('show');
    document.body.classList.add('no-scroll');
    console.log(document.body.classList);
}




// ------------ Readmore buttons 

const readMoreButtonServices = document.querySelector('.button-readmore--services');
const readMoreButtonBrands = document.querySelector('.button-readmore--brands');
const readMoreButtonEquipment = document.querySelector('.button-readmore--equipment');

readMoreButtonServices.addEventListener('click', function() {
    const activeDescription = document.querySelector('.services__content__description__text.active');
    if ( ! activeDescription ) return;
    
    activeDescription.classList.toggle('fullsize');
    updateReadMoreButton('.services__content__description__text.active', '.button-readmore--services');
})

readMoreButtonBrands.addEventListener ('click', () => {
    const brandsBlock = document.querySelector('.swiper-wrapper.brands-wrapper');
    brandsBlock.classList.toggle('fullsize');
    updateReadMoreButton('.swiper-wrapper.brands-wrapper', '.button-readmore--brands');
})

readMoreButtonEquipment.addEventListener ('click', () => {
    const EquipmentBlock = document.querySelector('.swiper-wrapper.equipment-wrapper');
    EquipmentBlock.classList.toggle('fullsize');
    updateReadMoreButton('.swiper-wrapper.equipment-wrapper', '.button-readmore--equipment');
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



// ------------ Swiper

const sliderBrands = document.querySelector('.swiper__brands');
const sliderEquipment = document.querySelector('.swiper__equipment');
const sliderPrice = document.querySelector('.swiper__price');

let swiper;

mobileSlider(sliderBrands, ".swiper__brands");
mobileSlider(sliderEquipment,".swiper__equipment");
mobileSlider(sliderPrice, ".swiper__price");

window.addEventListener('resize', function () {
    mobileSlider(sliderBrands, ".swiper__brands");
    mobileSlider(sliderEquipment, ".swiper__equipment");
    mobileSlider(sliderPrice, ".swiper__price");
})

function mobileSlider(slider, swiperClass) {
    if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
        let swiper = new Swiper(swiperClass, {
            slidesPerView: "auto",
            spaceBetween: 16,
            centeredSlides: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
        slider.dataset.mobile = 'true'; 
    }

    if (window.innerWidth >= 768) {
        slider.dataset.mobile = 'false'; 

        if (slider.classList.contains('swiper-initialized')) {
            slider.swiper.destroy();
        }
    }
}




// ------------ Tabs

const tabsButton = document.querySelectorAll('.services__slider__radiobtn')
const tabsItems = document.querySelectorAll('.services__content__description__text');

tabsButton.forEach(function(item) {
    item.addEventListener('click', function() {
        const tabID = item.getAttribute("data-tab");
        const currentTab = document.querySelector(tabID);

        if ( ! currentTab.classList.contains('active')) {
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            })

            currentTab.classList.add('active');

            updateReadMoreButton('.services__content__description__text.active', '.button-readmore--services');
        }
    })
})