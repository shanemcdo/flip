/// https://stackoverflow.com/questions/37559034/how-to-prevent-empty-inputs-in-my-form-html-php
function disable_empty_inputs(form){
    Array.prototype.forEach.call(form.elements, el => {
        if(el.value === '' || el.value === el.dataset.defaultValue) {
            el.disabled = true;
        }
    });
}

