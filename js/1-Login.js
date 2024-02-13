document.addEventListener('DOMContentLoaded', function() {
  // test
  // console.log('TEST2');
    
    // receving login form
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
      //test the login form
      console.log('Login form found');

      // addEventListener for submit button
      loginForm.addEventListener('submit', function(event) {
        
        console.log('Form submitted');
        event.preventDefault();
        
        // get username and password
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // log the username and password
        console.log('Username:', username, 'Password:', password);
  
        // check if username and password are correct
        // if correct:
        if (username === 'admin' && password === '12345') {
          console.log('correct');
          
          // the welcoming message redirect to the home page
          alert('Welcome to Niloofar\'s Gallery!');
          window.location.href = './3-Welcome.html';

        // if incorrect:
        } else {
          console.log('incorrect');
          alert('Please try again!! You entered an incorrect username or password.');
        }
      });
    } else {
      // no login form found (error message for console)
      console.log('Login form not found');
    }
});
  