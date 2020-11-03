const d = document

export default function scrollTop(btn){
  const $btnScroll = d.querySelector(btn)
  
  d.addEventListener('scroll', e=>{
    if(window.pageYOffset < 400){
      $btnScroll.classList.add('hidden')
    }else{
      $btnScroll.classList.remove('hidden')
    }
  })

  d.addEventListener('click', e=>{
    if(e.target.matches(btn)){
      window.scrollTo({
        behavior:"smooth",
        top: 0
      })
       

    }
  })
}