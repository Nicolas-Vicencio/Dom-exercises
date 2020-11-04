const d = document

export default function filterCards(input, cards){
const $input = d.querySelector(input),
$cards = d.querySelectorAll(cards)

d.addEventListener('keyup',e=>{
  if(e.target.matches(input)){
    
    if(e.key === 'esc'){
      e.target.value = ''
    }

    $cards.forEach(el => {
      el.textContent.toLowerCase().includes(e.target.value)
      ?el.classList.remove('filter')
      :el.classList.add('filter')
    })
  }
})

}
