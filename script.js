// ////////////////////////
// GAME OBJECT
// ////////////////////////
const game = {
  selectedColor: 'white'
}

// ////////////////////////
// COLOR PALETTE
// ////////////////////////
const $palette = document.getElementById('palette')

$palette.addEventListener('click', function (c) {
  console.log('click event: ' + c.target.id)
  game.selectedColor = c.target.id
  console.log('game object: ' + game.selectedColor)
})

// ////////////////////////
// PUPPY
// ////////////////////////
const $puppy = document.querySelector('svg')

$puppy.addEventListener('click', function (c) {
  if (c.target.closest('circle')) {
    console.log('circle')
    if (c.target.id === 'eyes') {
      console.log('eyes')
    }
    c.target.closest('circle').style.fill = game.selectedColor
  } else if (c.target.closest('path')) {
    console.log('path')
    c.target.closest('path').style.fill = game.selectedColor
  }
})

// ///////////////////////
// CUSTOM CURSOR
// ///////////////////////
var colorColor = 'yellow'

// // const $paintbrushSVG = 'images/brush-black-18dp.svg'
// const $paintbrush = `<svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" width="32"><path d="M0 0h24v24H0V0z" fill="${colorColor}"/><path fill="red" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"/></svg>`

const $paintbrush = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="32" width="32"><g id="Layer_1"><g id="Layer_1_1_"><g><path d="M14,4.9c4.9,0,8.9,4,8.9,8.9s-4,8.9-8.9,8.9s-8.9-4-8.9-8.9S9.1,4.9,14,4.9 M14,1.7C7.3,1.7,1.9,7.1,1.9,13.8S7.3,25.9,14,25.9s12.1-5.4,12.1-12.1S20.7,1.7,14,1.7L14,1.7z"/></g></g></g><g id="Layer_2"><circle stroke="black" fill="${colorColor}" cx="14" cy="13.6" r="8.9"/></g></svg>`

// // const $svgCursor = `url('${$paintbrushSVG}'), auto`
const $svgCursor = `url('data:image/svg+xml;utf8,${$paintbrush}'), auto`

document.body.style.cursor = $svgCursor
