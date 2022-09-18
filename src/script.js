// Изменение текста по кнопке слайдера 
const tabsButton = document.querySelectorAll('.services__slider__radiobtn')
const tabsItems = document.querySelectorAll('.services__content__description__text');
const readMoreButton = document.querySelector('.button-readmore');

readMoreButton.addEventListener('click', function() {
    const activeDescription = document.querySelector('.services__content__description__text.active');
    if ( ! activeDescription ) return 0;
    
    activeDescription.classList.toggle('fullsize');
    changeReadMoreButton();
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

            changeReadMoreButton();
        }  
    })
})

// Ф-ия, которая проверяет наличие класса fullsize и меняет текст кнопки
function changeReadMoreButton () {
    const activeDescription = document.querySelector('.services__content__description__text.active');
    if ( ! activeDescription) return 0;

    if (activeDescription.classList.contains('fullsize')) {
        readMoreButton.textContent = 'Скрыть';
        readMoreButton.classList.add('show');
    } else {
        readMoreButton.textContent = 'Читать далее';
        readMoreButton.classList.remove('show');
    }
}