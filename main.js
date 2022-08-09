const booksButton = document.getElementById('booksButton')
let state = false

booksButton.onclick = function() {
    state = true

    if (state == true) {
        handleState()
    } else {
        alert('200')
    }
}

function handleState() {
    const booksList = document.getElementById('booksList')
    booksList.classList.remove('hiddenBooks')
}