const name1Field = document.querySelector('#block08-form input[name="name"]').parentNode;
const phoneField = document.querySelector('#block08-form input[name="phone"]').parentNode;
const form1 = document.getElementById('feedback-form');

function setColor(color, fontColor) {
    console.log('setColor');
    document.querySelector('#myTable').style.backgroundColor = color;
    document.querySelector('#myTable').style.color = fontColor;
}

function sendToTable( ) {
    const phone = document.querySelector('#phoneInput').value;
    const name = document.querySelector('#nameInput').value;
    const table =  document.querySelector('#myTable');
    const tr = document.createElement('tr');
    tr.id = 'customId' + Date.now();
    tr.innerHTML +=  `<td>${name}</td>
                        <td>${phone}</td>
                        <td>
                            <a href="#" class="table__delete" onclick="document.getElementById(\'${tr.id}\').remove();">Удалить</a>
                        </td>`
    table.appendChild(tr);
}


const ERROR_CLASS_NAME1 = 'st-input1_error';
const FOCUCED_CLASS_NAME1 = 'st-input1_focused';


function initalizeField(field) {
    const input1 = (field.getElementsByTagName('input')[0]) ? (field.getElementsByTagName('input')[0]) : (field.getElementsByTagName('textArea')[0])
    const fieldError1 = field.querySelector('.st-input1__error-msg');

    reset();

    input1.value = '';
    field.classList.remove(ERROR_CLASS_NAME1);
    field.classList.remove(FOCUCED_CLASS_NAME1);
    fieldError1.innerText = '';



    function clearError() {
        field.classList.remove(ERROR_CLASS_NAME1);
        fieldError1.innerText = '';
    }


    input1.addEventListener('focus', function () {
        field.classList.add(FOCUCED_CLASS_NAME1);
    })

    input1.addEventListener('blur', () => {
        if (!input1.value) {
            field.classList.remove(FOCUCED_CLASS_NAME1);
        }
    })
    input1.addEventListener('input', () => {
        clearError();
    })

    function reset() {
        input1.value = '';
        field.classList.remove(ERROR_CLASS_NAME1);
        field.classList.remove(FOCUCED_CLASS_NAME1);
        clearError();
    }

    return {
        addError(errorText) {
            field.classList.add(ERROR_CLASS_NAME1);
            fieldError1.innerText = errorText;
        },
        getValue() {
            return input1.value
        },
        focus() {
            input1.focus()
        },
        reset: reset

    }
}
const name1FieldUtils = initalizeField(name1Field);
const phoneFieldUtils = initalizeField(phoneField);





function handleSubmit(event) {
    console.log('handle submit');
    event.preventDefault();

    const name1Value = name1FieldUtils.getValue();
    const phoneValue = phoneFieldUtils.getValue();
   



    if (!name1Value) {
        name1FieldUtils.addError('Необходимо указать имя');
        return;

    }
    if (!phoneValue) {
        phoneFieldUtils.addError('Необходимо указать телефон');
        return;

    } else {

        if (!/^\+(\d{11})$/.test(form1["phone"].value)) {
            phoneFieldUtils.addError('Номер телефона должен быть в формате +79000000000');
            return;
        }
    }
    
    sendToTable();
}

form1.addEventListener('submit', handleSubmit);