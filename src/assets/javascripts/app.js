import FontFaceObserver from 'fontfaceobserver';
import $ from 'jquery';

(function() {
    "use strict";

    var font = new FontFaceObserver('Open Sans');

    font.load().then(function () {
        document.documentElement.classList.add("fonts-loaded");
    });
})();





