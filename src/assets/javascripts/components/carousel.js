class Carousel {
    constructor(el, count) {
        if (el == undefined) return;

        this.container = el.getElementsByClassName('carousel__container')[0];
        this.container.style.transform = 'translate3d(-0%, 0px, 0px)';
        this.container.style.transition = 'all 1000ms ease';

        const slides = el.getElementsByClassName('carousel__item');
        this.slidesCount = slides.length;
        if (this.slidesCount == 0) return;

        const slideWidth = 100 / count;

        this.container.style.width = this.slidesCount * slideWidth + '%';

        this.slideWidth = slideWidth;

        Array.from(slides).forEach(function (element) {
            element.style.width = slideWidth + '%';
        });

        this.currentSlide = 0;
        this.last = this.slidesCount - count;

        this.setTouch(el);
    }

    setTouch(el) {
        let xDown = null;
        let yDown = null;

        let self = this;

        el.addEventListener('touchstart', function (event) {
            xDown = event.touches[0].clientX;
            yDown = event.touches[0].clientY;
        }, false);
        el.addEventListener('touchmove', function (event) {
            if (!xDown || !yDown) {
                return;
            }

            let xUp = event.touches[0].clientX;
            let yUp = event.touches[0].clientY;

            let xDiff = xDown - xUp;
            let yDiff = yDown - yUp;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                if (xDiff > 0) {
                    self.next();
                } else {
                    self.prev();
                }
            }

            xDown = null;
            yDown = null;
        }, false);
    }

    next() {
        if (this.currentSlide >= this.last) {
            return;
        }

        this.currentSlide++;
        this.container.style.transform = 'translate3d(-' + ((this.currentSlide) * (100 / this.slidesCount)) + '%, 0px, 0px)';

    }

    prev() {
        if (this.currentSlide == 0) {
            return;
        }
        this.currentSlide--;
        this.container.style.transform = 'translate3d(-' + ((this.currentSlide) * (100 / this.slidesCount)) + '%, 0px, 0px)';

    }
}

export default Carousel;



//let carousel = new Carousel(document.getElementById('js-carousel'),3);
//
//var sliderNextButton = document.getElementById('js-carousel-navigation-next');
//
//sliderNextButton.onclick = function () {
//    carousel.next();
//};
//
//var sliderPrevButton = document.getElementById('js-carousel-navigation-prev');
//
//sliderPrevButton.onclick = function () {
//    carousel.prev();
//};

