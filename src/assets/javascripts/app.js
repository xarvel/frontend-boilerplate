import FontFaceObserver from 'fontfaceobserver';
import $ from 'jquery';
import Form from './components/form';

(function () {
    "use strict";

    let font = new FontFaceObserver('Open Sans');

    font.load().then(function () {
        document.documentElement.classList.add("fonts-loaded");
    });



})();





