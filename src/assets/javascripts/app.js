import FontFaceObserver from 'fontfaceobserver';
import $ from 'jquery';
import Form from './components/form/form';
import Autocomplete from './components/autocomplete';

(function () {
    "use strict";

    let font = new FontFaceObserver('Open Sans');

    font.load().then(function () {
        document.documentElement.classList.add("fonts-loaded");
    });

})();