document.addEventListener("DOMContentLoaded", () => {
    const defaults = {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        freeMode: true,
        freeModeSticky: true,
        freeModeMomentumRatio: 0.25,
        freeModeVelocityRatio: 0.25,
        freeModeMinimumVelocity: 0.1,
        mousewheelControl: true,
        mousewheelSensitivity: 0.5,
        loop: true,
        loopAdditionalSlides: 5,
        direction: 'vertical',
        slideToClickedSlide: true,
        centeredSlides: true
    };

    new Swiper(
        '.swiper-container.hours',
        Object.assign({}, defaults, { initialSlide: 13 })
    );

    new Swiper(
        '.swiper-container.minutes',
        Object.assign({}, defaults, { initialSlide: 37 })
    );

    new Swiper('.swiper-container.seconds', defaults);

});