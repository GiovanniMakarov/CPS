import '../scss/style.scss'; 

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
            closeModal(asideMenu, false);
    };
});


const buttonFeedbackOpen = document.querySelectorAll('.chat-button');
const asideFeedback = document.querySelector('.aside__container--modal.feedback');
const buttonFeedbackClose = document.querySelector('.feedback-close');
const buttonCallbackOpen = document.querySelectorAll('.call-button');
const asideCallback = document.querySelector('.aside__container--modal.callback');
const buttonCallbackClose = document.querySelector('.callback-close');
const blurBlock = document.querySelector('.blur-wrapper');

buttonCallbackOpen.forEach((button) => {
    button.addEventListener('click', () => {
        openModal(asideCallback);
    
        blurBlock.addEventListener('click', () => closeModal(asideCallback));
        buttonCallbackClose.addEventListener('click', () => closeModal(asideCallback));
    })
});

buttonFeedbackOpen.forEach((button) => {
    button.addEventListener('click', () => {
        openModal(asideFeedback);
        blurBlock.addEventListener('click', () => closeModal(asideFeedback));
        buttonFeedbackClose.addEventListener('click', () => closeModal(asideFeedback));
    })
});

const closeModal = (block, hideBlur = true) => {
    block.classList.remove('show-slow');

    if (hideBlur) {
        blurBlock.classList.remove('show-slow');
        document.body.classList.remove('no-scroll');
    }
}

const openModal = (block) => {
    block.classList.add('show-slow');
    blurBlock.classList.add('show-slow');
    document.body.classList.add('no-scroll');
}


const readMoreButtonServices = document.querySelector('.button-readmore--services');
const readMoreButtonBrands = document.querySelector('.button-readmore--brands');
const readMoreButtonEquipment = document.querySelector('.button-readmore--equipment');

readMoreButtonServices.addEventListener('click', () => {
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


const updateReadMoreButton = (blockClass, buttonClass) => {
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

const sliderBrands = document.querySelector('.swiper__brands');
const sliderEquipment = document.querySelector('.swiper__equipment');
const sliderPrice = document.querySelector('.swiper__price');

let swiper;

mobileSlider(sliderBrands, ".swiper__brands");
mobileSlider(sliderEquipment,".swiper__equipment");
mobileSlider(sliderPrice, ".swiper__price");

window.addEventListener('resize', () => {
    mobileSlider(sliderBrands, ".swiper__brands");
    mobileSlider(sliderEquipment, ".swiper__equipment");
    mobileSlider(sliderPrice, ".swiper__price");
})

const mobileSlider = (slider, swiperClass) => {
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

const tabsButton = document.querySelectorAll('.services__slider__radiobtn')
const tabsItems = document.querySelectorAll('.services__content__description__text');

tabsButton.forEach((item) => {
    item.addEventListener('click', () => {
        const tabID = item.getAttribute("data-tab");
        const currentTab = document.querySelector(tabID);

        if ( ! currentTab.classList.contains('active')) {
            tabsItems.forEach( (item) => {
                item.classList.remove('active');
            })

            currentTab.classList.add('active');

            updateReadMoreButton('.services__content__description__text.active', '.button-readmore--services');
        }
    })
})