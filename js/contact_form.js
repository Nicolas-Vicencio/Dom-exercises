const d = document

export default function formValidation(){
const $elements = d.querySelectorAll('.contact-form [required]'),
$form = d.querySelector('.contact-form')

$elements.forEach(input => {
  const $span = d.createElement('span')
  $span.textContent = input.title
  $span.id = input.name
  input.insertAdjacentElement('afterend', $span)
  $span.classList.add('none', 'contact-form-error')
})

d.addEventListener('keyup', e=>{
  if(e.target.matches('.contact-form [required]')){
    let $input = e.target,
    pattern = $input.pattern || $input.dataset.pattern

    if(pattern && $input.value !== ""){
    let regex = new RegExp(pattern)
    return !regex.exec($input.value)
    ? d.getElementById($input.name).classList.add('is-active')
    : d.getElementById($input.name).classList.remove('is-active')
    }
    if(!pattern){
      return $input.value === ""
      ?d.getElementById($input.name).classList.add('is-active')
      :d.getElementById($input.name).classList.remove('is-active')
    }
   

  }

})


d.addEventListener('submit', e =>{
  e.preventDefault()
  const $loader = d.querySelector('.contact-form-loader'),
  $response = d.querySelector('.contact-form-response')

  $loader.classList.remove('none')

  setTimeout(() => {
    $loader.classList.add('none')
    $response.classList.remove('none')
    $form.reset()
    setTimeout(() => $response.classList.add('none'),3000)
  }, 3000);


})

}