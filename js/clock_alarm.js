const d = document;

export function digitalClock(id, clockOn, clockOff ) {
  const $id = d.querySelector(id);
  let clockTempo;
  
  d.addEventListener("click", (e) => {
    if (e.target.matches(clockOn)) {
      d.querySelector(clockOn).disabled = true
       clockTempo = setInterval(() => {
        let hour = new Date().toLocaleTimeString();
        $id.innerHTML = `<h3>${hour}</h3>`;
        console.log(hour);
      }, 1000);
    }
    if(e.target.matches(clockOff)){
      d.querySelector(clockOn).disabled = false
      clearInterval(clockTempo)
      $id.innerHTML = ''
    }

  });
}

export function alarm(audio, alarmOn, alarmOff){
  let alarmTempo;
  const $audio = d.createElement('audio')
  $audio.src = audio
  d.addEventListener('click', e =>{
  if(e.target.matches(alarmOn)){
      d.querySelector(alarmOn).disabled = true
      alarmTempo = setTimeout(() => { 
        $audio.play()
      },2000)
    }
    if(e.target.matches(alarmOff)){
      d.querySelector(alarmOn).disabled = false
      $audio.pause()
    }
  })

}
