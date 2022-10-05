const tabsButton = document.querySelectorAll('.services__slider__radiobtn')
const tabsItems = document.querySelectorAll('.services__content__description__text');
const readMoreButton = document.querySelector('.button-readmore');

readMoreButton.addEventListener('click', function() {
    const activeDescription = document.querySelector('.services__content__description__text.active');
    if ( ! activeDescription ) return;
    
    activeDescription.classList.toggle('fullsize');
    updateReadMoreButton();
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

            updateReadMoreButton();
        }  
    })
})

function updateReadMoreButton () {
    const activeDescription = document.querySelector('.services__content__description__text.active');
    if ( ! activeDescription) return;

    if (activeDescription.classList.contains('fullsize')) {
        readMoreButton.innerText = 'Скрыть';
        readMoreButton.classList.add('rotate');

    } else {
        readMoreButton.innerText = 'Читать далее';
        readMoreButton.classList.remove('rotate');
    }
}


// Mobile menu

const asideMenuButtonOpen = document.querySelector('.burger-menu-open');
const asideMenuButtonClose = document.querySelector('.burger-menu-close');
const asideMenu = document.querySelector('.aside__container');
const blurBlock = document.querySelector('.blur-wrapper');
const asideMenuLinks = document.querySelectorAll('.aside__menu__item__link');

asideMenuButtonOpen.addEventListener('click', () => openAsideMenu());

asideMenuButtonClose.addEventListener('click', () => closeAsideMenu());

blurBlock.addEventListener('click', () => closeAsideMenu());

asideMenuLinks.forEach(function(item) {
    item.addEventListener('click', () => closeAsideMenu());
})

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