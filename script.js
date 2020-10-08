// // TO DO LIST
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
// SELECT AN IMAGE
// ////////////////////////
const $tinyImages = document.querySelector('.tiny-images')

$tinyImages.closest('div').addEventListener('click', function (t) {
  for (var m = 0; m < $bigImages.length; m++) {
    $bigImages[m].style.display = 'none'
    console.log($svg[m].childNodes)
    for (var svgChild of $svg[m].childNodes) {
      for (var child of svgChild.childNodes) {
        if (child.nodeName == 'path' || child.nodeName == 'circle' || child.nodeName == 'rect' || child.nodeName == 'ellipse') {
          child.style.fill = 'white'
        }
      }
    }
  }
  if (t.target.dataset.tiny == 'puppy') {
    console.log('puppy')
    $bigImages[0].style.display = 'block'
  } else if (t.target.dataset.tiny == 'cakes') {
    console.log('cakes')
    $bigImages[1].style.display = 'block'
  } else if (t.target.dataset.tiny == 'dragon') {
    console.log('dragon')
    $bigImages[2].style.display = 'block'
  } else if (t.target.dataset.tiny == 'flowers') {
    console.log('flowers')
    $bigImages[3].style.display = 'block'
  }
})

// ////////////////////////
// BIG IMAGES
// ////////////////////////
const $bigImages = document.querySelectorAll('.big-images')

for (var b = 1; b < $bigImages.length; b++) {
  $bigImages[b].style.display = 'none'
}

// ////////////////////////
// SVG
// ////////////////////////
var $svg = document.querySelectorAll('svg')

for (var s = 0; s < $svg.length; s++) {
  $svg[s].addEventListener('click', function (c) {
    if (c.target.closest('circle')) {
      c.target.closest('circle').style.fill = game.selectedColor
    } else if (c.target.closest('path')) {
      c.target.closest('path').style.fill = game.selectedColor
    } else if (c.target.closest('ellipse')) {
      c.target.closest('ellipse').style.fill = game.selectedColor
    } else if (c.target.closest('ellipse')) {
      c.target.closest('ellipse').style.fill = game.selectedColor
    } else if (c.target.closest('rect')) {
      c.target.closest('rect').style.fill = game.selectedColor
    }
  })
}

// ///////////////////////
// CUSTOM CURSOR
// ///////////////////////
function changeCursor () {
  var $paintbrush = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="32" width="32"><g id="Layer_1"><g id="Layer_1_1_"><g><path d="M14,4.9c4.9,0,8.9,4,8.9,8.9s-4,8.9-8.9,8.9s-8.9-4-8.9-8.9S9.1,4.9,14,4.9 M14,1.7C7.3,1.7,1.9,7.1,1.9,13.8S7.3,25.9,14,25.9s12.1-5.4,12.1-12.1S20.7,1.7,14,1.7L14,1.7z"/></g></g></g><g id="Layer_2"><circle stroke="black" fill="${proxyGame.selectedColor}" cx="14" cy="13.6" r="8.9"/></g></svg>`

  var $svgCursor = `url('data:image/svg+xml;utf8,${$paintbrush}'), auto`

  document.body.style.cursor = $svgCursor
}

// ///////////////////////
// SCREEN CAPTURE
// ///////////////////////
