import $ from 'jquery';
import Hammer from 'hammerjs';


class Lightbox {
    constructor(el, options) {
        this.options = options || {};

        let self = this;
        this.lightbox = el;
        this.content = self.lightbox.getElementsByClassName('lightbox__content')[0];

        this._classClosed = this.options.classClosed || 'lightbox_closed';
        this._classClose = this.options.classClose || 'lightbox__close';




        this.image = new Image();
        this.image_loaded = false;

        this.image.onload = function () {
            self.image_loaded = true;

            self.content.appendChild(this);

            let width = this.width;
            let height = this.height;
            let aspectRatio = width / height;
            let delta = 0;
            let startWidth;
            let startHeight;

            self.image.style.width = width + 'px';
            self.image.style.height = height + 'px';


            //wheel zooming
            self.lightbox.addEventListener('wheel', function (e) {
                let oldDelta = delta;

                if (e.deltaY > 0) {
                    delta++;
                } else {
                    delta--;
                }

                let newWidth = width + delta * 50 * aspectRatio;
                let newHeight = height + delta * 50;

                if (newWidth < 300) {
                    delta = oldDelta;
                }

                self.image.style.width = newWidth + 'px';
                self.image.style.height = newHeight + 'px';

                e.preventDefault();
            });


            //touch zooming
            let startDistance = 0;
            self.lightbox.addEventListener('touchstart', function (event) {
                if(event.touches.length == 2){
                    let x1 = event.touches[0].clientX;
                    let x2 = event.touches[1].clientX;
                    let y1 = event.touches[0].clientY;
                    let y2 = event.touches[1].clientY;

                    startWidth = self.image.offsetWidth;
                    startHeight = self.image.offsetHeight;
                    startDistance = Math.sqrt(Math.pow((x2 - x1), 2)  +  Math.pow((y2 - y1), 2));
                }
            },false);

            self.lightbox.addEventListener('touchmove', function (event) {
                if(event.touches.length == 2){
                    let x1 = event.touches[0].clientX;
                    let x2 = event.touches[1].clientX;
                    let y1 = event.touches[0].clientY;
                    let y2 = event.touches[1].clientY;

                    let distance = Math.sqrt(Math.pow((x2 - x1), 2)  +  Math.pow((y2 - y1), 2));

                    if(startDistance < distance){

                        let delta = distance - startDistance;

                        let newWidth = startWidth + delta  * aspectRatio;
                        let newHeight = startHeight + delta;

                        self.image.style.width = newWidth + 'px';
                        self.image.style.height = newHeight + 'px';


                    }else{
                        let delta =  startDistance - distance;

                        let newWidth = startWidth - delta  * aspectRatio;
                        let newHeight = startHeight - delta ;

                        self.image.style.width = newWidth + 'px';
                        self.image.style.height = newHeight + 'px';
                    }
                }
            },false);



        };

        this.image.src = this.options.src;


        // When the user clicks anywhere outside of the lightbox, close it
        window.onclick = function (event) {
            if (event.target == el) {
                self.close();
            }
        };

        // Get the <button> element that closes the lightbox
        let closeButton = el.getElementsByClassName(this._classClose)[0];

        // When the user clicks on button 'Close', close the lightbox
        closeButton.onclick = function () {
            self.close();
        };
    }

    open() {
        if (this.image_loaded == true) {
            this.lightbox.classList.remove(this._classClosed);
        }
    }

    close() {
        this.lightbox.classList.add(this._classClosed);
    }
}

export default Lightbox;

//let openLightboxButton = document.getElementById("js-open-lightbox");
//
//let lightbox = new Lightbox(document.getElementById('js-lightbox'), {
//    src: openLightboxButton.dataset.src
//});
//
//openLightboxImage.onclick = function () {
//    openLightboxButton.open();
//};