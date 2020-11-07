const d = document,
w = window

export default function smartVideo() {
const $videos = d.querySelectorAll('video[data-smart-video]')

const cb = entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      entry.target.play()
    }else{
      entry.target.pause()
    }
    
    w.addEventListener('visibilitychange', e => {
      if(d.visibilityState === "hidden"){
        entry.target.pause()
      }else{
        entry.target.play()
      }
    })
  } )
  
}

const observer = new IntersectionObserver(cb, {threshold:0.5})

$videos.forEach(el => observer.observe(el))
}