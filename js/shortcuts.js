const d = document;


export function ball(e, stage, ball) {
  const $stage = d.querySelector(stage),
  $ball = d.querySelector(ball)
  let x=0,
  y= 0
  
  switch (e.keyCode) {
    case 37:
      x--;
      e.preventDefault()
      break;
    case 38:
      y--;
      e.preventDefault()
      break;
    case 39:
      x++;
      e.preventDefault()
      break;
    case 40:
      y++
      e.preventDefault()
      break;

      default:
      break;

    
  }
$ball.style.transform = `translate(${x *10}px, ${y *10}px)`
}

export function shortcuts(e) {

  d.addEventListener('DOMContentLoaded', e=>{
    if (e.altKey === true && e.key === "a") {
      alert("You have launched an alarm");
    }
    if (e.altKey === true && e.key === "p") {
      prompt("Yoy have launched a promp");
    }
    if (e.altKey === true && e.key === "c") {
      confirm("You have launched a confirm");
    }

  })
}
