const password = document.querySelector('#password');
const passInfo = document.querySelector('.passinfo');
const minLength = 10;
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const specials = /[!@#$%^&*()]/;

const passwordVerification = () => {
  if (
    password.value.length >= minLength &&
    password.value.match(letters) &&
    password.value.match(numbers) &&
    password.value.match(specials)
  ) {
    passInfo.style.color = 'lightgreen';
    passInfo.textContent = 'Bardzo dobre hasło! :)';
  } else if (
    password.value.length >= minLength &&
    password.value.match(letters) &&
    password.value.match(numbers)
  ) {
    passInfo.style.color = 'gold';
    passInfo.textContent = 'Dobre hasło.';
  } else {
    if (password.value.length >= minLength && password.value.match(letters)) {
      passInfo.style.color = 'red';
      passInfo.textContent = 'Hasło jest słabe. :( ';
    }
  }
};

const passLengthVerification = () => {
  if (password.value !== '' && password.value.length >= minLength) {
    passwordVerification();
  } else {
    passInfo.style.color = '';
    passInfo.textContent = 'Nie podałeś hasła...';
  }
};

password.addEventListener('keyup', passLengthVerification);
