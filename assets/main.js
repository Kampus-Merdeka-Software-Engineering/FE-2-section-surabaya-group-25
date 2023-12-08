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
  // JavaScript untuk melakukan permintaan GET dan menampilkan data berita
  document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('http://localhost:5500/news/get');
    const newsData = await response.json();
    console.log(newsData);

    const newsContainer = document.getElementById('newsContainer');
    // Mengosongkan container sebelum menambahkan data berita baru
    newsContainer.innerHTML = '';

    // Menambahkan data berita ke dalam container
    newsData.forEach(newsItem => {
      const newsElement = document.createElement('article');
      newsElement.classList.add('post');

      newsElement.innerHTML = `
        <div class="post__thumbnail">
          <img src="${newsItem.gambar}" >
        </div>
        <div class="post_info">
          <a href="" class="category__button">${newsItem.category}</a>
          <h3 class="post__title">
            <a>${newsItem.title}</a>
          </h3>
          <p class="post__body">${newsItem.body}</p>
          <div class="post__author">
            <div class="post__author-avatar">
              <img src="./assets/images/avatar3.jpg" alt="Author Avatar">
            </div>
            <div class="post__author-info">
              <h5>By: admin</h5>
              <small>${newsItem.datenews}</small>
            </div>
          </div>
        </div>
      `;

      newsContainer.appendChild(newsElement);
    });

  } catch (error) {
    console.error('Error fetching news:', error);
  }
});


// function logout() {
//   if (confirm("Are you sure you want to log out?")) {
//       localStorage.removeItem('authToken');
      
//       window.location.href = 'signin.html'; 
//   }
// }

document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('http://localhost:5500/news/get');
    const newsData = await response.json();

    const newsTableBody = document.getElementById('newsTableBody');

    // Loop through the news data and create table rows
    newsData.forEach(newsItem => {
      const newRow = document.createElement('tr');

      // Add the data-id attribute to identify each row
      newRow.setAttribute('data-id', newsItem.id);

      // Fill in the table cells with news data
      newRow.innerHTML = `
        <td>${newsItem.title}</td>
        <td>${newsItem.category}</td>
        <td><a href="edit-post.html" class="btn sm edit-btn" data-id="${newsItem.id}">Edit</a></td>
        <td>
          <a href="#" class="btn danger" onclick="deleteNews('${newsItem.id}')">Delete</a>
        </td>
      `;

      // Append the new row to the table body
      newsTableBody.appendChild(newRow);
    });

  } catch (error) {
    console.error('Error fetching news:', error);
  }
});


// ...


// ...
// Function to delete news by ID
async function deleteNews(newsId) {
  try {
    const response = await fetch(`http://localhost:5500/news/delete/${newsId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // Remove the corresponding row from the table on successful deletion
      const rowToDelete = document.querySelector(`[data-id="${newsId}"]`);
      if (rowToDelete) {
        rowToDelete.remove();
      } else {
        console.error('Row not found for deletion:', newsId);
      }
    } else {
      console.error('Error deleting news:', response.statusText);
    }
  } catch (error) {
    console.error('Error deleting news:', error);
  }
}

//editpost

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
