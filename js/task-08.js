const loginInfo = {};
const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { elements: { email, password } } = event.currentTarget;
  
  if (email.value === '' || password.value === '') {
    alert('Всі поля повинні бути заповнені!');
    return;
  }

  loginInfo.email = email.value;
  loginInfo.password = password.value;
  console.log(loginInfo);
  event.currentTarget.reset();
}