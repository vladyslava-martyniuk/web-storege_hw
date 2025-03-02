const input = document.querySelector('#bookmarkInput');
const button = document.querySelector('#addBookmarkBtn');
const list = document.querySelector('#bookmarkList');
const loadBookmarks = () => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  list.innerHTML = '';
  bookmarks.forEach((bookmark, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = bookmark.url;
    a.textContent = bookmark.url;
    a.target = '_blank'; 
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Редагувати';
    editBtn.addEventListener('click', () => {
      input.value = bookmark.url;
      input.focus();
      deleteBookmark(index); 
    });
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', () => {
      deleteBookmark(index);
    });
    li.appendChild(a);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
};
button.addEventListener('click', () => {
  const url = input.value.trim();
  if (url === '') return;
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  bookmarks.push({ url });
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  input.value = ''; 
  loadBookmarks(); 
});
const deleteBookmark = (index) => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  bookmarks.splice(index, 1);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  loadBookmarks(); 
};
document.addEventListener('DOMContentLoaded', loadBookmarks);
document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const saveButton = document.getElementById('saveBtn');
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      usernameInput.value = savedData.username;
      passwordInput.value = savedData.password;
    }
    saveButton.addEventListener('click', () => {
      const username = usernameInput.value;
      const password = passwordInput.value;
      if (username && password) {
        const formData = {
          username: username,
          password: password
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Дані збережено!');
      } else {
        alert('Будь ласка, заповніть всі поля.');
      }
    });
  });
  