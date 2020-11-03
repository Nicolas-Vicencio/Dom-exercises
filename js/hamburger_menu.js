const d = document

export default function hamburgerMenu(btn, panel, links){
d.addEventListener('click', e=>{
  if(e.target.matches(btn)|| e.target.matches(`${btn} *`) ){
    d.querySelector(panel).classList.toggle('is-active')

  }
  if(e.target.matches(links)){
    d.querySelector(panel).classList.remove('is-active')
  }
})
}