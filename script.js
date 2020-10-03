// // TO DO LIST
// make color 'pop' from palette when selected
// make css responsive
// allow user to save and download image
// add more images

// ////////////////////////
// GAME OBJECT
// ////////////////////////
const game = {
  selectedColor: 'white'
}

// GAME PROXY
const handler = {
  get (target, property) {
    return target[property]
  }
}
var proxyGame = new Proxy(game, handler)

// ////////////////////////
// INITIAL CURSOR
// ////////////////////////
document.body.style.cursor = `url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="32" width="32"><g id="Layer_1"><g id="Layer_1_1_"><g><path d="M14,4.9c4.9,0,8.9,4,8.9,8.9s-4,8.9-8.9,8.9s-8.9-4-8.9-8.9S9.1,4.9,14,4.9 M14,1.7C7.3,1.7,1.9,7.1,1.9,13.8S7.3,25.9,14,25.9s12.1-5.4,12.1-12.1S20.7,1.7,14,1.7L14,1.7z"/></g></g></g><g id="Layer_2"><circle stroke="black" fill="${proxyGame.selectedColor}" cx="14" cy="13.6" r="8.9"/></g></svg>'), auto`

// ////////////////////////
// COLOR PALETTE
// ////////////////////////
const $paletteColor = document.getElementsByClassName('paletteColor')

for (var i = 0; i < $paletteColor.length; i++) {
  $paletteColor[i].addEventListener('click', function () {
    for (var x = 0; x < $paletteColor.length; x++) {
      $paletteColor[x].classList.remove('selected')
    }
    this.classList.add('selected')
    proxyGame.selectedColor = this.id
    changeCursor()
  })
}

// ////////////////////////
// PUPPY
// ////////////////////////
const $puppy = document.querySelector('svg')

$puppy.addEventListener('click', function (c) {
  if (c.target.closest('circle')) {
    if (c.target.id === 'eyes') {
      console.log('eyes')
    }
    c.target.closest('circle').style.fill = game.selectedColor
  } else if (c.target.closest('path')) {
    c.target.closest('path').style.fill = game.selectedColor
  }
})

// ///////////////////////
// CUSTOM CURSOR
// ///////////////////////
function changeCursor () {
  var $paintbrush = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="32" width="32"><g id="Layer_1"><g id="Layer_1_1_"><g><path d="M14,4.9c4.9,0,8.9,4,8.9,8.9s-4,8.9-8.9,8.9s-8.9-4-8.9-8.9S9.1,4.9,14,4.9 M14,1.7C7.3,1.7,1.9,7.1,1.9,13.8S7.3,25.9,14,25.9s12.1-5.4,12.1-12.1S20.7,1.7,14,1.7L14,1.7z"/></g></g></g><g id="Layer_2"><circle stroke="black" fill="${proxyGame.selectedColor}" cx="14" cy="13.6" r="8.9"/></g></svg>`

  var $svgCursor = `url('data:image/svg+xml;utf8,${$paintbrush}'), auto`

  document.body.style.cursor = $svgCursor
}
