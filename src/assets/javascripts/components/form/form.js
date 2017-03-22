import * as lang from './dictionaries';

let language = 'en';

function validateRequired(el) {
    let type = el.type;
    let value = el.value;
    let messages = [];

    if (value === '') {
        if ((type == 'select-multiple' || type == 'select-one')) {
            messages.push(lang[language]['require_select']);
        } else if (type == 'file') {
            messages.push(lang[language]['require_file']);
        } else {
            messages.push(lang[language]['require_text']);
        }
    }

    return messages;
}

function validateEmail(el) {
    let email = el.value;
    let messages = [];
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
        messages.push(lang[language]['email']);
    }
    return messages;
}


class Form {
    static language = 'en';
    static rules = {
        'required': validateRequired,
        'email': validateEmail
    };

    constructor(Form, options) {
        if (Form == undefined) return;
        this.form = Form;
        language = options.language || 'en';


        this.fields = [];
        let self = this;

        Form.addEventListener("submit", function (event) {
            event.preventDefault();

            let isValid = true;

            self.fields.forEach(function (field) {

                let element = Form.elements[field.name];

                if (!self.validate(element, field)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                event.preventDefault();

                if (typeof options.errorCallback == 'function') {options.errorCallback()}

            } else {
                if (typeof options.submitCallback == 'function') {options.submitCallback()}
            }
        });
    }

    setRule(name, validator) {

        Form.rules[name] = validator;
    }

    setFields(fields) {
        let self = this;
        this.fields = this.fields.concat(fields);

        fields.forEach(function (field) {

            let element = self.form.elements[field.name];
            element.addEventListener('change', function () {
                self.validate(this, field);
            });
            element.addEventListener('blur', function () {
                self.validate(this, field);
            });
        });

    }

    validate(el, field) {
        let messages = [];
        let rules = field.rules;

        rules.forEach(function (rule) {
            if (Form.rules[rule]) {
                messages = messages.concat(Form.rules[rule](el));
            }
        });

        let parent = el.closest('.form__group');
        let errorList = parent.getElementsByClassName('form__error')[0];
        errorList.innerHTML = '';

        if (messages.length > 0) {
            if (typeof field.errorCallback == 'function') {
                field.errorCallback(el, messages)
            } else {
                parent.classList.remove('has-success');
                parent.classList.add('has-error');

                let ul = document.createElement("ul");
                ul.className = "menu";
                errorList.appendChild(ul);

                messages.forEach(function (message) {
                    let li = document.createElement("li");
                    li.textContent = message;
                    li.className = "menu__item";
                    ul.appendChild(li);
                });
            }


        } else {
            if (typeof field.successCallback == 'function') {
                field.successCallback(el)
            } else {
                parent.classList.remove('has-error');
                parent.classList.add('has-success');
            }
        }
    }
}
export default Form;



//let form = new Form(document.getElementById('form'), {
//    language: 'en',
//    submitCallback: function () {
//    },
//    errorCallback: function () {
//    }
//});
//form.setRule('custom-rule', function (el) {
//    let messages = [];
//    return messages;
//});
//form.setFields([
//    {
//        name: 'text',
//        rules: ['required', 'custom-rule'],
//    },
//    {
//        name: 'email',
//        rules: ['required', 'email']
//    },
//    {
//        name: 'select',
//        rules: ['required']
//    },
//    {
//        name: 'autocomplete',
//        rules: ['required']
//    }
//]);

