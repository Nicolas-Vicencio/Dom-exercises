const d = document;

export default function countdown(div, date, msj){
  let limitdate = new Date(date).getTime(),
  $div = d.querySelector(div)
  
  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
    rest= limitdate - now,
    days = Math.floor(rest / (1000 * 60 * 60 *24)),
    hours = ('0' + Math.floor(rest % (1000 * 60 * 60 * 24)/ (1000 *60 * 60))).slice(-2),
    minutes = ('0' + Math.floor(rest % (1000 * 60 * 60 )/ (1000 *60 ))).slice(-2), 
    seconds = ('0' + Math.floor(rest % (1000 *60 )/ (1000))).slice(-2)
  
    $div.innerHTML = `<h3> ${ days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds To Go</h3>`
    
  }, 1000);
  



}