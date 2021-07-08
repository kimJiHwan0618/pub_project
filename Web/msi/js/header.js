const headerEl = document.querySelector("header")

const headerState = {
  color : true,
  active : true
}

const fnNavActive = () => {
  headerState.active === true ? 
  headerState.active = false : headerState.active = true 
  
  headerState.active === true ? 
  headerEl.classList.remove('active') : headerEl.classList.add('active')
}

const fnMoveScroll = () => {
  window.scrollY === 0 ? 
  headerEl.classList.remove('white') : headerEl.classList.add('white')
}

window.addEventListener("scroll",fnMoveScroll)

