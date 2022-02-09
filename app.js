const dark = document.querySelector('.dark')
const body = document.querySelector('body')
const toggle = document.querySelector('label')

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme')
})
