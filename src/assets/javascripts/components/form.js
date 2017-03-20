function validateAccept(el) {
    let messages = [];
    if (el.checked == false) {
        messages.push('This field is required');
    }
    return messages;
}

function validateRequired(el) {
    let type = el.type;
    let value = el.value;
    let messages = [];

    if (value === '') {
        if ((type == 'select-multiple' || type == 'select-one')) {
            messages.push('Please select an item');
        } else if (type == 'file') {
            messages.push('Please select a file');
        } else {
            messages.push('Please fill in this field');
        }
    }

    return messages;
}

function validateEmail(el) {
    let email = el.value;
    let messages = [];
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
        messages.push('Please check your e-mail, it seems incomplete');
    }
    return messages;
}

class Form {

    check(el, option) {

        let messages = [];
        let rules = option.rules;

        rules.forEach(function (rule) {

            switch (rule) {
                case 'required':
                    messages = messages.concat(validateRequired(el));
                    break;
                case 'email':
                    messages = messages.concat(validateEmail(el));
                    break;
                case 'accept':
                    messages = messages.concat(validateAccept(el));
                    break;
            }
        });

        let parent = el.closest('.form__group');
        let errorlist = parent.getElementsByClassName('form__error')[0];
        errorlist.innerHTML = '';


        if (messages.length > 0) {
            parent.classList.remove('has-success');
            parent.classList.add('has-error');

            let ul = document.createElement("ul");
            ul.className = "menu";
            errorlist.appendChild(ul);

            messages.forEach(function (message) {
                let li = document.createElement("li");
                li.textContent = message;
                li.className = "menu__item";
                ul.appendChild(li);
            });


            if (typeof option.errorCallback == "function") {
                option.errorCallback(el, messages)
            }

            return false;
        } else {

            parent.classList.remove('has-error');
            parent.classList.add('has-success');

            if (typeof option.successCallback == "function") {
                option.successCallback(el);
            }

            return true;
        }
    }

    constructor(Form, options) {
        if (Form == undefined) return;

        this.submitCallback = function (event, Form) {

        };

        let self = this;

        for (let name in options) {
            if (options.hasOwnProperty(name)) {

                let element = Form.elements[name];
                let option = options[name];

                element
                    .addEventListener('change', function () {
                        self.check(this, option);
                    });
                element
                    .addEventListener('blur', function () {
                        self.check(this, option);
                    });
            }
        }

        Form.addEventListener("submit", function (evt) {
            let isValid = true;
            for (let name in options) {
                if (options.hasOwnProperty(name)) {

                    let element = Form.elements[name];
                    if (!self.check(element, options[name])) {
                        isValid = false;
                    }
                }
            }

            if (!isValid) {
                evt.preventDefault();
            } else {
                self.submitCallback(evt, Form);
            }
        });
    }

    submit(callback) {
        this.submitCallback = callback;
    }

}

export default Form;


//let form = new Form(document.getElementById('form'), {
//    'text': {
//        rules: ['required'],
//    },
//    'email': {
//        rules: ['required', 'email'],
//    },
//    'select': {
//        rules: ['required']
//    },
//    'checkbox': {
//        rules: ['accept']
//    },
//});