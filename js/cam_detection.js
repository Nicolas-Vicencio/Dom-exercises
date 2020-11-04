const n = navigator,
d = document


export default function webcam(id){
const $id = d.getElementById(id)


if(n.mediaDevices.getUserMedia) {
  n.mediaDevices
  .getUserMedia({ video:true,audio:true})
  .then(stream => {
$id.srcObject = stream
$id.play()
})
  .catch(err => {
    $id.insertAdjacentHTML('afterend', `<p> An error has ocurred: <mark><b>${err}</b></mark></p>`)
  }
  )
}


}

