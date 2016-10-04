class Modal {
    constructor(el, options) {
        options = options || {};
        var self = this;

        this.modal = el;

        this._classClosed = options.classClosed || 'modal_closed';
        this._classClose = options.classClose || 'modal__close';


        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == el) {
                self.close();
            }
        };

        // Get the <button> element that closes the modal
        var closeButton = el.getElementsByClassName(this._classClose)[0];

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
// var modal = new Modal(document.getElementById('js-modal'));
//
// // Get the button that opens the modal
// var openModalButton = document.getElementById("js-open-modal");
//
// // When the user clicks the button, open the modal
// openModalButton.onclick = function() {
//     modal.open();
// }
