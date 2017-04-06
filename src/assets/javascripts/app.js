import FontFaceObserver from 'fontfaceobserver';
import Lightbox from './components/lightbox';
import $ from 'jquery';
import Modal from './components/modal';
import './components/dropdown';

(function () {
    "use strict";

    let font = new FontFaceObserver('Open Sans');

    font.load().then(function () {
        document.documentElement.classList.add("fonts-loaded");
    });


    // Get the modal
    let modal = new Modal(document.getElementById('js-modal'));

    // Get the button that opens the modal
    let openModalButton = document.getElementById("js-open-modal");

    // When the user clicks the button, open the modal
    openModalButton.onclick = function () {
        modal.open();
    }

})();