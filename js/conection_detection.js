const d = document,
  w = window,
  n = navigator;

export default function connectionDetection() {
  const isOnline = () =>{
    const $div = d.createElement('div')
      if(n.onLine){
        $div.textContent = "You have regained connection";
        $div.classList.add("online");
        $div.classList.remove("offline");
      }else{
        $div.textContent = "You have lost the connection";
        $div.classList.add("offline");
        $div.classList.remove("online");
      }

      d.body.insertAdjacentElement("afterbegin", $div)   
      setTimeout(() => {
      d.body.removeChild($div)
      }, 2000)

  }

  w.addEventListener('online', e => isOnline())
  w.addEventListener('offline', e => isOnline())

 
}
