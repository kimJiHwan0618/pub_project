const menuArray = [
  'Home',
  'About us',
  'History',
  'Solution',
  'Contact',
]
const sectionElArray = [
  document.querySelector('.home__section'),
  document.querySelector('.aboutus__section'),
  document.querySelector('.history__section'),
  document.querySelector('.solution__section'),
  document.querySelector('.contact__section'),
]
const headerEl = document.querySelector("header")
const navEl = document.querySelector(".nav__list")

const headerState = {
  active : true
}

let moveHeaderIndex = 0;
const navScrollActive = () => {
  for (let i = 0; i < sectionElArray.length; i++) {
    if(sectionElArray[i].offsetTop - 140 < window.scrollY){
      if(moveHeaderIndex < i){
        moveHeaderIndex = i
        // console.log("내려갈때 인덱스증가 >>" + i)
        headerActiveChange(moveHeaderIndex)
      }else {
        if(window.scrollY === 0){
          moveHeaderIndex = 0
          headerActiveChange(moveHeaderIndex)
        }
        if(moveHeaderIndex > i){
          moveHeaderIndex = i
          // console.log("올라갈때 인덱스감소 >>" + i)
          headerActiveChange(moveHeaderIndex)
        }
      }
    }
  }
}

const fnNavActive = () => {
  headerState.active === true ? 
  headerState.active = false : headerState.active = true 
  
  headerState.active === true ? 
  headerEl.classList.remove('active') : headerEl.classList.add('active')
}

const fnMoveScroll = () => {
  navScrollActive()
}

const navClick = (ev) => {
  const clickIndex = menuArray.indexOf(ev.innerText)
  
  window.scrollTo({
    top : sectionElArray[clickIndex].offsetTop - 120
  })

  fnNavActive()
  headerActiveChange(clickIndex)
}

const headerActiveChange = (hdIndex) => {
  for(let i=1;i<sectionElArray.length;i++){
    navEl.children[i].classList.remove('on') 
  }
  navEl.children[0].classList.remove('on')
  navEl.children[hdIndex].classList.add('on')
}

window.addEventListener("scroll",fnMoveScroll)

