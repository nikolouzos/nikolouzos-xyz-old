// Initialize Firebase
var config = {
  apiKey: "AIzaSyBN-zlo59OnzkuquY38P6TNrdLuZS_Ismg",
  authDomain: "kerkyraios-form.firebaseapp.com",
  databaseURL: "https://kerkyraios-form.firebaseio.com",
  projectId: "kerkyraios-form",
  storageBucket: "",
  messagingSenderId: "471564175582"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Form submission event listener
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit the form
function submitForm(e) {
  // Stop the default behavior of the form
  e.preventDefault();

  // Get all the form input values
  var firstname = getInputValue('form-firstname');
  var lastname = getInputValue('form-lastname');
  var phonenum = getInputValue('form-phonenum');
  var text = getInputValue('form-text');

  // Send the results to Firebase
  saveMessage(firstname, lastname, phonenum, text);
}

// Get the input values
function getInputValue(id) {
  return document.getElementById(id).value;
}

// Save the message to Firebase
function saveMessage(firstname, lastname, phonenum, text) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: firstname + ' ' + lastname,
    phone: phonenum,
    message: text
  }, formResult);

  // Clean the inputs of the contact form
  document.getElementById('contact-form').reset();
}


// todo show the message for the form
function formResult(error) {
  var formResult = document.querySelector('.form-result');
  if (error) {
    formResult.innerHTML = "Υπήρξε πρόβλημα με την φόρμα. Προσπαθήστε αργότερα."
    formResult.classList.add('bad');
  } else {
    formResult.classList.add('good');

    setTimeout(function () {
      formResult.classList.remove('good');
    }, 5000);
  }
}