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