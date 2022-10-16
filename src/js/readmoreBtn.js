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


export function updateReadMoreButton (blockClass, buttonClass) {
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