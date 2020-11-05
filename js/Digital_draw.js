const d = document

export default function digitalDraw(elements, btn){
  const $el = d.querySelectorAll(elements)
  console.log($el);
  const draw = () => {
    let winner = Math.floor(Math.random() * $el.length )
    
    alert(`The winner is ${$el[winner].innerHTML}!!!`)
  }
d.addEventListener('click', e =>{
  if(e.target.matches(btn)){
    draw()
  }
})

}