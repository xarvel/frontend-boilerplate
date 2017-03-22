class Autocomplete{
    constructor(element){
        this.autocompleteSource = document.getElementById(element.dataset.source);

        this.autocompleteInput = element;

        let autocompleteList = this.autocompleteSource.getElementsByClassName('autocomplete__option');

        let autocompleteData = [];
        let self = this;

        Array.from(autocompleteList).forEach(function (element) {
            autocompleteData.push(element.textContent);
        });

        this.autocompleteSource.classList.add('autocomplete_closed');
        this.autocompleteSource.innerHTML = '';

        window.onclick = function (event) {
            if(event.target != this.autocompleteSource && event.target != this.autocompleteInput){
                self.autocompleteSource.classList.add('autocomplete_closed');
                self.autocompleteSource.innerHTML = '';
            }
        };

        element.onkeyup = function (event) {
            if (event.key == 'ArrowUp' || event.key == 'ArrowDown' || event.key == 'Enter') {
                return;
            }
            self.autocompleteSource.classList.add('autocomplete_closed');
            self.autocompleteSource.innerHTML = '';

            let value = this.value;

            let newList = autocompleteData.filter(function (item) {
                return item.indexOf(value) != -1;
            });

            newList.forEach(function (item) {
                let newLi = document.createElement('li');
                newLi.classList.add('autocomplete__option');
                newLi.innerHTML = item.replace(value, '<span class="autocomplete__marker">' + value + '</span>');

                newLi.onclick = function (event) {
                    let val = this.innerHTML;

                    self.setValue(val);
                };

                self.autocompleteSource.appendChild(newLi);
            });

            self.autocompleteSource.classList.remove('autocomplete_closed');

        };

        element.onkeydown = function (event) {
            let activeItem = self.autocompleteSource.getElementsByClassName('active')[0];

            if (event.key == 'ArrowUp') {
                if (activeItem) {
                    activeItem.classList.remove('active');
                    activeItem = activeItem.previousElementSibling;
                    if (activeItem) {
                        activeItem.classList.add('active');
                    }
                } else {
                    activeItem = self.autocompleteSource.lastElementChild;
                    activeItem.classList.add('active');
                }
            }
            if (event.key == 'ArrowDown') {
                if (activeItem) {
                    activeItem.classList.remove('active');
                    activeItem = activeItem.nextSibling;
                    if (activeItem) {
                        activeItem.classList.add('active');
                    }

                } else {
                    activeItem = self.autocompleteSource.firstElementChild;
                    activeItem.classList.add('active');
                }
            }
            if (event.key == 'Enter') {
                event.preventDefault();
                if (activeItem) {
                    let val = activeItem.innerHTML;
                    self.setValue(val);
                }
            }
        };
    }

    setValue(value){
        let val = value.replace('<span class="autocomplete__marker">', '').replace('</span>', '');

        this.autocompleteInput.value = val;
        this.autocompleteSource.classList.add('autocomplete_closed');
        this.autocompleteSource.innerHTML = '';
        this.autocompleteInput.onchange();
    }
}


export default Autocomplete;


//let autocompleteInput = document.getElementsByClassName('js-autocomplete');
//
//Array.from(autocompleteInput).forEach(function (element) {
//    new Autocomplete(element);
//});

