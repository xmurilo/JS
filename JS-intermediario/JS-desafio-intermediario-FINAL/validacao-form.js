const form = document.getElementById('formulario');
const campos = document.querySelectorAll('.input-form');
const spans = document.querySelectorAll('.campo-obrigatorio');
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function setError(index) {
  campos[index].style.border = '2px solid red';
  spans[index].style.display = 'block';
}

function removeError(index) {
  campos[index].style.border = '2px solid #3ccc87';
  spans[index].style.display = 'none';
}

function validateName() {
  if (campos[0].value.length > 3) {
    removeError(0);
  } else {
    setError(0);
  }
}

function validateEmail() {
  if (emailRegex.test(campos[1].value)) {
    removeError(1);
  } else {
    setError(1);
  }
}

function validateTel() {
  if (campos[2].value.length == 11) {
    removeError(2);
  } else {
    setError(2);
  }
}

function validateText() {
  if (campos[3].value.length > 10) {
    removeError(3);
  } else {
    setError(3);
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  for (let i = 0; i < campos.length; i++) {
    if (campos[i].value == '') {
      setError(i);
    }
  }
});
