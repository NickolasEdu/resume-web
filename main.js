const booksButton = document.getElementById('booksButton')

booksButton.onclick = function() {
    const booksList = document.getElementById('booksList')
    booksList.classList.remove('hiddenBooks')
}