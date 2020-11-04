const d = document

export default function digitalDraw(elements, btn){
  const $el = d.querySelectorAll(elements)
  console.log($el);
  
d.addEventListener('click', e =>{
  if(e.target.matches(btn)){

  }
})

}