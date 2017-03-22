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

    let autocompleteInput = document.getElementsByClassName('js-autocomplete');

    Array.from(autocompleteInput).forEach(function (element) {
        new Autocomplete(element);
    });

})();