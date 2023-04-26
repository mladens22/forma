const form = document.querySelector('.form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const phone = document.querySelector('#phone');
const postNumber = document.querySelector('#postNumber');
const address = document.querySelector('#address');
const houseNumber = document.querySelector('#houseNumber');
const place = document.querySelector('#place');
const email = document.querySelector('#email');



form.addEventListener('submit', function (event) {
  event.preventDefault();

if (!/^[a-zA-Z]+$/.test(firstName.value)) {
    alert('Please enter a valid first name with only letters.');
    return;
  }
  
  if (!/^[a-zA-Z]+$/.test(lastName.value)) {
    alert('Please enter a valid last name with only letters.');
    return;
  }
  
  if (firstName.value.trim() === '' || lastName.value.trim() === '') {
    alert('Please enter both first name and last name.');
    return;
  }

  if (address.value.trim() === '' || houseNumber.value.trim() === '' || postNumber.value.trim() === '' || place.value.trim() === '') {
    alert('Please fill all address fields.');
    return;
  }

  if (!/^\d{9,}$/.test(phone.value)) {
    alert('Please enter a valid phone number with at least 9 digits.');
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  console.log(`First Name: ${firstName.value}
  Last Name: ${lastName.value}
  Phone: ${phone.value}
  Address: ${address.value}
  House Number: ${houseNumber.value}
  Postal Code: ${postNumber.value}
  Place: ${place.value}
  Email: ${email.value}`);

  firstName.value = '';
  lastName.value = '';
  phone.value = '';
  postNumber.value = '';
  address.value = '';
  houseNumber.value = '';
  place.value = '';
  email.value = '';
  
});
