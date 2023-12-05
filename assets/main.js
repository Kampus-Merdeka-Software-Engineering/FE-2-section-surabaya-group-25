
const navItems = document.querySelector('.nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

//opens nav dropdown
const openNav = () => {
  navItems.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
};

//close nav dropdown
const closeNav = () => {
  navItems.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
};

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

function deleteCategory(element) {
  if (confirm("Are you sure you want to delete this file?")) {
      var row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
      setTimeout(function() {
          console.log('Category deleted successfully!');  
      }, 500); 
  }
}

function logout() {
  if (confirm("Are you sure you want to log out?")) {
      localStorage.removeItem('authToken');
      
      window.location.href = 'signin.html'; 
  }
}


/*footer*/
// const popularLink = document.getElementById('popularLink');
// popularLink.addEventListener('click', function(event) {
//   event.preventDefault();
//   window.location.href = '../popular.html';
// });

//Login//
// function login() {
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   if (username === 'your_username' && password === 'your_password') {
//       sessionStorage.setItem('loggedIn', 'true');

//       window.location.href = 'dashboard.html';
//   } else {
//       alert('Invalid username or password');
//   }
// }

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//   event.preventDefault(); 
//   login();
// });

//sign up//
// document.getElementById('signupForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   const firstName = document.getElementById('firstName').value;
//   const lastName = document.getElementById('lastName').value;
//   const username = document.getElementById('username').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const confirmPassword = document.getElementById('confirmPassword').value;

//   const isUserRegistered = checkUserRegistration(username, email);

//   if (isUserRegistered) {
//       alert('User already registered. Please sign in.');
//   } else {
//       alert('Registration successful!');

//       document.getElementById('signupForm').reset();
//   }
// });

// function checkUserRegistration(username, email) {
//   return false; }


// async function fetchBooks() {
//   const bookList = document.getElementById('books-list');
//   try {
//     const response = await fetch(`${API_BASE_URL}/books`)
//     const books = await response.json();
//     const bookListElement = books.map((book) => {
//       return `
//         <li>${book.title} by ${book.author}</li>
//       `;
//     });

//     bookList.innerHTML = bookListElement
//   } catch (err) {
//     console.error(err);
//   }
// };

// fetchBooks();

// function postContactFormData(event) {
// event.preventDefault();

// Ambil data dari form
// const form = event.target;
// const firstname = form.querySelector('[name="first_name"]').value;
// const lastname = form.querySelector('[name="last_name"]').value;
// const email = form.querySelector('[name="email"]').value;
// const message = form.querySelector('[name="message"]').value;

// // Buat objek data
// const data = {
//   firstname,
//   lastname,
//   email,
//   message
// };

// // Kirim data sebagai JSON
// fetch(`${API_BASE_URL}/contact/submit`, {
//   method: 'POST',
//   headers: {
//       'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   if (data.success) {
//       alert('Terima kasih! Pesan Anda telah terkirim.');
//       form.reset();
//   } else {
//       alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
//   }
// })
// .catch(error => console.error('Error sending contact data:', error));
// }


// // Event listener untuk form submission
// document.querySelector('.contact-form form').addEventListener('submit', postContactFormData);
