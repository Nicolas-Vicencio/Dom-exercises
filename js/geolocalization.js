const d = document,
n = navigator

export default function geolocalization (id){
const $id = d.getElementById(id),
options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}

const success = position =>{
  $id.innerHTML = `
  <p>Latitude:<b> ${position.coords.latitude}</b></p>
  <p>Longitude:<b> ${position.coords.longitude}</b></p>
  <p>Accuracy: <b>${position.coords.accuracy}</b></p>
  <a href='https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},15z' targe='_blank' rel='noopener'> See in Google Maps</a>
  `
}

const err = (err) => {
  $id.innerHTML = `<p>An error has ocurred: <b>${err.code}, ${err.message}</b></p>`
}

n.geolocation.getCurrentPosition(success, err, options )
 


}