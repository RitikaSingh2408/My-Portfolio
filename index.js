const aboutSection = document.querySelector('.about-section')
const aboutMeBtn = document.getElementById('about-me-btn')
const xIcon = document.querySelector('.x-icon')
const icon = document.getElementById("icon")
const navbar = document.querySelector('header')
const mainpage = document.getElementById('overlay')
const socialIcons=document.getElementById("social-links")
const bodyParticles = document.getElementById('particles-js')
const blackLogo = document.querySelector('.black-logo')
const latestWorks =document.getElementById('latest-works-link')
const downArrow =document.getElementById('down-arrow')
const mainSection =document.getElementById('main-section')

aboutMeBtn.addEventListener('click', () => {
  aboutSection.classList.add('active')
  aboutSection.style.animation = 'zoomInLeft 0.4s linear normal'
  navbar.classList.add('hidden')
  mainpage.classList.add('hidden')
  //  aboutSection.style.display='flex';
  // xIcon.style.cursor='pointer'

  socialIcons.classList.add('hidden')
  // bodyParticles.classList.add('hidden')
  disableScroll()
})
xIcon.addEventListener('click', () => {
 
  aboutSection.style.animation = 'zoomOutLeft 0.10s linear normal'
  aboutSection.classList.remove('active')
  navbar.classList.remove('hidden')
  // aboutSection.style.display='none';
  mainpage.classList.remove('hidden')
  socialIcons.classList.remove('hidden')
  enableScroll()
})


latestWorks.addEventListener('click',(e) =>{
  scrollTo(0,mainSection.clientHeight)
})
downArrow.addEventListener('click',(e) =>{
  scrollTo(0,mainSection.clientHeight)
})
blackLogo.addEventListener('click',(e) =>{
scrollTo(0,0)
})

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 }

function preventDefault(e) {
  e.preventDefault()
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e)
    return false
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false
try {
  window.addEventListener(
    'test',
    null,
    Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true
      },
    })
  )
} catch (e) {}
var wheelOpt = supportsPassive ? { passive: false } : false
var wheelEvent =
  'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false) // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt) // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt) // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false)
  console.log('Scroll Disabled')
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false)
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt)
  window.removeEventListener('touchmove', preventDefault, wheelOpt)
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
  console.log('Scroll Enabled')
}

document.addEventListener('DOMContentLoaded', () => {
  const observer = new MutationObserver((mutations) => {
    
  })

  observer.observe(document.body, {
    childList: true,
  })
})

