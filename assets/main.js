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
            <img src="${newsItem.gambar}" alt="News Thumbnail">
          </div>
          <div class="post_info">
            <a href="#" class="category__button" data-category="${newsItem.category}">
              ${newsItem.category}
            </a>
            <h3 class="post__title">
              <a href="#" data-news-id="${newsItem.id}" class="news-title">${newsItem.title}</a>
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
  
      // Add event listener for news titles
      const newsTitles = document.querySelectorAll('.news-title');
      newsTitles.forEach(title => {
        title.addEventListener('click', function (event) {
          event.preventDefault();
          const newsId = title.dataset.newsId;
          // Use the news ID information to construct the URL for the detailed post page
          const postDetailURL = `../post.html?id=${encodeURIComponent(newsId)}`;
          window.location.href = postDetailURL;
        });
      });
  
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  });
  

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


async function searchNews(event) {
  event.preventDefault();

  const searchInput = document.getElementById('searchInput').value;

  try {
    const response = await fetch(`http://localhost:5500/news/getcategory?category=${searchInput}`);
    const newsData = await response.json();
    console.log('Fetched news data:', newsData);

    const newsContainer = document.getElementById('newsContainer');
    // Clear container before adding new news
    newsContainer.innerHTML = '';

    // Display each news item in the container
    newsData.forEach(targetNewsItem => {
      const newsElement = document.createElement('article');
      newsElement.classList.add('post');
      newsElement.innerHTML = `
        <div class="post__thumbnail">
          <img src="${targetNewsItem.gambar}" alt="News Thumbnail">
        </div>
        <div class="post_info">
          <a href="#" class="category__button" data-category="${targetNewsItem.category}">
            ${targetNewsItem.category}
          </a>
          <h3 class="post__title">
            <a href="#" data-news-id="${targetNewsItem.id}" class="news-title">${targetNewsItem.title}</a>
          </h3>
          <p class="post__body">${targetNewsItem.body}</p>
          <div class="post__author">
            <div class="post__author-avatar">
              <img src="./assets/images/avatar3.jpg" alt="Author Avatar">
            </div>
            <div class="post__author-info">
              <h5>By: admin</h5>
              <small>${targetNewsItem.datenews}</small>
            </div>
          </div>
        </div>`;

      newsContainer.appendChild(newsElement);
    });
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}
  
