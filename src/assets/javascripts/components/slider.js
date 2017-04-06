class Slider {
    constructor(el) {
        if(el == undefined) return;

        this.container = el.getElementsByClassName('slider__container')[0];
        this.container.style.transform = 'translate3d(-0%, 0px, 0px)';
        this.container.style.transition = 'all 1000ms ease';

        const slides = el.getElementsByClassName('slider__slide');
        this.slidesCount =  slides.length;
        if(this.slidesCount == 0) return;

        this.container.style.width = this.slidesCount * 100 + '%';

        const slideWidth = 100 / this.slidesCount;
        this.slideWidth = slideWidth;

        Array.from(slides).forEach(function(element) {
            element.style.width = slideWidth + '%';
        });

        this.currentSlide = 1;

        this.havePrevious = false;
        this.haveNext = this.slidesCount > 1;
    }

    slideTo(i)
    {
        if(this.slidesCount < i || i <= 0) return;

        this.currentSlide = parseInt(i);
        this.container.style.transform =  'translate3d(-'+((this.currentSlide-1) * this.slideWidth)+'%, 0px, 0px)';

        this.havePrevious = this.currentSlide != 1;
        this.haveNext = this.currentSlide !=  this.slidesCount;
    }
}

export default Slider;

// let slider = new Slider(document.getElementById('js-slider'));
//
// let sliderNextButton = document.getElementById('js-slide-navigation-next');
// let sliderPreviousButton = document.getElementById('js-slide-navigation-previous');
//
// function disableButtons() {
//     sliderNextButton.disabled = slider.haveNext == false;
//     sliderPreviousButton.disabled = slider.havePrevious == false;
// }
// disableButtons();
//
// sliderPreviousButton.onclick = function () {
//     slider.slideTo(slider.currentSlide - 1);
//
//     disableButtons();
// };
//
// sliderNextButton.onclick = function () {
//     slider.slideTo(slider.currentSlide + 1);
//
//     disableButtons();
// };