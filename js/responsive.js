const d = document

export function responsive(div, mq, desktopContent, mobileContent){
const $div = d.getElementById(div),
media = window.matchMedia(mq)

const responsiveMedia = (e) =>{
  if(e.matches){
    $div.innerHTML = desktopContent
  }else{
    $div.innerHTML = mobileContent
  }  
}


media.addListener(responsiveMedia)
responsiveMedia(media)


}
