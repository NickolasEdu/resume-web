const booksButton = document.getElementById('booksButton')
const booksList = document.getElementById('booksList')
let isOpen = false

booksButton.onclick = function() {
    handleState()
}

function handleState() {
    if (isOpen == true) {
        closeList()
        isOpen = false
    } else {
        openList()
        isOpen = true
    }
}

function openList() {
    booksList.classList.remove('hiddenBooks')
}

function closeList() {
    booksList.classList.add('hiddenBooks')
}