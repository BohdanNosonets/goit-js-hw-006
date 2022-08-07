const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSabmit);

function onFormSabmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email.length === 0 || password.length === 0) {
    return alert("Всі поля повинні обов'язково бути заповнені");
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  event.currentTarget.reset();
}
