class Autocomplete{
    constructor(element){
        let autocompleteSource = document.getElementById(element.dataset.source);

        let autocompleteList = autocompleteSource.getElementsByClassName('autocomplete__option');

        let autocompleteData = [];

        Array.from(autocompleteList).forEach(function (element) {
            autocompleteData.push(element.textContent);
        });

        autocompleteSource.classList.add('autocomplete_closed');
        autocompleteSource.innerHTML = '';

        window.onclick = function (event) {
            if(event.target != autocompleteSource && event.target != element){
                autocompleteSource.classList.add('autocomplete_closed');
                autocompleteSource.innerHTML = '';
            }
        };

        element.onkeyup = function (event) {
            if (event.key == 'ArrowUp' || event.key == 'ArrowDown' || event.key == 'Enter') {
                return;
            }
            autocompleteSource.classList.add('autocomplete_closed');
            autocompleteSource.innerHTML = '';

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

                    val = val.replace('<span class="autocomplete__marker">', '').replace('</span>', '');

                    element.value = val;
                    autocompleteSource.classList.add('autocomplete_closed');
                    autocompleteSource.innerHTML = '';
                };

                autocompleteSource.appendChild(newLi);
            });

            autocompleteSource.classList.remove('autocomplete_closed');

        };

        element.onkeydown = function (event) {
            let activeItem = autocompleteSource.getElementsByClassName('active')[0];

            if (event.key == 'ArrowUp') {
                if (activeItem) {
                    activeItem.classList.remove('active');
                    activeItem = activeItem.previousElementSibling;
                    if (activeItem) {
                        activeItem.classList.add('active');
                    }
                } else {
                    activeItem = autocompleteSource.lastElementChild;
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
                    activeItem = autocompleteSource.firstElementChild;
                    activeItem.classList.add('active');
                }
            }
            if (event.key == 'Enter') {
                event.preventDefault();
                if (activeItem) {
                    let val = activeItem.innerHTML;
                    val = val.replace('<span class="autocomplete__marker">', '').replace('</span>', '');
                    element.value = val;

                    autocompleteSource.classList.add('autocomplete_closed');
                    autocompleteSource.innerHTML = '';
                }
            }
        };
    }
}


export default Autocomplete;


//let autocompleteInput = document.getElementsByClassName('js-autocomplete');
//
//Array.from(autocompleteInput).forEach(function (element) {
//    new Autocomplete(element);
//});

