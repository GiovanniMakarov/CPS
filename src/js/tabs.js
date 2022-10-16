import {updateReadMoreButton} from './readmoreBtn.js';

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