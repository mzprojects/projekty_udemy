class Bookmark {
  constructor(name, url, id) {
    this.name = name
    this.url = url
    this.id = id
  }
}

// Store in localStorage

class Store {
  static getData() {
    let data
    if (localStorage.getItem('bookmarks') === null) {
      data = []
    } else {
      data = JSON.parse(localStorage.getItem('bookmarks'))
    }
    return data
  }

  static addData(bookmark) {
    const data = Store.getData()

    data.push(bookmark)
    localStorage.setItem('bookmarks', JSON.stringify(data))
  }

  static removeData(id) {
    const data = Store.getData()

    data.forEach((bookmark, index) => {
      if (bookmark.id === id) {
        data.splice(index, 1)
      }

      localStorage.setItem('bookmarks', JSON.stringify(data))
    })
  }
}

// UI

class UI {
  static displayList() {
    const data = Store.getData()

    data.forEach((bookmark) => UI.addBookmarkToList(bookmark))
  }

  static addBookmarkToList(bookmark) {
    const { name, url, id } = bookmark
    const ul = document.querySelector('.result')

    const item = document.createElement('li')
    item.className = 'result__item'
    item.dataset.id = id
    item.innerHTML = `<h2 class="result__name">${name}</h2>
        <button class="result__btn result__btn--url">
          <a class="result__link" href="${url}">Visit</a>
        </button>
        <button class="result__btn result__btn--delete">Delete</button>`

    ul.appendChild(item)
  }

  static deleteBookmark(e) {
    const id = e.target.parentElement.dataset.id
    Store.removeData(id)
    e.target.parentElement.remove()
  }

  static validateData(name, url) {
    if (name == '' || url == '') {
      alert('Please fill in all fields')
      return
    } else {
      const expression =
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
      const regexp = new RegExp(expression)
      if (url.match(regexp)) {
        return true
      } else {
        alert('Please enter valid url')
      }
    }
  }

  static getId() {
    let id = 1
    const ul = document.querySelector('.result')
    if (ul.lastElementChild === null) {
      id = 1
    } else {
      id = parseInt(ul.lastElementChild.dataset.id) + 1
    }
    return id
  }

  static clearFields() {
    document.querySelectorAll('.form__input').forEach((el) => (el.value = ''))
  }
}

// load data

document.addEventListener('DOMContentLoaded', UI.displayList)

// Event - Submit bookmark

document.querySelector('.form__submit').addEventListener('click', (e) => {
  e.preventDefault()
  const siteName = document.querySelector('.form__input--name').value
  const siteUrl = document.querySelector('.form__input--url').value

  if (UI.validateData(siteName, siteUrl) == true) {
    const id = UI.getId().toString()
    const bookmark = new Bookmark(siteName, siteUrl, id)
    UI.addBookmarkToList(bookmark)
    Store.addData(bookmark)
    UI.clearFields()
  }
})

// Event - Delete bookmark

document.querySelector('.result').addEventListener('click', (e) => {
  if (e.target.className == 'result__btn result__btn--delete') {
    UI.deleteBookmark(e)
  }
})
