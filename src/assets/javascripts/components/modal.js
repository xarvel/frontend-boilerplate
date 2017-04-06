class Modal {
    constructor(el, options) {
        options = options || {};
        let self = this;

        this.modal = el;

        this._classClosed = options.classClosed || 'modal_closed';
        this._classClose = options.classClose || 'modal__close';

        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener('click', function (event) {
            if (event.target == el) {
                self.close();
            }
        });

        // When the user press escape button, close the modal
        window.addEventListener('keydown', function (event) {
            if (event.keyCode == 27) {
                self.close();
            }
        });

        // Get the <button> element that closes the modal
        let closeButton = el.getElementsByClassName(this._classClose)[0];

        // When the user clicks on button 'Close', close the modal
        closeButton.onclick = function () {
            self.close();
        };
    }

    open() {
        this.modal.classList.remove(this._classClosed);
    }

    close() {
        this.modal.classList.add(this._classClosed);
    }
}

export default Modal;

// // Get the modal
// let modal = new Modal(document.getElementById('js-modal'));
//
// // Get the button that opens the modal
// let openModalButton = document.getElementById("js-open-modal");
//
// // When the user clicks the button, open the modal
// openModalButton.onclick = function() {
//     modal.open();
// }
