
const n = navigator

export default function deviceDetection(id){
  const $id = document.getElementById(id),
  isMobile = {
    android: () => n.userAgent.match(/android/i),
    ios: () => n.userAgent.match(/iphone|ipad|ipad/i),
    windows: () => n.userAgent.match(/windows phone/i),
    any: function() {
      return this.android() || this.ios() || this.windows()
    }
  },
  isDesktop = {
    windows: () => n.userAgent.match(/windows nt/i),
    mac: () => n.userAgent.match(/mac os/i),
    linux: () =>n.userAgent.match(/linux/i),
    any: function () {
      return this.windows() || this.mac() || this.linux()
    }
  },
  isBrowser = {
    opera: () => n.userAgent.match(/opera/i),
    firefox:() => n.userAgent.match(/firefox/i),
    chrome: () => n.userAgent.match(/chrome/i),
    edge: () => n.userAgent.match(/edge/i),
    any: function () {
      return this.chrome() || this.opera() || this.edge || this.firefox
    }
  }
  $id.innerHTML = 
  `
  <ul>
    <li>${n.userAgent}</li>
    <li>Platform: <b>${isDesktop.any()}</b></li>
    <li>Browser: <b>${isBrowser.any()}</b></li>
    <li>Mobile device: <b>${isMobile.any()}</b></li>
  
  
  </ul>


  `
  
if(isDesktop.linux()){
  $id.innerHTML += `<p><b>This message it's only visible on linux</b></p>`
}



  


}