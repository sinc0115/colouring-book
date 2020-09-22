const $puppyHead = document.querySelector('.st1')
const $puppyMouthTop = document.querySelector('.st2')
const $puppyEarRight = document.querySelector('.st0')
const $puppyEarLeft = document.querySelector('.st00')
const $puppyBody = document.querySelector('.st')

$puppyHead.addEventListener('click', function () {
  console.log('head')
  $puppyHead.style.fill = 'red'
})

$puppyMouthTop.addEventListener('click', function () {
  console.log('mouth top')
  $puppyMouthTop.style.fill = 'blue'
})

$puppyEarRight.addEventListener('click', function () {
  console.log('ear')
  $puppyEarRight.style.fill = 'blue'
})

$puppyEarLeft.addEventListener('click', function () {
  console.log('ear')
  $puppyEarLeft.style.fill = 'green'
})
