// Изменение текста по кнопке слайдера 
const tabsBtn = document.querySelectorAll('.services__slider__radiobtn')
const tabsItems = document.querySelectorAll('.services__content__description__text');
const readMoreCheckBox = document.querySelector('.read-more-checkbox');

tabsBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        const tabID = item.getAttribute("data-tab");
        const currentTab = document.querySelector(tabID);

        if ( ! currentTab.classList.contains('active')) {
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            })
            currentTab.classList.add('active');

            readMoreCheckBox.checked = false;
        }  
    })
})