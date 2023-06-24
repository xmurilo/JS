const form = document.getElementById('formulario');
const inputForm = document.querySelectorAll('.input-form');
const spans = document.querySelectorAll('.campo-obrigatorio');
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit', event => {
  event.preventDefault();
  for (let i = 0; i < inputForm.length; i++) {
    if (inputForm[i].value == '') {
      setError(i);
    }
  }
});

function setError(index) {
  inputForm[index].style.border = '2px solid red';
  spans[index].style.display = 'block';
}

function setCheck(index) {
  inputForm[index].style.border = '2px solid #3ccc87';
  spans[index].style.display = 'none';
}

function validateName() {
  if (inputForm[0].value.length > 3) {
    setCheck(0);
  } else {
    setError(0);
  }
}

function validateEmail() {
  if (emailRegex.test(inputForm[1].value)) {
    setCheck(1);
  } else {
    setError(1);
  }
}

function validateTel() {
  if (inputForm[2].value.length == 11) {
    setCheck(2);
  } else {
    setError(2);
  }
}

function validateText() {
  if (inputForm[3].value.length > 10) {
    setCheck(3);
  } else {
    setError(3);
  }
}
